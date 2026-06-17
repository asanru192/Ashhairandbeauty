const fs = require('fs');
const files = ['index.html', 'about.html', 'services.html', 'gallery.html', 'offers.html', 'contact.html'];

const replacements = {
    'â€”': '&mdash;',
    'â€“': '&ndash;',
    'â€™': '&rsquo;',
    'âœ¦': '&#10022;',
    'â€œ': '&ldquo;',
    'â€': '&rdquo;',
    'Â·': '&middot;'
};

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    let original = content;
    for (const [bad, good] of Object.entries(replacements)) {
        content = content.split(bad).join(good);
    }
    
    if (original !== content) {
        fs.writeFileSync(file, content, 'utf8');
        console.log('Fixed mojibake in ' + file);
    }
});
