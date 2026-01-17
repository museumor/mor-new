import json
import os
import requests
import time

image_map_path = 'old-source/image_map.json'
public_dir = 'public'

def download_images():
    with open(image_map_path, 'r') as f:
        image_map = json.load(f)

    for local_path, url in image_map.items():
        if not url:
            print(f"Skipping {local_path} - No URL")
            continue

        # Construct full local path
        full_local_path = os.path.join(public_dir, local_path.lstrip('/'))
        
        # Check if file already exists
        if os.path.exists(full_local_path):
            # print(f"Skipping {local_path} - Already exists")
            continue

        # Ensure directory exists (redundant but safe)
        os.makedirs(os.path.dirname(full_local_path), exist_ok=True)

        print(f"Downloading {local_path} from {url}...")
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
            response = requests.get(url, headers=headers, stream=True, timeout=10)
            if response.status_code == 200:
                with open(full_local_path, 'wb') as f:
                    for chunk in response.iter_content(1024):
                        f.write(chunk)
                # Polite delay
                time.sleep(0.2)
            else:
                print(f"Failed to download {url}: Status {response.status_code}")
        except Exception as e:
            print(f"Error downloading {url}: {e}")

if __name__ == "__main__":
    download_images()
