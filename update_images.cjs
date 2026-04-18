const fs = require('fs');

const path = 'src/constants.ts';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/title:\s*'((?:\\'|[^'])*)',\s*thumbnail:\s*'([^']+)'/g, (match, title, oldThumb) => {
    if (!oldThumb.includes('picsum.photos')) {
        return match; 
    }
    
    // Clean up title to match the slug logic
    const cleanTitle = title.replace(/\\'/g, "'");
    const slug = cleanTitle.toLowerCase().replace(/ /g, '-').replace(/[':!]/g, '');
    let shortSlug = slug.substring(0, 3);
    if (shortSlug.length === 0) shortSlug = "nul";
    
    const newThumb = `https://media.rawg.io/media/games/${shortSlug}/${slug}.jpg`;
    
    return `title: '${title}',\n    thumbnail: '${newThumb}'`;
});

fs.writeFileSync(path, content);
console.log("Updated constants.ts");
