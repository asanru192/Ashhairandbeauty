const fs = require('fs');
const path = require('path');

// Ensure dist and dist/assets directories exist
const distDir = path.join(__dirname, 'dist');
const distAssetsDir = path.join(distDir, 'assets');

if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}
if (!fs.existsSync(distAssetsDir)) {
    fs.mkdirSync(distAssetsDir, { recursive: true });
}

// Copy all HTML files, styles, scripts, sitemap and robots
const filesToCopy = fs.readdirSync(__dirname).filter(file => {
    return file.endsWith('.html') || file === 'style.css' || file === 'script.js'
        || file === 'sitemap.xml' || file === 'robots.txt';
});
filesToCopy.forEach(file => {
    const src = path.join(__dirname, file);
    const dest = path.join(distDir, file);
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log(`Copied ${file} to dist/`);
    }
});

// Copy assets recursively
const assetsSrcDir = path.join(__dirname, 'assets');
if (fs.existsSync(assetsSrcDir)) {
    fs.cpSync(assetsSrcDir, distAssetsDir, { recursive: true });
    console.log(`Copied assets to dist/assets/`);
}
console.log('Build completed successfully.');

