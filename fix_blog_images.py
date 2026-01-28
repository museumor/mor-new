import csv
import json
import os
import re
import requests
import time
from urllib.parse import unquote

# Paths
blog_csv = 'old-source/Blog.csv'
blog_content_ts_path = 'src/data/blog_content.ts'
public_img_dir = 'public/images/blog/content'
local_img_base_path = '/images/blog/content'

# Ensure directory exists
os.makedirs(public_img_dir, exist_ok=True)

def clean_text(text):
    if not text: return ''
    text = text.replace('\\', '\\\\').replace('"', '\"').replace('\n', ' ').strip()
    return text

def get_slug(text):
    if not text: return 'unknown'
    slug = text.lower().strip()
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[\s_-]+', '-', slug)
    return slug

def format_date(date_str):
    try:
        parts = date_str.split(' ')
        if len(parts) >= 4:
            return f'{parts[1]} {parts[2]}, {parts[3]}'
        return date_str
    except:
        return date_str

def sanitize_filename(filename):
    # Decode percent-encoded characters
    filename = unquote(filename)
    
    # Remove hash prefix (Webflow ID followed by underscore)
    # Pattern: 24 hex chars + underscore, or just alphanumeric + underscore
    filename = re.sub(r'^[a-fA-F0-9]{24}_', '', filename)
    
    # Split extension
    base, ext = os.path.splitext(filename)
    
    # Replace spaces and %20 with hyphens
    base = base.replace(' ', '-').replace('%20', '-')
    
    # Remove special characters (keep alphanumeric, hyphens, underscores)
    base = re.sub(r'[^a-zA-Z0-9\-_]', '', base)
    
    # Collapse multiple hyphens
    base = re.sub(r'-+', '-', base).strip('-')
    
    # Reassemble and lower case
    return f"{base}{ext}".lower()

def download_image(url):
    if not url: return None
    
    original_filename = url.split('/')[-1].split('?')[0]
    filename = sanitize_filename(original_filename)
    
    local_path = os.path.join(public_img_dir, filename)
    web_path = f"{local_img_base_path}/{filename}"
    
    if os.path.exists(local_path):
        return web_path
        
    print(f"Downloading {url} -> {filename}...")
    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = requests.get(url, headers=headers, stream=True, timeout=10)
        if response.status_code == 200:
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(1024):
                    f.write(chunk)
            time.sleep(0.1) # Polite delay
            return web_path
        else:
            print(f"Failed to download {url}: Status {response.status_code}")
    except Exception as e:
        print(f"Error downloading {url}: {e}")
    
    return None

def process_blog_content():
    if not os.path.exists(blog_csv):
        print("Blog CSV not found")
        return

    blog_content_map = {}
    
    with open(blog_csv, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            title = row.get('Name', '').strip()
            if not title: continue
            
            slug = row.get('Slug') or get_slug(title)
            date_str = row.get('Published Date') or row.get('Created On', '')
            formatted_date = format_date(date_str)
            
            # Extract content
            body = row.get('Post Body', '')
            
            # Find and replace images in body
            
            def replace_match(match):
                url = match.group(1)
                # Check if it's a webflow image
                if 'webflow.com' in url or 'uploads-ssl.webflow.com' in url:
                    local_url = download_image(url)
                    if local_url:
                        # We need to make sure we don't double-prefix if the component does it.
                        # But for HTML content injected via dangerouslySetInnerHTML, SafeImage isn't used!
                        # We must include the base path manually here if we are deploying to a subdirectory.
                            # BASE_PATH is "" (root)
                            return f'src="{local_url}"'
                        
                return match.group(0)

            # Regex for src="URL"
            # Note: Webflow often puts images in <img src="..."> or sometimes background-image.
            # We target src attribute.
            body = re.sub(r'src="([^"]+)"', replace_match, body)
            
            # Also clean up museumor.com links
            body = re.sub(r'https?://(www\.)?museumor\.com/', '/', body)
            
            # Get main image path
    if main_image.startswith("http"):
        pass # Keep external links
    elif not main_image.startswith("/"):
        main_image = f"/images/blog/{slug}.jpg"
    else:
        # It's already a relative path, ensure it doesn't have /mor-new if we don't want it?
        # But here we are constructing it usually.
        main_image = f"/images/blog/{slug}.jpg"
 
            
            blog_content_map[slug] = {
                'title': title,
                'date': formatted_date,
                'content': body,
                'image': main_image
            }

    # Write to TS file
    with open(blog_content_ts_path, 'w', encoding='utf-8') as f:
        f.write('export interface BlogPostContent { title: string; date: string; content: string; image: string; }\n\n')
        f.write('export const blogContent: Record<string, BlogPostContent> = {\n')
        
        for slug, data in blog_content_map.items():
            # Escape backticks and ${} for template literals
            content_escaped = data['content'].replace('`', '\`').replace('${', '\${')
            
            f.write(f'  "{slug}": {{\n')
            f.write(f'    title: "{clean_text(data["title"])}",\n')
            f.write(f'    date: "{clean_text(data["date"])}",\n')
            f.write(f'    image: "{clean_text(data["image"])}",\n')
            f.write(f'    content: `{content_escaped}`\n')
            f.write('  },\n')
            
        f.write('};
')

if __name__ == "__main__":
    process_blog_content()
