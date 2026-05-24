#!/bin/bash

# Setup script for Al Mottasim Riyad Portfolio

echo "🚀 Setting up Al Mottasim Riyad's Portfolio..."

# Copy profile picture
echo "📸 Copying profile picture..."
cp asset/profile.jpg public/images/profile/profile.jpg

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Done
echo ""
echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Add certificate images to: public/images/certifications/"
echo "2. Update portfolio content in: src/data/portfolioData.js"
echo "3. Run 'npm run dev' to start the development server"
echo ""
echo "📚 For more info, read: README.md"
