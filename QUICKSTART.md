# 🚀 Quick Start Guide

## ⚠️ Prerequisites

Before you begin, make sure you have **Node.js** installed on your system.

### Install Node.js

**Option 1: Download from official website**
- Visit https://nodejs.org/
- Download the LTS version (recommended)
- Run the installer

**Option 2: Using Homebrew (macOS)**
```bash
brew install node
```

### Verify installation
```bash
node --version
npm --version
```

## 📦 Setup & Run

### Automated Setup (Recommended)

Run the setup script:
```bash
cd portfolio-website
./setup.sh
```

This will:
1. Check Node.js installation
2. Install all dependencies
3. Provide next steps

### Manual Setup

```bash
cd portfolio-website
npm install
npm run dev
```

Then open http://localhost:3000

## ✏️ Customization Checklist

### 1. Personal Information
- [ ] `components/Hero.tsx` - Update your name and title
- [ ] `app/about/page.tsx` - Add your bio and experience
- [ ] `components/Footer.tsx` - Update social media links
- [ ] `app/contact/page.tsx` - Update contact info

### 2. Projects
- [ ] `lib/projects.ts` - Add/edit your projects
- [ ] Update project URLs and GitHub links
- [ ] Add project images to `public/images/`

### 3. SEO & Metadata
- [ ] `app/layout.tsx` - Update site metadata
- [ ] Add favicon to `public/`

### 4. Styling (Optional)
- [ ] `tailwind.config.ts` - Customize colors
- [ ] `app/globals.css` - Adjust global styles

## 🚀 Deployment to Vercel

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Create main branch
git branch -M main

# Add GitHub remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com
2. Sign up/Login with GitHub
3. Click "Add New Project"
4. Select your repository
5. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `portfolio-website`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click **Deploy**
7. Wait for deployment to complete
8. Your site is live! 🎉

### Step 3: Custom Domain (Optional)

1. In Vercel dashboard, go to Project Settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📝 Development Tips

### Hot Reload
Changes you make will automatically refresh in the browser

### Build for Production
```bash
npm run build
npm run start
```

### Lint Code
```bash
npm run lint
```

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill
# Or use a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🎯 Next Steps

After basic setup:
1. Replace placeholder images with real screenshots
2. Add more projects to showcase
3. Implement contact form backend (EmailJS, API)
4. Add analytics (Vercel Analytics, Google Analytics)
5. Create a blog section (optional)
6. Add testimonials (optional)

---

**Need help?** Check README.md for detailed documentation.
