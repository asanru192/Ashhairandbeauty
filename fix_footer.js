const fs = require('fs');
const files = ['about.html', 'contact.html', 'gallery.html', 'index.html', 'offers.html', 'services.html'];
const searchStr =                     <a href="tel:+6467585115">
                        <span class="footer-contact-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E1B333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.16 11.7 19.79 19.79 0 0 1 1.09 3.1 2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </span>
                        +64 6 758 5115
                    </a>;
const replaceStr =                     <a href="tel:+6467585115">
                        <span class="footer-contact-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E1B333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.16 11.7 19.79 19.79 0 0 1 1.09 3.1 2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </span>
                        +64 6 758 5115
                    </a>
                    <a href="tel:0226779665">
                        <span class="footer-contact-icon">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#E1B333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.16 11.7 19.79 19.79 0 0 1 1.09 3.1 2 2 0 0 1 3.07 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </span>
                        022 677 9665
                    </a>;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes(searchStr)) {
        content = content.replace(searchStr, replaceStr);
        fs.writeFileSync(file, content);
        console.log('Updated ' + file);
    } else {
        console.log('Not found in ' + file);
    }
});
