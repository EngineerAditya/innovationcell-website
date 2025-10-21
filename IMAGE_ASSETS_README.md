# 🖼️ Image Assets Required

This file contains instructions for adding the required image assets to make the landing page functional.

## Required Images

### 1. Crowd Animation Sprite Sheet
**Location:** `/public/images/peeps/all-peeps.png`

**Description:** A sprite sheet containing character silhouettes for the hero section's animated crowd effect.

**Specifications:**
- Grid layout: 15 columns × 7 rows = 105 individual character sprites
- Recommended size: 1800px × 840px (120px per character)
- Format: PNG with transparency
- Content: Diverse silhouettes of people (walking, standing poses)

**How to create:**
1. Use a vector design tool (Figma, Illustrator, etc.)
2. Create 105 unique silhouette variations
3. Arrange them in a 15×7 grid
4. Export as PNG at recommended dimensions

**Placeholder Alternative:**
If you don't have the sprite sheet yet, you can use a solid color placeholder:
- Create a 1800×840px image with black silhouettes on transparent background
- Or download free silhouette sprite sheets from resources like OpenGameArt.org

---

### 2. Technology Icons (5 images)
**Location:** `/public/mac/`

These icons represent the design & development toolkit.

#### a) **figma.png**
- Logo/icon for Figma
- Recommended size: 256×256px or 512×512px
- Format: PNG with transparency
- Download from: [Figma Brand Assets](https://www.figma.com/community)

#### b) **vsCode.png**
- Logo/icon for Visual Studio Code
- Recommended size: 256×256px or 512×512px
- Format: PNG with transparency
- Download from: [VS Code Brand Assets](https://code.visualstudio.com/brand)

#### c) **Github.png**
- Logo/icon for GitHub
- Recommended size: 256×256px or 512×512px
- Format: PNG with transparency
- Download from: [GitHub Logos](https://github.com/logos)

#### d) **notion.png**
- Logo/icon for Notion
- Recommended size: 256×256px or 512×512px
- Format: PNG with transparency
- Download from: [Notion Media Kit](https://www.notion.so/media-kit)

#### e) **Discord.png**
- Logo/icon for Discord
- Recommended size: 256×256px or 512×512px
- Format: PNG with transparency
- Download from: [Discord Branding](https://discord.com/branding)

---

## Quick Start with Placeholders

If you want to test the site before getting final images, create simple placeholder images:

```bash
# Install ImageMagick (if not already installed)
# Ubuntu/Debian: sudo apt-get install imagemagick
# macOS: brew install imagemagick

# Create placeholder for crowd (single color test)
convert -size 1800x840 xc:lightgray public/images/peeps/all-peeps.png

# Create placeholder icons (colored squares)
convert -size 256x256 xc:#FF7262 public/mac/figma.png
convert -size 256x256 xc:#007ACC public/mac/vsCode.png
convert -size 256x256 xc:#181717 public/mac/Github.png
convert -size 256x256 xc:#000000 public/mac/notion.png
convert -size 256x256 xc:#5865F2 public/mac/Discord.png
```

---

## Copyright & Attribution

**IMPORTANT:** For the Design2Deploy challenge submission:
- Ensure all images are either created by you or properly licensed
- Document the source of any third-party assets in your `AI_DISCLOSURE.md`
- Brand logos should be used according to each company's brand guidelines
- If using a pre-made sprite sheet, credit the original creator

**Recommended approach:**
1. Create original silhouettes for the crowd (shows creativity)
2. Use official brand assets for tech logos (proper attribution)
3. Document all sources in your README.md

---

## Verification

After adding images, verify they load correctly:

1. Start the dev server: `npm run dev`
2. Open the site in your browser
3. Check browser console for any 404 errors
4. Verify the crowd animation appears in the hero section
5. Verify tech icons appear in the scroll animation section

---

## Alternative: SVG Icons

For better quality and smaller file sizes, consider using SVG format instead of PNG for the tech icons. You can find SVG versions of most brand logos in their official media kits or from [Simple Icons](https://simpleicons.org/).

If using SVGs, update the file paths in `/src/components/ScrollAnimations.tsx`:

```tsx
const techIcons = [
  "/mac/figma.svg",
  "/mac/vsCode.svg",
  "/mac/Github.svg",
  "/mac/notion.svg",
  "/mac/Discord.svg",
];
```
