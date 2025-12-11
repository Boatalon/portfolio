# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a stunning dark theme with glassmorphism effects, smooth animations, and bilingual support (EN/TH).

## ✨ Features

- 🎨 Modern dark theme with gradient accents
- 💎 Glassmorphism UI effects
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🌐 Bilingual support (English/Thai)
- ⚡ Fast performance with Next.js 14
- 🎯 SEO optimized
- 🚀 Easy deployment to Vercel

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter, Space Grotesk)

## 📁 Project Structure

```
portfolio-website/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── projects/
│   │   └── page.tsx        # Projects showcase
│   └── contact/
│       └── page.tsx        # Contact form
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── ProjectCard.tsx     # Project card component
│   ├── Footer.tsx          # Footer
│   └── AnimatedSection.tsx # Scroll animations wrapper
├── lib/
│   └── projects.ts         # Projects data
├── public/
│   ├── images/             # Project images
│   └── icons/              # Icons and assets
└── styles/
    └── globals.css         # Additional global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm installed
- Git

### Installation

1. **Clone the repository**
```bash
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### 1. Personal Information

Edit the following files to add your information:

- **Hero Section**: `components/Hero.tsx` - Update name and description
- **About Page**: `app/about/page.tsx` - Add your bio and experience
- **Footer**: `components/Footer.tsx` - Update social links
- **Contact**: `app/contact/page.tsx` - Update contact information

### 2. Projects

Edit `lib/projects.ts` to add your projects:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  titleTH: 'ชื่อโปรเจกต์',
  description: 'Project description',
  descriptionTH: 'คำอธิบายโปรเจกต์',
  image: '/images/project-image.jpg',
  tags: ['Tag1', 'Tag2'],
  link: 'https://project-live-url.com',
  github: 'https://github.com/username/repo',
  featured: true,
  category: 'ml' | 'web' | 'mobile' | 'other',
}
```

### 3. Images

Add project images to `public/images/` directory. Supported formats: JPG, PNG, WebP

### 4. Colors and Theme

Edit `tailwind.config.ts` to customize colors:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### 5. Metadata and SEO

Update `app/layout.tsx` for SEO:

```typescript
export const metadata: Metadata = {
  title: 'Your Name | Portfolio',
  description: 'Your description',
  // ...
};
```

## 📦 Building for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

To test the production build locally:
```bash
npm run start
```

## 🚀 Deploy to Vercel

### Method 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Deploy**
```bash
vercel
```

Follow the prompts to complete deployment.

### Method 2: Deploy via GitHub (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - Framework Preset: **Next.js**
     - Root Directory: **portfolio-website**
     - Build Command: `npm run build`
     - Output Directory: `.next`
   - Click "Deploy"

3. **Automatic Deployments**
   - Every push to `main` branch triggers a new deployment
   - Preview deployments for pull requests

### Environment Variables (if needed)

If you add features requiring environment variables:

1. Create `.env.local` file (not tracked by git)
2. Add variables in Vercel:
   - Project Settings → Environment Variables
   - Add each variable and its value

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Pages

- **Home** (`/`) - Hero section, featured projects, tech stack
- **About** (`/about`) - Biography, experience, education
- **Projects** (`/projects`) - All projects with filtering
- **Contact** (`/contact`) - Contact form and information

## 🎯 Features To Add (Optional)

- [ ] Blog section with MDX
- [ ] Dark/Light mode toggle
- [ ] Analytics (Google Analytics, Vercel Analytics)
- [ ] Newsletter subscription
- [ ] Email service integration (EmailJS, SendGrid)
- [ ] CMS integration (Sanity, Contentful)
- [ ] Project detail pages
- [ ] Testimonials section

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Suggestions and improvements are welcome! Feel free to open an issue or submit a pull request.

## 📞 Support

If you have questions or need help, please open an issue on GitHub.

---

**Made with ❤️ using Next.js and Tailwind CSS**
