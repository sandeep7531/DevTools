# Open Graph Image Creation Guide

Your logo is located at `/public/Images/logo.png`. Use it to create professional Open Graph images for social media sharing.

## 🎯 Required Images

### 1. Main OG Image (PRIORITY)
**File:** `/public/og-image.png`
**Size:** 1200 x 630 pixels
**Impact:** Used when sharing ANY page from your site on social media

### 2. Tool-Specific OG Images (Optional but Recommended)
- `/public/og-json-formatter.png` (1200 x 630)
- `/public/og-jwt-decoder.png` (1200 x 630)
- `/public/og-regex-tester.png` (1200 x 630)
- `/public/og-base64-encoder.png` (1200 x 630)
- `/public/og-url-encoder.png` (1200 x 630)
- `/public/og-timestamp-converter.png` (1200 x 630)

## 🎨 Design Specifications

### Main OG Image Template

**Layout:**
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│         [Your Logo]  DevToolbox                     │
│                                                     │
│         Free Developer Tools That                   │
│         Respect Your Privacy                        │
│                                                     │
│    JSON • Regex • Base64 • JWT • URL • Timestamps   │
│                                                     │
│         ✓ 100% Offline  ✓ No Tracking               │
│         ✓ Open Source   ✓ Fast & Free               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Design Elements:

