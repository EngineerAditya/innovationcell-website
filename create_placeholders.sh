#!/bin/bash
# Create simple placeholder images using base64 encoded 1x1 pixel PNGs

# Gray placeholder for crowd
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN89uzZfwAI8wPaFUa8YQAAAABJRU5ErkJggg==" | base64 -d > public/images/peeps/all-peeps.png

# Color placeholders for tech icons
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==" | base64 -d > public/mac/figma.png
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==" | base64 -d > public/mac/vsCode.png
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChAGA+Y6wQgAAAABJRU5ErkJggg==" | base64 -d > public/mac/Github.png
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYGD4DwABBAEAW9JJQAAAAABJRU5ErkJggg==" | base64 -d > public/mac/notion.png
echo "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5/hPwAHggJ/PZ+XFgAAAABJRU5ErkJggg==" | base64 -d > public/mac/Discord.png

echo "✅ Placeholder images created!"
