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

  let content = fs.readFileSync('src/constants.ts', 'utf-8');
  
  // Extract existing GAMES array
  const gamesMatch = content.match(/export const GAMES: Game\[\] = \[([\s\S]*?)\];/);
  if (!gamesMatch) {
    console.log('Could not find GAMES array');
    return;
  }
  
  const existingGamesStr = gamesMatch[1];
  
  // Find existing IDs to avoid duplicates
  const existingIds: string[] = [];
  const idRegex = /id:\s*'([^']+)'/g;
  let match;
  while ((match = idRegex.exec(existingGamesStr)) !== null) {
    existingIds.push(match[1]);
  }
  
  console.log('Found existing IDs:', existingIds.length);
  
  const newGames = games.filter(g => !existingIds.includes(g.id));
  console.log('Adding new games:', newGames.length);
  
  const newGamesStr = newGames.map(g => `  {
    id: '${g.id}',
    title: '${g.title.replace(/'/g, "\\'")}',
    thumbnail: '${g.thumbnail}',
    url: \`\${BASE_URL}${g.id}.html\`,
    category: '${g.category}'
  }`).join(',\n');
  
  let updatedGamesStr = existingGamesStr;
  if (updatedGamesStr.trim().endsWith('}')) {
    updatedGamesStr += ',\n' + newGamesStr;
  } else {
    updatedGamesStr += newGamesStr;
  }
  
  const newContent = content.replace(gamesMatch[0], `export const GAMES: Game[] = [\n${updatedGamesStr}\n];`);
  
  fs.writeFileSync('src/constants.ts', newContent);
  console.log('Updated src/constants.ts');
}

run();
