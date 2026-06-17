const fs = require('fs');
const files = ['index.html', 'about.html', 'services.html', 'gallery.html', 'offers.html', 'contact.html'];
const searchStart = '<div class="announcement-bar-inner">';
const searchEnd = '<a href="https://www.fresha.com';

const newContent = `
            <span class="announcement-icon">&#10052;&#65039;</span>
            <span class="announcement-text"><strong>Winter Hair Rescue:</strong> Keratin Smoothing Special &mdash; Shoulder Length from <strong>$220</strong> (was $250). Available through August.</span>
            `;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    let startIndex = content.indexOf(searchStart);
    let endIndex = content.indexOf(searchEnd);
    
    if (startIndex > -1 && endIndex > -1) {
        let before = content.substring(0, startIndex + searchStart.length);
        let after = content.substring(endIndex);
        
        let newHtml = before + '\n' + newContent + after;
        fs.writeFileSync(file, newHtml, 'utf8');
        console.log('Fixed ' + file);
    }
});
