import fs from 'fs';

async function run() {
  const res = await fetch('https://api.github.com/repos/ilikecheese55/ugs-singlefile-archive-01-12-26/contents/UGS-Files');
  const data = await res.json();
  
  const games = data.filter((file: any) => file.name.endsWith('.html') && file.name.startsWith('cl')).map((file: any) => {
    let title = file.name.replace('cl', '').replace('.html', '').replace(/([A-Z])/g, ' $1').trim().toLowerCase();
    return {
      id: file.name.replace('.html', ''),
      title: title,
      thumbnail: 'https://picsum.photos/seed/' + file.name + '/400/400',
      url: '${BASE_URL}' + file.name,
      category: 'other'
    };
  });

  console.log(JSON.stringify(games.slice(0, 5), null, 2));
  console.log('Total games:', games.length);
  
  // Read constants.ts
  let content = fs.readFileSync('src/constants.ts', 'utf-8');
  
  // We need to replace the GAMES array.
  // Let's just append the new games to the existing GAMES array.
  // Find the end of the GAMES array.
  
  const gamesString = games.map(g => `  {
    id: '${g.id}',
    title: '${g.title.replace(/'/g, "\\'")}',
    thumbnail: '${g.thumbnail}',
    url: \`\${BASE_URL}${g.id}.html\`,
    category: '${g.category}'
  }`).join(',\n');

  // Find the last game in the array to append
  // Actually, let's just replace the whole GAMES array if it's easier, or just insert before `];`
  
  // For now let's just write the games to a file so we can see them.
  fs.writeFileSync('games.json', JSON.stringify(games, null, 2));
}

run();
