#!/usr/bin/env python3
"""
Script to sanitize blog content image filenames and update references.
1. Renames files in public/images/blog/content/ to remove hash prefixes and special characters
2. Updates blog_content.ts to reference new filenames with /mor-new base path
"""

import os
import re
from urllib.parse import unquote

# Paths
public_img_dir = 'public/images/blog/content'
blog_content_ts_path = 'src/data/blog_content.ts'
base_path = ''

def sanitize_filename(filename):
    """Remove hash prefix and special characters from filename."""
    # Decode percent-encoded characters
    filename = unquote(filename)

    # Remove hash prefix (24 hex chars + underscore)
    filename = re.sub(r'^[a-fA-F0-9]{24}_', '', filename)

    # Split extension
    base, ext = os.path.splitext(filename)

    # Replace spaces, plus signs, and encoded chars with hyphens
    base = base.replace(' ', '-').replace('+', '-').replace('%20', '-')

    # Remove special characters (keep alphanumeric, hyphens, underscores)
    base = re.sub(r'[^a-zA-Z0-9\-_]', '', base)

    # Collapse multiple hyphens
    base = re.sub(r'-+', '-', base).strip('-')

    # Lowercase and reassemble
    return f"{base}{ext}".lower()

def main():
    # Step 1: Build mapping of old filenames to new filenames and rename files
    print("Step 1: Renaming files...")
    rename_map = {}  # old_filename -> new_filename

    if not os.path.exists(public_img_dir):
        print(f"Directory not found: {public_img_dir}")
        return

    files = os.listdir(public_img_dir)
    print(f"Found {len(files)} files to process")

    # Handle potential filename collisions
    used_names = set()

    for old_filename in files:
        if old_filename.startswith('.'):
            continue

        new_filename = sanitize_filename(old_filename)

        # Handle collisions by appending a number
        base_new = new_filename
        counter = 1
        while new_filename in used_names:
            base, ext = os.path.splitext(base_new)
            new_filename = f"{base}-{counter}{ext}"
            counter += 1

        used_names.add(new_filename)
        rename_map[old_filename] = new_filename

        if old_filename != new_filename:
            old_path = os.path.join(public_img_dir, old_filename)
            new_path = os.path.join(public_img_dir, new_filename)

            print(f"  {old_filename} -> {new_filename}")
            os.rename(old_path, new_path)

    print(f"\nRenamed {len([k for k, v in rename_map.items() if k != v])} files")

    # Step 2: Update blog_content.ts
    print("\nStep 2: Updating blog_content.ts...")

    if not os.path.exists(blog_content_ts_path):
        print(f"File not found: {blog_content_ts_path}")
        return

    with open(blog_content_ts_path, 'r', encoding='utf-8') as f:
        content = f.read()

    original_content = content
    updates_made = 0

    # Pattern to match image src references in blog content
    # Matches: src="/images/blog/content/filename"
    def replace_src(match):
        nonlocal updates_made
        full_match = match.group(0)
        path = match.group(1)

        # Extract the filename from the path
        filename = os.path.basename(path)

        # Decode any URL encoding in the matched path
        decoded_filename = unquote(filename)

        # Find the new filename
        new_filename = None
        for old_name, new_name in rename_map.items():
            # Compare decoded versions
            if unquote(old_name) == decoded_filename or old_name == filename:
                new_filename = new_name
                break

        if new_filename:
            new_path = f'{base_path}/images/blog/content/{new_filename}'
            updates_made += 1
            return f'src="{new_path}"'

        # If not found in rename map, still add base path
        updates_made += 1
        return f'src="{base_path}{path}"'

    # Match src="/images/blog/content/..."
    content = re.sub(r'src="(/images/blog/content/[^"]+)"', replace_src, content)

    # Also fix any references that might have a different pattern
    # Match src="/mor-new/..." and remove the prefix
    content = re.sub(r'src="/mor-new/', 'src="/', content)

    if content != original_content:
        with open(blog_content_ts_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Updated {updates_made} image references in blog_content.ts")
    else:
        print("No changes needed in blog_content.ts")

    print("\nDone!")

if __name__ == "__main__":
    main()