1. **Background:**
   - Gradient: Blue (#3B82F6) to Purple (#8B5CF6)
   - Or: Dark background (#1F2937) with gradient accents
   - Add subtle code-related patterns/symbols in background

2. **Logo:**
   - Place your `/public/Images/logo.png` in top-left or centered
   - Size: 80-100px

3. **Main Headline:**
   - "DevToolbox" in large, bold font (72-96px)
   - "Free Developer Tools That Respect Your Privacy" (36-48px)

4. **Feature List:**
   - Tools: JSON • Regex • Base64 • JWT • URL • Timestamps
   - Font size: 28-32px
   - Use bullet points or dots between items

5. **Trust Badges:**
   - ✓ 100% Offline
   - ✓ No Tracking
   - ✓ Open Source
   - ✓ Fast & Free
   - Font size: 20-24px

6. **Colors to Use:**
   - Primary Blue: #3B82F6
   - Primary Purple: #8B5CF6
   - Text: White (#FFFFFF)
   - Accent: #60A5FA

## 🛠️ Method 1: Create with Canva (Recommended - Easy)

### Step-by-Step:

1. **Go to Canva.com** (free account)

2. **Create Custom Size:**
   - Click "Create a design"
   - Choose "Custom size"
   - Enter: 1200 x 630 pixels
   - Click "Create new design"

3. **Design the Image:**

   **Background:**
   - Click "Elements" → Search "gradient background"
   - Choose blue-to-purple gradient
   - Or click "Background color" → Use gradient tool
   - Set gradient: #3B82F6 → #8B5CF6

   **Add Your Logo:**
   - Click "Uploads"
   - Upload `/public/Images/logo.png` from your computer
   - Drag it to the canvas
   - Resize to ~100px
   - Position in top-center or left

   **Add Text:**
   - Click "Text" → "Add a heading"
   - Type "DevToolbox"
   - Font: Poppins Bold or Inter Bold (72-96px)
   - Color: White
   - Position below logo

   - Add subheading:
   - "Free Developer Tools That Respect Your Privacy"
   - Font size: 36-48px
   - Color: White or light blue

   - Add tool list:
   - "JSON • Regex • Base64 • JWT • URL • Timestamps"
   - Font size: 28-32px
   - Color: White

   - Add trust badges:
   - "✓ 100% Offline  ✓ No Tracking"
   - "✓ Open Source   ✓ Fast & Free"
   - Font size: 20-24px

   **Add Code Elements (Optional):**
   - Click "Elements" → Search "code"
   - Add subtle code brackets, curly braces, or developer icons
   - Set opacity to 10-20% for background effect

4. **Download:**
   - Click "Share" → "Download"
   - File type: PNG
   - Click "Download"
   - Save as `og-image.png`

5. **Move to Project:**
   - Copy downloaded file to `/public/og-image.png`

## 🎨 Method 2: Create with Figma (Professional)

### Step-by-Step:

1. **Go to Figma.com** (free account)

2. **Create Frame:**
   - Press "F" for Frame tool
   - Click "Custom" in properties
   - Width: 1200, Height: 630
   - Name it "OG Image"

3. **Add Background:**
   - Select frame
   - In "Fill" section, click "+"
   - Choose "Linear gradient"
   - Color stops: #3B82F6 → #8B5CF6

4. **Import Logo:**
   - Drag `/public/Images/logo.png` onto canvas
   - Resize (hold Shift to maintain aspect ratio)
   - Position as desired

5. **Add Text:**
   - Press "T" for text tool
   - Add all text elements (see design specs above)
   - Use fonts: Inter, Poppins, or SF Pro

6. **Export:**
   - Select the frame
   - In right panel, click "Export"
   - Format: PNG
   - Scale: 1x
   - Click "Export OG Image"
   - Save as `og-image.png`

## 🖼️ Method 3: Use Online OG Image Generator

**Option A: Cloudinary OG Image Generator**
- URL: https://og-playground.vercel.app/
- Edit the template
- Download as PNG

**Option B: Social Image Generator**
- URL: https://www.bannerbear.com/tools/social-image-generator/
- Choose template
- Customize with your branding
- Download

## 🚀 Method 4: Programmatic Generation (Advanced)

If you want to auto-generate OG images, you can use:

### Install Package:
```bash
npm install @vercel/og
```

### Create API Route:
```typescript
// app/api/og/route.tsx
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
          fontSize: 60,
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        <div style={{ fontSize: 80 }}>DevToolbox</div>
        <div style={{ fontSize: 40, marginTop: 20 }}>
          Free Developer Tools That Respect Your Privacy
        </div>
        <div style={{ fontSize: 28, marginTop: 40 }}>
          JSON • Regex • Base64 • JWT • URL • Timestamps
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
```

## 📋 Tool-Specific Images

For each tool, create variations:

### JSON Formatter OG Image:
- Main text: "JSON Formatter & Validator"
- Subtext: "Format, validate, and beautify JSON instantly"
- Background: Blue gradient
- Icon: Add JSON brackets {}

### JWT Decoder OG Image:
- Main text: "JWT Decoder"
- Subtext: "Decode JSON Web Tokens securely in your browser"
- Background: Purple gradient
- Icon: Add lock or key symbol

### Regex Tester OG Image:
- Main text: "Regex Tester"
- Subtext: "Test regular expressions with real-time matching"
- Background: Green-blue gradient
- Icon: Add regex symbols .*+

## ✅ After Creating Images

### 1. Save to Correct Locations:
```bash
/public/og-image.png                    # Main image
/public/og-json-formatter.png           # Optional
/public/og-jwt-decoder.png              # Optional
# ... etc
```

### 2. Update Metadata (if using tool-specific images):

For example, in `app/tools/json-formatter/page.tsx`:

```typescript
export const metadata: Metadata = {
  // ... existing metadata
  openGraph: {
    title: "JSON Formatter & Validator - DevToolbox",
    description: "Format, validate, and beautify JSON with syntax highlighting",
    type: "website",
    images: [
      {
        url: "/og-json-formatter.png",  // Tool-specific image
        width: 1200,
        height: 630,
        alt: "JSON Formatter - DevToolbox",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSON Formatter & Validator - DevToolbox",
    description: "Format, validate, and beautify JSON with syntax highlighting",
    images: ["/og-json-formatter.png"],
  },
};
```

### 3. Test Your Images:

**Test with these tools:**
- https://www.opengraph.xyz/ - OG tag validator
- https://cards-dev.twitter.com/validator - Twitter card validator
- https://developers.facebook.com/tools/debug/ - Facebook sharing debugger

**Test URLs:**
```
https://dev-tool-box-murex.vercel.app/
https://dev-tool-box-murex.vercel.app/tools/json-formatter
https://dev-tool-box-murex.vercel.app/tools/jwt-decoder
```

### 4. Verify Image Size:
```bash
# Check file size (should be < 1MB)
ls -lh /Users/sandeeprai/Downloads/dev-toolbox/public/og-image.png
```

## 🎯 Image Optimization Tips

1. **File Size:**
   - Keep under 1MB (ideally 200-500KB)
   - Use PNG for graphics with text
   - Use JPG if file size is too large

2. **Compress Images:**
   - Use https://tinypng.com/ to compress
   - Or use ImageOptim (Mac) / Squoosh (Web)

3. **Safe Zone:**
   - Keep important text/logos in center 1000x500px area
   - Some platforms crop edges

4. **Text Readability:**
   - Use high contrast (white text on dark/gradient background)
   - Font size: Minimum 28px for body text
   - Font weight: Bold or Semi-bold for headlines

5. **Brand Consistency:**
   - Use same colors as your site (blue #3B82F6, purple #8B5CF6)
   - Use same font families
   - Include your logo on all images

## 🚀 Quick Start (5-Minute Version)

**Fastest way to get an OG image:**

1. Go to https://www.bannerbear.com/tools/social-image-generator/
2. Choose a template with gradient background
3. Upload your logo from `/public/Images/logo.png`
4. Add text:
   - "DevToolbox"
   - "Free Developer Tools"
   - "JSON • Regex • Base64 • JWT"
5. Download as PNG
6. Save to `/public/og-image.png`
7. Deploy to Vercel

Done! Your site will now show a professional image when shared on social media.

## 📊 Expected Impact

**Before OG Image:**
- Generic preview when shared
- 1-2% click-through rate from social shares

**After OG Image:**
- Professional branded preview
- 3-6% click-through rate (3x improvement!)
- Looks trustworthy and established
- Better engagement on Product Hunt, Reddit, Twitter

## 🎨 Design Inspiration

Check these for inspiration:
- https://vercel.com/ (share any Vercel page to see their OG images)
- https://tailwindcss.com/
- https://nextjs.org/
- Other successful developer tools

---

**Need Help?**
- Ask for feedback on your design in r/web_design
- Use AI tools like Midjourney or DALL-E to generate background patterns
- Hire a designer on Fiverr ($5-20) if you want a quick professional result

**Remember:** Your OG image is often the first impression. Make it count!
