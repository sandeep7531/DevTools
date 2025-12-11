# DevToolbox - Free Developer Tools

A collection of fast, privacy-focused developer utilities built with Next.js 14, React, and TypeScript. All processing happens client-side - your data never leaves your browser.

![DevToolbox](https://via.placeholder.com/1200x630/4F46E5/ffffff?text=DevToolbox)

## 🚀 Features

- **6 Essential Developer Tools:**
  - JSON Formatter & Validator
  - Regex Tester with real-time matching
  - Base64 Encoder/Decoder
  - JWT Decoder with payload visualization
  - URL Encoder/Decoder
  - Unix Timestamp Converter

- **Privacy First:** 100% client-side processing - your data never leaves your browser
- **Lightning Fast:** Optimized for speed with Next.js 14 and App Router
- **Dark Mode:** Beautiful dark theme by default with light mode option
- **Keyboard Shortcuts:** Ctrl/Cmd + Enter to format JSON quickly
- **Offline Support:** Works offline once loaded (PWA-ready)
- **SEO Optimized:** Individual pages for each tool with perfect metadata
- **Mobile Responsive:** Works seamlessly on all devices

## 📦 Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript
- **Styling:** Tailwind CSS
- **Code Editor:** Monaco Editor (VS Code editor)
- **Icons:** Lucide React
- **Hosting:** Vercel (Free tier with unlimited bandwidth)
- **Analytics:** Google Analytics (optional)

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Clone the repository:**
   ```bash
   cd dev-toolbox
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel (FREE)

### Option 1: Deploy with Vercel CLI (Fastest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel:**
   ```bash
   vercel login
   ````

3. **Deploy:**``
   ```bash
   vercel --prod
   ```

Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via GitHub

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/dev-toolbox.git
   git push -u origin main
   ```

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"

## 🔧 Configuration

### Google Analytics (Optional)

1. Get your Google Analytics Measurement ID from [analytics.google.com](https://analytics.google.com/)
2. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Custom Domain (Optional - After 50K visitors)

1. Buy a domain from Namecheap, GoDaddy, etc.
2. In Vercel dashboard, go to your project → Settings → Domains
3. Add your custom domain
4. Update DNS records as shown by Vercel

### Free Domain (Freenom)

For completely free domains (.tk, .ml, .ga):
1. Go to [freenom.com](https://www.freenom.com)
2. Search for available domain
3. Register (requires email verification)
4. Point to Vercel as shown above

## 📁 Project Structure

```
dev-toolbox/
├── app/
│   ├── tools/
│   │   ├── json-formatter/      # JSON tool page
│   │   ├── regex-tester/        # Regex tool page
│   │   ├── base64-encoder/      # Base64 tool page
│   │   ├── jwt-decoder/         # JWT tool page
│   │   ├── url-encoder/         # URL tool page
│   │   └── timestamp-converter/ # Timestamp tool page
│   ├── layout.tsx               # Root layout with SEO
│   ├── page.tsx                 # Homepage
│   └── globals.css              # Global styles
├── components/
│   ├── tools/                   # Tool components
│   │   ├── JSONFormatter.tsx
│   │   ├── RegexTester.tsx
│   │   ├── Base64Tool.tsx
│   │   ├── JWTDecoder.tsx
│   │   ├── URLTool.tsx
│   │   └── TimestampConverter.tsx
│   ├── Header.tsx               # Site header
│   ├── Footer.tsx               # Site footer
│   ├── ThemeProvider.tsx        # Dark mode provider
│   └── Analytics.tsx            # Google Analytics
├── lib/
│   └── utils.ts                 # Utility functions
└── public/                      # Static assets
```

## 🎯 SEO Optimization

Each tool page includes:
- Unique meta titles and descriptions
- Relevant keywords
- OpenGraph tags for social sharing
- Schema.org markup for better indexing
- Semantic HTML structure

## 📈 Growth Strategy

### Phase 1: Launch (Month 1)
- ✅ Deploy 6 core tools
- ✅ Submit to Google Search Console
- Share on Reddit (r/webdev, r/programming)
- Post on Dev.to and Hashnode

### Phase 2: Content (Months 2-3)
- Write blog posts about each tool
- Create "How to" guides
- Add more tools (SQL formatter, CSS minifier, etc.)

### Phase 3: Monetization (Month 6+)
- Apply to Ezoic (no minimum traffic)
- At 50K visitors, apply to Mediavine
- Add affiliate links for hosting services
- Consider premium features

## 🔒 Privacy & Security

- All data processing happens in the browser
- No data sent to any servers
- No cookies or tracking (except optional Google Analytics)
- No user accounts or data storage
- HTTPS everywhere (Vercel default)

## 💰 Monetization Plan

### Traffic Goals:
- Month 1-3: 1K-10K visitors → Focus on content
- Month 4-6: 10K-50K visitors → Apply to Ezoic
- Month 7-12: 50K-200K visitors → Apply to Mediavine
- Month 13+: 200K-1M visitors → $10K-30K/month revenue

### Revenue Streams:
1. **Display Ads:** Mediavine ($20-25 RPM for developer traffic)
2. **Affiliate Links:** Hosting, cloud services ($65-200/sale)
3. **Premium Features:** API access, bulk processing ($9-29/month)

## 🤝 Contributing

Want to add more tools? Feel free to:
1. Fork the repository
2. Create your feature branch
3. Add your tool following the existing pattern
4. Submit a pull request

## 📝 License

MIT License - feel free to use for your own projects!

## 🎓 Learning Resources

Built this project? Learn more:
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Monaco Editor](https://microsoft.github.io/monaco-editor/)

## 📞 Support

- 🐛 Found a bug? Open an issue
- 💡 Have a feature request? Open an issue
- 📧 Questions? Contact via GitHub

---

**Built with ❤️ for developers by developers**

Start your journey to $30K/month with this completely free, open-source project! 🚀
