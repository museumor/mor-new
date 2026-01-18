#!/usr/bin/env python3
"""
Download images for the homepage from museumor.com
"""

import os
import requests
import time

# Directory to save images
output_dir = 'public/images/home'
os.makedirs(output_dir, exist_ok=True)

# Artist portrait images from museumor.com
artist_images = {
    'dani-bittman': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/626adcc8e2eb1c64e9451a3b_Image%20from%20iOS.jpg',
    'nick-ladd': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/5dcefb12e37a2b40a452088a_Ladd.png',
    'ana-duncan': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/5dcf507f65ba8f5c90bcf6cd_Duncan.png',
    'sutu': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/5dcf500f7a3fc9ad2287409e_Sutu.png',
    'naam': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/5e16401c51cc613325d01cf9_Hooimeijer.png',
    'liz-edwards': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/5dcf501665ba8f9998bcce9b_Edwards.png',
    'kevin-mack': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/5dcf501b99141dbf712ff6b0_Mack.png',
    'isaac-cohen': 'https://cdn.prod.website-files.com/5dcb2872a29803b9c9a069d8/5e16263fb452c91fc5263038_Cohen.png',
}

# Gallery/Hero images for the homepage
gallery_images = {
    'hero-museum': 'https://cdn.prod.website-files.com/5dcb2871a29803e7e6a069ad/5ddeed387833951ad40fef4e_MORScreenshot2019-06%201920x1080.jpg',
    'hero-lignes': 'https://cdn.prod.website-files.com/5dcb2871a29803e7e6a069ad/617afafe3a8c534a94282411_MOR%20Lignes%201%203840x2160.JPG',
    'gallery-joy': 'https://cdn.prod.website-files.com/5dcb2871a29803e7e6a069ad/5e45d619016c3405910ec2c6_Dog%20Burger%20Joy%20v2%20lite.jpg',
    'gallery-terrarium': 'https://cdn.prod.website-files.com/5dcb2871a29803e7e6a069ad/5de99a394b9e5a4b0ca0984c_terrarium%20twitter.png',
    'gallery-sutu-show': 'https://cdn.prod.website-files.com/5dcb2871a29803e7e6a069ad/5ddeeeec9275074032f7d5d3_Sutu%20Equinox%20Show%20smaller.png',
    'gallery-bittman-space': 'https://cdn.prod.website-files.com/5dcb2871a29803e7e6a069ad/5e45d2db378c0c16da82f3f8_Bittman%20Space%20v3%20large%20cropped%20lite.jpg',
    'gallery-community': 'https://cdn.prod.website-files.com/5dcb2871a29803e7e6a069ad/5ddef060924d9bddc11ff64e_Em%20Interview%20Show%20Group%202%20reduced.jpg',
}

def download_image(name, url, prefix=''):
    """Download an image and save it locally."""
    # Determine file extension from URL
    ext = url.split('.')[-1].split('?')[0].lower()
    if ext not in ['jpg', 'jpeg', 'png', 'gif', 'webp']:
        ext = 'jpg'

    filename = f"{prefix}{name}.{ext}"
    filepath = os.path.join(output_dir, filename)

    if os.path.exists(filepath):
        print(f"  Already exists: {filename}")
        return filename

    print(f"  Downloading: {name} -> {filename}")

    try:
        headers = {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
        }
        response = requests.get(url, headers=headers, timeout=30)
        if response.status_code == 200:
            with open(filepath, 'wb') as f:
                f.write(response.content)
            time.sleep(0.2)  # Polite delay
            return filename
        else:
            print(f"    Failed: HTTP {response.status_code}")
    except Exception as e:
        print(f"    Error: {e}")

    return None

def main():
    print("Downloading artist portrait images...")
    for name, url in artist_images.items():
        download_image(name, url, prefix='artist-')

    print("\nDownloading gallery/hero images...")
    for name, url in gallery_images.items():
        download_image(name, url)

    print("\nDone!")
    print(f"\nFiles saved to: {output_dir}/")

if __name__ == "__main__":
    main()
