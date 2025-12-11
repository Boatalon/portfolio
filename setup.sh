#!/bin/bash

# Portfolio Website Setup Script

echo "🚀 Setting up Portfolio Website..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from https://nodejs.org/"
    echo "Or use Homebrew: brew install node"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo "✅ npm version: $(npm --version)"
echo ""

# Navigate to project directory
cd "$(dirname "$0")"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "Next steps:"
    echo "1. Customize your information in the following files:"
    echo "   - components/Hero.tsx (name and description)"
    echo "   - app/about/page.tsx (bio and experience)"
    echo "   - lib/projects.ts (add your projects)"
    echo "   - components/Footer.tsx (social links)"
    echo ""
    echo "2. Add your project images to public/images/"
    echo ""
    echo "3. Start the development server:"
    echo "   npm run dev"
    echo ""
    echo "4. Open http://localhost:3000 in your browser"
    echo ""
    echo "📚 Read README.md for more information"
else
    echo ""
    echo "❌ Installation failed!"
    echo "Please check the error messages above."
    exit 1
fi
