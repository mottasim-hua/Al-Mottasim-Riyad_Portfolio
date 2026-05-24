@echo off

REM Setup script for Al Mottasim Riyad Portfolio (Windows)

echo.
echo 🚀 Setting up Al Mottasim Riyad's Portfolio...
echo.

REM Copy profile picture
echo 📸 Copying profile picture...
copy asset\profile.jpg public\images\profile\profile.jpg

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Done
echo.
echo ✅ Setup complete!
echo.
echo 🎯 Next steps:
echo 1. Add certificate images to: public\images\certifications\
echo 2. Update portfolio content in: src\data\portfolioData.js
echo 3. Run 'npm run dev' to start the development server
echo.
echo 📚 For more info, read: README.md
echo.
pause
