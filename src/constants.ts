import { Game, MediaItem, AppItem } from './types';

const BASE_URL = 'https://raw.githack.com/ilikecheese55/ugs-singlefile-archive-01-12-26/main/UGS-Files/';

export const GAMES: Game[] = [

  {
    id: '1v1lol',
    title: '1v1.lol',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/1794465225460843374_0',
    url: `${BASE_URL}cl1v1lol.html`,
    category: 'popular'
  },
  {
    id: 'retrobowl',
    title: 'retro bowl',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/3869981809588875988_0',
    url: `${BASE_URL}clretrobowl.html`,
    category: 'sports'
  },
  {
    id: 'bitlife',
    title: 'bitlife',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/14525892340558564016_0',
    url: `${BASE_URL}clbitlife.html`,
    category: 'simulation'
  },
  {
    id: 'minecraft',
    title: 'minecraft classic',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/15676197120896557213_0',
    url: `${BASE_URL}clminecraft.html`,
    category: 'popular'
  },
  {
    id: 'cookieclicker',
    title: 'cookie clicker',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/12939568982971569462_0',
    url: `${BASE_URL}clcookieclicker.html`,
    category: 'idle'
  },
  {
    id: 'geometrydash',
    title: 'geometry dash',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/10900503722102983623_0',
    url: `${BASE_URL}clgeometrydash.html`,
    category: 'popular'
  },
  {
    id: 'vex7',
    title: 'vex 7',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/vex7.webp',
    url: `${BASE_URL}clvex7.html`,
    category: 'platformer'
  },
  {
    id: 'subway',
    title: 'subway surfers',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/5830351396863133771_0',
    url: `${BASE_URL}clsubwaysurfers.html`,
    category: 'popular'
  },
  {
    id: 'baldi',
    title: "baldi's basics",
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/baldis-basics.webp',
    url: `${BASE_URL}clbaldisbasics.html`,
    category: 'horror'
  },
  {
    id: 'fnaf',
    title: 'fnaf',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/fnaf.webp',
    url: `${BASE_URL}clfnaf.html`,
    category: 'horror'
  },
  {
    id: '2048',
    title: '2048',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/2048.webp',
    url: `${BASE_URL}cl2048.html`,
    category: 'puzzle'
  },
  {
    id: 'smashkarts',
    title: 'smash karts',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/1794465225460846121_0',
    url: `${BASE_URL}clsmashkarts.html`,
    category: 'popular'
  },
  {
    id: 'tunnelrush',
    title: 'tunnel rush',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/tunnel-rush.webp',
    url: `${BASE_URL}cltunnelrush.html`,
    category: 'popular'
  },
  {
    id: 'run3',
    title: 'run 3',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/run-3.webp',
    url: `${BASE_URL}clrun3.html`,
    category: 'popular'
  },
  {
    id: 'crossyroad',
    title: 'crossy road',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/crossy-road.webp',
    url: `${BASE_URL}clcrossyroad.html`,
    category: 'popular'
  },
  {
    id: 'getaway-shootout',
    title: 'getaway shootout',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/getaway-shootout.webp',
    url: `${BASE_URL}clgetawayshootout.html`,
    category: 'action'
  },
  {
    id: 'rooftop-snipers',
    title: 'rooftop snipers',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/rooftop-snipers.webp',
    url: `${BASE_URL}clrooftopsnipers.html`,
    category: 'action'
  },
  {
    id: 'happy-wheels',
    title: 'happy wheels',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/happy-wheels.webp',
    url: `${BASE_URL}clhappywheels.html`,
    category: 'popular'
  },
  {
    id: 'sm64',
    title: 'super mario 64',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/13473228907493756394_0',
    url: `${BASE_URL}clsupermario64.html`,
    category: 'popular'
  },
  {
    id: 'tetris',
    title: 'tetris',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/tetris.webp',
    url: `${BASE_URL}cltetris.html`,
    category: 'puzzle'
  },
  {
    id: 'pacman',
    title: 'pac-man',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/pacman.webp',
    url: `${BASE_URL}clpacman.html`,
    category: 'popular'
  },
  {
    id: 'flappy-bird',
    title: 'flappy bird',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/flappy-bird.webp',
    url: `${BASE_URL}clflappybird.html`,
    category: 'popular'
  },
  {
    id: 'paper-io-2',
    title: 'paper.io 2',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/paper-io-2.webp',
    url: `${BASE_URL}clpaperio2.html`,
    category: 'io'
  },
  {
    id: 'among-us',
    title: 'among us',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/7520122178728176497_0',
    url: `${BASE_URL}clamongus.html`,
    category: 'popular'
  },
  {
    id: 'moto-x3m',
    title: 'moto x3m',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/15340877609085949822_0',
    url: `${BASE_URL}clmotox3m.html`,
    category: 'racing'
  },
  {
    id: 'moto-x3m-winter',
    title: 'moto x3m winter',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/moto-x3m-winter.webp',
    url: `${BASE_URL}clmotox3mwinter.html`,
    category: 'racing'
  },
  {
    id: 'moto-x3m-pool-party',
    title: 'moto x3m pool party',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/moto-x3m-pool-party.webp',
    url: `${BASE_URL}clmotox3mpoolparty.html`,
    category: 'racing'
  },
  {
    id: 'moto-x3m-spooky-land',
    title: 'moto x3m spooky land',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/moto-x3m-spooky-land.webp',
    url: `${BASE_URL}clmotox3mspooky.html`,
    category: 'racing'
  },
  {
    id: 'basket-bros',
    title: 'basket bros',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/basket-bros.webp',
    url: `${BASE_URL}clbasketbros.html`,
    category: 'sports'
  },
  {
    id: 'bloons-td-4',
    title: 'bloons td 4',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/bloons-td-4.webp',
    url: `${BASE_URL}clbloonstd4.html`,
    category: 'strategy'
  },
  {
    id: 'btd5',
    title: 'bloons td 5',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/bloons-td-5.webp',
    url: `${BASE_URL}clbtd5.html`,
    category: 'strategy'
  },
  {
    id: 'pokemon-red',
    title: 'pokemon red',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/pokemon-red.webp',
    url: `${BASE_URL}clpokemonred.html`,
    category: 'rpg'
  },
  {
    id: 'superhot',
    title: 'superhot',
    thumbnail: 'https://googleusercontent.com/image_collection/image_retrieval/13859912965621660026_0',
    url: `${BASE_URL}clsuperhot.html`,
    category: 'action'
  },
  {
    id: 'stickman-hook',
    title: 'stickman hook',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/stickman-hook.webp',
    url: `${BASE_URL}clstickmanhook.html`,
    category: 'popular'
  },
  {
    id: 'there-is-no-game',
    title: 'there is no game',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/there-is-no-game.webp',
    url: `${BASE_URL}clthereisnogame.html`,
    category: 'puzzle'
  },
  {
    id: 'snow-rider-3d',
    title: 'snow rider 3d',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/snow-rider-3d.webp',
    url: `${BASE_URL}clsnowrider3d.html`,
    category: 'racing'
  },
  {
    id: 'just-fall-lol',
    title: 'just fall lol',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/just-fall-lol.webp',
    url: `${BASE_URL}cljustfalllol.html`,
    category: 'action'
  },
  {
    id: 'basketball-stars',
    title: 'basketball stars',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/basketball-stars.webp',
    url: `${BASE_URL}clbasketballstars.html`,
    category: 'sports'
  }
,
  {
    id: 'cl1',
    title: '1',
    thumbnail: 'https://media.rawg.io/media/games/1/1.jpg',
    url: `${BASE_URL}cl1.html`,
    category: 'other'
  },
  {
    id: 'cl10bullets',
    title: '10bullets',
    thumbnail: 'https://media.rawg.io/media/games/10b/10bullets.jpg',
    url: `${BASE_URL}cl10bullets.html`,
    category: 'other'
  },
  {
    id: 'cl10minutestildawn',
    title: '10minutestildawn',
    thumbnail: 'https://media.rawg.io/media/games/10m/10minutestildawn.jpg',
    url: `${BASE_URL}cl10minutestildawn.html`,
    category: 'other'
  },
  {
    id: 'cl12minibattles',
    title: '12minibattles',
    thumbnail: 'https://media.rawg.io/media/games/12m/12minibattles.jpg',
    url: `${BASE_URL}cl12minibattles.html`,
    category: 'other'
  },
  {
    id: 'cl1on1soccer',
    title: '1on1soccer',
    thumbnail: 'https://media.rawg.io/media/games/1on/1on1soccer.jpg',
    url: `${BASE_URL}cl1on1soccer.html`,
    category: 'other'
  },
  {
    id: 'cl1v1lol',
    title: '1v1lol',
    thumbnail: 'https://media.rawg.io/media/games/1v1/1v1lol.jpg',
    url: `${BASE_URL}cl1v1lol.html`,
    category: 'other'
  },
  {
    id: 'cl1v1tennis',
    title: '1v1tennis',
    thumbnail: 'https://media.rawg.io/media/games/1v1/1v1tennis.jpg',
    url: `${BASE_URL}cl1v1tennis.html`,
    category: 'other'
  },
  {
    id: 'cl2048',
    title: '2048',
    thumbnail: 'https://media.rawg.io/media/games/204/2048.jpg',
    url: `${BASE_URL}cl2048.html`,
    category: 'other'
  },
  {
    id: 'cl2048cupcakes',
    title: '2048cupcakes',
    thumbnail: 'https://media.rawg.io/media/games/204/2048cupcakes.jpg',
    url: `${BASE_URL}cl2048cupcakes.html`,
    category: 'other'
  },
  {
    id: 'cl2Dshooting',
    title: '2 dshooting',
    thumbnail: 'https://media.rawg.io/media/games/2-d/2-dshooting.jpg',
    url: `${BASE_URL}cl2Dshooting.html`,
    category: 'other'
  },
  {
    id: 'cl2doom',
    title: '2doom',
    thumbnail: 'https://media.rawg.io/media/games/2do/2doom.jpg',
    url: `${BASE_URL}cl2doom.html`,
    category: 'other'
  },
  {
    id: 'cl3dash',
    title: '3dash',
    thumbnail: 'https://media.rawg.io/media/games/3da/3dash.jpg',
    url: `${BASE_URL}cl3dash.html`,
    category: 'other'
  },
  {
    id: 'cl3pandas',
    title: '3pandas',
    thumbnail: 'https://media.rawg.io/media/games/3pa/3pandas.jpg',
    url: `${BASE_URL}cl3pandas.html`,
    category: 'other'
  },
  {
    id: 'cl3pandasbrazil',
    title: '3pandasbrazil',
    thumbnail: 'https://media.rawg.io/media/games/3pa/3pandasbrazil.jpg',
    url: `${BASE_URL}cl3pandasbrazil.html`,
    category: 'other'
  },
  {
    id: 'cl3pandasfantasy',
    title: '3pandasfantasy',
    thumbnail: 'https://media.rawg.io/media/games/3pa/3pandasfantasy.jpg',
    url: `${BASE_URL}cl3pandasfantasy.html`,
    category: 'other'
  },
  {
    id: 'cl3pandasjapan',
    title: '3pandasjapan',
    thumbnail: 'https://media.rawg.io/media/games/3pa/3pandasjapan.jpg',
    url: `${BASE_URL}cl3pandasjapan.html`,
    category: 'other'
  },
  {
    id: 'cl3pandasnight',
    title: '3pandasnight',
    thumbnail: 'https://media.rawg.io/media/games/3pa/3pandasnight.jpg',
    url: `${BASE_URL}cl3pandasnight.html`,
    category: 'other'
  },
  {
    id: 'cl3slices2',
    title: '3slices2',
    thumbnail: 'https://media.rawg.io/media/games/3sl/3slices2.jpg',
    url: `${BASE_URL}cl3slices2.html`,
    category: 'other'
  },
  {
    id: 'cl40xescape',
    title: '40xescape',
    thumbnail: 'https://media.rawg.io/media/games/40x/40xescape.jpg',
    url: `${BASE_URL}cl40xescape.html`,
    category: 'other'
  },
  {
    id: 'cl4thandgoal',
    title: '4thandgoal',
    thumbnail: 'https://media.rawg.io/media/games/4th/4thandgoal.jpg',
    url: `${BASE_URL}cl4thandgoal.html`,
    category: 'other'
  },
  {
    id: 'cl500calibercontractz',
    title: '500calibercontractz',
    thumbnail: 'https://media.rawg.io/media/games/500/500calibercontractz.jpg',
    url: `${BASE_URL}cl500calibercontractz.html`,
    category: 'other'
  },
  {
    id: 'cl60secondsburgerrun',
    title: '60secondsburgerrun',
    thumbnail: 'https://media.rawg.io/media/games/60s/60secondsburgerrun.jpg',
    url: `${BASE_URL}cl60secondsburgerrun.html`,
    category: 'other'
  },
  {
    id: 'cl60secondssantarun',
    title: '60secondssantarun',
    thumbnail: 'https://media.rawg.io/media/games/60s/60secondssantarun.jpg',
    url: `${BASE_URL}cl60secondssantarun.html`,
    category: 'other'
  },
  {
    id: 'cl8ballclassic',
    title: '8ballclassic',
    thumbnail: 'https://media.rawg.io/media/games/8ba/8ballclassic.jpg',
    url: `${BASE_URL}cl8ballclassic.html`,
    category: 'other'
  },
  {
    id: 'cl8ballpool',
    title: '8ballpool',
    thumbnail: 'https://media.rawg.io/media/games/8ba/8ballpool.jpg',
    url: `${BASE_URL}cl8ballpool.html`,
    category: 'other'
  },
  {
    id: 'cl9007199254740992',
    title: '9007199254740992',
    thumbnail: 'https://media.rawg.io/media/games/900/9007199254740992.jpg',
    url: `${BASE_URL}cl9007199254740992.html`,
    category: 'other'
  },
  {
    id: 'cl99balls',
    title: '99balls',
    thumbnail: 'https://media.rawg.io/media/games/99b/99balls.jpg',
    url: `${BASE_URL}cl99balls.html`,
    category: 'other'
  },
  {
    id: 'cl99nightsitf',
    title: '99nightsitf',
    thumbnail: 'https://media.rawg.io/media/games/99n/99nightsitf.jpg',
    url: `${BASE_URL}cl99nightsitf.html`,
    category: 'other'
  },
  {
    id: 'clADOFAI',
    title: 'a d o f a i',
    thumbnail: 'https://media.rawg.io/media/games/a-d/a-d-o-f-a-i.jpg',
    url: `${BASE_URL}clADOFAI.html`,
    category: 'other'
  },
  {
    id: 'clADarkRoom',
    title: 'a dark room',
    thumbnail: 'https://media.rawg.io/media/games/a-d/a-dark-room.jpg',
    url: `${BASE_URL}clADarkRoom.html`,
    category: 'other'
  },
  {
    id: 'clAdventureCapatalist',
    title: 'adventure capatalist',
    thumbnail: 'https://media.rawg.io/media/games/adv/adventure-capatalist.jpg',
    url: `${BASE_URL}clAdventureCapatalist.html`,
    category: 'other'
  },
  {
    id: 'clAwesomePirates',
    title: 'awesome pirates',
    thumbnail: 'https://media.rawg.io/media/games/awe/awesome-pirates.jpg',
    url: `${BASE_URL}clAwesomePirates.html`,
    category: 'other'
  },
  {
    id: 'clB3313',
    title: 'b3313',
    thumbnail: 'https://media.rawg.io/media/games/b33/b3313.jpg',
    url: `${BASE_URL}clB3313.html`,
    category: 'other'
  },
  {
    id: 'clBMX2',
    title: 'b m x2',
    thumbnail: 'https://media.rawg.io/media/games/b-m/b-m-x2.jpg',
    url: `${BASE_URL}clBMX2.html`,
    category: 'other'
  },
  {
    id: 'clBTD1',
    title: 'b t d1',
    thumbnail: 'https://media.rawg.io/media/games/b-t/b-t-d1.jpg',
    url: `${BASE_URL}clBTD1.html`,
    category: 'other'
  },
  {
    id: 'clBig_Time_Butter_Baron',
    title: 'big_ time_ butter_ baron',
    thumbnail: 'https://media.rawg.io/media/games/big/big_-time_-butter_-baron.jpg',
    url: `${BASE_URL}clBig_Time_Butter_Baron.html`,
    category: 'other'
  },
  {
    id: 'clBountyOfOne',
    title: 'bounty of one',
    thumbnail: 'https://media.rawg.io/media/games/bou/bounty-of-one.jpg',
    url: `${BASE_URL}clBountyOfOne.html`,
    category: 'other'
  },
  {
    id: 'clCartoonNetworkTableTennisUltimateTournament',
    title: 'cartoon network table tennis ultimate tournament',
    thumbnail: 'https://media.rawg.io/media/games/car/cartoon-network-table-tennis-ultimate-tournament.jpg',
    url: `${BASE_URL}clCartoonNetworkTableTennisUltimateTournament.html`,
    category: 'other'
  },
  {
    id: 'clCircloO2',
    title: 'circlo o2',
    thumbnail: 'https://media.rawg.io/media/games/cir/circlo-o2.jpg',
    url: `${BASE_URL}clCircloO2.html`,
    category: 'other'
  },
  {
    id: 'clDragonBallZTheLegacyofGoku',
    title: 'dragon ball z the legacyof goku',
    thumbnail: 'https://media.rawg.io/media/games/dra/dragon-ball-z-the-legacyof-goku.jpg',
    url: `${BASE_URL}clDragonBallZTheLegacyofGoku.html`,
    category: 'other'
  },
  {
    id: 'clDragonQuestIX',
    title: 'dragon quest i x',
    thumbnail: 'https://media.rawg.io/media/games/dra/dragon-quest-i-x.jpg',
    url: `${BASE_URL}clDragonQuestIX.html`,
    category: 'other'
  },
  {
    id: 'clFF3',
    title: 'f f3',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-f3.jpg',
    url: `${BASE_URL}clFF3.html`,
    category: 'other'
  },
  {
    id: 'clFFsonic1',
    title: 'f fsonic1',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-fsonic1.jpg',
    url: `${BASE_URL}clFFsonic1.html`,
    category: 'other'
  },
  {
    id: 'clFFsonic2',
    title: 'f fsonic2',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-fsonic2.jpg',
    url: `${BASE_URL}clFFsonic2.html`,
    category: 'other'
  },
  {
    id: 'clFFsonic3',
    title: 'f fsonic3',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-fsonic3.jpg',
    url: `${BASE_URL}clFFsonic3.html`,
    category: 'other'
  },
  {
    id: 'clFFsonic4',
    title: 'f fsonic4',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-fsonic4.jpg',
    url: `${BASE_URL}clFFsonic4.html`,
    category: 'other'
  },
  {
    id: 'clFFsonic5',
    title: 'f fsonic5',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-fsonic5.jpg',
    url: `${BASE_URL}clFFsonic5.html`,
    category: 'other'
  },
  {
    id: 'clFFsonic61',
    title: 'f fsonic61',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-fsonic61.jpg',
    url: `${BASE_URL}clFFsonic61.html`,
    category: 'other'
  },
  {
    id: 'clFFsonic62',
    title: 'f fsonic62',
    thumbnail: 'https://media.rawg.io/media/games/f-f/f-fsonic62.jpg',
    url: `${BASE_URL}clFFsonic62.html`,
    category: 'other'
  },
  {
    id: 'clFIFA07',
    title: 'f i f a07',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-a07.jpg',
    url: `${BASE_URL}clFIFA07.html`,
    category: 'other'
  },
  {
    id: 'clFIFA10',
    title: 'f i f a10',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-a10.jpg',
    url: `${BASE_URL}clFIFA10.html`,
    category: 'other'
  },
  {
    id: 'clFIFA11',
    title: 'f i f a11',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-a11.jpg',
    url: `${BASE_URL}clFIFA11.html`,
    category: 'other'
  },
  {
    id: 'clFIFA2000(1)',
    title: 'f i f a2000(1)',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-a2000(1).jpg',
    url: `${BASE_URL}clFIFA2000(1).html`,
    category: 'other'
  },
  {
    id: 'clFIFA99',
    title: 'f i f a99',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-a99.jpg',
    url: `${BASE_URL}clFIFA99.html`,
    category: 'other'
  },
  {
    id: 'clFIFAinternationalsoccer',
    title: 'f i f ainternationalsoccer',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-ainternationalsoccer.jpg',
    url: `${BASE_URL}clFIFAinternationalsoccer.html`,
    category: 'other'
  },
  {
    id: 'clFIFAroadtoworldcup98',
    title: 'f i f aroadtoworldcup98',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-aroadtoworldcup98.jpg',
    url: `${BASE_URL}clFIFAroadtoworldcup98.html`,
    category: 'other'
  },
  {
    id: 'clFIFAsoccer06',
    title: 'f i f asoccer06',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-asoccer06.jpg',
    url: `${BASE_URL}clFIFAsoccer06.html`,
    category: 'other'
  },
  {
    id: 'clFIFAsoccer95',
    title: 'f i f asoccer95',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-asoccer95.jpg',
    url: `${BASE_URL}clFIFAsoccer95.html`,
    category: 'other'
  },
  {
    id: 'clFIFAsoccer96',
    title: 'f i f asoccer96',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-asoccer96.jpg',
    url: `${BASE_URL}clFIFAsoccer96.html`,
    category: 'other'
  },
  {
    id: 'clFIFAsoccer97',
    title: 'f i f asoccer97',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-asoccer97.jpg',
    url: `${BASE_URL}clFIFAsoccer97.html`,
    category: 'other'
  },
  {
    id: 'clFIFAstreet2',
    title: 'f i f astreet2',
    thumbnail: 'https://media.rawg.io/media/games/f-i/f-i-f-astreet2.jpg',
    url: `${BASE_URL}clFIFAstreet2.html`,
    category: 'other'
  },
  {
    id: 'clFNAF',
    title: 'f n a f',
    thumbnail: 'https://media.rawg.io/media/games/f-n/f-n-a-f.jpg',
    url: `${BASE_URL}clFNAF.html`,
    category: 'other'
  },
  {
    id: 'clFNAF2',
    title: 'f n a f2',
    thumbnail: 'https://media.rawg.io/media/games/f-n/f-n-a-f2.jpg',
    url: `${BASE_URL}clFNAF2.html`,
    category: 'other'
  },
  {
    id: 'clFNAF3',
    title: 'f n a f3',
    thumbnail: 'https://media.rawg.io/media/games/f-n/f-n-a-f3.jpg',
    url: `${BASE_URL}clFNAF3.html`,
    category: 'other'
  },
  {
    id: 'clFNAF4',
    title: 'f n a f4',
    thumbnail: 'https://media.rawg.io/media/games/f-n/f-n-a-f4.jpg',
    url: `${BASE_URL}clFNAF4.html`,
    category: 'other'
  },
  {
    id: 'clGettothetopalthoughthereisnotop',
    title: 'gettothetopalthoughthereisnotop',
    thumbnail: 'https://media.rawg.io/media/games/get/gettothetopalthoughthereisnotop.jpg',
    url: `${BASE_URL}clGettothetopalthoughthereisnotop.html`,
    category: 'other'
  },
  {
    id: 'clGoldenSunTheLostAge',
    title: 'golden sun the lost age',
    thumbnail: 'https://media.rawg.io/media/games/gol/golden-sun-the-lost-age.jpg',
    url: `${BASE_URL}clGoldenSunTheLostAge.html`,
    category: 'other'
  },
  {
    id: 'clHaroldsbadday',
    title: 'haroldsbadday',
    thumbnail: 'https://media.rawg.io/media/games/har/haroldsbadday.jpg',
    url: `${BASE_URL}clHaroldsbadday.html`,
    category: 'other'
  },
  {
    id: 'clHiNoHomo',
    title: 'hi no homo',
    thumbnail: 'https://media.rawg.io/media/games/hi-/hi-no-homo.jpg',
    url: `${BASE_URL}clHiNoHomo.html`,
    category: 'other'
  },
  {
    id: 'clJUMP',
    title: 'j u m p',
    thumbnail: 'https://media.rawg.io/media/games/j-u/j-u-m-p.jpg',
    url: `${BASE_URL}clJUMP.html`,
    category: 'other'
  },
  {
    id: 'clKenGriffeyJrPresentsMajorLeagueBaseball',
    title: 'ken griffey jr presents major league baseball',
    thumbnail: 'https://media.rawg.io/media/games/ken/ken-griffey-jr-presents-major-league-baseball.jpg',
    url: `${BASE_URL}clKenGriffeyJrPresentsMajorLeagueBaseball.html`,
    category: 'other'
  },
  {
    id: 'clMarioisMissingDoneRight',
    title: 'mariois missing done right',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariois-missing-done-right.jpg',
    url: `${BASE_URL}clMarioisMissingDoneRight.html`,
    category: 'other'
  },
  {
    id: 'clMetalSonicHyperdrive',
    title: 'metal sonic hyperdrive',
    thumbnail: 'https://media.rawg.io/media/games/met/metal-sonic-hyperdrive.jpg',
    url: `${BASE_URL}clMetalSonicHyperdrive.html`,
    category: 'other'
  },
  {
    id: 'clNBAhangtime',
    title: 'n b ahangtime',
    thumbnail: 'https://media.rawg.io/media/games/n-b/n-b-ahangtime.jpg',
    url: `${BASE_URL}clNBAhangtime.html`,
    category: 'other'
  },
  {
    id: 'clNBAjam',
    title: 'n b ajam',
    thumbnail: 'https://media.rawg.io/media/games/n-b/n-b-ajam.jpg',
    url: `${BASE_URL}clNBAjam.html`,
    category: 'other'
  },
  {
    id: 'clNewSuperMarioWorld2AroundtheWorld',
    title: 'new super mario world2 aroundthe world',
    thumbnail: 'https://media.rawg.io/media/games/new/new-super-mario-world2-aroundthe-world.jpg',
    url: `${BASE_URL}clNewSuperMarioWorld2AroundtheWorld.html`,
    category: 'other'
  },
  {
    id: 'clNicktoonsFreezeFrameFrenzy',
    title: 'nicktoons freeze frame frenzy',
    thumbnail: 'https://media.rawg.io/media/games/nic/nicktoons-freeze-frame-frenzy.jpg',
    url: `${BASE_URL}clNicktoonsFreezeFrameFrenzy.html`,
    category: 'other'
  },
  {
    id: 'clNutsandBoltsScrewingPuzzle',
    title: 'nutsand bolts screwing puzzle',
    thumbnail: 'https://media.rawg.io/media/games/nut/nutsand-bolts-screwing-puzzle.jpg',
    url: `${BASE_URL}clNutsandBoltsScrewingPuzzle.html`,
    category: 'other'
  },
  {
    id: 'clPokemonemeraldrouge',
    title: 'pokemonemeraldrouge',
    thumbnail: 'https://media.rawg.io/media/games/pok/pokemonemeraldrouge.jpg',
    url: `${BASE_URL}clPokemonemeraldrouge.html`,
    category: 'other'
  },
  {
    id: 'clPokemonrocketedition',
    title: 'pokemonrocketedition',
    thumbnail: 'https://media.rawg.io/media/games/pok/pokemonrocketedition.jpg',
    url: `${BASE_URL}clPokemonrocketedition.html`,
    category: 'other'
  },
  {
    id: 'clPokémonstunningsteel',
    title: 'pokémonstunningsteel',
    thumbnail: 'https://media.rawg.io/media/games/pok/pokémonstunningsteel.jpg',
    url: `${BASE_URL}clPokémonstunningsteel.html`,
    category: 'other'
  },
  {
    id: 'clSINGLEFILE',
    title: 's i n g l e f i l e',
    thumbnail: 'https://media.rawg.io/media/games/s-i/s-i-n-g-l-e-f-i-l-e.jpg',
    url: `${BASE_URL}clSINGLEFILE.html`,
    category: 'other'
  },
  {
    id: 'clSonic1ScoreRush',
    title: 'sonic1 score rush',
    thumbnail: 'https://media.rawg.io/media/games/son/sonic1-score-rush.jpg',
    url: `${BASE_URL}clSonic1ScoreRush.html`,
    category: 'other'
  },
  {
    id: 'clSonic2ScoreRush',
    title: 'sonic2 score rush',
    thumbnail: 'https://media.rawg.io/media/games/son/sonic2-score-rush.jpg',
    url: `${BASE_URL}clSonic2ScoreRush.html`,
    category: 'other'
  },
  {
    id: 'clSonicHellfireSaga',
    title: 'sonic hellfire saga',
    thumbnail: 'https://media.rawg.io/media/games/son/sonic-hellfire-saga.jpg',
    url: `${BASE_URL}clSonicHellfireSaga.html`,
    category: 'other'
  },
  {
    id: 'clStickmanKingdomclash',
    title: 'stickman kingdomclash',
    thumbnail: 'https://media.rawg.io/media/games/sti/stickman-kingdomclash.jpg',
    url: `${BASE_URL}clStickmanKingdomclash.html`,
    category: 'other'
  },
  {
    id: 'clSuperMarioWorldThe SecretOfThe7GoldenStatues',
    title: 'super mario world the  secret of the7 golden statues',
    thumbnail: 'https://media.rawg.io/media/games/sup/super-mario-world-the--secret-of-the7-golden-statues.jpg',
    url: `${BASE_URL}clSuperMarioWorldThe SecretOfThe7GoldenStatues.html`,
    category: 'other'
  },
  {
    id: 'clTaikonoTatsujin',
    title: 'taikono tatsujin',
    thumbnail: 'https://media.rawg.io/media/games/tai/taikono-tatsujin.jpg',
    url: `${BASE_URL}clTaikonoTatsujin.html`,
    category: 'other'
  },
  {
    id: 'clUZG',
    title: 'u z g',
    thumbnail: 'https://media.rawg.io/media/games/u-z/u-z-g.jpg',
    url: `${BASE_URL}clUZG.html`,
    category: 'other'
  },
  {
    id: 'clUltimatecardrivingsimulator',
    title: 'ultimatecardrivingsimulator',
    thumbnail: 'https://media.rawg.io/media/games/ult/ultimatecardrivingsimulator.jpg',
    url: `${BASE_URL}clUltimatecardrivingsimulator.html`,
    category: 'other'
  },
  {
    id: 'clXevious',
    title: 'xevious',
    thumbnail: 'https://media.rawg.io/media/games/xev/xevious.jpg',
    url: `${BASE_URL}clXevious.html`,
    category: 'other'
  },
  {
    id: 'clYoshisStrangeQuest',
    title: 'yoshis strange quest',
    thumbnail: 'https://media.rawg.io/media/games/yos/yoshis-strange-quest.jpg',
    url: `${BASE_URL}clYoshisStrangeQuest.html`,
    category: 'other'
  },
  {
    id: 'clabandoned3',
    title: 'abandoned3',
    thumbnail: 'https://media.rawg.io/media/games/aba/abandoned3.jpg',
    url: `${BASE_URL}clabandoned3.html`,
    category: 'other'
  },
  {
    id: 'clabsolutemadness',
    title: 'absolutemadness',
    thumbnail: 'https://media.rawg.io/media/games/abs/absolutemadness.jpg',
    url: `${BASE_URL}clabsolutemadness.html`,
    category: 'other'
  },
  {
    id: 'clacecombat2',
    title: 'acecombat2',
    thumbnail: 'https://media.rawg.io/media/games/ace/acecombat2.jpg',
    url: `${BASE_URL}clacecombat2.html`,
    category: 'other'
  },
  {
    id: 'clacecombat3',
    title: 'acecombat3',
    thumbnail: 'https://media.rawg.io/media/games/ace/acecombat3.jpg',
    url: `${BASE_URL}clacecombat3.html`,
    category: 'other'
  },
  {
    id: 'clacegangstertaxi',
    title: 'acegangstertaxi',
    thumbnail: 'https://media.rawg.io/media/games/ace/acegangstertaxi.jpg',
    url: `${BASE_URL}clacegangstertaxi.html`,
    category: 'other'
  },
  {
    id: 'clachievementunlocked',
    title: 'achievementunlocked',
    thumbnail: 'https://media.rawg.io/media/games/ach/achievementunlocked.jpg',
    url: `${BASE_URL}clachievementunlocked.html`,
    category: 'other'
  },
  {
    id: 'clachievmentunlocked',
    title: 'achievmentunlocked',
    thumbnail: 'https://media.rawg.io/media/games/ach/achievmentunlocked.jpg',
    url: `${BASE_URL}clachievmentunlocked.html`,
    category: 'other'
  },
  {
    id: 'clachievmentunlocked2',
    title: 'achievmentunlocked2',
    thumbnail: 'https://media.rawg.io/media/games/ach/achievmentunlocked2.jpg',
    url: `${BASE_URL}clachievmentunlocked2.html`,
    category: 'other'
  },
  {
    id: 'clachievmentunlocked3',
    title: 'achievmentunlocked3',
    thumbnail: 'https://media.rawg.io/media/games/ach/achievmentunlocked3.jpg',
    url: `${BASE_URL}clachievmentunlocked3.html`,
    category: 'other'
  },
  {
    id: 'clachillies',
    title: 'achillies',
    thumbnail: 'https://media.rawg.io/media/games/ach/achillies.jpg',
    url: `${BASE_URL}clachillies.html`,
    category: 'other'
  },
  {
    id: 'clachillies2',
    title: 'achillies2',
    thumbnail: 'https://media.rawg.io/media/games/ach/achillies2.jpg',
    url: `${BASE_URL}clachillies2.html`,
    category: 'other'
  },
  {
    id: 'cladayintheoffice',
    title: 'adayintheoffice',
    thumbnail: 'https://media.rawg.io/media/games/ada/adayintheoffice.jpg',
    url: `${BASE_URL}cladayintheoffice.html`,
    category: 'other'
  },
  {
    id: 'cladvancewars',
    title: 'advancewars',
    thumbnail: 'https://media.rawg.io/media/games/adv/advancewars.jpg',
    url: `${BASE_URL}cladvancewars.html`,
    category: 'other'
  },
  {
    id: 'cladvancewars2',
    title: 'advancewars2',
    thumbnail: 'https://media.rawg.io/media/games/adv/advancewars2.jpg',
    url: `${BASE_URL}cladvancewars2.html`,
    category: 'other'
  },
  {
    id: 'cladventneon',
    title: 'adventneon',
    thumbnail: 'https://media.rawg.io/media/games/adv/adventneon.jpg',
    url: `${BASE_URL}cladventneon.html`,
    category: 'other'
  },
  {
    id: 'cladventurecapitalist',
    title: 'adventurecapitalist',
    thumbnail: 'https://media.rawg.io/media/games/adv/adventurecapitalist.jpg',
    url: `${BASE_URL}cladventurecapitalist.html`,
    category: 'other'
  },
  {
    id: 'clagariolite',
    title: 'agariolite',
    thumbnail: 'https://media.rawg.io/media/games/aga/agariolite.jpg',
    url: `${BASE_URL}clagariolite.html`,
    category: 'other'
  },
  {
    id: 'clageofwar',
    title: 'ageofwar',
    thumbnail: 'https://media.rawg.io/media/games/age/ageofwar.jpg',
    url: `${BASE_URL}clageofwar.html`,
    category: 'other'
  },
  {
    id: 'clageofwar2',
    title: 'ageofwar2',
    thumbnail: 'https://media.rawg.io/media/games/age/ageofwar2.jpg',
    url: `${BASE_URL}clageofwar2.html`,
    category: 'other'
  },
  {
    id: 'clagesofconflict',
    title: 'agesofconflict',
    thumbnail: 'https://media.rawg.io/media/games/age/agesofconflict.jpg',
    url: `${BASE_URL}clagesofconflict.html`,
    category: 'other'
  },
  {
    id: 'clahoysurvival',
    title: 'ahoysurvival',
    thumbnail: 'https://media.rawg.io/media/games/aho/ahoysurvival.jpg',
    url: `${BASE_URL}clahoysurvival.html`,
    category: 'other'
  },
  {
    id: 'clai',
    title: 'ai',
    thumbnail: 'https://media.rawg.io/media/games/ai/ai.jpg',
    url: `${BASE_URL}clai.html`,
    category: 'other'
  },
  {
    id: 'clakoopasrevenge',
    title: 'akoopasrevenge',
    thumbnail: 'https://media.rawg.io/media/games/ako/akoopasrevenge.jpg',
    url: `${BASE_URL}clakoopasrevenge.html`,
    category: 'other'
  },
  {
    id: 'clakoopasrevenge2',
    title: 'akoopasrevenge2',
    thumbnail: 'https://media.rawg.io/media/games/ako/akoopasrevenge2.jpg',
    url: `${BASE_URL}clakoopasrevenge2.html`,
    category: 'other'
  },
  {
    id: 'clakumanorgaiden',
    title: 'akumanorgaiden',
    thumbnail: 'https://media.rawg.io/media/games/aku/akumanorgaiden.jpg',
    url: `${BASE_URL}clakumanorgaiden.html`,
    category: 'other'
  },
  {
    id: 'clalienhominid',
    title: 'alienhominid',
    thumbnail: 'https://media.rawg.io/media/games/ali/alienhominid.jpg',
    url: `${BASE_URL}clalienhominid.html`,
    category: 'other'
  },
  {
    id: 'clalienhominidgba',
    title: 'alienhominidgba',
    thumbnail: 'https://media.rawg.io/media/games/ali/alienhominidgba.jpg',
    url: `${BASE_URL}clalienhominidgba.html`,
    category: 'other'
  },
  {
    id: 'clalienskyinvasion',
    title: 'alienskyinvasion',
    thumbnail: 'https://media.rawg.io/media/games/ali/alienskyinvasion.jpg',
    url: `${BASE_URL}clalienskyinvasion.html`,
    category: 'other'
  },
  {
    id: 'clalientransporter',
    title: 'alientransporter',
    thumbnail: 'https://media.rawg.io/media/games/ali/alientransporter.jpg',
    url: `${BASE_URL}clalientransporter.html`,
    category: 'other'
  },
  {
    id: 'clalienvspredator',
    title: 'alienvspredator',
    thumbnail: 'https://media.rawg.io/media/games/ali/alienvspredator.jpg',
    url: `${BASE_URL}clalienvspredator.html`,
    category: 'other'
  },
  {
    id: 'clallbossesin1',
    title: 'allbossesin1',
    thumbnail: 'https://media.rawg.io/media/games/all/allbossesin1.jpg',
    url: `${BASE_URL}clallbossesin1.html`,
    category: 'other'
  },
  {
    id: 'clallocation',
    title: 'allocation',
    thumbnail: 'https://media.rawg.io/media/games/all/allocation.jpg',
    url: `${BASE_URL}clallocation.html`,
    category: 'other'
  },
  {
    id: 'clamaze',
    title: 'amaze',
    thumbnail: 'https://media.rawg.io/media/games/ama/amaze.jpg',
    url: `${BASE_URL}clamaze.html`,
    category: 'other'
  },
  {
    id: 'clamidstthesky',
    title: 'amidstthesky',
    thumbnail: 'https://media.rawg.io/media/games/ami/amidstthesky.jpg',
    url: `${BASE_URL}clamidstthesky.html`,
    category: 'other'
  },
  {
    id: 'clamigopancho',
    title: 'amigopancho',
    thumbnail: 'https://media.rawg.io/media/games/ami/amigopancho.jpg',
    url: `${BASE_URL}clamigopancho.html`,
    category: 'other'
  },
  {
    id: 'clamigopancho2',
    title: 'amigopancho2',
    thumbnail: 'https://media.rawg.io/media/games/ami/amigopancho2.jpg',
    url: `${BASE_URL}clamigopancho2.html`,
    category: 'other'
  },
  {
    id: 'clamigopancho3',
    title: 'amigopancho3',
    thumbnail: 'https://media.rawg.io/media/games/ami/amigopancho3.jpg',
    url: `${BASE_URL}clamigopancho3.html`,
    category: 'other'
  },
  {
    id: 'clamigopancho4',
    title: 'amigopancho4',
    thumbnail: 'https://media.rawg.io/media/games/ami/amigopancho4.jpg',
    url: `${BASE_URL}clamigopancho4.html`,
    category: 'other'
  },
  {
    id: 'clamigopancho5',
    title: 'amigopancho5',
    thumbnail: 'https://media.rawg.io/media/games/ami/amigopancho5.jpg',
    url: `${BASE_URL}clamigopancho5.html`,
    category: 'other'
  },
  {
    id: 'clamigopancho6',
    title: 'amigopancho6',
    thumbnail: 'https://media.rawg.io/media/games/ami/amigopancho6.jpg',
    url: `${BASE_URL}clamigopancho6.html`,
    category: 'other'
  },
  {
    id: 'clamigopancho7',
    title: 'amigopancho7',
    thumbnail: 'https://media.rawg.io/media/games/ami/amigopancho7.jpg',
    url: `${BASE_URL}clamigopancho7.html`,
    category: 'other'
  },
  {
    id: 'clamongus',
    title: 'amongus',
    thumbnail: 'https://media.rawg.io/media/games/amo/amongus.jpg',
    url: `${BASE_URL}clamongus.html`,
    category: 'other'
  },
  {
    id: 'clamorphous',
    title: 'amorphous',
    thumbnail: 'https://media.rawg.io/media/games/amo/amorphous.jpg',
    url: `${BASE_URL}clamorphous.html`,
    category: 'other'
  },
  {
    id: 'clancientsins',
    title: 'ancientsins',
    thumbnail: 'https://media.rawg.io/media/games/anc/ancientsins.jpg',
    url: `${BASE_URL}clancientsins.html`,
    category: 'other'
  },
  {
    id: 'clangry-birdsspace',
    title: 'angry-birdsspace',
    thumbnail: 'https://media.rawg.io/media/games/ang/angry-birdsspace.jpg',
    url: `${BASE_URL}clangry-birdsspace.html`,
    category: 'other'
  },
  {
    id: 'clangrybirds-space',
    title: 'angrybirds-space',
    thumbnail: 'https://media.rawg.io/media/games/ang/angrybirds-space.jpg',
    url: `${BASE_URL}clangrybirds-space.html`,
    category: 'other'
  },
  {
    id: 'clangrybirds',
    title: 'angrybirds',
    thumbnail: 'https://media.rawg.io/media/games/ang/angrybirds.jpg',
    url: `${BASE_URL}clangrybirds.html`,
    category: 'other'
  },
  {
    id: 'clangrybirdsshowdown',
    title: 'angrybirdsshowdown',
    thumbnail: 'https://media.rawg.io/media/games/ang/angrybirdsshowdown.jpg',
    url: `${BASE_URL}clangrybirdsshowdown.html`,
    category: 'other'
  },
  {
    id: 'clangrybirdsspace',
    title: 'angrybirdsspace',
    thumbnail: 'https://media.rawg.io/media/games/ang/angrybirdsspace.jpg',
    url: `${BASE_URL}clangrybirdsspace.html`,
    category: 'other'
  },
  {
    id: 'clanimalcrossingwildworld',
    title: 'animalcrossingwildworld',
    thumbnail: 'https://media.rawg.io/media/games/ani/animalcrossingwildworld.jpg',
    url: `${BASE_URL}clanimalcrossingwildworld.html`,
    category: 'other'
  },
  {
    id: 'clanotherworld',
    title: 'anotherworld',
    thumbnail: 'https://media.rawg.io/media/games/ano/anotherworld.jpg',
    url: `${BASE_URL}clanotherworld.html`,
    category: 'other'
  },
  {
    id: 'clapotris',
    title: 'apotris',
    thumbnail: 'https://media.rawg.io/media/games/apo/apotris.jpg',
    url: `${BASE_URL}clapotris.html`,
    category: 'other'
  },
  {
    id: 'clappleshooter',
    title: 'appleshooter',
    thumbnail: 'https://media.rawg.io/media/games/app/appleshooter.jpg',
    url: `${BASE_URL}clappleshooter.html`,
    category: 'other'
  },
  {
    id: 'clappleworm',
    title: 'appleworm',
    thumbnail: 'https://media.rawg.io/media/games/app/appleworm.jpg',
    url: `${BASE_URL}clappleworm.html`,
    category: 'other'
  },
  {
    id: 'claquaparkio',
    title: 'aquaparkio',
    thumbnail: 'https://media.rawg.io/media/games/aqu/aquaparkio.jpg',
    url: `${BASE_URL}claquaparkio.html`,
    category: 'other'
  },
  {
    id: 'clarceuslegend',
    title: 'arceuslegend',
    thumbnail: 'https://media.rawg.io/media/games/arc/arceuslegend.jpg',
    url: `${BASE_URL}clarceuslegend.html`,
    category: 'other'
  },
  {
    id: 'clarcheryworldtour',
    title: 'archeryworldtour',
    thumbnail: 'https://media.rawg.io/media/games/arc/archeryworldtour.jpg',
    url: `${BASE_URL}clarcheryworldtour.html`,
    category: 'other'
  },
  {
    id: 'clarena',
    title: 'arena',
    thumbnail: 'https://media.rawg.io/media/games/are/arena.jpg',
    url: `${BASE_URL}clarena.html`,
    category: 'other'
  },
  {
    id: 'clarmormayhem2',
    title: 'armormayhem2',
    thumbnail: 'https://media.rawg.io/media/games/arm/armormayhem2.jpg',
    url: `${BASE_URL}clarmormayhem2.html`,
    category: 'other'
  },
  {
    id: 'clarsonate',
    title: 'arsonate',
    thumbnail: 'https://media.rawg.io/media/games/ars/arsonate.jpg',
    url: `${BASE_URL}clarsonate.html`,
    category: 'other'
  },
  {
    id: 'clascent',
    title: 'ascent',
    thumbnail: 'https://media.rawg.io/media/games/asc/ascent.jpg',
    url: `${BASE_URL}clascent.html`,
    category: 'other'
  },
  {
    id: 'clasmallworldcup',
    title: 'asmallworldcup',
    thumbnail: 'https://media.rawg.io/media/games/asm/asmallworldcup.jpg',
    url: `${BASE_URL}clasmallworldcup.html`,
    category: 'other'
  },
  {
    id: 'classesmentexaminationque',
    title: 'assesmentexaminationque',
    thumbnail: 'https://media.rawg.io/media/games/ass/assesmentexaminationque.jpg',
    url: `${BASE_URL}classesmentexaminationque.html`,
    category: 'other'
  },
  {
    id: 'clasteroids',
    title: 'asteroids',
    thumbnail: 'https://media.rawg.io/media/games/ast/asteroids.jpg',
    url: `${BASE_URL}clasteroids.html`,
    category: 'other'
  },
  {
    id: 'clasteroidsALT',
    title: 'asteroids a l t',
    thumbnail: 'https://media.rawg.io/media/games/ast/asteroids-a-l-t.jpg',
    url: `${BASE_URL}clasteroidsALT.html`,
    category: 'other'
  },
  {
    id: 'clattackhole',
    title: 'attackhole',
    thumbnail: 'https://media.rawg.io/media/games/att/attackhole.jpg',
    url: `${BASE_URL}clattackhole.html`,
    category: 'other'
  },
  {
    id: 'clavalanche',
    title: 'avalanche',
    thumbnail: 'https://media.rawg.io/media/games/ava/avalanche.jpg',
    url: `${BASE_URL}clavalanche.html`,
    category: 'other'
  },
  {
    id: 'claviamasters',
    title: 'aviamasters',
    thumbnail: 'https://media.rawg.io/media/games/avi/aviamasters.jpg',
    url: `${BASE_URL}claviamasters.html`,
    category: 'other'
  },
  {
    id: 'claviamastersbuggy',
    title: 'aviamastersbuggy',
    thumbnail: 'https://media.rawg.io/media/games/avi/aviamastersbuggy.jpg',
    url: `${BASE_URL}claviamastersbuggy.html`,
    category: 'other'
  },
  {
    id: 'clawesomeplanes',
    title: 'awesomeplanes',
    thumbnail: 'https://media.rawg.io/media/games/awe/awesomeplanes.jpg',
    url: `${BASE_URL}clawesomeplanes.html`,
    category: 'other'
  },
  {
    id: 'clawesometanks',
    title: 'awesometanks',
    thumbnail: 'https://media.rawg.io/media/games/awe/awesometanks.jpg',
    url: `${BASE_URL}clawesometanks.html`,
    category: 'other'
  },
  {
    id: 'clawesometanks2',
    title: 'awesometanks2',
    thumbnail: 'https://media.rawg.io/media/games/awe/awesometanks2.jpg',
    url: `${BASE_URL}clawesometanks2.html`,
    category: 'other'
  },
  {
    id: 'clbabeltower',
    title: 'babeltower',
    thumbnail: 'https://media.rawg.io/media/games/bab/babeltower.jpg',
    url: `${BASE_URL}clbabeltower.html`,
    category: 'other'
  },
  {
    id: 'clbabychiccoadventure',
    title: 'babychiccoadventure',
    thumbnail: 'https://media.rawg.io/media/games/bab/babychiccoadventure.jpg',
    url: `${BASE_URL}clbabychiccoadventure.html`,
    category: 'other'
  },
  {
    id: 'clbabykaizo',
    title: 'babykaizo',
    thumbnail: 'https://media.rawg.io/media/games/bab/babykaizo.jpg',
    url: `${BASE_URL}clbabykaizo.html`,
    category: 'other'
  },
  {
    id: 'clbabysniperinvietnam',
    title: 'babysniperinvietnam',
    thumbnail: 'https://media.rawg.io/media/games/bab/babysniperinvietnam.jpg',
    url: `${BASE_URL}clbabysniperinvietnam.html`,
    category: 'other'
  },
  {
    id: 'clbackrooms',
    title: 'backrooms',
    thumbnail: 'https://media.rawg.io/media/games/bac/backrooms.jpg',
    url: `${BASE_URL}clbackrooms.html`,
    category: 'other'
  },
  {
    id: 'clbackrooms2D',
    title: 'backrooms2 d',
    thumbnail: 'https://media.rawg.io/media/games/bac/backrooms2-d.jpg',
    url: `${BASE_URL}clbackrooms2D.html`,
    category: 'other'
  },
  {
    id: 'clbackyardbaseball',
    title: 'backyardbaseball',
    thumbnail: 'https://media.rawg.io/media/games/bac/backyardbaseball.jpg',
    url: `${BASE_URL}clbackyardbaseball.html`,
    category: 'other'
  },
  {
    id: 'clbackyardbaseball09',
    title: 'backyardbaseball09',
    thumbnail: 'https://media.rawg.io/media/games/bac/backyardbaseball09.jpg',
    url: `${BASE_URL}clbackyardbaseball09.html`,
    category: 'other'
  },
  {
    id: 'clbackyardbaseball10',
    title: 'backyardbaseball10',
    thumbnail: 'https://media.rawg.io/media/games/bac/backyardbaseball10.jpg',
    url: `${BASE_URL}clbackyardbaseball10.html`,
    category: 'other'
  },
  {
    id: 'clbackyardsoccer',
    title: 'backyardsoccer',
    thumbnail: 'https://media.rawg.io/media/games/bac/backyardsoccer.jpg',
    url: `${BASE_URL}clbackyardsoccer.html`,
    category: 'other'
  },
  {
    id: 'clbaconmaydie',
    title: 'baconmaydie',
    thumbnail: 'https://media.rawg.io/media/games/bac/baconmaydie.jpg',
    url: `${BASE_URL}clbaconmaydie.html`,
    category: 'other'
  },
  {
    id: 'clbadbodyguards',
    title: 'badbodyguards',
    thumbnail: 'https://media.rawg.io/media/games/bad/badbodyguards.jpg',
    url: `${BASE_URL}clbadbodyguards.html`,
    category: 'other'
  },
  {
    id: 'clbadicecream',
    title: 'badicecream',
    thumbnail: 'https://media.rawg.io/media/games/bad/badicecream.jpg',
    url: `${BASE_URL}clbadicecream.html`,
    category: 'other'
  },
  {
    id: 'clbadmondaysimulator',
    title: 'badmondaysimulator',
    thumbnail: 'https://media.rawg.io/media/games/bad/badmondaysimulator.jpg',
    url: `${BASE_URL}clbadmondaysimulator.html`,
    category: 'other'
  },
  {
    id: 'clbadparenting',
    title: 'badparenting',
    thumbnail: 'https://media.rawg.io/media/games/bad/badparenting.jpg',
    url: `${BASE_URL}clbadparenting.html`,
    category: 'other'
  },
  {
    id: 'clbadpiggies',
    title: 'badpiggies',
    thumbnail: 'https://media.rawg.io/media/games/bad/badpiggies.jpg',
    url: `${BASE_URL}clbadpiggies.html`,
    category: 'other'
  },
  {
    id: 'clbadtimesim',
    title: 'badtimesim',
    thumbnail: 'https://media.rawg.io/media/games/bad/badtimesim.jpg',
    url: `${BASE_URL}clbadtimesim.html`,
    category: 'other'
  },
  {
    id: 'clbadtimesimulator',
    title: 'badtimesimulator',
    thumbnail: 'https://media.rawg.io/media/games/bad/badtimesimulator.jpg',
    url: `${BASE_URL}clbadtimesimulator.html`,
    category: 'other'
  },
  {
    id: 'clbaldidecomp',
    title: 'baldidecomp',
    thumbnail: 'https://media.rawg.io/media/games/bal/baldidecomp.jpg',
    url: `${BASE_URL}clbaldidecomp.html`,
    category: 'other'
  },
  {
    id: 'clbaldisbasics',
    title: 'baldisbasics',
    thumbnail: 'https://media.rawg.io/media/games/bal/baldisbasics.jpg',
    url: `${BASE_URL}clbaldisbasics.html`,
    category: 'other'
  },
  {
    id: 'clbaldisbasicsremaster',
    title: 'baldisbasicsremaster',
    thumbnail: 'https://media.rawg.io/media/games/bal/baldisbasicsremaster.jpg',
    url: `${BASE_URL}clbaldisbasicsremaster.html`,
    category: 'other'
  },
  {
    id: 'clbaldisfunnewschoolultimate',
    title: 'baldisfunnewschoolultimate',
    thumbnail: 'https://media.rawg.io/media/games/bal/baldisfunnewschoolultimate.jpg',
    url: `${BASE_URL}clbaldisfunnewschoolultimate.html`,
    category: 'other'
  },
  {
    id: 'clballblast',
    title: 'ballblast',
    thumbnail: 'https://media.rawg.io/media/games/bal/ballblast.jpg',
    url: `${BASE_URL}clballblast.html`,
    category: 'other'
  },
  {
    id: 'clballsandbricks',
    title: 'ballsandbricks',
    thumbnail: 'https://media.rawg.io/media/games/bal/ballsandbricks.jpg',
    url: `${BASE_URL}clballsandbricks.html`,
    category: 'other'
  },
  {
    id: 'clballsandbricksgood',
    title: 'ballsandbricksgood',
    thumbnail: 'https://media.rawg.io/media/games/bal/ballsandbricksgood.jpg',
    url: `${BASE_URL}clballsandbricksgood.html`,
    category: 'other'
  },
  {
    id: 'clbananasimulator',
    title: 'bananasimulator',
    thumbnail: 'https://media.rawg.io/media/games/ban/bananasimulator.jpg',
    url: `${BASE_URL}clbananasimulator.html`,
    category: 'other'
  },
  {
    id: 'clbanditgunslingers',
    title: 'banditgunslingers',
    thumbnail: 'https://media.rawg.io/media/games/ban/banditgunslingers.jpg',
    url: `${BASE_URL}clbanditgunslingers.html`,
    category: 'other'
  },
  {
    id: 'clbanjokazooie',
    title: 'banjokazooie',
    thumbnail: 'https://media.rawg.io/media/games/ban/banjokazooie.jpg',
    url: `${BASE_URL}clbanjokazooie.html`,
    category: 'other'
  },
  {
    id: 'clbanjotooie',
    title: 'banjotooie',
    thumbnail: 'https://media.rawg.io/media/games/ban/banjotooie.jpg',
    url: `${BASE_URL}clbanjotooie.html`,
    category: 'other'
  },
  {
    id: 'clbankbreakout2',
    title: 'bankbreakout2',
    thumbnail: 'https://media.rawg.io/media/games/ban/bankbreakout2.jpg',
    url: `${BASE_URL}clbankbreakout2.html`,
    category: 'other'
  },
  {
    id: 'clbankrobbery2',
    title: 'bankrobbery2',
    thumbnail: 'https://media.rawg.io/media/games/ban/bankrobbery2.jpg',
    url: `${BASE_URL}clbankrobbery2.html`,
    category: 'other'
  },
  {
    id: 'clbarryhasasecret',
    title: 'barryhasasecret',
    thumbnail: 'https://media.rawg.io/media/games/bar/barryhasasecret.jpg',
    url: `${BASE_URL}clbarryhasasecret.html`,
    category: 'other'
  },
  {
    id: 'clbas',
    title: 'bas',
    thumbnail: 'https://media.rawg.io/media/games/bas/bas.jpg',
    url: `${BASE_URL}clbas.html`,
    category: 'other'
  },
  {
    id: 'clbaseballbros',
    title: 'baseballbros',
    thumbnail: 'https://media.rawg.io/media/games/bas/baseballbros.jpg',
    url: `${BASE_URL}clbaseballbros.html`,
    category: 'other'
  },
  {
    id: 'clbasketballfrvr',
    title: 'basketballfrvr',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketballfrvr.jpg',
    url: `${BASE_URL}clbasketballfrvr.html`,
    category: 'other'
  },
  {
    id: 'clbasketballlegends',
    title: 'basketballlegends',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketballlegends.jpg',
    url: `${BASE_URL}clbasketballlegends.html`,
    category: 'other'
  },
  {
    id: 'clbasketballstars',
    title: 'basketballstars',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketballstars.jpg',
    url: `${BASE_URL}clbasketballstars.html`,
    category: 'other'
  },
  {
    id: 'clbasketbattle',
    title: 'basketbattle',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketbattle.jpg',
    url: `${BASE_URL}clbasketbattle.html`,
    category: 'other'
  },
  {
    id: 'clbasketbros',
    title: 'basketbros',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketbros.jpg',
    url: `${BASE_URL}clbasketbros.html`,
    category: 'other'
  },
  {
    id: 'clbasketrandom',
    title: 'basketrandom',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketrandom.jpg',
    url: `${BASE_URL}clbasketrandom.html`,
    category: 'other'
  },
  {
    id: 'clbasketrandomgood',
    title: 'basketrandomgood',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketrandomgood.jpg',
    url: `${BASE_URL}clbasketrandomgood.html`,
    category: 'other'
  },
  {
    id: 'clbasketslamdunk2',
    title: 'basketslamdunk2',
    thumbnail: 'https://media.rawg.io/media/games/bas/basketslamdunk2.jpg',
    url: `${BASE_URL}clbasketslamdunk2.html`,
    category: 'other'
  },
  {
    id: 'clbatterup',
    title: 'batterup',
    thumbnail: 'https://media.rawg.io/media/games/bat/batterup.jpg',
    url: `${BASE_URL}clbatterup.html`,
    category: 'other'
  },
  {
    id: 'clbattlekarts',
    title: 'battlekarts',
    thumbnail: 'https://media.rawg.io/media/games/bat/battlekarts.jpg',
    url: `${BASE_URL}clbattlekarts.html`,
    category: 'other'
  },
  {
    id: 'clbattles',
    title: 'battles',
    thumbnail: 'https://media.rawg.io/media/games/bat/battles.jpg',
    url: `${BASE_URL}clbattles.html`,
    category: 'other'
  },
  {
    id: 'clbattlesim',
    title: 'battlesim',
    thumbnail: 'https://media.rawg.io/media/games/bat/battlesim.jpg',
    url: `${BASE_URL}clbattlesim.html`,
    category: 'other'
  },
  {
    id: 'clbattlezone',
    title: 'battlezone',
    thumbnail: 'https://media.rawg.io/media/games/bat/battlezone.jpg',
    url: `${BASE_URL}clbattlezone.html`,
    category: 'other'
  },
  {
    id: 'clbazookaboy',
    title: 'bazookaboy',
    thumbnail: 'https://media.rawg.io/media/games/baz/bazookaboy.jpg',
    url: `${BASE_URL}clbazookaboy.html`,
    category: 'other'
  },
  {
    id: 'clbballlegend',
    title: 'bballlegend',
    thumbnail: 'https://media.rawg.io/media/games/bba/bballlegend.jpg',
    url: `${BASE_URL}clbballlegend.html`,
    category: 'other'
  },
  {
    id: 'clbeachboxingsim',
    title: 'beachboxingsim',
    thumbnail: 'https://media.rawg.io/media/games/bea/beachboxingsim.jpg',
    url: `${BASE_URL}clbeachboxingsim.html`,
    category: 'other'
  },
  {
    id: 'clbeamrider',
    title: 'beamrider',
    thumbnail: 'https://media.rawg.io/media/games/bea/beamrider.jpg',
    url: `${BASE_URL}clbeamrider.html`,
    category: 'other'
  },
  {
    id: 'clbearbarians',
    title: 'bearbarians',
    thumbnail: 'https://media.rawg.io/media/games/bea/bearbarians.jpg',
    url: `${BASE_URL}clbearbarians.html`,
    category: 'other'
  },
  {
    id: 'clbearsus',
    title: 'bearsus',
    thumbnail: 'https://media.rawg.io/media/games/bea/bearsus.jpg',
    url: `${BASE_URL}clbearsus.html`,
    category: 'other'
  },
  {
    id: 'clben10alienforce',
    title: 'ben10alienforce',
    thumbnail: 'https://media.rawg.io/media/games/ben/ben10alienforce.jpg',
    url: `${BASE_URL}clben10alienforce.html`,
    category: 'other'
  },
  {
    id: 'clben10omniverse',
    title: 'ben10omniverse',
    thumbnail: 'https://media.rawg.io/media/games/ben/ben10omniverse.jpg',
    url: `${BASE_URL}clben10omniverse.html`,
    category: 'other'
  },
  {
    id: 'clben10protector',
    title: 'ben10protector',
    thumbnail: 'https://media.rawg.io/media/games/ben/ben10protector.jpg',
    url: `${BASE_URL}clben10protector.html`,
    category: 'other'
  },
  {
    id: 'clben10racing',
    title: 'ben10racing',
    thumbnail: 'https://media.rawg.io/media/games/ben/ben10racing.jpg',
    url: `${BASE_URL}clben10racing.html`,
    category: 'other'
  },
  {
    id: 'clben10ultimatealien',
    title: 'ben10ultimatealien',
    thumbnail: 'https://media.rawg.io/media/games/ben/ben10ultimatealien.jpg',
    url: `${BASE_URL}clben10ultimatealien.html`,
    category: 'other'
  },
  {
    id: 'clbergentruck201x',
    title: 'bergentruck201x',
    thumbnail: 'https://media.rawg.io/media/games/ber/bergentruck201x.jpg',
    url: `${BASE_URL}clbergentruck201x.html`,
    category: 'other'
  },
  {
    id: 'clbfdia5b',
    title: 'bfdia5b',
    thumbnail: 'https://media.rawg.io/media/games/bfd/bfdia5b.jpg',
    url: `${BASE_URL}clbfdia5b.html`,
    category: 'other'
  },
  {
    id: 'clbigicetowertinysquare',
    title: 'bigicetowertinysquare',
    thumbnail: 'https://media.rawg.io/media/games/big/bigicetowertinysquare.jpg',
    url: `${BASE_URL}clbigicetowertinysquare.html`,
    category: 'other'
  },
  {
    id: 'clbigneontowertinysquare',
    title: 'bigneontowertinysquare',
    thumbnail: 'https://media.rawg.io/media/games/big/bigneontowertinysquare.jpg',
    url: `${BASE_URL}clbigneontowertinysquare.html`,
    category: 'other'
  },
  {
    id: 'clbigshotboxing2',
    title: 'bigshotboxing2',
    thumbnail: 'https://media.rawg.io/media/games/big/bigshotboxing2.jpg',
    url: `${BASE_URL}clbigshotboxing2.html`,
    category: 'other'
  },
  {
    id: 'clbigtowertinysquare',
    title: 'bigtowertinysquare',
    thumbnail: 'https://media.rawg.io/media/games/big/bigtowertinysquare.jpg',
    url: `${BASE_URL}clbigtowertinysquare.html`,
    category: 'other'
  },
  {
    id: 'clbigtowertinysquare2',
    title: 'bigtowertinysquare2',
    thumbnail: 'https://media.rawg.io/media/games/big/bigtowertinysquare2.jpg',
    url: `${BASE_URL}clbigtowertinysquare2.html`,
    category: 'other'
  },
  {
    id: 'clbigtowertinysquare2good',
    title: 'bigtowertinysquare2good',
    thumbnail: 'https://media.rawg.io/media/games/big/bigtowertinysquare2good.jpg',
    url: `${BASE_URL}clbigtowertinysquare2good.html`,
    category: 'other'
  },
  {
    id: 'clbindingofisaccsheeptime',
    title: 'bindingofisaccsheeptime',
    thumbnail: 'https://media.rawg.io/media/games/bin/bindingofisaccsheeptime.jpg',
    url: `${BASE_URL}clbindingofisaccsheeptime.html`,
    category: 'other'
  },
  {
    id: 'clbioevil4',
    title: 'bioevil4',
    thumbnail: 'https://media.rawg.io/media/games/bio/bioevil4.jpg',
    url: `${BASE_URL}clbioevil4.html`,
    category: 'other'
  },
  {
    id: 'clbitlife',
    title: 'bitlife',
    thumbnail: 'https://media.rawg.io/media/games/bit/bitlife.jpg',
    url: `${BASE_URL}clbitlife.html`,
    category: 'other'
  },
  {
    id: 'clbitlifeencrypted',
    title: 'bitlifeencrypted',
    thumbnail: 'https://media.rawg.io/media/games/bit/bitlifeencrypted.jpg',
    url: `${BASE_URL}clbitlifeencrypted.html`,
    category: 'other'
  },
  {
    id: 'clbitplanes',
    title: 'bitplanes',
    thumbnail: 'https://media.rawg.io/media/games/bit/bitplanes.jpg',
    url: `${BASE_URL}clbitplanes.html`,
    category: 'other'
  },
  {
    id: 'clblackjack',
    title: 'blackjack',
    thumbnail: 'https://media.rawg.io/media/games/bla/blackjack.jpg',
    url: `${BASE_URL}clblackjack.html`,
    category: 'other'
  },
  {
    id: 'clblackjackbattle',
    title: 'blackjackbattle',
    thumbnail: 'https://media.rawg.io/media/games/bla/blackjackbattle.jpg',
    url: `${BASE_URL}clblackjackbattle.html`,
    category: 'other'
  },
  {
    id: 'clblackjackhhhh',
    title: 'blackjackhhhh',
    thumbnail: 'https://media.rawg.io/media/games/bla/blackjackhhhh.jpg',
    url: `${BASE_URL}clblackjackhhhh.html`,
    category: 'other'
  },
  {
    id: 'clblacksmithlab',
    title: 'blacksmithlab',
    thumbnail: 'https://media.rawg.io/media/games/bla/blacksmithlab.jpg',
    url: `${BASE_URL}clblacksmithlab.html`,
    category: 'other'
  },
  {
    id: 'clblastronaut',
    title: 'blastronaut',
    thumbnail: 'https://media.rawg.io/media/games/bla/blastronaut.jpg',
    url: `${BASE_URL}clblastronaut.html`,
    category: 'other'
  },
  {
    id: 'clblazedrifter',
    title: 'blazedrifter',
    thumbnail: 'https://media.rawg.io/media/games/bla/blazedrifter.jpg',
    url: `${BASE_URL}clblazedrifter.html`,
    category: 'other'
  },
  {
    id: 'clbleachvsnaruto',
    title: 'bleachvsnaruto',
    thumbnail: 'https://media.rawg.io/media/games/ble/bleachvsnaruto.jpg',
    url: `${BASE_URL}clbleachvsnaruto.html`,
    category: 'other'
  },
  {
    id: 'clblightborne',
    title: 'blightborne',
    thumbnail: 'https://media.rawg.io/media/games/bli/blightborne.jpg',
    url: `${BASE_URL}clblightborne.html`,
    category: 'other'
  },
  {
    id: 'clblobsstory2',
    title: 'blobsstory2',
    thumbnail: 'https://media.rawg.io/media/games/blo/blobsstory2.jpg',
    url: `${BASE_URL}clblobsstory2.html`,
    category: 'other'
  },
  {
    id: 'clblockblast',
    title: 'blockblast',
    thumbnail: 'https://media.rawg.io/media/games/blo/blockblast.jpg',
    url: `${BASE_URL}clblockblast.html`,
    category: 'other'
  },
  {
    id: 'clblockcraftparkour',
    title: 'blockcraftparkour',
    thumbnail: 'https://media.rawg.io/media/games/blo/blockcraftparkour.jpg',
    url: `${BASE_URL}clblockcraftparkour.html`,
    category: 'other'
  },
  {
    id: 'clblockcraftshooter',
    title: 'blockcraftshooter',
    thumbnail: 'https://media.rawg.io/media/games/blo/blockcraftshooter.jpg',
    url: `${BASE_URL}clblockcraftshooter.html`,
    category: 'other'
  },
  {
    id: 'clblockpost',
    title: 'blockpost',
    thumbnail: 'https://media.rawg.io/media/games/blo/blockpost.jpg',
    url: `${BASE_URL}clblockpost.html`,
    category: 'other'
  },
  {
    id: 'clblockthepig',
    title: 'blockthepig',
    thumbnail: 'https://media.rawg.io/media/games/blo/blockthepig.jpg',
    url: `${BASE_URL}clblockthepig.html`,
    category: 'other'
  },
  {
    id: 'clblockydemolitionderby',
    title: 'blockydemolitionderby',
    thumbnail: 'https://media.rawg.io/media/games/blo/blockydemolitionderby.jpg',
    url: `${BASE_URL}clblockydemolitionderby.html`,
    category: 'other'
  },
  {
    id: 'clblockysnakes',
    title: 'blockysnakes',
    thumbnail: 'https://media.rawg.io/media/games/blo/blockysnakes.jpg',
    url: `${BASE_URL}clblockysnakes.html`,
    category: 'other'
  },
  {
    id: 'clbloodmoney',
    title: 'bloodmoney',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloodmoney.jpg',
    url: `${BASE_URL}clbloodmoney.html`,
    category: 'other'
  },
  {
    id: 'clbloodtournament',
    title: 'bloodtournament',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloodtournament.jpg',
    url: `${BASE_URL}clbloodtournament.html`,
    category: 'other'
  },
  {
    id: 'clbloons',
    title: 'bloons',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons.jpg',
    url: `${BASE_URL}clbloons.html`,
    category: 'other'
  },
  {
    id: 'clbloons2',
    title: 'bloons2',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons2.jpg',
    url: `${BASE_URL}clbloons2.html`,
    category: 'other'
  },
  {
    id: 'clbloonsTD1',
    title: 'bloons t d1',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons-t-d1.jpg',
    url: `${BASE_URL}clbloonsTD1.html`,
    category: 'other'
  },
  {
    id: 'clbloonsTD2',
    title: 'bloons t d2',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons-t-d2.jpg',
    url: `${BASE_URL}clbloonsTD2.html`,
    category: 'other'
  },
  {
    id: 'clbloonsTD3',
    title: 'bloons t d3',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons-t-d3.jpg',
    url: `${BASE_URL}clbloonsTD3.html`,
    category: 'other'
  },
  {
    id: 'clbloonsTD4',
    title: 'bloons t d4',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons-t-d4.jpg',
    url: `${BASE_URL}clbloonsTD4.html`,
    category: 'other'
  },
  {
    id: 'clbloonsTD5',
    title: 'bloons t d5',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons-t-d5.jpg',
    url: `${BASE_URL}clbloonsTD5.html`,
    category: 'other'
  },
  {
    id: 'clbloonsTD6scratch',
    title: 'bloons t d6scratch',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloons-t-d6scratch.jpg',
    url: `${BASE_URL}clbloonsTD6scratch.html`,
    category: 'other'
  },
  {
    id: 'clbloonspp1',
    title: 'bloonspp1',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloonspp1.jpg',
    url: `${BASE_URL}clbloonspp1.html`,
    category: 'other'
  },
  {
    id: 'clbloonspp2',
    title: 'bloonspp2',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloonspp2.jpg',
    url: `${BASE_URL}clbloonspp2.html`,
    category: 'other'
  },
  {
    id: 'clbloonspp3',
    title: 'bloonspp3',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloonspp3.jpg',
    url: `${BASE_URL}clbloonspp3.html`,
    category: 'other'
  },
  {
    id: 'clbloonspp4',
    title: 'bloonspp4',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloonspp4.jpg',
    url: `${BASE_URL}clbloonspp4.html`,
    category: 'other'
  },
  {
    id: 'clbloonspp5',
    title: 'bloonspp5',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloonspp5.jpg',
    url: `${BASE_URL}clbloonspp5.html`,
    category: 'other'
  },
  {
    id: 'clbloxorz',
    title: 'bloxorz',
    thumbnail: 'https://media.rawg.io/media/games/blo/bloxorz.jpg',
    url: `${BASE_URL}clbloxorz.html`,
    category: 'other'
  },
  {
    id: 'clblumgiracers',
    title: 'blumgiracers',
    thumbnail: 'https://media.rawg.io/media/games/blu/blumgiracers.jpg',
    url: `${BASE_URL}clblumgiracers.html`,
    category: 'other'
  },
  {
    id: 'clbntts',
    title: 'bntts',
    thumbnail: 'https://media.rawg.io/media/games/bnt/bntts.jpg',
    url: `${BASE_URL}clbntts.html`,
    category: 'other'
  },
  {
    id: 'clbobtherobber',
    title: 'bobtherobber',
    thumbnail: 'https://media.rawg.io/media/games/bob/bobtherobber.jpg',
    url: `${BASE_URL}clbobtherobber.html`,
    category: 'other'
  },
  {
    id: 'clbobtherobber2',
    title: 'bobtherobber2',
    thumbnail: 'https://media.rawg.io/media/games/bob/bobtherobber2.jpg',
    url: `${BASE_URL}clbobtherobber2.html`,
    category: 'other'
  },
  {
    id: 'clbobtherobber5',
    title: 'bobtherobber5',
    thumbnail: 'https://media.rawg.io/media/games/bob/bobtherobber5.jpg',
    url: `${BASE_URL}clbobtherobber5.html`,
    category: 'other'
  },
  {
    id: 'clbollybeat',
    title: 'bollybeat',
    thumbnail: 'https://media.rawg.io/media/games/bol/bollybeat.jpg',
    url: `${BASE_URL}clbollybeat.html`,
    category: 'other'
  },
  {
    id: 'clbomberman',
    title: 'bomberman',
    thumbnail: 'https://media.rawg.io/media/games/bom/bomberman.jpg',
    url: `${BASE_URL}clbomberman.html`,
    category: 'other'
  },
  {
    id: 'clbomberman2',
    title: 'bomberman2',
    thumbnail: 'https://media.rawg.io/media/games/bom/bomberman2.jpg',
    url: `${BASE_URL}clbomberman2.html`,
    category: 'other'
  },
  {
    id: 'clbombermanhero',
    title: 'bombermanhero',
    thumbnail: 'https://media.rawg.io/media/games/bom/bombermanhero.jpg',
    url: `${BASE_URL}clbombermanhero.html`,
    category: 'other'
  },
  {
    id: 'clboomslingers',
    title: 'boomslingers',
    thumbnail: 'https://media.rawg.io/media/games/boo/boomslingers.jpg',
    url: `${BASE_URL}clboomslingers.html`,
    category: 'other'
  },
  {
    id: 'clbottlecracks',
    title: 'bottlecracks',
    thumbnail: 'https://media.rawg.io/media/games/bot/bottlecracks.jpg',
    url: `${BASE_URL}clbottlecracks.html`,
    category: 'other'
  },
  {
    id: 'clbottleflip3d',
    title: 'bottleflip3d',
    thumbnail: 'https://media.rawg.io/media/games/bot/bottleflip3d.jpg',
    url: `${BASE_URL}clbottleflip3d.html`,
    category: 'other'
  },
  {
    id: 'clbounceback',
    title: 'bounceback',
    thumbnail: 'https://media.rawg.io/media/games/bou/bounceback.jpg',
    url: `${BASE_URL}clbounceback.html`,
    category: 'other'
  },
  {
    id: 'clbouncemasters',
    title: 'bouncemasters',
    thumbnail: 'https://media.rawg.io/media/games/bou/bouncemasters.jpg',
    url: `${BASE_URL}clbouncemasters.html`,
    category: 'other'
  },
  {
    id: 'clbouncymotors',
    title: 'bouncymotors',
    thumbnail: 'https://media.rawg.io/media/games/bou/bouncymotors.jpg',
    url: `${BASE_URL}clbouncymotors.html`,
    category: 'other'
  },
  {
    id: 'clbowlalt',
    title: 'bowlalt',
    thumbnail: 'https://media.rawg.io/media/games/bow/bowlalt.jpg',
    url: `${BASE_URL}clbowlalt.html`,
    category: 'other'
  },
  {
    id: 'clboxhead2playrooms',
    title: 'boxhead2playrooms',
    thumbnail: 'https://media.rawg.io/media/games/box/boxhead2playrooms.jpg',
    url: `${BASE_URL}clboxhead2playrooms.html`,
    category: 'other'
  },
  {
    id: 'clboxheadnightmare',
    title: 'boxheadnightmare',
    thumbnail: 'https://media.rawg.io/media/games/box/boxheadnightmare.jpg',
    url: `${BASE_URL}clboxheadnightmare.html`,
    category: 'other'
  },
  {
    id: 'clboxinglive-2',
    title: 'boxinglive-2',
    thumbnail: 'https://media.rawg.io/media/games/box/boxinglive-2.jpg',
    url: `${BASE_URL}clboxinglive-2.html`,
    category: 'other'
  },
  {
    id: 'clboxinglive2',
    title: 'boxinglive2',
    thumbnail: 'https://media.rawg.io/media/games/box/boxinglive2.jpg',
    url: `${BASE_URL}clboxinglive2.html`,
    category: 'other'
  },
  {
    id: 'clboxingrandom',
    title: 'boxingrandom',
    thumbnail: 'https://media.rawg.io/media/games/box/boxingrandom.jpg',
    url: `${BASE_URL}clboxingrandom.html`,
    category: 'other'
  },
  {
    id: 'clbrainrot',
    title: 'brainrot',
    thumbnail: 'https://media.rawg.io/media/games/bra/brainrot.jpg',
    url: `${BASE_URL}clbrainrot.html`,
    category: 'other'
  },
  {
    id: 'clbridgerace',
    title: 'bridgerace',
    thumbnail: 'https://media.rawg.io/media/games/bri/bridgerace.jpg',
    url: `${BASE_URL}clbridgerace.html`,
    category: 'other'
  },
  {
    id: 'clbtd5',
    title: 'btd5',
    thumbnail: 'https://media.rawg.io/media/games/btd/btd5.jpg',
    url: `${BASE_URL}clbtd5.html`,
    category: 'other'
  },
  {
    id: 'clbtts',
    title: 'btts',
    thumbnail: 'https://media.rawg.io/media/games/btt/btts.jpg',
    url: `${BASE_URL}clbtts.html`,
    category: 'other'
  },
  {
    id: 'clbtts2',
    title: 'btts2',
    thumbnail: 'https://media.rawg.io/media/games/btt/btts2.jpg',
    url: `${BASE_URL}clbtts2.html`,
    category: 'other'
  },
  {
    id: 'clbubbleshooter',
    title: 'bubbleshooter',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubbleshooter.jpg',
    url: `${BASE_URL}clbubbleshooter.html`,
    category: 'other'
  },
  {
    id: 'clbubbleshooterpirate',
    title: 'bubbleshooterpirate',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubbleshooterpirate.jpg',
    url: `${BASE_URL}clbubbleshooterpirate.html`,
    category: 'other'
  },
  {
    id: 'clbubbletanks',
    title: 'bubbletanks',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubbletanks.jpg',
    url: `${BASE_URL}clbubbletanks.html`,
    category: 'other'
  },
  {
    id: 'clbubbletanks2',
    title: 'bubbletanks2',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubbletanks2.jpg',
    url: `${BASE_URL}clbubbletanks2.html`,
    category: 'other'
  },
  {
    id: 'clbubbletanks3',
    title: 'bubbletanks3',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubbletanks3.jpg',
    url: `${BASE_URL}clbubbletanks3.html`,
    category: 'other'
  },
  {
    id: 'clbubbletanksarenas',
    title: 'bubbletanksarenas',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubbletanksarenas.jpg',
    url: `${BASE_URL}clbubbletanksarenas.html`,
    category: 'other'
  },
  {
    id: 'clbubbletankstd',
    title: 'bubbletankstd',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubbletankstd.jpg',
    url: `${BASE_URL}clbubbletankstd.html`,
    category: 'other'
  },
  {
    id: 'clbubsy',
    title: 'bubsy',
    thumbnail: 'https://media.rawg.io/media/games/bub/bubsy.jpg',
    url: `${BASE_URL}clbubsy.html`,
    category: 'other'
  },
  {
    id: 'clbuckshotroulette',
    title: 'buckshotroulette',
    thumbnail: 'https://media.rawg.io/media/games/buc/buckshotroulette.jpg',
    url: `${BASE_URL}clbuckshotroulette.html`,
    category: 'other'
  },
  {
    id: 'clbuildnowgg',
    title: 'buildnowgg',
    thumbnail: 'https://media.rawg.io/media/games/bui/buildnowgg.jpg',
    url: `${BASE_URL}clbuildnowgg.html`,
    category: 'other'
  },
  {
    id: 'clbunnyland',
    title: 'bunnyland',
    thumbnail: 'https://media.rawg.io/media/games/bun/bunnyland.jpg',
    url: `${BASE_URL}clbunnyland.html`,
    category: 'other'
  },
  {
    id: 'clburgerandfrights',
    title: 'burgerandfrights',
    thumbnail: 'https://media.rawg.io/media/games/bur/burgerandfrights.jpg',
    url: `${BASE_URL}clburgerandfrights.html`,
    category: 'other'
  },
  {
    id: 'clburritobison',
    title: 'burritobison',
    thumbnail: 'https://media.rawg.io/media/games/bur/burritobison.jpg',
    url: `${BASE_URL}clburritobison.html`,
    category: 'other'
  },
  {
    id: 'clburritobison2',
    title: 'burritobison2',
    thumbnail: 'https://media.rawg.io/media/games/bur/burritobison2.jpg',
    url: `${BASE_URL}clburritobison2.html`,
    category: 'other'
  },
  {
    id: 'clburritobisonlaunchalibre',
    title: 'burritobisonlaunchalibre',
    thumbnail: 'https://media.rawg.io/media/games/bur/burritobisonlaunchalibre.jpg',
    url: `${BASE_URL}clburritobisonlaunchalibre.html`,
    category: 'other'
  },
  {
    id: 'clburritobisonrevenge',
    title: 'burritobisonrevenge',
    thumbnail: 'https://media.rawg.io/media/games/bur/burritobisonrevenge.jpg',
    url: `${BASE_URL}clburritobisonrevenge.html`,
    category: 'other'
  },
  {
    id: 'clbushidoblade',
    title: 'bushidoblade',
    thumbnail: 'https://media.rawg.io/media/games/bus/bushidoblade.jpg',
    url: `${BASE_URL}clbushidoblade.html`,
    category: 'other'
  },
  {
    id: 'clcactusmccoy',
    title: 'cactusmccoy',
    thumbnail: 'https://media.rawg.io/media/games/cac/cactusmccoy.jpg',
    url: `${BASE_URL}clcactusmccoy.html`,
    category: 'other'
  },
  {
    id: 'clcactusmccoy2',
    title: 'cactusmccoy2',
    thumbnail: 'https://media.rawg.io/media/games/cac/cactusmccoy2.jpg',
    url: `${BASE_URL}clcactusmccoy2.html`,
    category: 'other'
  },
  {
    id: 'clcannonballs3d',
    title: 'cannonballs3d',
    thumbnail: 'https://media.rawg.io/media/games/can/cannonballs3d.jpg',
    url: `${BASE_URL}clcannonballs3d.html`,
    category: 'other'
  },
  {
    id: 'clcannonfodder',
    title: 'cannonfodder',
    thumbnail: 'https://media.rawg.io/media/games/can/cannonfodder.jpg',
    url: `${BASE_URL}clcannonfodder.html`,
    category: 'other'
  },
  {
    id: 'clcapybaraclicker',
    title: 'capybaraclicker',
    thumbnail: 'https://media.rawg.io/media/games/cap/capybaraclicker.jpg',
    url: `${BASE_URL}clcapybaraclicker.html`,
    category: 'other'
  },
  {
    id: 'clcarcrash3',
    title: 'carcrash3',
    thumbnail: 'https://media.rawg.io/media/games/car/carcrash3.jpg',
    url: `${BASE_URL}clcarcrash3.html`,
    category: 'other'
  },
  {
    id: 'clcardrawing',
    title: 'cardrawing',
    thumbnail: 'https://media.rawg.io/media/games/car/cardrawing.jpg',
    url: `${BASE_URL}clcardrawing.html`,
    category: 'other'
  },
  {
    id: 'clcareatscar2deluxe',
    title: 'careatscar2deluxe',
    thumbnail: 'https://media.rawg.io/media/games/car/careatscar2deluxe.jpg',
    url: `${BASE_URL}clcareatscar2deluxe.html`,
    category: 'other'
  },
  {
    id: 'clcarkingarena',
    title: 'carkingarena',
    thumbnail: 'https://media.rawg.io/media/games/car/carkingarena.jpg',
    url: `${BASE_URL}clcarkingarena.html`,
    category: 'other'
  },
  {
    id: 'clcarmods',
    title: 'carmods',
    thumbnail: 'https://media.rawg.io/media/games/car/carmods.jpg',
    url: `${BASE_URL}clcarmods.html`,
    category: 'other'
  },
  {
    id: 'clcarstuntsdriving',
    title: 'carstuntsdriving',
    thumbnail: 'https://media.rawg.io/media/games/car/carstuntsdriving.jpg',
    url: `${BASE_URL}clcarstuntsdriving.html`,
    category: 'other'
  },
  {
    id: 'clcastlebloodline',
    title: 'castlebloodline',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlebloodline.jpg',
    url: `${BASE_URL}clcastlebloodline.html`,
    category: 'other'
  },
  {
    id: 'clcastlecircleofmoon',
    title: 'castlecircleofmoon',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlecircleofmoon.jpg',
    url: `${BASE_URL}clcastlecircleofmoon.html`,
    category: 'other'
  },
  {
    id: 'clcastlevania',
    title: 'castlevania',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlevania.jpg',
    url: `${BASE_URL}clcastlevania.html`,
    category: 'other'
  },
  {
    id: 'clcastlevania2',
    title: 'castlevania2',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlevania2.jpg',
    url: `${BASE_URL}clcastlevania2.html`,
    category: 'other'
  },
  {
    id: 'clcastlevania3',
    title: 'castlevania3',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlevania3.jpg',
    url: `${BASE_URL}clcastlevania3.html`,
    category: 'other'
  },
  {
    id: 'clcastlevaniaariaofsorrow',
    title: 'castlevaniaariaofsorrow',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlevaniaariaofsorrow.jpg',
    url: `${BASE_URL}clcastlevaniaariaofsorrow.html`,
    category: 'other'
  },
  {
    id: 'clcastlevaniadawnofsorrow',
    title: 'castlevaniadawnofsorrow',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlevaniadawnofsorrow.jpg',
    url: `${BASE_URL}clcastlevaniadawnofsorrow.html`,
    category: 'other'
  },
  {
    id: 'clcastlevanianes',
    title: 'castlevanianes',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlevanianes.jpg',
    url: `${BASE_URL}clcastlevanianes.html`,
    category: 'other'
  },
  {
    id: 'clcastlewarsmodern',
    title: 'castlewarsmodern',
    thumbnail: 'https://media.rawg.io/media/games/cas/castlewarsmodern.jpg',
    url: `${BASE_URL}clcastlewarsmodern.html`,
    category: 'other'
  },
  {
    id: 'clcatmario',
    title: 'catmario',
    thumbnail: 'https://media.rawg.io/media/games/cat/catmario.jpg',
    url: `${BASE_URL}clcatmario.html`,
    category: 'other'
  },
  {
    id: 'clcatmariogood',
    title: 'catmariogood',
    thumbnail: 'https://media.rawg.io/media/games/cat/catmariogood.jpg',
    url: `${BASE_URL}clcatmariogood.html`,
    category: 'other'
  },
  {
    id: 'clcatslovecake2',
    title: 'catslovecake2',
    thumbnail: 'https://media.rawg.io/media/games/cat/catslovecake2.jpg',
    url: `${BASE_URL}clcatslovecake2.html`,
    category: 'other'
  },
  {
    id: 'clcavestory',
    title: 'cavestory',
    thumbnail: 'https://media.rawg.io/media/games/cav/cavestory.jpg',
    url: `${BASE_URL}clcavestory.html`,
    category: 'other'
  },
  {
    id: 'clceleste',
    title: 'celeste',
    thumbnail: 'https://media.rawg.io/media/games/cel/celeste.jpg',
    url: `${BASE_URL}clceleste.html`,
    category: 'other'
  },
  {
    id: 'clceleste2',
    title: 'celeste2',
    thumbnail: 'https://media.rawg.io/media/games/cel/celeste2.jpg',
    url: `${BASE_URL}clceleste2.html`,
    category: 'other'
  },
  {
    id: 'clcellardoor',
    title: 'cellardoor',
    thumbnail: 'https://media.rawg.io/media/games/cel/cellardoor.jpg',
    url: `${BASE_URL}clcellardoor.html`,
    category: 'other'
  },
  {
    id: 'clchaosfaction2',
    title: 'chaosfaction2',
    thumbnail: 'https://media.rawg.io/media/games/cha/chaosfaction2.jpg',
    url: `${BASE_URL}clchaosfaction2.html`,
    category: 'other'
  },
  {
    id: 'clcheckers',
    title: 'checkers',
    thumbnail: 'https://media.rawg.io/media/games/che/checkers.jpg',
    url: `${BASE_URL}clcheckers.html`,
    category: 'other'
  },
  {
    id: 'clcheesechompers3d',
    title: 'cheesechompers3d',
    thumbnail: 'https://media.rawg.io/media/games/che/cheesechompers3d.jpg',
    url: `${BASE_URL}clcheesechompers3d.html`,
    category: 'other'
  },
  {
    id: 'clcheshireinachatroom',
    title: 'cheshireinachatroom',
    thumbnail: 'https://media.rawg.io/media/games/che/cheshireinachatroom.jpg',
    url: `${BASE_URL}clcheshireinachatroom.html`,
    category: 'other'
  },
  {
    id: 'clchess',
    title: 'chess',
    thumbnail: 'https://media.rawg.io/media/games/che/chess.jpg',
    url: `${BASE_URL}clchess.html`,
    category: 'other'
  },
  {
    id: 'clchessclassic',
    title: 'chessclassic',
    thumbnail: 'https://media.rawg.io/media/games/che/chessclassic.jpg',
    url: `${BASE_URL}clchessclassic.html`,
    category: 'other'
  },
  {
    id: 'clchibiknight',
    title: 'chibiknight',
    thumbnail: 'https://media.rawg.io/media/games/chi/chibiknight.jpg',
    url: `${BASE_URL}clchibiknight.html`,
    category: 'other'
  },
  {
    id: 'clchickenscream',
    title: 'chickenscream',
    thumbnail: 'https://media.rawg.io/media/games/chi/chickenscream.jpg',
    url: `${BASE_URL}clchickenscream.html`,
    category: 'other'
  },
  {
    id: 'clchickenwar',
    title: 'chickenwar',
    thumbnail: 'https://media.rawg.io/media/games/chi/chickenwar.jpg',
    url: `${BASE_URL}clchickenwar.html`,
    category: 'other'
  },
  {
    id: 'clchipschallenge',
    title: 'chipschallenge',
    thumbnail: 'https://media.rawg.io/media/games/chi/chipschallenge.jpg',
    url: `${BASE_URL}clchipschallenge.html`,
    category: 'other'
  },
  {
    id: 'clchoppyorc',
    title: 'choppyorc',
    thumbnail: 'https://media.rawg.io/media/games/cho/choppyorc.jpg',
    url: `${BASE_URL}clchoppyorc.html`,
    category: 'other'
  },
  {
    id: 'clchronotrigger',
    title: 'chronotrigger',
    thumbnail: 'https://media.rawg.io/media/games/chr/chronotrigger.jpg',
    url: `${BASE_URL}clchronotrigger.html`,
    category: 'other'
  },
  {
    id: 'clchuzzle',
    title: 'chuzzle',
    thumbnail: 'https://media.rawg.io/media/games/chu/chuzzle.jpg',
    url: `${BASE_URL}clchuzzle.html`,
    category: 'other'
  },
  {
    id: 'clciviballs',
    title: 'civiballs',
    thumbnail: 'https://media.rawg.io/media/games/civ/civiballs.jpg',
    url: `${BASE_URL}clciviballs.html`,
    category: 'other'
  },
  {
    id: 'clciviballs2',
    title: 'civiballs2',
    thumbnail: 'https://media.rawg.io/media/games/civ/civiballs2.jpg',
    url: `${BASE_URL}clciviballs2.html`,
    category: 'other'
  },
  {
    id: 'clclashofvikings',
    title: 'clashofvikings',
    thumbnail: 'https://media.rawg.io/media/games/cla/clashofvikings.jpg',
    url: `${BASE_URL}clclashofvikings.html`,
    category: 'other'
  },
  {
    id: 'clclassof09',
    title: 'classof09',
    thumbnail: 'https://media.rawg.io/media/games/cla/classof09.jpg',
    url: `${BASE_URL}clclassof09.html`,
    category: 'other'
  },
  {
    id: 'clcleanupio',
    title: 'cleanupio',
    thumbnail: 'https://media.rawg.io/media/games/cle/cleanupio.jpg',
    url: `${BASE_URL}clcleanupio.html`,
    category: 'other'
  },
  {
    id: 'clclearvision',
    title: 'clearvision',
    thumbnail: 'https://media.rawg.io/media/games/cle/clearvision.jpg',
    url: `${BASE_URL}clclearvision.html`,
    category: 'other'
  },
  {
    id: 'clclearvision2',
    title: 'clearvision2',
    thumbnail: 'https://media.rawg.io/media/games/cle/clearvision2.jpg',
    url: `${BASE_URL}clclearvision2.html`,
    category: 'other'
  },
  {
    id: 'clclearvision3',
    title: 'clearvision3',
    thumbnail: 'https://media.rawg.io/media/games/cle/clearvision3.jpg',
    url: `${BASE_URL}clclearvision3.html`,
    category: 'other'
  },
  {
    id: 'clclearvision4',
    title: 'clearvision4',
    thumbnail: 'https://media.rawg.io/media/games/cle/clearvision4.jpg',
    url: `${BASE_URL}clclearvision4.html`,
    category: 'other'
  },
  {
    id: 'clclearvision5',
    title: 'clearvision5',
    thumbnail: 'https://media.rawg.io/media/games/cle/clearvision5.jpg',
    url: `${BASE_URL}clclearvision5.html`,
    category: 'other'
  },
  {
    id: 'clclmadnessambulation',
    title: 'clmadnessambulation',
    thumbnail: 'https://media.rawg.io/media/games/clm/clmadnessambulation.jpg',
    url: `${BASE_URL}clclmadnessambulation.html`,
    category: 'other'
  },
  {
    id: 'clclubbytheseal',
    title: 'clubbytheseal',
    thumbnail: 'https://media.rawg.io/media/games/clu/clubbytheseal.jpg',
    url: `${BASE_URL}clclubbytheseal.html`,
    category: 'other'
  },
  {
    id: 'clclusterrush',
    title: 'clusterrush',
    thumbnail: 'https://media.rawg.io/media/games/clu/clusterrush.jpg',
    url: `${BASE_URL}clclusterrush.html`,
    category: 'other'
  },
  {
    id: 'clcoalllcdemo',
    title: 'coalllcdemo',
    thumbnail: 'https://media.rawg.io/media/games/coa/coalllcdemo.jpg',
    url: `${BASE_URL}clcoalllcdemo.html`,
    category: 'other'
  },
  {
    id: 'clcod4',
    title: 'cod4',
    thumbnail: 'https://media.rawg.io/media/games/cod/cod4.jpg',
    url: `${BASE_URL}clcod4.html`,
    category: 'other'
  },
  {
    id: 'clcodblackopp',
    title: 'codblackopp',
    thumbnail: 'https://media.rawg.io/media/games/cod/codblackopp.jpg',
    url: `${BASE_URL}clcodblackopp.html`,
    category: 'other'
  },
  {
    id: 'clcoddefiance',
    title: 'coddefiance',
    thumbnail: 'https://media.rawg.io/media/games/cod/coddefiance.jpg',
    url: `${BASE_URL}clcoddefiance.html`,
    category: 'other'
  },
  {
    id: 'clcodenamegordon',
    title: 'codenamegordon',
    thumbnail: 'https://media.rawg.io/media/games/cod/codenamegordon.jpg',
    url: `${BASE_URL}clcodenamegordon.html`,
    category: 'other'
  },
  {
    id: 'clcodmodernwarfare',
    title: 'codmodernwarfare',
    thumbnail: 'https://media.rawg.io/media/games/cod/codmodernwarfare.jpg',
    url: `${BASE_URL}clcodmodernwarfare.html`,
    category: 'other'
  },
  {
    id: 'clcodworldatwar',
    title: 'codworldatwar',
    thumbnail: 'https://media.rawg.io/media/games/cod/codworldatwar.jpg',
    url: `${BASE_URL}clcodworldatwar.html`,
    category: 'other'
  },
  {
    id: 'clcoffeemaker',
    title: 'coffeemaker',
    thumbnail: 'https://media.rawg.io/media/games/cof/coffeemaker.jpg',
    url: `${BASE_URL}clcoffeemaker.html`,
    category: 'other'
  },
  {
    id: 'clcolorburst3d',
    title: 'colorburst3d',
    thumbnail: 'https://media.rawg.io/media/games/col/colorburst3d.jpg',
    url: `${BASE_URL}clcolorburst3d.html`,
    category: 'other'
  },
  {
    id: 'clcolormatch',
    title: 'colormatch',
    thumbnail: 'https://media.rawg.io/media/games/col/colormatch.jpg',
    url: `${BASE_URL}clcolormatch.html`,
    category: 'other'
  },
  {
    id: 'clcolorwatersort3d',
    title: 'colorwatersort3d',
    thumbnail: 'https://media.rawg.io/media/games/col/colorwatersort3d.jpg',
    url: `${BASE_URL}clcolorwatersort3d.html`,
    category: 'other'
  },
  {
    id: 'clcombopool',
    title: 'combopool',
    thumbnail: 'https://media.rawg.io/media/games/com/combopool.jpg',
    url: `${BASE_URL}clcombopool.html`,
    category: 'other'
  },
  {
    id: 'clcommanderkeen4',
    title: 'commanderkeen4',
    thumbnail: 'https://media.rawg.io/media/games/com/commanderkeen4.jpg',
    url: `${BASE_URL}clcommanderkeen4.html`,
    category: 'other'
  },
  {
    id: 'clcommanderkeen5',
    title: 'commanderkeen5',
    thumbnail: 'https://media.rawg.io/media/games/com/commanderkeen5.jpg',
    url: `${BASE_URL}clcommanderkeen5.html`,
    category: 'other'
  },
  {
    id: 'clcommanderkeen6',
    title: 'commanderkeen6',
    thumbnail: 'https://media.rawg.io/media/games/com/commanderkeen6.jpg',
    url: `${BASE_URL}clcommanderkeen6.html`,
    category: 'other'
  },
  {
    id: 'clconkersbadfurday',
    title: 'conkersbadfurday',
    thumbnail: 'https://media.rawg.io/media/games/con/conkersbadfurday.jpg',
    url: `${BASE_URL}clconkersbadfurday.html`,
    category: 'other'
  },
  {
    id: 'clcontra',
    title: 'contra',
    thumbnail: 'https://media.rawg.io/media/games/con/contra.jpg',
    url: `${BASE_URL}clcontra.html`,
    category: 'other'
  },
  {
    id: 'clcontra3',
    title: 'contra3',
    thumbnail: 'https://media.rawg.io/media/games/con/contra3.jpg',
    url: `${BASE_URL}clcontra3.html`,
    category: 'other'
  },
  {
    id: 'clcookie-clicker',
    title: 'cookie-clicker',
    thumbnail: 'https://media.rawg.io/media/games/coo/cookie-clicker.jpg',
    url: `${BASE_URL}clcookie-clicker.html`,
    category: 'other'
  },
  {
    id: 'clcookieclicker',
    title: 'cookieclicker',
    thumbnail: 'https://media.rawg.io/media/games/coo/cookieclicker.jpg',
    url: `${BASE_URL}clcookieclicker.html`,
    category: 'other'
  },
  {
    id: 'clcookieclickercool',
    title: 'cookieclickercool',
    thumbnail: 'https://media.rawg.io/media/games/coo/cookieclickercool.jpg',
    url: `${BASE_URL}clcookieclickercool.html`,
    category: 'other'
  },
  {
    id: 'clcookieclickergood',
    title: 'cookieclickergood',
    thumbnail: 'https://media.rawg.io/media/games/coo/cookieclickergood.jpg',
    url: `${BASE_URL}clcookieclickergood.html`,
    category: 'other'
  },
  {
    id: 'clcookingmama',
    title: 'cookingmama',
    thumbnail: 'https://media.rawg.io/media/games/coo/cookingmama.jpg',
    url: `${BASE_URL}clcookingmama.html`,
    category: 'other'
  },
  {
    id: 'clcookingmama2',
    title: 'cookingmama2',
    thumbnail: 'https://media.rawg.io/media/games/coo/cookingmama2.jpg',
    url: `${BASE_URL}clcookingmama2.html`,
    category: 'other'
  },
  {
    id: 'clcookingmama3',
    title: 'cookingmama3',
    thumbnail: 'https://media.rawg.io/media/games/coo/cookingmama3.jpg',
    url: `${BASE_URL}clcookingmama3.html`,
    category: 'other'
  },
  {
    id: 'clcoreball',
    title: 'coreball',
    thumbnail: 'https://media.rawg.io/media/games/cor/coreball.jpg',
    url: `${BASE_URL}clcoreball.html`,
    category: 'other'
  },
  {
    id: 'clcotlk',
    title: 'cotlk',
    thumbnail: 'https://media.rawg.io/media/games/cot/cotlk.jpg',
    url: `${BASE_URL}clcotlk.html`,
    category: 'other'
  },
  {
    id: 'clcountmastersstickmangames',
    title: 'countmastersstickmangames',
    thumbnail: 'https://media.rawg.io/media/games/cou/countmastersstickmangames.jpg',
    url: `${BASE_URL}clcountmastersstickmangames.html`,
    category: 'other'
  },
  {
    id: 'clcoverorange',
    title: 'coverorange',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorange.jpg',
    url: `${BASE_URL}clcoverorange.html`,
    category: 'other'
  },
  {
    id: 'clcoverorange2',
    title: 'coverorange2',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorange2.jpg',
    url: `${BASE_URL}clcoverorange2.html`,
    category: 'other'
  },
  {
    id: 'clcoverorangejourneygangsters',
    title: 'coverorangejourneygangsters',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorangejourneygangsters.jpg',
    url: `${BASE_URL}clcoverorangejourneygangsters.html`,
    category: 'other'
  },
  {
    id: 'clcoverorangejourneyknights',
    title: 'coverorangejourneyknights',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorangejourneyknights.jpg',
    url: `${BASE_URL}clcoverorangejourneyknights.html`,
    category: 'other'
  },
  {
    id: 'clcoverorangejourneypirates',
    title: 'coverorangejourneypirates',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorangejourneypirates.jpg',
    url: `${BASE_URL}clcoverorangejourneypirates.html`,
    category: 'other'
  },
  {
    id: 'clcoverorangejourneyspace',
    title: 'coverorangejourneyspace',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorangejourneyspace.jpg',
    url: `${BASE_URL}clcoverorangejourneyspace.html`,
    category: 'other'
  },
  {
    id: 'clcoverorangeplayerspack',
    title: 'coverorangeplayerspack',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorangeplayerspack.jpg',
    url: `${BASE_URL}clcoverorangeplayerspack.html`,
    category: 'other'
  },
  {
    id: 'clcoverorangeplayerspack2',
    title: 'coverorangeplayerspack2',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorangeplayerspack2.jpg',
    url: `${BASE_URL}clcoverorangeplayerspack2.html`,
    category: 'other'
  },
  {
    id: 'clcoverorangeplayerspack3',
    title: 'coverorangeplayerspack3',
    thumbnail: 'https://media.rawg.io/media/games/cov/coverorangeplayerspack3.jpg',
    url: `${BASE_URL}clcoverorangeplayerspack3.html`,
    category: 'other'
  },
  {
    id: 'clcrankit!',
    title: 'crankit!',
    thumbnail: 'https://media.rawg.io/media/games/cra/crankit.jpg',
    url: `${BASE_URL}clcrankit!.html`,
    category: 'other'
  },
  {
    id: 'clcrashbandicoot',
    title: 'crashbandicoot',
    thumbnail: 'https://media.rawg.io/media/games/cra/crashbandicoot.jpg',
    url: `${BASE_URL}clcrashbandicoot.html`,
    category: 'other'
  },
  {
    id: 'clcrashbandicoot2',
    title: 'crashbandicoot2',
    thumbnail: 'https://media.rawg.io/media/games/cra/crashbandicoot2.jpg',
    url: `${BASE_URL}clcrashbandicoot2.html`,
    category: 'other'
  },
  {
    id: 'clcrashteamracing',
    title: 'crashteamracing',
    thumbnail: 'https://media.rawg.io/media/games/cra/crashteamracing.jpg',
    url: `${BASE_URL}clcrashteamracing.html`,
    category: 'other'
  },
  {
    id: 'clcrazycars',
    title: 'crazycars',
    thumbnail: 'https://media.rawg.io/media/games/cra/crazycars.jpg',
    url: `${BASE_URL}clcrazycars.html`,
    category: 'other'
  },
  {
    id: 'clcrazycattle3d',
    title: 'crazycattle3d',
    thumbnail: 'https://media.rawg.io/media/games/cra/crazycattle3d.jpg',
    url: `${BASE_URL}clcrazycattle3d.html`,
    category: 'other'
  },
  {
    id: 'clcrazychicken3D',
    title: 'crazychicken3 d',
    thumbnail: 'https://media.rawg.io/media/games/cra/crazychicken3-d.jpg',
    url: `${BASE_URL}clcrazychicken3D.html`,
    category: 'other'
  },
  {
    id: 'clcrazyfrogracer',
    title: 'crazyfrogracer',
    thumbnail: 'https://media.rawg.io/media/games/cra/crazyfrogracer.jpg',
    url: `${BASE_URL}clcrazyfrogracer.html`,
    category: 'other'
  },
  {
    id: 'clcrazymotorcycle',
    title: 'crazymotorcycle',
    thumbnail: 'https://media.rawg.io/media/games/cra/crazymotorcycle.jpg',
    url: `${BASE_URL}clcrazymotorcycle.html`,
    category: 'other'
  },
  {
    id: 'clcreeperworld2',
    title: 'creeperworld2',
    thumbnail: 'https://media.rawg.io/media/games/cre/creeperworld2.jpg',
    url: `${BASE_URL}clcreeperworld2.html`,
    category: 'other'
  },
  {
    id: 'clcrossyroad',
    title: 'crossyroad',
    thumbnail: 'https://media.rawg.io/media/games/cro/crossyroad.jpg',
    url: `${BASE_URL}clcrossyroad.html`,
    category: 'other'
  },
  {
    id: 'clcrunchball3000',
    title: 'crunchball3000',
    thumbnail: 'https://media.rawg.io/media/games/cru/crunchball3000.jpg',
    url: `${BASE_URL}clcrunchball3000.html`,
    category: 'other'
  },
  {
    id: 'clcs1.6',
    title: 'cs1.6',
    thumbnail: 'https://media.rawg.io/media/games/cs1/cs1.6.jpg',
    url: `${BASE_URL}clcs1.6.html`,
    category: 'other'
  },
  {
    id: 'clcsds',
    title: 'csds',
    thumbnail: 'https://media.rawg.io/media/games/csd/csds.jpg',
    url: `${BASE_URL}clcsds.html`,
    category: 'other'
  },
  {
    id: 'clcsgoclicker',
    title: 'csgoclicker',
    thumbnail: 'https://media.rawg.io/media/games/csg/csgoclicker.jpg',
    url: `${BASE_URL}clcsgoclicker.html`,
    category: 'other'
  },
  {
    id: 'clctgpnitro',
    title: 'ctgpnitro',
    thumbnail: 'https://media.rawg.io/media/games/ctg/ctgpnitro.jpg',
    url: `${BASE_URL}clctgpnitro.html`,
    category: 'other'
  },
  {
    id: 'clcurveball',
    title: 'curveball',
    thumbnail: 'https://media.rawg.io/media/games/cur/curveball.jpg',
    url: `${BASE_URL}clcurveball.html`,
    category: 'other'
  },
  {
    id: 'clcuttherope',
    title: 'cuttherope',
    thumbnail: 'https://media.rawg.io/media/games/cut/cuttherope.jpg',
    url: `${BASE_URL}clcuttherope.html`,
    category: 'other'
  },
  {
    id: 'clcuttheropetimetravel',
    title: 'cuttheropetimetravel',
    thumbnail: 'https://media.rawg.io/media/games/cut/cuttheropetimetravel.jpg',
    url: `${BASE_URL}clcuttheropetimetravel.html`,
    category: 'other'
  },
  {
    id: 'clcyberbungracing',
    title: 'cyberbungracing',
    thumbnail: 'https://media.rawg.io/media/games/cyb/cyberbungracing.jpg',
    url: `${BASE_URL}clcyberbungracing.html`,
    category: 'other'
  },
  {
    id: 'clcybersensation',
    title: 'cybersensation',
    thumbnail: 'https://media.rawg.io/media/games/cyb/cybersensation.jpg',
    url: `${BASE_URL}clcybersensation.html`,
    category: 'other'
  },
  {
    id: 'cldadgame',
    title: 'dadgame',
    thumbnail: 'https://media.rawg.io/media/games/dad/dadgame.jpg',
    url: `${BASE_URL}cldadgame.html`,
    category: 'other'
  },
  {
    id: 'cldadnme',
    title: 'dadnme',
    thumbnail: 'https://media.rawg.io/media/games/dad/dadnme.jpg',
    url: `${BASE_URL}cldadnme.html`,
    category: 'other'
  },
  {
    id: 'cldaggerfall',
    title: 'daggerfall',
    thumbnail: 'https://media.rawg.io/media/games/dag/daggerfall.jpg',
    url: `${BASE_URL}cldaggerfall.html`,
    category: 'other'
  },
  {
    id: 'cldanktomb',
    title: 'danktomb',
    thumbnail: 'https://media.rawg.io/media/games/dan/danktomb.jpg',
    url: `${BASE_URL}cldanktomb.html`,
    category: 'other'
  },
  {
    id: 'cldborigins',
    title: 'dborigins',
    thumbnail: 'https://media.rawg.io/media/games/dbo/dborigins.jpg',
    url: `${BASE_URL}cldborigins.html`,
    category: 'other'
  },
  {
    id: 'cldborigins2',
    title: 'dborigins2',
    thumbnail: 'https://media.rawg.io/media/games/dbo/dborigins2.jpg',
    url: `${BASE_URL}cldborigins2.html`,
    category: 'other'
  },
  {
    id: 'cldbsniper',
    title: 'dbsniper',
    thumbnail: 'https://media.rawg.io/media/games/dbs/dbsniper.jpg',
    url: `${BASE_URL}cldbsniper.html`,
    category: 'other'
  },
  {
    id: 'cldbzattacksaiyans',
    title: 'dbzattacksaiyans',
    thumbnail: 'https://media.rawg.io/media/games/dbz/dbzattacksaiyans.jpg',
    url: `${BASE_URL}cldbzattacksaiyans.html`,
    category: 'other'
  },
  {
    id: 'cldbzdevolution',
    title: 'dbzdevolution',
    thumbnail: 'https://media.rawg.io/media/games/dbz/dbzdevolution.jpg',
    url: `${BASE_URL}cldbzdevolution.html`,
    category: 'other'
  },
  {
    id: 'cldbzsuperwarriorssonic',
    title: 'dbzsuperwarriorssonic',
    thumbnail: 'https://media.rawg.io/media/games/dbz/dbzsuperwarriorssonic.jpg',
    url: `${BASE_URL}cldbzsuperwarriorssonic.html`,
    category: 'other'
  },
  {
    id: 'cldeadestate',
    title: 'deadestate',
    thumbnail: 'https://media.rawg.io/media/games/dea/deadestate.jpg',
    url: `${BASE_URL}cldeadestate.html`,
    category: 'other'
  },
  {
    id: 'cldeadlydescent',
    title: 'deadlydescent',
    thumbnail: 'https://media.rawg.io/media/games/dea/deadlydescent.jpg',
    url: `${BASE_URL}cldeadlydescent.html`,
    category: 'other'
  },
  {
    id: 'cldeadplate',
    title: 'deadplate',
    thumbnail: 'https://media.rawg.io/media/games/dea/deadplate.jpg',
    url: `${BASE_URL}cldeadplate.html`,
    category: 'other'
  },
  {
    id: 'cldeadzed',
    title: 'deadzed',
    thumbnail: 'https://media.rawg.io/media/games/dea/deadzed.jpg',
    url: `${BASE_URL}cldeadzed.html`,
    category: 'other'
  },
  {
    id: 'cldeadzed2',
    title: 'deadzed2',
    thumbnail: 'https://media.rawg.io/media/games/dea/deadzed2.jpg',
    url: `${BASE_URL}cldeadzed2.html`,
    category: 'other'
  },
  {
    id: 'cldeathchase',
    title: 'deathchase',
    thumbnail: 'https://media.rawg.io/media/games/dea/deathchase.jpg',
    url: `${BASE_URL}cldeathchase.html`,
    category: 'other'
  },
  {
    id: 'cldeblob2',
    title: 'deblob2',
    thumbnail: 'https://media.rawg.io/media/games/deb/deblob2.jpg',
    url: `${BASE_URL}cldeblob2.html`,
    category: 'other'
  },
  {
    id: 'cldecision',
    title: 'decision',
    thumbnail: 'https://media.rawg.io/media/games/dec/decision.jpg',
    url: `${BASE_URL}cldecision.html`,
    category: 'other'
  },
  {
    id: 'cldecision2',
    title: 'decision2',
    thumbnail: 'https://media.rawg.io/media/games/dec/decision2.jpg',
    url: `${BASE_URL}cldecision2.html`,
    category: 'other'
  },
  {
    id: 'cldecision3',
    title: 'decision3',
    thumbnail: 'https://media.rawg.io/media/games/dec/decision3.jpg',
    url: `${BASE_URL}cldecision3.html`,
    category: 'other'
  },
  {
    id: 'cldecisionmedieval',
    title: 'decisionmedieval',
    thumbnail: 'https://media.rawg.io/media/games/dec/decisionmedieval.jpg',
    url: `${BASE_URL}cldecisionmedieval.html`,
    category: 'other'
  },
  {
    id: 'cldeepersleep',
    title: 'deepersleep',
    thumbnail: 'https://media.rawg.io/media/games/dee/deepersleep.jpg',
    url: `${BASE_URL}cldeepersleep.html`,
    category: 'other'
  },
  {
    id: 'cldeepestsword',
    title: 'deepestsword',
    thumbnail: 'https://media.rawg.io/media/games/dee/deepestsword.jpg',
    url: `${BASE_URL}cldeepestsword.html`,
    category: 'other'
  },
  {
    id: 'cldeepsleep',
    title: 'deepsleep',
    thumbnail: 'https://media.rawg.io/media/games/dee/deepsleep.jpg',
    url: `${BASE_URL}cldeepsleep.html`,
    category: 'other'
  },
  {
    id: 'cldefendyourcastle',
    title: 'defendyourcastle',
    thumbnail: 'https://media.rawg.io/media/games/def/defendyourcastle.jpg',
    url: `${BASE_URL}cldefendyourcastle.html`,
    category: 'other'
  },
  {
    id: 'cldefendyournuts',
    title: 'defendyournuts',
    thumbnail: 'https://media.rawg.io/media/games/def/defendyournuts.jpg',
    url: `${BASE_URL}cldefendyournuts.html`,
    category: 'other'
  },
  {
    id: 'cldefendyournuts2',
    title: 'defendyournuts2',
    thumbnail: 'https://media.rawg.io/media/games/def/defendyournuts2.jpg',
    url: `${BASE_URL}cldefendyournuts2.html`,
    category: 'other'
  },
  {
    id: 'cldeltarune',
    title: 'deltarune',
    thumbnail: 'https://media.rawg.io/media/games/del/deltarune.jpg',
    url: `${BASE_URL}cldeltarune.html`,
    category: 'other'
  },
  {
    id: 'cldeltatraveler',
    title: 'deltatraveler',
    thumbnail: 'https://media.rawg.io/media/games/del/deltatraveler.jpg',
    url: `${BASE_URL}cldeltatraveler.html`,
    category: 'other'
  },
  {
    id: 'cldementium',
    title: 'dementium',
    thumbnail: 'https://media.rawg.io/media/games/dem/dementium.jpg',
    url: `${BASE_URL}cldementium.html`,
    category: 'other'
  },
  {
    id: 'cldemolitionderbycrashracing',
    title: 'demolitionderbycrashracing',
    thumbnail: 'https://media.rawg.io/media/games/dem/demolitionderbycrashracing.jpg',
    url: `${BASE_URL}cldemolitionderbycrashracing.html`,
    category: 'other'
  },
  {
    id: 'cldiablo',
    title: 'diablo',
    thumbnail: 'https://media.rawg.io/media/games/dia/diablo.jpg',
    url: `${BASE_URL}cldiablo.html`,
    category: 'other'
  },
  {
    id: 'cldiamondhollow',
    title: 'diamondhollow',
    thumbnail: 'https://media.rawg.io/media/games/dia/diamondhollow.jpg',
    url: `${BASE_URL}cldiamondhollow.html`,
    category: 'other'
  },
  {
    id: 'cldiamondhollow2',
    title: 'diamondhollow2',
    thumbnail: 'https://media.rawg.io/media/games/dia/diamondhollow2.jpg',
    url: `${BASE_URL}cldiamondhollow2.html`,
    category: 'other'
  },
  {
    id: 'cldiddykong-racing',
    title: 'diddykong-racing',
    thumbnail: 'https://media.rawg.io/media/games/did/diddykong-racing.jpg',
    url: `${BASE_URL}cldiddykong-racing.html`,
    category: 'other'
  },
  {
    id: 'cldieinthedungeon',
    title: 'dieinthedungeon',
    thumbnail: 'https://media.rawg.io/media/games/die/dieinthedungeon.jpg',
    url: `${BASE_URL}cldieinthedungeon.html`,
    category: 'other'
  },
  {
    id: 'cldigdeep',
    title: 'digdeep',
    thumbnail: 'https://media.rawg.io/media/games/dig/digdeep.jpg',
    url: `${BASE_URL}cldigdeep.html`,
    category: 'other'
  },
  {
    id: 'cldigdug',
    title: 'digdug',
    thumbnail: 'https://media.rawg.io/media/games/dig/digdug.jpg',
    url: `${BASE_URL}cldigdug.html`,
    category: 'other'
  },
  {
    id: 'cldigdug2',
    title: 'digdug2',
    thumbnail: 'https://media.rawg.io/media/games/dig/digdug2.jpg',
    url: `${BASE_URL}cldigdug2.html`,
    category: 'other'
  },
  {
    id: 'cldigdug26',
    title: 'digdug26',
    thumbnail: 'https://media.rawg.io/media/games/dig/digdug26.jpg',
    url: `${BASE_URL}cldigdug26.html`,
    category: 'other'
  },
  {
    id: 'cldigtochina',
    title: 'digtochina',
    thumbnail: 'https://media.rawg.io/media/games/dig/digtochina.jpg',
    url: `${BASE_URL}cldigtochina.html`,
    category: 'other'
  },
  {
    id: 'cldinodudes',
    title: 'dinodudes',
    thumbnail: 'https://media.rawg.io/media/games/din/dinodudes.jpg',
    url: `${BASE_URL}cldinodudes.html`,
    category: 'other'
  },
  {
    id: 'cldiredecks',
    title: 'diredecks',
    thumbnail: 'https://media.rawg.io/media/games/dir/diredecks.jpg',
    url: `${BASE_URL}cldiredecks.html`,
    category: 'other'
  },
  {
    id: 'cldoblox',
    title: 'doblox',
    thumbnail: 'https://media.rawg.io/media/games/dob/doblox.jpg',
    url: `${BASE_URL}cldoblox.html`,
    category: 'other'
  },
  {
    id: 'cldogeminer',
    title: 'dogeminer',
    thumbnail: 'https://media.rawg.io/media/games/dog/dogeminer.jpg',
    url: `${BASE_URL}cldogeminer.html`,
    category: 'other'
  },
  {
    id: 'cldogeminer2',
    title: 'dogeminer2',
    thumbnail: 'https://media.rawg.io/media/games/dog/dogeminer2.jpg',
    url: `${BASE_URL}cldogeminer2.html`,
    category: 'other'
  },
  {
    id: 'cldokidokiliteratureclub',
    title: 'dokidokiliteratureclub',
    thumbnail: 'https://media.rawg.io/media/games/dok/dokidokiliteratureclub.jpg',
    url: `${BASE_URL}cldokidokiliteratureclub.html`,
    category: 'other'
  },
  {
    id: 'cldonkeykong',
    title: 'donkeykong',
    thumbnail: 'https://media.rawg.io/media/games/don/donkeykong.jpg',
    url: `${BASE_URL}cldonkeykong.html`,
    category: 'other'
  },
  {
    id: 'cldonkeykong64',
    title: 'donkeykong64',
    thumbnail: 'https://media.rawg.io/media/games/don/donkeykong64.jpg',
    url: `${BASE_URL}cldonkeykong64.html`,
    category: 'other'
  },
  {
    id: 'cldonkeykongcountry',
    title: 'donkeykongcountry',
    thumbnail: 'https://media.rawg.io/media/games/don/donkeykongcountry.jpg',
    url: `${BASE_URL}cldonkeykongcountry.html`,
    category: 'other'
  },
  {
    id: 'cldonkeykongcountry2',
    title: 'donkeykongcountry2',
    thumbnail: 'https://media.rawg.io/media/games/don/donkeykongcountry2.jpg',
    url: `${BASE_URL}cldonkeykongcountry2.html`,
    category: 'other'
  },
  {
    id: 'cldonkeykongcountry3',
    title: 'donkeykongcountry3',
    thumbnail: 'https://media.rawg.io/media/games/don/donkeykongcountry3.jpg',
    url: `${BASE_URL}cldonkeykongcountry3.html`,
    category: 'other'
  },
  {
    id: 'cldonkeykongnes',
    title: 'donkeykongnes',
    thumbnail: 'https://media.rawg.io/media/games/don/donkeykongnes.jpg',
    url: `${BASE_URL}cldonkeykongnes.html`,
    category: 'other'
  },
  {
    id: 'cldontescape',
    title: 'dontescape',
    thumbnail: 'https://media.rawg.io/media/games/don/dontescape.jpg',
    url: `${BASE_URL}cldontescape.html`,
    category: 'other'
  },
  {
    id: 'cldontescape2',
    title: 'dontescape2',
    thumbnail: 'https://media.rawg.io/media/games/don/dontescape2.jpg',
    url: `${BASE_URL}cldontescape2.html`,
    category: 'other'
  },
  {
    id: 'cldontescape3',
    title: 'dontescape3',
    thumbnail: 'https://media.rawg.io/media/games/don/dontescape3.jpg',
    url: `${BASE_URL}cldontescape3.html`,
    category: 'other'
  },
  {
    id: 'cldoodlejump',
    title: 'doodlejump',
    thumbnail: 'https://media.rawg.io/media/games/doo/doodlejump.jpg',
    url: `${BASE_URL}cldoodlejump.html`,
    category: 'other'
  },
  {
    id: 'cldoodlejumpgoober',
    title: 'doodlejumpgoober',
    thumbnail: 'https://media.rawg.io/media/games/doo/doodlejumpgoober.jpg',
    url: `${BASE_URL}cldoodlejumpgoober.html`,
    category: 'other'
  },
  {
    id: 'cldoom',
    title: 'doom',
    thumbnail: 'https://media.rawg.io/media/games/doo/doom.jpg',
    url: `${BASE_URL}cldoom.html`,
    category: 'other'
  },
  {
    id: 'cldoom2',
    title: 'doom2',
    thumbnail: 'https://media.rawg.io/media/games/doo/doom2.jpg',
    url: `${BASE_URL}cldoom2.html`,
    category: 'other'
  },
  {
    id: 'cldoom2d',
    title: 'doom2d',
    thumbnail: 'https://media.rawg.io/media/games/doo/doom2d.jpg',
    url: `${BASE_URL}cldoom2d.html`,
    category: 'other'
  },
  {
    id: 'cldoom2dDOS',
    title: 'doom2d d o s',
    thumbnail: 'https://media.rawg.io/media/games/doo/doom2d-d-o-s.jpg',
    url: `${BASE_URL}cldoom2dDOS.html`,
    category: 'other'
  },
  {
    id: 'cldoom3pack',
    title: 'doom3pack',
    thumbnail: 'https://media.rawg.io/media/games/doo/doom3pack.jpg',
    url: `${BASE_URL}cldoom3pack.html`,
    category: 'other'
  },
  {
    id: 'cldoom64',
    title: 'doom64',
    thumbnail: 'https://media.rawg.io/media/games/doo/doom64.jpg',
    url: `${BASE_URL}cldoom64.html`,
    category: 'other'
  },
  {
    id: 'cldoomdos',
    title: 'doomdos',
    thumbnail: 'https://media.rawg.io/media/games/doo/doomdos.jpg',
    url: `${BASE_URL}cldoomdos.html`,
    category: 'other'
  },
  {
    id: 'cldoomemscripten',
    title: 'doomemscripten',
    thumbnail: 'https://media.rawg.io/media/games/doo/doomemscripten.jpg',
    url: `${BASE_URL}cldoomemscripten.html`,
    category: 'other'
  },
  {
    id: 'cldoomps',
    title: 'doomps',
    thumbnail: 'https://media.rawg.io/media/games/doo/doomps.jpg',
    url: `${BASE_URL}cldoomps.html`,
    category: 'other'
  },
  {
    id: 'cldoompsalt',
    title: 'doompsalt',
    thumbnail: 'https://media.rawg.io/media/games/doo/doompsalt.jpg',
    url: `${BASE_URL}cldoompsalt.html`,
    category: 'other'
  },
  {
    id: 'cldoomzio',
    title: 'doomzio',
    thumbnail: 'https://media.rawg.io/media/games/doo/doomzio.jpg',
    url: `${BASE_URL}cldoomzio.html`,
    category: 'other'
  },
  {
    id: 'cldouchebaglife',
    title: 'douchebaglife',
    thumbnail: 'https://media.rawg.io/media/games/dou/douchebaglife.jpg',
    url: `${BASE_URL}cldouchebaglife.html`,
    category: 'other'
  },
  {
    id: 'cldouchebagworkout',
    title: 'douchebagworkout',
    thumbnail: 'https://media.rawg.io/media/games/dou/douchebagworkout.jpg',
    url: `${BASE_URL}cldouchebagworkout.html`,
    category: 'other'
  },
  {
    id: 'cldownthemountain',
    title: 'downthemountain',
    thumbnail: 'https://media.rawg.io/media/games/dow/downthemountain.jpg',
    url: `${BASE_URL}cldownthemountain.html`,
    category: 'other'
  },
  {
    id: 'cldragonballadvance',
    title: 'dragonballadvance',
    thumbnail: 'https://media.rawg.io/media/games/dra/dragonballadvance.jpg',
    url: `${BASE_URL}cldragonballadvance.html`,
    category: 'other'
  },
  {
    id: 'cldrawclimber',
    title: 'drawclimber',
    thumbnail: 'https://media.rawg.io/media/games/dra/drawclimber.jpg',
    url: `${BASE_URL}cldrawclimber.html`,
    category: 'other'
  },
  {
    id: 'cldrawtheline',
    title: 'drawtheline',
    thumbnail: 'https://media.rawg.io/media/games/dra/drawtheline.jpg',
    url: `${BASE_URL}cldrawtheline.html`,
    category: 'other'
  },
  {
    id: 'cldreader',
    title: 'dreader',
    thumbnail: 'https://media.rawg.io/media/games/dre/dreader.jpg',
    url: `${BASE_URL}cldreader.html`,
    category: 'other'
  },
  {
    id: 'cldreadheadparkour',
    title: 'dreadheadparkour',
    thumbnail: 'https://media.rawg.io/media/games/dre/dreadheadparkour.jpg',
    url: `${BASE_URL}cldreadheadparkour.html`,
    category: 'other'
  },
  {
    id: 'cldriftboss',
    title: 'driftboss',
    thumbnail: 'https://media.rawg.io/media/games/dri/driftboss.jpg',
    url: `${BASE_URL}cldriftboss.html`,
    category: 'other'
  },
  {
    id: 'cldrifthuntersmerge',
    title: 'drifthuntersmerge',
    thumbnail: 'https://media.rawg.io/media/games/dri/drifthuntersmerge.jpg',
    url: `${BASE_URL}cldrifthuntersmerge.html`,
    category: 'other'
  },
  {
    id: 'cldrivemady',
    title: 'drivemady',
    thumbnail: 'https://media.rawg.io/media/games/dri/drivemady.jpg',
    url: `${BASE_URL}cldrivemady.html`,
    category: 'other'
  },
  {
    id: 'cldrivenwild',
    title: 'drivenwild',
    thumbnail: 'https://media.rawg.io/media/games/dri/drivenwild.jpg',
    url: `${BASE_URL}cldrivenwild.html`,
    category: 'other'
  },
  {
    id: 'cldrmario',
    title: 'drmario',
    thumbnail: 'https://media.rawg.io/media/games/drm/drmario.jpg',
    url: `${BASE_URL}cldrmario.html`,
    category: 'other'
  },
  {
    id: 'cldrweedgaster',
    title: 'drweedgaster',
    thumbnail: 'https://media.rawg.io/media/games/drw/drweedgaster.jpg',
    url: `${BASE_URL}cldrweedgaster.html`,
    category: 'other'
  },
  {
    id: 'cldubstep',
    title: 'dubstep',
    thumbnail: 'https://media.rawg.io/media/games/dub/dubstep.jpg',
    url: `${BASE_URL}cldubstep.html`,
    category: 'other'
  },
  {
    id: 'clduckhunt',
    title: 'duckhunt',
    thumbnail: 'https://media.rawg.io/media/games/duc/duckhunt.jpg',
    url: `${BASE_URL}clduckhunt.html`,
    category: 'other'
  },
  {
    id: 'clducklfe5',
    title: 'ducklfe5',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklfe5.jpg',
    url: `${BASE_URL}clducklfe5.html`,
    category: 'other'
  },
  {
    id: 'clducklife',
    title: 'ducklife',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklife.jpg',
    url: `${BASE_URL}clducklife.html`,
    category: 'other'
  },
  {
    id: 'clducklife2',
    title: 'ducklife2',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklife2.jpg',
    url: `${BASE_URL}clducklife2.html`,
    category: 'other'
  },
  {
    id: 'clducklife3',
    title: 'ducklife3',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklife3.jpg',
    url: `${BASE_URL}clducklife3.html`,
    category: 'other'
  },
  {
    id: 'clducklife4',
    title: 'ducklife4',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklife4.jpg',
    url: `${BASE_URL}clducklife4.html`,
    category: 'other'
  },
  {
    id: 'clducklifebattle',
    title: 'ducklifebattle',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklifebattle.jpg',
    url: `${BASE_URL}clducklifebattle.html`,
    category: 'other'
  },
  {
    id: 'clducklifespace',
    title: 'ducklifespace',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklifespace.jpg',
    url: `${BASE_URL}clducklifespace.html`,
    category: 'other'
  },
  {
    id: 'clducklingsio',
    title: 'ducklingsio',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducklingsio.jpg',
    url: `${BASE_URL}clducklingsio.html`,
    category: 'other'
  },
  {
    id: 'clducktales',
    title: 'ducktales',
    thumbnail: 'https://media.rawg.io/media/games/duc/ducktales.jpg',
    url: `${BASE_URL}clducktales.html`,
    category: 'other'
  },
  {
    id: 'cldud',
    title: 'dud',
    thumbnail: 'https://media.rawg.io/media/games/dud/dud.jpg',
    url: `${BASE_URL}cldud.html`,
    category: 'other'
  },
  {
    id: 'cldukenukem3d',
    title: 'dukenukem3d',
    thumbnail: 'https://media.rawg.io/media/games/duk/dukenukem3d.jpg',
    url: `${BASE_URL}cldukenukem3d.html`,
    category: 'other'
  },
  {
    id: 'cldumpling',
    title: 'dumpling',
    thumbnail: 'https://media.rawg.io/media/games/dum/dumpling.jpg',
    url: `${BASE_URL}cldumpling.html`,
    category: 'other'
  },
  {
    id: 'cldungeondeck',
    title: 'dungeondeck',
    thumbnail: 'https://media.rawg.io/media/games/dun/dungeondeck.jpg',
    url: `${BASE_URL}cldungeondeck.html`,
    category: 'other'
  },
  {
    id: 'cldungeonraid',
    title: 'dungeonraid',
    thumbnail: 'https://media.rawg.io/media/games/dun/dungeonraid.jpg',
    url: `${BASE_URL}cldungeonraid.html`,
    category: 'other'
  },
  {
    id: 'cldungeonsanddegenerategamblers',
    title: 'dungeonsanddegenerategamblers',
    thumbnail: 'https://media.rawg.io/media/games/dun/dungeonsanddegenerategamblers.jpg',
    url: `${BASE_URL}cldungeonsanddegenerategamblers.html`,
    category: 'other'
  },
  {
    id: 'cldunkshot',
    title: 'dunkshot',
    thumbnail: 'https://media.rawg.io/media/games/dun/dunkshot.jpg',
    url: `${BASE_URL}cldunkshot.html`,
    category: 'other'
  },
  {
    id: 'clduskchild',
    title: 'duskchild',
    thumbnail: 'https://media.rawg.io/media/games/dus/duskchild.jpg',
    url: `${BASE_URL}clduskchild.html`,
    category: 'other'
  },
  {
    id: 'cldyingdreams',
    title: 'dyingdreams',
    thumbnail: 'https://media.rawg.io/media/games/dyi/dyingdreams.jpg',
    url: `${BASE_URL}cldyingdreams.html`,
    category: 'other'
  },
  {
    id: 'cldynamiteheaddy',
    title: 'dynamiteheaddy',
    thumbnail: 'https://media.rawg.io/media/games/dyn/dynamiteheaddy.jpg',
    url: `${BASE_URL}cldynamiteheaddy.html`,
    category: 'other'
  },
  {
    id: 'cleagleride',
    title: 'eagleride',
    thumbnail: 'https://media.rawg.io/media/games/eag/eagleride.jpg',
    url: `${BASE_URL}cleagleride.html`,
    category: 'other'
  },
  {
    id: 'clearntodie',
    title: 'earntodie',
    thumbnail: 'https://media.rawg.io/media/games/ear/earntodie.jpg',
    url: `${BASE_URL}clearntodie.html`,
    category: 'other'
  },
  {
    id: 'clearntodie2',
    title: 'earntodie2',
    thumbnail: 'https://media.rawg.io/media/games/ear/earntodie2.jpg',
    url: `${BASE_URL}clearntodie2.html`,
    category: 'other'
  },
  {
    id: 'clearthbound',
    title: 'earthbound',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthbound.jpg',
    url: `${BASE_URL}clearthbound.html`,
    category: 'other'
  },
  {
    id: 'clearthbound3',
    title: 'earthbound3',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthbound3.jpg',
    url: `${BASE_URL}clearthbound3.html`,
    category: 'other'
  },
  {
    id: 'clearthboundsnes',
    title: 'earthboundsnes',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthboundsnes.jpg',
    url: `${BASE_URL}clearthboundsnes.html`,
    category: 'other'
  },
  {
    id: 'clearthtaken',
    title: 'earthtaken',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthtaken.jpg',
    url: `${BASE_URL}clearthtaken.html`,
    category: 'other'
  },
  {
    id: 'clearthtaken2',
    title: 'earthtaken2',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthtaken2.jpg',
    url: `${BASE_URL}clearthtaken2.html`,
    category: 'other'
  },
  {
    id: 'clearthtaken3',
    title: 'earthtaken3',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthtaken3.jpg',
    url: `${BASE_URL}clearthtaken3.html`,
    category: 'other'
  },
  {
    id: 'clearthwormjim',
    title: 'earthwormjim',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthwormjim.jpg',
    url: `${BASE_URL}clearthwormjim.html`,
    category: 'other'
  },
  {
    id: 'clearthwormjim2',
    title: 'earthwormjim2',
    thumbnail: 'https://media.rawg.io/media/games/ear/earthwormjim2.jpg',
    url: `${BASE_URL}clearthwormjim2.html`,
    category: 'other'
  },
  {
    id: 'cledelweiss',
    title: 'edelweiss',
    thumbnail: 'https://media.rawg.io/media/games/ede/edelweiss.jpg',
    url: `${BASE_URL}cledelweiss.html`,
    category: 'other'
  },
  {
    id: 'cledyscarsimulator',
    title: 'edyscarsimulator',
    thumbnail: 'https://media.rawg.io/media/games/edy/edyscarsimulator.jpg',
    url: `${BASE_URL}cledyscarsimulator.html`,
    category: 'other'
  },
  {
    id: 'cleffinghail',
    title: 'effinghail',
    thumbnail: 'https://media.rawg.io/media/games/eff/effinghail.jpg',
    url: `${BASE_URL}cleffinghail.html`,
    category: 'other'
  },
  {
    id: 'cleffingmachines',
    title: 'effingmachines',
    thumbnail: 'https://media.rawg.io/media/games/eff/effingmachines.jpg',
    url: `${BASE_URL}cleffingmachines.html`,
    category: 'other'
  },
  {
    id: 'cleffingworms',
    title: 'effingworms',
    thumbnail: 'https://media.rawg.io/media/games/eff/effingworms.jpg',
    url: `${BASE_URL}cleffingworms.html`,
    category: 'other'
  },
  {
    id: 'cleffingzombies',
    title: 'effingzombies',
    thumbnail: 'https://media.rawg.io/media/games/eff/effingzombies.jpg',
    url: `${BASE_URL}cleffingzombies.html`,
    category: 'other'
  },
  {
    id: 'clegg',
    title: 'egg',
    thumbnail: 'https://media.rawg.io/media/games/egg/egg.jpg',
    url: `${BASE_URL}clegg.html`,
    category: 'other'
  },
  {
    id: 'cleggycar',
    title: 'eggycar',
    thumbnail: 'https://media.rawg.io/media/games/egg/eggycar.jpg',
    url: `${BASE_URL}cleggycar.html`,
    category: 'other'
  },
  {
    id: 'clelasticface',
    title: 'elasticface',
    thumbnail: 'https://media.rawg.io/media/games/ela/elasticface.jpg',
    url: `${BASE_URL}clelasticface.html`,
    category: 'other'
  },
  {
    id: 'clelectricman2',
    title: 'electricman2',
    thumbnail: 'https://media.rawg.io/media/games/ele/electricman2.jpg',
    url: `${BASE_URL}clelectricman2.html`,
    category: 'other'
  },
  {
    id: 'clemujs',
    title: 'emujs',
    thumbnail: 'https://media.rawg.io/media/games/emu/emujs.jpg',
    url: `${BASE_URL}clemujs.html`,
    category: 'other'
  },
  {
    id: 'clenchain',
    title: 'enchain',
    thumbnail: 'https://media.rawg.io/media/games/enc/enchain.jpg',
    url: `${BASE_URL}clenchain.html`,
    category: 'other'
  },
  {
    id: 'clendlesswar4',
    title: 'endlesswar4',
    thumbnail: 'https://media.rawg.io/media/games/end/endlesswar4.jpg',
    url: `${BASE_URL}clendlesswar4.html`,
    category: 'other'
  },
  {
    id: 'clendlesswar5',
    title: 'endlesswar5',
    thumbnail: 'https://media.rawg.io/media/games/end/endlesswar5.jpg',
    url: `${BASE_URL}clendlesswar5.html`,
    category: 'other'
  },
  {
    id: 'clendlesswar5wow',
    title: 'endlesswar5wow',
    thumbnail: 'https://media.rawg.io/media/games/end/endlesswar5wow.jpg',
    url: `${BASE_URL}clendlesswar5wow.html`,
    category: 'other'
  },
  {
    id: 'clendlesswar7',
    title: 'endlesswar7',
    thumbnail: 'https://media.rawg.io/media/games/end/endlesswar7.jpg',
    url: `${BASE_URL}clendlesswar7.html`,
    category: 'other'
  },
  {
    id: 'clenduro',
    title: 'enduro',
    thumbnail: 'https://media.rawg.io/media/games/end/enduro.jpg',
    url: `${BASE_URL}clenduro.html`,
    category: 'other'
  },
  {
    id: 'clepicbattlefantasy5',
    title: 'epicbattlefantasy5',
    thumbnail: 'https://media.rawg.io/media/games/epi/epicbattlefantasy5.jpg',
    url: `${BASE_URL}clepicbattlefantasy5.html`,
    category: 'other'
  },
  {
    id: 'clescalatingduel',
    title: 'escalatingduel',
    thumbnail: 'https://media.rawg.io/media/games/esc/escalatingduel.jpg',
    url: `${BASE_URL}clescalatingduel.html`,
    category: 'other'
  },
  {
    id: 'clescaperoad-2',
    title: 'escaperoad-2',
    thumbnail: 'https://media.rawg.io/media/games/esc/escaperoad-2.jpg',
    url: `${BASE_URL}clescaperoad-2.html`,
    category: 'other'
  },
  {
    id: 'clescaperoad',
    title: 'escaperoad',
    thumbnail: 'https://media.rawg.io/media/games/esc/escaperoad.jpg',
    url: `${BASE_URL}clescaperoad.html`,
    category: 'other'
  },
  {
    id: 'clet',
    title: 'et',
    thumbnail: 'https://media.rawg.io/media/games/et/et.jpg',
    url: `${BASE_URL}clet.html`,
    category: 'other'
  },
  {
    id: 'cletrianoddyssey',
    title: 'etrianoddyssey',
    thumbnail: 'https://media.rawg.io/media/games/etr/etrianoddyssey.jpg',
    url: `${BASE_URL}cletrianoddyssey.html`,
    category: 'other'
  },
  {
    id: 'clevilglitch',
    title: 'evilglitch',
    thumbnail: 'https://media.rawg.io/media/games/evi/evilglitch.jpg',
    url: `${BASE_URL}clevilglitch.html`,
    category: 'other'
  },
  {
    id: 'clevolution',
    title: 'evolution',
    thumbnail: 'https://media.rawg.io/media/games/evo/evolution.jpg',
    url: `${BASE_URL}clevolution.html`,
    category: 'other'
  },
  {
    id: 'clexcitebike64',
    title: 'excitebike64',
    thumbnail: 'https://media.rawg.io/media/games/exc/excitebike64.jpg',
    url: `${BASE_URL}clexcitebike64.html`,
    category: 'other'
  },
  {
    id: 'clextremerun3d',
    title: 'extremerun3d',
    thumbnail: 'https://media.rawg.io/media/games/ext/extremerun3d.jpg',
    url: `${BASE_URL}clextremerun3d.html`,
    category: 'other'
  },
  {
    id: 'clfactoryballs',
    title: 'factoryballs',
    thumbnail: 'https://media.rawg.io/media/games/fac/factoryballs.jpg',
    url: `${BASE_URL}clfactoryballs.html`,
    category: 'other'
  },
  {
    id: 'clfactoryballs2',
    title: 'factoryballs2',
    thumbnail: 'https://media.rawg.io/media/games/fac/factoryballs2.jpg',
    url: `${BASE_URL}clfactoryballs2.html`,
    category: 'other'
  },
  {
    id: 'clfactoryballs3',
    title: 'factoryballs3',
    thumbnail: 'https://media.rawg.io/media/games/fac/factoryballs3.jpg',
    url: `${BASE_URL}clfactoryballs3.html`,
    category: 'other'
  },
  {
    id: 'clfactoryballs4',
    title: 'factoryballs4',
    thumbnail: 'https://media.rawg.io/media/games/fac/factoryballs4.jpg',
    url: `${BASE_URL}clfactoryballs4.html`,
    category: 'other'
  },
  {
    id: 'clfairytalevsonepiece',
    title: 'fairytalevsonepiece',
    thumbnail: 'https://media.rawg.io/media/games/fai/fairytalevsonepiece.jpg',
    url: `${BASE_URL}clfairytalevsonepiece.html`,
    category: 'other'
  },
  {
    id: 'clfallout',
    title: 'fallout',
    thumbnail: 'https://media.rawg.io/media/games/fal/fallout.jpg',
    url: `${BASE_URL}clfallout.html`,
    category: 'other'
  },
  {
    id: 'clfamidash',
    title: 'famidash',
    thumbnail: 'https://media.rawg.io/media/games/fam/famidash.jpg',
    url: `${BASE_URL}clfamidash.html`,
    category: 'other'
  },
  {
    id: 'clfancypantsadventure',
    title: 'fancypantsadventure',
    thumbnail: 'https://media.rawg.io/media/games/fan/fancypantsadventure.jpg',
    url: `${BASE_URL}clfancypantsadventure.html`,
    category: 'other'
  },
  {
    id: 'clfancypantsadventure2',
    title: 'fancypantsadventure2',
    thumbnail: 'https://media.rawg.io/media/games/fan/fancypantsadventure2.jpg',
    url: `${BASE_URL}clfancypantsadventure2.html`,
    category: 'other'
  },
  {
    id: 'clfancypantsadventure3',
    title: 'fancypantsadventure3',
    thumbnail: 'https://media.rawg.io/media/games/fan/fancypantsadventure3.jpg',
    url: `${BASE_URL}clfancypantsadventure3.html`,
    category: 'other'
  },
  {
    id: 'clfancysnowboarding',
    title: 'fancysnowboarding',
    thumbnail: 'https://media.rawg.io/media/games/fan/fancysnowboarding.jpg',
    url: `${BASE_URL}clfancysnowboarding.html`,
    category: 'other'
  },
  {
    id: 'clfashionbattle',
    title: 'fashionbattle',
    thumbnail: 'https://media.rawg.io/media/games/fas/fashionbattle.jpg',
    url: `${BASE_URL}clfashionbattle.html`,
    category: 'other'
  },
  {
    id: 'clfattygenius',
    title: 'fattygenius',
    thumbnail: 'https://media.rawg.io/media/games/fat/fattygenius.jpg',
    url: `${BASE_URL}clfattygenius.html`,
    category: 'other'
  },
  {
    id: 'clfearstofathomhomealone',
    title: 'fearstofathomhomealone',
    thumbnail: 'https://media.rawg.io/media/games/fea/fearstofathomhomealone.jpg',
    url: `${BASE_URL}clfearstofathomhomealone.html`,
    category: 'other'
  },
  {
    id: 'clfeedus',
    title: 'feedus',
    thumbnail: 'https://media.rawg.io/media/games/fee/feedus.jpg',
    url: `${BASE_URL}clfeedus.html`,
    category: 'other'
  },
  {
    id: 'clfeedus2',
    title: 'feedus2',
    thumbnail: 'https://media.rawg.io/media/games/fee/feedus2.jpg',
    url: `${BASE_URL}clfeedus2.html`,
    category: 'other'
  },
  {
    id: 'clfeedus3',
    title: 'feedus3',
    thumbnail: 'https://media.rawg.io/media/games/fee/feedus3.jpg',
    url: `${BASE_URL}clfeedus3.html`,
    category: 'other'
  },
  {
    id: 'clfeedus4',
    title: 'feedus4',
    thumbnail: 'https://media.rawg.io/media/games/fee/feedus4.jpg',
    url: `${BASE_URL}clfeedus4.html`,
    category: 'other'
  },
  {
    id: 'clfeedus5',
    title: 'feedus5',
    thumbnail: 'https://media.rawg.io/media/games/fee/feedus5.jpg',
    url: `${BASE_URL}clfeedus5.html`,
    category: 'other'
  },
  {
    id: 'clff6',
    title: 'ff6',
    thumbnail: 'https://media.rawg.io/media/games/ff6/ff6.jpg',
    url: `${BASE_URL}clff6.html`,
    category: 'other'
  },
  {
    id: 'clffmysticquest',
    title: 'ffmysticquest',
    thumbnail: 'https://media.rawg.io/media/games/ffm/ffmysticquest.jpg',
    url: `${BASE_URL}clffmysticquest.html`,
    category: 'other'
  },
  {
    id: 'clfifa2000',
    title: 'fifa2000',
    thumbnail: 'https://media.rawg.io/media/games/fif/fifa2000.jpg',
    url: `${BASE_URL}clfifa2000.html`,
    category: 'other'
  },
  {
    id: 'clfinalearth2',
    title: 'finalearth2',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalearth2.jpg',
    url: `${BASE_URL}clfinalearth2.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasy',
    title: 'finalfantasy',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasy.jpg',
    url: `${BASE_URL}clfinalfantasy.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasyII',
    title: 'finalfantasy i i',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasy-i-i.jpg',
    url: `${BASE_URL}clfinalfantasyII.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasyVI',
    title: 'finalfantasy v i',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasy-v-i.jpg',
    url: `${BASE_URL}clfinalfantasyVI.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasyVII',
    title: 'finalfantasy v i i',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasy-v-i-i.jpg',
    url: `${BASE_URL}clfinalfantasyVII.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasyVIId2',
    title: 'finalfantasy v i id2',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasy-v-i-id2.jpg',
    url: `${BASE_URL}clfinalfantasyVIId2.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasyVIId3',
    title: 'finalfantasy v i id3',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasy-v-i-id3.jpg',
    url: `${BASE_URL}clfinalfantasyVIId3.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasyVIItheothertetrr',
    title: 'finalfantasy v i itheothertetrr',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasy-v-i-itheothertetrr.jpg',
    url: `${BASE_URL}clfinalfantasyVIItheothertetrr.html`,
    category: 'other'
  },
  {
    id: 'clfinalfantasytactics',
    title: 'finalfantasytactics',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalfantasytactics.jpg',
    url: `${BASE_URL}clfinalfantasytactics.html`,
    category: 'other'
  },
  {
    id: 'clfinalninja',
    title: 'finalninja',
    thumbnail: 'https://media.rawg.io/media/games/fin/finalninja.jpg',
    url: `${BASE_URL}clfinalninja.html`,
    category: 'other'
  },
  {
    id: 'clfireblob',
    title: 'fireblob',
    thumbnail: 'https://media.rawg.io/media/games/fir/fireblob.jpg',
    url: `${BASE_URL}clfireblob.html`,
    category: 'other'
  },
  {
    id: 'clfireboyandwatergirl',
    title: 'fireboyandwatergirl',
    thumbnail: 'https://media.rawg.io/media/games/fir/fireboyandwatergirl.jpg',
    url: `${BASE_URL}clfireboyandwatergirl.html`,
    category: 'other'
  },
  {
    id: 'clfireboyandwatergirl2',
    title: 'fireboyandwatergirl2',
    thumbnail: 'https://media.rawg.io/media/games/fir/fireboyandwatergirl2.jpg',
    url: `${BASE_URL}clfireboyandwatergirl2.html`,
    category: 'other'
  },
  {
    id: 'clfireboyandwatergirl3',
    title: 'fireboyandwatergirl3',
    thumbnail: 'https://media.rawg.io/media/games/fir/fireboyandwatergirl3.jpg',
    url: `${BASE_URL}clfireboyandwatergirl3.html`,
    category: 'other'
  },
  {
    id: 'clfireboyandwatergirl5',
    title: 'fireboyandwatergirl5',
    thumbnail: 'https://media.rawg.io/media/games/fir/fireboyandwatergirl5.jpg',
    url: `${BASE_URL}clfireboyandwatergirl5.html`,
    category: 'other'
  },
  {
    id: 'clfireboyandwatergirl6',
    title: 'fireboyandwatergirl6',
    thumbnail: 'https://media.rawg.io/media/games/fir/fireboyandwatergirl6.jpg',
    url: `${BASE_URL}clfireboyandwatergirl6.html`,
    category: 'other'
  },
  {
    id: 'clfireemblem',
    title: 'fireemblem',
    thumbnail: 'https://media.rawg.io/media/games/fir/fireemblem.jpg',
    url: `${BASE_URL}clfireemblem.html`,
    category: 'other'
  },
  {
    id: 'clfisheatgettingbig',
    title: 'fisheatgettingbig',
    thumbnail: 'https://media.rawg.io/media/games/fis/fisheatgettingbig.jpg',
    url: `${BASE_URL}clfisheatgettingbig.html`,
    category: 'other'
  },
  {
    id: 'clfisquarium',
    title: 'fisquarium',
    thumbnail: 'https://media.rawg.io/media/games/fis/fisquarium.jpg',
    url: `${BASE_URL}clfisquarium.html`,
    category: 'other'
  },
  {
    id: 'clfivenightsatbaldisredone',
    title: 'fivenightsatbaldisredone',
    thumbnail: 'https://media.rawg.io/media/games/fiv/fivenightsatbaldisredone.jpg',
    url: `${BASE_URL}clfivenightsatbaldisredone.html`,
    category: 'other'
  },
  {
    id: 'clfivenightsatshrekshotel',
    title: 'fivenightsatshrekshotel',
    thumbnail: 'https://media.rawg.io/media/games/fiv/fivenightsatshrekshotel.jpg',
    url: `${BASE_URL}clfivenightsatshrekshotel.html`,
    category: 'other'
  },
  {
    id: 'clflashsonic',
    title: 'flashsonic',
    thumbnail: 'https://media.rawg.io/media/games/fla/flashsonic.jpg',
    url: `${BASE_URL}clflashsonic.html`,
    category: 'other'
  },
  {
    id: 'clfloodrunner',
    title: 'floodrunner',
    thumbnail: 'https://media.rawg.io/media/games/flo/floodrunner.jpg',
    url: `${BASE_URL}clfloodrunner.html`,
    category: 'other'
  },
  {
    id: 'clfloodrunner2',
    title: 'floodrunner2',
    thumbnail: 'https://media.rawg.io/media/games/flo/floodrunner2.jpg',
    url: `${BASE_URL}clfloodrunner2.html`,
    category: 'other'
  },
  {
    id: 'clfloodrunner4',
    title: 'floodrunner4',
    thumbnail: 'https://media.rawg.io/media/games/flo/floodrunner4.jpg',
    url: `${BASE_URL}clfloodrunner4.html`,
    category: 'other'
  },
  {
    id: 'clfluidism',
    title: 'fluidism',
    thumbnail: 'https://media.rawg.io/media/games/flu/fluidism.jpg',
    url: `${BASE_URL}clfluidism.html`,
    category: 'other'
  },
  {
    id: 'clfnac1',
    title: 'fnac1',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnac1.jpg',
    url: `${BASE_URL}clfnac1.html`,
    category: 'other'
  },
  {
    id: 'clfnac2',
    title: 'fnac2',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnac2.jpg',
    url: `${BASE_URL}clfnac2.html`,
    category: 'other'
  },
  {
    id: 'clfnaf4halloween',
    title: 'fnaf4halloween',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnaf4halloween.jpg',
    url: `${BASE_URL}clfnaf4halloween.html`,
    category: 'other'
  },
  {
    id: 'clfnafanimatronics',
    title: 'fnafanimatronics',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnafanimatronics.jpg',
    url: `${BASE_URL}clfnafanimatronics.html`,
    category: 'other'
  },
  {
    id: 'clfnafps',
    title: 'fnafps',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnafps.jpg',
    url: `${BASE_URL}clfnafps.html`,
    category: 'other'
  },
  {
    id: 'clfnafsl',
    title: 'fnafsl',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnafsl.jpg',
    url: `${BASE_URL}clfnafsl.html`,
    category: 'other'
  },
  {
    id: 'clfnafucn',
    title: 'fnafucn',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnafucn.jpg',
    url: `${BASE_URL}clfnafucn.html`,
    category: 'other'
  },
  {
    id: 'clfnafworldd',
    title: 'fnafworldd',
    thumbnail: 'https://media.rawg.io/media/games/fna/fnafworldd.jpg',
    url: `${BASE_URL}clfnafworldd.html`,
    category: 'other'
  },
  {
    id: 'clfnfagoti',
    title: 'fnfagoti',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfagoti.jpg',
    url: `${BASE_URL}clfnfagoti.html`,
    category: 'other'
  },
  {
    id: 'clfnfbfdi26',
    title: 'fnfbfdi26',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfbfdi26.jpg',
    url: `${BASE_URL}clfnfbfdi26.html`,
    category: 'other'
  },
  {
    id: 'clfnfblackbetrayal',
    title: 'fnfblackbetrayal',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfblackbetrayal.jpg',
    url: `${BASE_URL}clfnfblackbetrayal.html`,
    category: 'other'
  },
  {
    id: 'clfnfbside',
    title: 'fnfbside',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfbside.jpg',
    url: `${BASE_URL}clfnfbside.html`,
    category: 'other'
  },
  {
    id: 'clfnfcamelliarudeblaster',
    title: 'fnfcamelliarudeblaster',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfcamelliarudeblaster.jpg',
    url: `${BASE_URL}clfnfcamelliarudeblaster.html`,
    category: 'other'
  },
  {
    id: 'clfnfcrunchin',
    title: 'fnfcrunchin',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfcrunchin.jpg',
    url: `${BASE_URL}clfnfcrunchin.html`,
    category: 'other'
  },
  {
    id: 'clfnfdesolation',
    title: 'fnfdesolation',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfdesolation.jpg',
    url: `${BASE_URL}clfnfdesolation.html`,
    category: 'other'
  },
  {
    id: 'clfnfdokitakeoverplus',
    title: 'fnfdokitakeoverplus',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfdokitakeoverplus.jpg',
    url: `${BASE_URL}clfnfdokitakeoverplus.html`,
    category: 'other'
  },
  {
    id: 'clfnfdropandroll',
    title: 'fnfdropandroll',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfdropandroll.jpg',
    url: `${BASE_URL}clfnfdropandroll.html`,
    category: 'other'
  },
  {
    id: 'clfnfdustin',
    title: 'fnfdustin',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfdustin.jpg',
    url: `${BASE_URL}clfnfdustin.html`,
    category: 'other'
  },
  {
    id: 'clfnffleetway',
    title: 'fnffleetway',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnffleetway.jpg',
    url: `${BASE_URL}clfnffleetway.html`,
    category: 'other'
  },
  {
    id: 'clfnffnaf3',
    title: 'fnffnaf3',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnffnaf3.jpg',
    url: `${BASE_URL}clfnffnaf3.html`,
    category: 'other'
  },
  {
    id: 'clfnfgamebreakerbundle',
    title: 'fnfgamebreakerbundle',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfgamebreakerbundle.jpg',
    url: `${BASE_URL}clfnfgamebreakerbundle.html`,
    category: 'other'
  },
  {
    id: 'clfnfgoldenapple',
    title: 'fnfgoldenapple',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfgoldenapple.jpg',
    url: `${BASE_URL}clfnfgoldenapple.html`,
    category: 'other'
  },
  {
    id: 'clfnfhex',
    title: 'fnfhex',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfhex.jpg',
    url: `${BASE_URL}clfnfhex.html`,
    category: 'other'
  },
  {
    id: 'clfnfholiday',
    title: 'fnfholiday',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfholiday.jpg',
    url: `${BASE_URL}clfnfholiday.html`,
    category: 'other'
  },
  {
    id: 'clfnfhorkglorpgloop',
    title: 'fnfhorkglorpgloop',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfhorkglorpgloop.jpg',
    url: `${BASE_URL}clfnfhorkglorpgloop.html`,
    category: 'other'
  },
  {
    id: 'clfnfhypnoslullaby',
    title: 'fnfhypnoslullaby',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfhypnoslullaby.jpg',
    url: `${BASE_URL}clfnfhypnoslullaby.html`,
    category: 'other'
  },
  {
    id: 'clfnfimposterv4',
    title: 'fnfimposterv4',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfimposterv4.jpg',
    url: `${BASE_URL}clfnfimposterv4.html`,
    category: 'other'
  },
  {
    id: 'clfnfindiecross',
    title: 'fnfindiecross',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfindiecross.jpg',
    url: `${BASE_URL}clfnfindiecross.html`,
    category: 'other'
  },
  {
    id: 'clfnfmadnesspoop',
    title: 'fnfmadnesspoop',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfmadnesspoop.jpg',
    url: `${BASE_URL}clfnfmadnesspoop.html`,
    category: 'other'
  },
  {
    id: 'clfnfmariomadnessdside',
    title: 'fnfmariomadnessdside',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfmariomadnessdside.jpg',
    url: `${BASE_URL}clfnfmariomadnessdside.html`,
    category: 'other'
  },
  {
    id: 'clfnfmidfight',
    title: 'fnfmidfight',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfmidfight.jpg',
    url: `${BASE_URL}clfnfmidfight.html`,
    category: 'other'
  },
  {
    id: 'clfnfmiku',
    title: 'fnfmiku',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfmiku.jpg',
    url: `${BASE_URL}clfnfmiku.html`,
    category: 'other'
  },
  {
    id: 'clfnfmobmod',
    title: 'fnfmobmod',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfmobmod.jpg',
    url: `${BASE_URL}clfnfmobmod.html`,
    category: 'other'
  },
  {
    id: 'clfnfneo',
    title: 'fnfneo',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfneo.jpg',
    url: `${BASE_URL}clfnfneo.html`,
    category: 'other'
  },
  {
    id: 'clfnfpiggyfield',
    title: 'fnfpiggyfield',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfpiggyfield.jpg',
    url: `${BASE_URL}clfnfpiggyfield.html`,
    category: 'other'
  },
  {
    id: 'clfnfpokepastaperdition',
    title: 'fnfpokepastaperdition',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfpokepastaperdition.jpg',
    url: `${BASE_URL}clfnfpokepastaperdition.html`,
    category: 'other'
  },
  {
    id: 'clfnfqt',
    title: 'fnfqt',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfqt.jpg',
    url: `${BASE_URL}clfnfqt.html`,
    category: 'other'
  },
  {
    id: 'clfnfrevmixed',
    title: 'fnfrevmixed',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfrevmixed.jpg',
    url: `${BASE_URL}clfnfrevmixed.html`,
    category: 'other'
  },
  {
    id: 'clfnfrewrite',
    title: 'fnfrewrite',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfrewrite.jpg',
    url: `${BASE_URL}clfnfrewrite.html`,
    category: 'other'
  },
  {
    id: 'clfnfselfpaced',
    title: 'fnfselfpaced',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfselfpaced.jpg',
    url: `${BASE_URL}clfnfselfpaced.html`,
    category: 'other'
  },
  {
    id: 'clfnfshaggy4keys',
    title: 'fnfshaggy4keys',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfshaggy4keys.jpg',
    url: `${BASE_URL}clfnfshaggy4keys.html`,
    category: 'other'
  },
  {
    id: 'clfnfshaggyxmatt',
    title: 'fnfshaggyxmatt',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfshaggyxmatt.jpg',
    url: `${BASE_URL}clfnfshaggyxmatt.html`,
    category: 'other'
  },
  {
    id: 'clfnfshucks-v2',
    title: 'fnfshucks-v2',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfshucks-v2.jpg',
    url: `${BASE_URL}clfnfshucks-v2.html`,
    category: 'other'
  },
  {
    id: 'clfnfshucksv2',
    title: 'fnfshucksv2',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfshucksv2.jpg',
    url: `${BASE_URL}clfnfshucksv2.html`,
    category: 'other'
  },
  {
    id: 'clfnfsky',
    title: 'fnfsky',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfsky.jpg',
    url: `${BASE_URL}clfnfsky.html`,
    category: 'other'
  },
  {
    id: 'clfnfsoft',
    title: 'fnfsoft',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfsoft.jpg',
    url: `${BASE_URL}clfnfsoft.html`,
    category: 'other'
  },
  {
    id: 'clfnfsonicexe',
    title: 'fnfsonicexe',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfsonicexe.jpg',
    url: `${BASE_URL}clfnfsonicexe.html`,
    category: 'other'
  },
  {
    id: 'clfnfsonicexe4',
    title: 'fnfsonicexe4',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfsonicexe4.jpg',
    url: `${BASE_URL}clfnfsonicexe4.html`,
    category: 'other'
  },
  {
    id: 'clfnftailsgetstrolled',
    title: 'fnftailsgetstrolled',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnftailsgetstrolled.jpg',
    url: `${BASE_URL}clfnftailsgetstrolled.html`,
    category: 'other'
  },
  {
    id: 'clfnftricky',
    title: 'fnftricky',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnftricky.jpg',
    url: `${BASE_URL}clfnftricky.html`,
    category: 'other'
  },
  {
    id: 'clfnfwednesday-infedility',
    title: 'fnfwednesday-infedility',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfwednesday-infedility.jpg',
    url: `${BASE_URL}clfnfwednesday-infedility.html`,
    category: 'other'
  },
  {
    id: 'clfnfwhitty',
    title: 'fnfwhitty',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfwhitty.jpg',
    url: `${BASE_URL}clfnfwhitty.html`,
    category: 'other'
  },
  {
    id: 'clfnfzardy',
    title: 'fnfzardy',
    thumbnail: 'https://media.rawg.io/media/games/fnf/fnfzardy.jpg',
    url: `${BASE_URL}clfnfzardy.html`,
    category: 'other'
  },
  {
    id: 'clfocus',
    title: 'focus',
    thumbnail: 'https://media.rawg.io/media/games/foc/focus.jpg',
    url: `${BASE_URL}clfocus.html`,
    category: 'other'
  },
  {
    id: 'clfolderdungeon',
    title: 'folderdungeon',
    thumbnail: 'https://media.rawg.io/media/games/fol/folderdungeon.jpg',
    url: `${BASE_URL}clfolderdungeon.html`,
    category: 'other'
  },
  {
    id: 'clfootballbros',
    title: 'footballbros',
    thumbnail: 'https://media.rawg.io/media/games/foo/footballbros.jpg',
    url: `${BASE_URL}clfootballbros.html`,
    category: 'other'
  },
  {
    id: 'clfootballlegends',
    title: 'footballlegends',
    thumbnail: 'https://media.rawg.io/media/games/foo/footballlegends.jpg',
    url: `${BASE_URL}clfootballlegends.html`,
    category: 'other'
  },
  {
    id: 'clforknsausage',
    title: 'forknsausage',
    thumbnail: 'https://media.rawg.io/media/games/for/forknsausage.jpg',
    url: `${BASE_URL}clforknsausage.html`,
    category: 'other'
  },
  {
    id: 'clfortzone',
    title: 'fortzone',
    thumbnail: 'https://media.rawg.io/media/games/for/fortzone.jpg',
    url: `${BASE_URL}clfortzone.html`,
    category: 'other'
  },
  {
    id: 'clfpa4p1',
    title: 'fpa4p1',
    thumbnail: 'https://media.rawg.io/media/games/fpa/fpa4p1.jpg',
    url: `${BASE_URL}clfpa4p1.html`,
    category: 'other'
  },
  {
    id: 'clfpa4p2',
    title: 'fpa4p2',
    thumbnail: 'https://media.rawg.io/media/games/fpa/fpa4p2.jpg',
    url: `${BASE_URL}clfpa4p2.html`,
    category: 'other'
  },
  {
    id: 'clfreegemas',
    title: 'freegemas',
    thumbnail: 'https://media.rawg.io/media/games/fre/freegemas.jpg',
    url: `${BASE_URL}clfreegemas.html`,
    category: 'other'
  },
  {
    id: 'clfreerider',
    title: 'freerider',
    thumbnail: 'https://media.rawg.io/media/games/fre/freerider.jpg',
    url: `${BASE_URL}clfreerider.html`,
    category: 'other'
  },
  {
    id: 'clfreerider2',
    title: 'freerider2',
    thumbnail: 'https://media.rawg.io/media/games/fre/freerider2.jpg',
    url: `${BASE_URL}clfreerider2.html`,
    category: 'other'
  },
  {
    id: 'clfreerider3',
    title: 'freerider3',
    thumbnail: 'https://media.rawg.io/media/games/fre/freerider3.jpg',
    url: `${BASE_URL}clfreerider3.html`,
    category: 'other'
  },
  {
    id: 'clfridaynightfunkin',
    title: 'fridaynightfunkin',
    thumbnail: 'https://media.rawg.io/media/games/fri/fridaynightfunkin.jpg',
    url: `${BASE_URL}clfridaynightfunkin.html`,
    category: 'other'
  },
  {
    id: 'clfromrusttoash',
    title: 'fromrusttoash',
    thumbnail: 'https://media.rawg.io/media/games/fro/fromrusttoash.jpg',
    url: `${BASE_URL}clfromrusttoash.html`,
    category: 'other'
  },
  {
    id: 'clfruitninja',
    title: 'fruitninja',
    thumbnail: 'https://media.rawg.io/media/games/fru/fruitninja.jpg',
    url: `${BASE_URL}clfruitninja.html`,
    category: 'other'
  },
  {
    id: 'clfunnybattle',
    title: 'funnybattle',
    thumbnail: 'https://media.rawg.io/media/games/fun/funnybattle.jpg',
    url: `${BASE_URL}clfunnybattle.html`,
    category: 'other'
  },
  {
    id: 'clfunnybattle2',
    title: 'funnybattle2',
    thumbnail: 'https://media.rawg.io/media/games/fun/funnybattle2.jpg',
    url: `${BASE_URL}clfunnybattle2.html`,
    category: 'other'
  },
  {
    id: 'clfunnymadracing',
    title: 'funnymadracing',
    thumbnail: 'https://media.rawg.io/media/games/fun/funnymadracing.jpg',
    url: `${BASE_URL}clfunnymadracing.html`,
    category: 'other'
  },
  {
    id: 'clfunnyshooter2',
    title: 'funnyshooter2',
    thumbnail: 'https://media.rawg.io/media/games/fun/funnyshooter2.jpg',
    url: `${BASE_URL}clfunnyshooter2.html`,
    category: 'other'
  },
  {
    id: 'clfunnyshooter22',
    title: 'funnyshooter22',
    thumbnail: 'https://media.rawg.io/media/games/fun/funnyshooter22.jpg',
    url: `${BASE_URL}clfunnyshooter22.html`,
    category: 'other'
  },
  {
    id: 'clfzero',
    title: 'fzero',
    thumbnail: 'https://media.rawg.io/media/games/fze/fzero.jpg',
    url: `${BASE_URL}clfzero.html`,
    category: 'other'
  },
  {
    id: 'clfzerox',
    title: 'fzerox',
    thumbnail: 'https://media.rawg.io/media/games/fze/fzerox.jpg',
    url: `${BASE_URL}clfzerox.html`,
    category: 'other'
  },
  {
    id: 'clgalaga',
    title: 'galaga',
    thumbnail: 'https://media.rawg.io/media/games/gal/galaga.jpg',
    url: `${BASE_URL}clgalaga.html`,
    category: 'other'
  },
  {
    id: 'clgameandwatchcollection',
    title: 'gameandwatchcollection',
    thumbnail: 'https://media.rawg.io/media/games/gam/gameandwatchcollection.jpg',
    url: `${BASE_URL}clgameandwatchcollection.html`,
    category: 'other'
  },
  {
    id: 'clgangstabean',
    title: 'gangstabean',
    thumbnail: 'https://media.rawg.io/media/games/gan/gangstabean.jpg',
    url: `${BASE_URL}clgangstabean.html`,
    category: 'other'
  },
  {
    id: 'clgangstabean2',
    title: 'gangstabean2',
    thumbnail: 'https://media.rawg.io/media/games/gan/gangstabean2.jpg',
    url: `${BASE_URL}clgangstabean2.html`,
    category: 'other'
  },
  {
    id: 'clgangsterbros',
    title: 'gangsterbros',
    thumbnail: 'https://media.rawg.io/media/games/gan/gangsterbros.jpg',
    url: `${BASE_URL}clgangsterbros.html`,
    category: 'other'
  },
  {
    id: 'clgarcello',
    title: 'garcello',
    thumbnail: 'https://media.rawg.io/media/games/gar/garcello.jpg',
    url: `${BASE_URL}clgarcello.html`,
    category: 'other'
  },
  {
    id: 'clgdlite',
    title: 'gdlite',
    thumbnail: 'https://media.rawg.io/media/games/gdl/gdlite.jpg',
    url: `${BASE_URL}clgdlite.html`,
    category: 'other'
  },
  {
    id: 'clgdsubzero',
    title: 'gdsubzero',
    thumbnail: 'https://media.rawg.io/media/games/gds/gdsubzero.jpg',
    url: `${BASE_URL}clgdsubzero.html`,
    category: 'other'
  },
  {
    id: 'clgeneralchaos',
    title: 'generalchaos',
    thumbnail: 'https://media.rawg.io/media/games/gen/generalchaos.jpg',
    url: `${BASE_URL}clgeneralchaos.html`,
    category: 'other'
  },
  {
    id: 'clgenericfightermaybe',
    title: 'genericfightermaybe',
    thumbnail: 'https://media.rawg.io/media/games/gen/genericfightermaybe.jpg',
    url: `${BASE_URL}clgenericfightermaybe.html`,
    category: 'other'
  },
  {
    id: 'clgeometrydashscratch',
    title: 'geometrydashscratch',
    thumbnail: 'https://media.rawg.io/media/games/geo/geometrydashscratch.jpg',
    url: `${BASE_URL}clgeometrydashscratch.html`,
    category: 'other'
  },
  {
    id: 'clgeometryvibes',
    title: 'geometryvibes',
    thumbnail: 'https://media.rawg.io/media/games/geo/geometryvibes.jpg',
    url: `${BASE_URL}clgeometryvibes.html`,
    category: 'other'
  },
  {
    id: 'clgeorgeandtheprinter',
    title: 'georgeandtheprinter',
    thumbnail: 'https://media.rawg.io/media/games/geo/georgeandtheprinter.jpg',
    url: `${BASE_URL}clgeorgeandtheprinter.html`,
    category: 'other'
  },
  {
    id: 'clgetawayshootout',
    title: 'getawayshootout',
    thumbnail: 'https://media.rawg.io/media/games/get/getawayshootout.jpg',
    url: `${BASE_URL}clgetawayshootout.html`,
    category: 'other'
  },
  {
    id: 'clgetontop',
    title: 'getontop',
    thumbnail: 'https://media.rawg.io/media/games/get/getontop.jpg',
    url: `${BASE_URL}clgetontop.html`,
    category: 'other'
  },
  {
    id: 'clgetyoked',
    title: 'getyoked',
    thumbnail: 'https://media.rawg.io/media/games/get/getyoked.jpg',
    url: `${BASE_URL}clgetyoked.html`,
    category: 'other'
  },
  {
    id: 'clghosttrick',
    title: 'ghosttrick',
    thumbnail: 'https://media.rawg.io/media/games/gho/ghosttrick.jpg',
    url: `${BASE_URL}clghosttrick.html`,
    category: 'other'
  },
  {
    id: 'clgimmietheairpod',
    title: 'gimmietheairpod',
    thumbnail: 'https://media.rawg.io/media/games/gim/gimmietheairpod.jpg',
    url: `${BASE_URL}clgimmietheairpod.html`,
    category: 'other'
  },
  {
    id: 'clgladdihoppers',
    title: 'gladdihoppers',
    thumbnail: 'https://media.rawg.io/media/games/gla/gladdihoppers.jpg',
    url: `${BASE_URL}clgladdihoppers.html`,
    category: 'other'
  },
  {
    id: 'clgloryhunters',
    title: 'gloryhunters',
    thumbnail: 'https://media.rawg.io/media/games/glo/gloryhunters.jpg',
    url: `${BASE_URL}clgloryhunters.html`,
    category: 'other'
  },
  {
    id: 'clglover',
    title: 'glover',
    thumbnail: 'https://media.rawg.io/media/games/glo/glover.jpg',
    url: `${BASE_URL}clglover.html`,
    category: 'other'
  },
  {
    id: 'clgoalsouthafrica',
    title: 'goalsouthafrica',
    thumbnail: 'https://media.rawg.io/media/games/goa/goalsouthafrica.jpg',
    url: `${BASE_URL}clgoalsouthafrica.html`,
    category: 'other'
  },
  {
    id: 'clgobble',
    title: 'gobble',
    thumbnail: 'https://media.rawg.io/media/games/gob/gobble.jpg',
    url: `${BASE_URL}clgobble.html`,
    category: 'other'
  },
  {
    id: 'clgoingballs',
    title: 'goingballs',
    thumbnail: 'https://media.rawg.io/media/games/goi/goingballs.jpg',
    url: `${BASE_URL}clgoingballs.html`,
    category: 'other'
  },
  {
    id: 'clgolddiggerfrvr',
    title: 'golddiggerfrvr',
    thumbnail: 'https://media.rawg.io/media/games/gol/golddiggerfrvr.jpg',
    url: `${BASE_URL}clgolddiggerfrvr.html`,
    category: 'other'
  },
  {
    id: 'clgoldeneye007',
    title: 'goldeneye007',
    thumbnail: 'https://media.rawg.io/media/games/gol/goldeneye007.jpg',
    url: `${BASE_URL}clgoldeneye007.html`,
    category: 'other'
  },
  {
    id: 'clgoldensun',
    title: 'goldensun',
    thumbnail: 'https://media.rawg.io/media/games/gol/goldensun.jpg',
    url: `${BASE_URL}clgoldensun.html`,
    category: 'other'
  },
  {
    id: 'clgoldensunnds',
    title: 'goldensunnds',
    thumbnail: 'https://media.rawg.io/media/games/gol/goldensunnds.jpg',
    url: `${BASE_URL}clgoldensunnds.html`,
    category: 'other'
  },
  {
    id: 'clgoldminer',
    title: 'goldminer',
    thumbnail: 'https://media.rawg.io/media/games/gol/goldminer.jpg',
    url: `${BASE_URL}clgoldminer.html`,
    category: 'other'
  },
  {
    id: 'clgolforbit',
    title: 'golforbit',
    thumbnail: 'https://media.rawg.io/media/games/gol/golforbit.jpg',
    url: `${BASE_URL}clgolforbit.html`,
    category: 'other'
  },
  {
    id: 'clgolfsunday',
    title: 'golfsunday',
    thumbnail: 'https://media.rawg.io/media/games/gol/golfsunday.jpg',
    url: `${BASE_URL}clgolfsunday.html`,
    category: 'other'
  },
  {
    id: 'clgoodbigtowertinysquare',
    title: 'goodbigtowertinysquare',
    thumbnail: 'https://media.rawg.io/media/games/goo/goodbigtowertinysquare.jpg',
    url: `${BASE_URL}clgoodbigtowertinysquare.html`,
    category: 'other'
  },
  {
    id: 'clgoodbigtowertinysquare2',
    title: 'goodbigtowertinysquare2',
    thumbnail: 'https://media.rawg.io/media/games/goo/goodbigtowertinysquare2.jpg',
    url: `${BASE_URL}clgoodbigtowertinysquare2.html`,
    category: 'other'
  },
  {
    id: 'clgoodboygalaxy',
    title: 'goodboygalaxy',
    thumbnail: 'https://media.rawg.io/media/games/goo/goodboygalaxy.jpg',
    url: `${BASE_URL}clgoodboygalaxy.html`,
    category: 'other'
  },
  {
    id: 'clgoodmonkeymart',
    title: 'goodmonkeymart',
    thumbnail: 'https://media.rawg.io/media/games/goo/goodmonkeymart.jpg',
    url: `${BASE_URL}clgoodmonkeymart.html`,
    category: 'other'
  },
  {
    id: 'clgooglebaseball',
    title: 'googlebaseball',
    thumbnail: 'https://media.rawg.io/media/games/goo/googlebaseball.jpg',
    url: `${BASE_URL}clgooglebaseball.html`,
    category: 'other'
  },
  {
    id: 'clgoogledino',
    title: 'googledino',
    thumbnail: 'https://media.rawg.io/media/games/goo/googledino.jpg',
    url: `${BASE_URL}clgoogledino.html`,
    category: 'other'
  },
  {
    id: 'clgorescriptclassic',
    title: 'gorescriptclassic',
    thumbnail: 'https://media.rawg.io/media/games/gor/gorescriptclassic.jpg',
    url: `${BASE_URL}clgorescriptclassic.html`,
    category: 'other'
  },
  {
    id: 'clgrandactionsimulator-ny',
    title: 'grandactionsimulator-ny',
    thumbnail: 'https://media.rawg.io/media/games/gra/grandactionsimulator-ny.jpg',
    url: `${BASE_URL}clgrandactionsimulator-ny.html`,
    category: 'other'
  },
  {
    id: 'clgranddad',
    title: 'granddad',
    thumbnail: 'https://media.rawg.io/media/games/gra/granddad.jpg',
    url: `${BASE_URL}clgranddad.html`,
    category: 'other'
  },
  {
    id: 'clgrandtheftautoadvance',
    title: 'grandtheftautoadvance',
    thumbnail: 'https://media.rawg.io/media/games/gra/grandtheftautoadvance.jpg',
    url: `${BASE_URL}clgrandtheftautoadvance.html`,
    category: 'other'
  },
  {
    id: 'clgranny',
    title: 'granny',
    thumbnail: 'https://media.rawg.io/media/games/gra/granny.jpg',
    url: `${BASE_URL}clgranny.html`,
    category: 'other'
  },
  {
    id: 'clgranny2',
    title: 'granny2',
    thumbnail: 'https://media.rawg.io/media/games/gra/granny2.jpg',
    url: `${BASE_URL}clgranny2.html`,
    category: 'other'
  },
  {
    id: 'clgranny22',
    title: 'granny22',
    thumbnail: 'https://media.rawg.io/media/games/gra/granny22.jpg',
    url: `${BASE_URL}clgranny22.html`,
    category: 'other'
  },
  {
    id: 'clgranny3',
    title: 'granny3',
    thumbnail: 'https://media.rawg.io/media/games/gra/granny3.jpg',
    url: `${BASE_URL}clgranny3.html`,
    category: 'other'
  },
  {
    id: 'clgranturismo',
    title: 'granturismo',
    thumbnail: 'https://media.rawg.io/media/games/gra/granturismo.jpg',
    url: `${BASE_URL}clgranturismo.html`,
    category: 'other'
  },
  {
    id: 'clgranturismo2',
    title: 'granturismo2',
    thumbnail: 'https://media.rawg.io/media/games/gra/granturismo2.jpg',
    url: `${BASE_URL}clgranturismo2.html`,
    category: 'other'
  },
  {
    id: 'clgrassmowing',
    title: 'grassmowing',
    thumbnail: 'https://media.rawg.io/media/games/gra/grassmowing.jpg',
    url: `${BASE_URL}clgrassmowing.html`,
    category: 'other'
  },
  {
    id: 'clgravity',
    title: 'gravity',
    thumbnail: 'https://media.rawg.io/media/games/gra/gravity.jpg',
    url: `${BASE_URL}clgravity.html`,
    category: 'other'
  },
  {
    id: 'clgravitymod',
    title: 'gravitymod',
    thumbnail: 'https://media.rawg.io/media/games/gra/gravitymod.jpg',
    url: `${BASE_URL}clgravitymod.html`,
    category: 'other'
  },
  {
    id: 'clgrey-box-testing',
    title: 'grey-box-testing',
    thumbnail: 'https://media.rawg.io/media/games/gre/grey-box-testing.jpg',
    url: `${BASE_URL}clgrey-box-testing.html`,
    category: 'other'
  },
  {
    id: 'clgrimacebirthday',
    title: 'grimacebirthday',
    thumbnail: 'https://media.rawg.io/media/games/gri/grimacebirthday.jpg',
    url: `${BASE_URL}clgrimacebirthday.html`,
    category: 'other'
  },
  {
    id: 'clgrindcraft',
    title: 'grindcraft',
    thumbnail: 'https://media.rawg.io/media/games/gri/grindcraft.jpg',
    url: `${BASE_URL}clgrindcraft.html`,
    category: 'other'
  },
  {
    id: 'clgrn',
    title: 'grn',
    thumbnail: 'https://media.rawg.io/media/games/grn/grn.jpg',
    url: `${BASE_URL}clgrn.html`,
    category: 'other'
  },
  {
    id: 'clgrowagarden',
    title: 'growagarden',
    thumbnail: 'https://media.rawg.io/media/games/gro/growagarden.jpg',
    url: `${BASE_URL}clgrowagarden.html`,
    category: 'other'
  },
  {
    id: 'clgrowdenio',
    title: 'growdenio',
    thumbnail: 'https://media.rawg.io/media/games/gro/growdenio.jpg',
    url: `${BASE_URL}clgrowdenio.html`,
    category: 'other'
  },
  {
    id: 'clgrowyourgarden',
    title: 'growyourgarden',
    thumbnail: 'https://media.rawg.io/media/games/gro/growyourgarden.jpg',
    url: `${BASE_URL}clgrowyourgarden.html`,
    category: 'other'
  },
  {
    id: 'clgta',
    title: 'gta',
    thumbnail: 'https://media.rawg.io/media/games/gta/gta.jpg',
    url: `${BASE_URL}clgta.html`,
    category: 'other'
  },
  {
    id: 'clgta2',
    title: 'gta2',
    thumbnail: 'https://media.rawg.io/media/games/gta/gta2.jpg',
    url: `${BASE_URL}clgta2.html`,
    category: 'other'
  },
  {
    id: 'clgta22',
    title: 'gta22',
    thumbnail: 'https://media.rawg.io/media/games/gta/gta22.jpg',
    url: `${BASE_URL}clgta22.html`,
    category: 'other'
  },
  {
    id: 'clgta2alt',
    title: 'gta2alt',
    thumbnail: 'https://media.rawg.io/media/games/gta/gta2alt.jpg',
    url: `${BASE_URL}clgta2alt.html`,
    category: 'other'
  },
  {
    id: 'clgtaalt',
    title: 'gtaalt',
    thumbnail: 'https://media.rawg.io/media/games/gta/gtaalt.jpg',
    url: `${BASE_URL}clgtaalt.html`,
    category: 'other'
  },
  {
    id: 'clgtaalty',
    title: 'gtaalty',
    thumbnail: 'https://media.rawg.io/media/games/gta/gtaalty.jpg',
    url: `${BASE_URL}clgtaalty.html`,
    category: 'other'
  },
  {
    id: 'clgtachina',
    title: 'gtachina',
    thumbnail: 'https://media.rawg.io/media/games/gta/gtachina.jpg',
    url: `${BASE_URL}clgtachina.html`,
    category: 'other'
  },
  {
    id: 'clguesstheiranswer',
    title: 'guesstheiranswer',
    thumbnail: 'https://media.rawg.io/media/games/gue/guesstheiranswer.jpg',
    url: `${BASE_URL}clguesstheiranswer.html`,
    category: 'other'
  },
  {
    id: 'clgun-spin',
    title: 'gun-spin',
    thumbnail: 'https://media.rawg.io/media/games/gun/gun-spin.jpg',
    url: `${BASE_URL}clgun-spin.html`,
    category: 'other'
  },
  {
    id: 'clgunblood',
    title: 'gunblood',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunblood.jpg',
    url: `${BASE_URL}clgunblood.html`,
    category: 'other'
  },
  {
    id: 'clguncho',
    title: 'guncho',
    thumbnail: 'https://media.rawg.io/media/games/gun/guncho.jpg',
    url: `${BASE_URL}clguncho.html`,
    category: 'other'
  },
  {
    id: 'clgunknight',
    title: 'gunknight',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunknight.jpg',
    url: `${BASE_URL}clgunknight.html`,
    category: 'other'
  },
  {
    id: 'clgunmayhem',
    title: 'gunmayhem',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunmayhem.jpg',
    url: `${BASE_URL}clgunmayhem.html`,
    category: 'other'
  },
  {
    id: 'clgunmayhem2',
    title: 'gunmayhem2',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunmayhem2.jpg',
    url: `${BASE_URL}clgunmayhem2.html`,
    category: 'other'
  },
  {
    id: 'clgunmayhem2goof',
    title: 'gunmayhem2goof',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunmayhem2goof.jpg',
    url: `${BASE_URL}clgunmayhem2goof.html`,
    category: 'other'
  },
  {
    id: 'clgunmayhemredux',
    title: 'gunmayhemredux',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunmayhemredux.jpg',
    url: `${BASE_URL}clgunmayhemredux.html`,
    category: 'other'
  },
  {
    id: 'clgunnight',
    title: 'gunnight',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunnight.jpg',
    url: `${BASE_URL}clgunnight.html`,
    category: 'other'
  },
  {
    id: 'clgunsmoke',
    title: 'gunsmoke',
    thumbnail: 'https://media.rawg.io/media/games/gun/gunsmoke.jpg',
    url: `${BASE_URL}clgunsmoke.html`,
    category: 'other'
  },
  {
    id: 'clgymstack',
    title: 'gymstack',
    thumbnail: 'https://media.rawg.io/media/games/gym/gymstack.jpg',
    url: `${BASE_URL}clgymstack.html`,
    category: 'other'
  },
  {
    id: 'clhacx',
    title: 'hacx',
    thumbnail: 'https://media.rawg.io/media/games/hac/hacx.jpg',
    url: `${BASE_URL}clhacx.html`,
    category: 'other'
  },
  {
    id: 'clhajimeippo',
    title: 'hajimeippo',
    thumbnail: 'https://media.rawg.io/media/games/haj/hajimeippo.jpg',
    url: `${BASE_URL}clhajimeippo.html`,
    category: 'other'
  },
  {
    id: 'clhalflife',
    title: 'halflife',
    thumbnail: 'https://media.rawg.io/media/games/hal/halflife.jpg',
    url: `${BASE_URL}clhalflife.html`,
    category: 'other'
  },
  {
    id: 'clhalocombatdevolved',
    title: 'halocombatdevolved',
    thumbnail: 'https://media.rawg.io/media/games/hal/halocombatdevolved.jpg',
    url: `${BASE_URL}clhalocombatdevolved.html`,
    category: 'other'
  },
  {
    id: 'clhandshakes',
    title: 'handshakes',
    thumbnail: 'https://media.rawg.io/media/games/han/handshakes.jpg',
    url: `${BASE_URL}clhandshakes.html`,
    category: 'other'
  },
  {
    id: 'clhandsofwar (1)',
    title: 'handsofwar (1)',
    thumbnail: 'https://media.rawg.io/media/games/han/handsofwar-(1).jpg',
    url: `${BASE_URL}clhandsofwar (1).html`,
    category: 'other'
  },
  {
    id: 'clhandsofwar(1)',
    title: 'handsofwar(1)',
    thumbnail: 'https://media.rawg.io/media/games/han/handsofwar(1).jpg',
    url: `${BASE_URL}clhandsofwar(1).html`,
    category: 'other'
  },
  {
    id: 'clhandsofwar(2)',
    title: 'handsofwar(2)',
    thumbnail: 'https://media.rawg.io/media/games/han/handsofwar(2).jpg',
    url: `${BASE_URL}clhandsofwar(2).html`,
    category: 'other'
  },
  {
    id: 'clhandsofwar',
    title: 'handsofwar',
    thumbnail: 'https://media.rawg.io/media/games/han/handsofwar.jpg',
    url: `${BASE_URL}clhandsofwar.html`,
    category: 'other'
  },
  {
    id: 'clhandulum',
    title: 'handulum',
    thumbnail: 'https://media.rawg.io/media/games/han/handulum.jpg',
    url: `${BASE_URL}clhandulum.html`,
    category: 'other'
  },
  {
    id: 'clhanger2',
    title: 'hanger2',
    thumbnail: 'https://media.rawg.io/media/games/han/hanger2.jpg',
    url: `${BASE_URL}clhanger2.html`,
    category: 'other'
  },
  {
    id: 'clhappyroom',
    title: 'happyroom',
    thumbnail: 'https://media.rawg.io/media/games/hap/happyroom.jpg',
    url: `${BASE_URL}clhappyroom.html`,
    category: 'other'
  },
  {
    id: 'clhappywheels',
    title: 'happywheels',
    thumbnail: 'https://media.rawg.io/media/games/hap/happywheels.jpg',
    url: `${BASE_URL}clhappywheels.html`,
    category: 'other'
  },
  {
    id: 'clhardwaretycoon',
    title: 'hardwaretycoon',
    thumbnail: 'https://media.rawg.io/media/games/har/hardwaretycoon.jpg',
    url: `${BASE_URL}clhardwaretycoon.html`,
    category: 'other'
  },
  {
    id: 'clharvestio',
    title: 'harvestio',
    thumbnail: 'https://media.rawg.io/media/games/har/harvestio.jpg',
    url: `${BASE_URL}clharvestio.html`,
    category: 'other'
  },
  {
    id: 'clharvestmoon',
    title: 'harvestmoon',
    thumbnail: 'https://media.rawg.io/media/games/har/harvestmoon.jpg',
    url: `${BASE_URL}clharvestmoon.html`,
    category: 'other'
  },
  {
    id: 'clharvestmoon64',
    title: 'harvestmoon64',
    thumbnail: 'https://media.rawg.io/media/games/har/harvestmoon64.jpg',
    url: `${BASE_URL}clharvestmoon64.html`,
    category: 'other'
  },
  {
    id: 'clhauntthehouse',
    title: 'hauntthehouse',
    thumbnail: 'https://media.rawg.io/media/games/hau/hauntthehouse.jpg',
    url: `${BASE_URL}clhauntthehouse.html`,
    category: 'other'
  },
  {
    id: 'clheartandsoul',
    title: 'heartandsoul',
    thumbnail: 'https://media.rawg.io/media/games/hea/heartandsoul.jpg',
    url: `${BASE_URL}clheartandsoul.html`,
    category: 'other'
  },
  {
    id: 'clhei$t',
    title: 'hei$t',
    thumbnail: 'https://media.rawg.io/media/games/hei/hei$t.jpg',
    url: `${BASE_URL}clhei$t.html`,
    category: 'other'
  },
  {
    id: 'clhelixjump',
    title: 'helixjump',
    thumbnail: 'https://media.rawg.io/media/games/hel/helixjump.jpg',
    url: `${BASE_URL}clhelixjump.html`,
    category: 'other'
  },
  {
    id: 'clhellron',
    title: 'hellron',
    thumbnail: 'https://media.rawg.io/media/games/hel/hellron.jpg',
    url: `${BASE_URL}clhellron.html`,
    category: 'other'
  },
  {
    id: 'clhelpnobrakes',
    title: 'helpnobrakes',
    thumbnail: 'https://media.rawg.io/media/games/hel/helpnobrakes.jpg',
    url: `${BASE_URL}clhelpnobrakes.html`,
    category: 'other'
  },
  {
    id: 'clhero3flyingrobot',
    title: 'hero3flyingrobot',
    thumbnail: 'https://media.rawg.io/media/games/her/hero3flyingrobot.jpg',
    url: `${BASE_URL}clhero3flyingrobot.html`,
    category: 'other'
  },
  {
    id: 'clhextris',
    title: 'hextris',
    thumbnail: 'https://media.rawg.io/media/games/hex/hextris.jpg',
    url: `${BASE_URL}clhextris.html`,
    category: 'other'
  },
  {
    id: 'clhighstakes',
    title: 'highstakes',
    thumbnail: 'https://media.rawg.io/media/games/hig/highstakes.jpg',
    url: `${BASE_URL}clhighstakes.html`,
    category: 'other'
  },
  {
    id: 'clhighwayracer2',
    title: 'highwayracer2',
    thumbnail: 'https://media.rawg.io/media/games/hig/highwayracer2.jpg',
    url: `${BASE_URL}clhighwayracer2.html`,
    category: 'other'
  },
  {
    id: 'clhighwaytraffic3d',
    title: 'highwaytraffic3d',
    thumbnail: 'https://media.rawg.io/media/games/hig/highwaytraffic3d.jpg',
    url: `${BASE_URL}clhighwaytraffic3d.html`,
    category: 'other'
  },
  {
    id: 'clhillclimbracinglite',
    title: 'hillclimbracinglite',
    thumbnail: 'https://media.rawg.io/media/games/hil/hillclimbracinglite.jpg',
    url: `${BASE_URL}clhillclimbracinglite.html`,
    category: 'other'
  },
  {
    id: 'clhipsterkickball',
    title: 'hipsterkickball',
    thumbnail: 'https://media.rawg.io/media/games/hip/hipsterkickball.jpg',
    url: `${BASE_URL}clhipsterkickball.html`,
    category: 'other'
  },
  {
    id: 'clhit8ox',
    title: 'hit8ox',
    thumbnail: 'https://media.rawg.io/media/games/hit/hit8ox.jpg',
    url: `${BASE_URL}clhit8ox.html`,
    category: 'other'
  },
  {
    id: 'clhitsinglereal',
    title: 'hitsinglereal',
    thumbnail: 'https://media.rawg.io/media/games/hit/hitsinglereal.jpg',
    url: `${BASE_URL}clhitsinglereal.html`,
    category: 'other'
  },
  {
    id: 'clhl2doom',
    title: 'hl2doom',
    thumbnail: 'https://media.rawg.io/media/games/hl2/hl2doom.jpg',
    url: `${BASE_URL}clhl2doom.html`,
    category: 'other'
  },
  {
    id: 'clhobo',
    title: 'hobo',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobo.jpg',
    url: `${BASE_URL}clhobo.html`,
    category: 'other'
  },
  {
    id: 'clhobo2',
    title: 'hobo2',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobo2.jpg',
    url: `${BASE_URL}clhobo2.html`,
    category: 'other'
  },
  {
    id: 'clhobo3',
    title: 'hobo3',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobo3.jpg',
    url: `${BASE_URL}clhobo3.html`,
    category: 'other'
  },
  {
    id: 'clhobo4',
    title: 'hobo4',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobo4.jpg',
    url: `${BASE_URL}clhobo4.html`,
    category: 'other'
  },
  {
    id: 'clhobo5',
    title: 'hobo5',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobo5.jpg',
    url: `${BASE_URL}clhobo5.html`,
    category: 'other'
  },
  {
    id: 'clhobo6',
    title: 'hobo6',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobo6.jpg',
    url: `${BASE_URL}clhobo6.html`,
    category: 'other'
  },
  {
    id: 'clhobo7',
    title: 'hobo7',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobo7.jpg',
    url: `${BASE_URL}clhobo7.html`,
    category: 'other'
  },
  {
    id: 'clhobovszombies',
    title: 'hobovszombies',
    thumbnail: 'https://media.rawg.io/media/games/hob/hobovszombies.jpg',
    url: `${BASE_URL}clhobovszombies.html`,
    category: 'other'
  },
  {
    id: 'clholeio',
    title: 'holeio',
    thumbnail: 'https://media.rawg.io/media/games/hol/holeio.jpg',
    url: `${BASE_URL}clholeio.html`,
    category: 'other'
  },
  {
    id: 'clhollowknight',
    title: 'hollowknight',
    thumbnail: 'https://media.rawg.io/media/games/hol/hollowknight.jpg',
    url: `${BASE_URL}clhollowknight.html`,
    category: 'other'
  },
  {
    id: 'clhouseofhazards',
    title: 'houseofhazards',
    thumbnail: 'https://media.rawg.io/media/games/hou/houseofhazards.jpg',
    url: `${BASE_URL}clhouseofhazards.html`,
    category: 'other'
  },
  {
    id: 'clhoverracerdrive',
    title: 'hoverracerdrive',
    thumbnail: 'https://media.rawg.io/media/games/hov/hoverracerdrive.jpg',
    url: `${BASE_URL}clhoverracerdrive.html`,
    category: 'other'
  },
  {
    id: 'clhumanexpenditureprogram',
    title: 'humanexpenditureprogram',
    thumbnail: 'https://media.rawg.io/media/games/hum/humanexpenditureprogram.jpg',
    url: `${BASE_URL}clhumanexpenditureprogram.html`,
    category: 'other'
  },
  {
    id: 'clhungryknight',
    title: 'hungryknight',
    thumbnail: 'https://media.rawg.io/media/games/hun/hungryknight.jpg',
    url: `${BASE_URL}clhungryknight.html`,
    category: 'other'
  },
  {
    id: 'clhungrylamu',
    title: 'hungrylamu',
    thumbnail: 'https://media.rawg.io/media/games/hun/hungrylamu.jpg',
    url: `${BASE_URL}clhungrylamu.html`,
    category: 'other'
  },
  {
    id: 'clhyppersandbox',
    title: 'hyppersandbox',
    thumbnail: 'https://media.rawg.io/media/games/hyp/hyppersandbox.jpg',
    url: `${BASE_URL}clhyppersandbox.html`,
    category: 'other'
  },
  {
    id: 'clicantbelievegoogleflaggedmeforthenameofthefilelol',
    title: 'icantbelievegoogleflaggedmeforthenameofthefilelol',
    thumbnail: 'https://media.rawg.io/media/games/ica/icantbelievegoogleflaggedmeforthenameofthefilelol.jpg',
    url: `${BASE_URL}clicantbelievegoogleflaggedmeforthenameofthefilelol.html`,
    category: 'other'
  },
  {
    id: 'clice age baby',
    title: 'ice age baby',
    thumbnail: 'https://media.rawg.io/media/games/ice/ice-age-baby.jpg',
    url: `${BASE_URL}clice age baby.html`,
    category: 'other'
  },
  {
    id: 'clicedodo',
    title: 'icedodo',
    thumbnail: 'https://media.rawg.io/media/games/ice/icedodo.jpg',
    url: `${BASE_URL}clicedodo.html`,
    category: 'other'
  },
  {
    id: 'clicypurplehead',
    title: 'icypurplehead',
    thumbnail: 'https://media.rawg.io/media/games/icy/icypurplehead.jpg',
    url: `${BASE_URL}clicypurplehead.html`,
    category: 'other'
  },
  {
    id: 'clidlebreakout',
    title: 'idlebreakout',
    thumbnail: 'https://media.rawg.io/media/games/idl/idlebreakout.jpg',
    url: `${BASE_URL}clidlebreakout.html`,
    category: 'other'
  },
  {
    id: 'clidledice',
    title: 'idledice',
    thumbnail: 'https://media.rawg.io/media/games/idl/idledice.jpg',
    url: `${BASE_URL}clidledice.html`,
    category: 'other'
  },
  {
    id: 'clidleidlegamedev',
    title: 'idleidlegamedev',
    thumbnail: 'https://media.rawg.io/media/games/idl/idleidlegamedev.jpg',
    url: `${BASE_URL}clidleidlegamedev.html`,
    category: 'other'
  },
  {
    id: 'clidleminertycoon',
    title: 'idleminertycoon',
    thumbnail: 'https://media.rawg.io/media/games/idl/idleminertycoon.jpg',
    url: `${BASE_URL}clidleminertycoon.html`,
    category: 'other'
  },
  {
    id: 'clidleminorzamnshes12',
    title: 'idleminorzamnshes12',
    thumbnail: 'https://media.rawg.io/media/games/idl/idleminorzamnshes12.jpg',
    url: `${BASE_URL}clidleminorzamnshes12.html`,
    category: 'other'
  },
  {
    id: 'climpossiblequiz (1)',
    title: 'impossiblequiz (1)',
    thumbnail: 'https://media.rawg.io/media/games/imp/impossiblequiz-(1).jpg',
    url: `${BASE_URL}climpossiblequiz (1).html`,
    category: 'other'
  },
  {
    id: 'climpossiblequiz',
    title: 'impossiblequiz',
    thumbnail: 'https://media.rawg.io/media/games/imp/impossiblequiz.jpg',
    url: `${BASE_URL}climpossiblequiz.html`,
    category: 'other'
  },
  {
    id: 'climpossiblequiz2',
    title: 'impossiblequiz2',
    thumbnail: 'https://media.rawg.io/media/games/imp/impossiblequiz2.jpg',
    url: `${BASE_URL}climpossiblequiz2.html`,
    category: 'other'
  },
  {
    id: 'clinclementemerald',
    title: 'inclementemerald',
    thumbnail: 'https://media.rawg.io/media/games/inc/inclementemerald.jpg',
    url: `${BASE_URL}clinclementemerald.html`,
    category: 'other'
  },
  {
    id: 'clindiantrucksimiulator',
    title: 'indiantrucksimiulator',
    thumbnail: 'https://media.rawg.io/media/games/ind/indiantrucksimiulator.jpg',
    url: `${BASE_URL}clindiantrucksimiulator.html`,
    category: 'other'
  },
  {
    id: 'clinfinitecraft',
    title: 'infinitecraft',
    thumbnail: 'https://media.rawg.io/media/games/inf/infinitecraft.jpg',
    url: `${BASE_URL}clinfinitecraft.html`,
    category: 'other'
  },
  {
    id: 'clinkgame',
    title: 'inkgame',
    thumbnail: 'https://media.rawg.io/media/games/ink/inkgame.jpg',
    url: `${BASE_URL}clinkgame.html`,
    category: 'other'
  },
  {
    id: 'clinnkeeper',
    title: 'innkeeper',
    thumbnail: 'https://media.rawg.io/media/games/inn/innkeeper.jpg',
    url: `${BASE_URL}clinnkeeper.html`,
    category: 'other'
  },
  {
    id: 'clinsidestory',
    title: 'insidestory',
    thumbnail: 'https://media.rawg.io/media/games/ins/insidestory.jpg',
    url: `${BASE_URL}clinsidestory.html`,
    category: 'other'
  },
  {
    id: 'clinteractivebuddy',
    title: 'interactivebuddy',
    thumbnail: 'https://media.rawg.io/media/games/int/interactivebuddy.jpg',
    url: `${BASE_URL}clinteractivebuddy.html`,
    category: 'other'
  },
  {
    id: 'clintoruins',
    title: 'intoruins',
    thumbnail: 'https://media.rawg.io/media/games/int/intoruins.jpg',
    url: `${BASE_URL}clintoruins.html`,
    category: 'other'
  },
  {
    id: 'clintospace',
    title: 'intospace',
    thumbnail: 'https://media.rawg.io/media/games/int/intospace.jpg',
    url: `${BASE_URL}clintospace.html`,
    category: 'other'
  },
  {
    id: 'clintospace2',
    title: 'intospace2',
    thumbnail: 'https://media.rawg.io/media/games/int/intospace2.jpg',
    url: `${BASE_URL}clintospace2.html`,
    category: 'other'
  },
  {
    id: 'clintospace3',
    title: 'intospace3',
    thumbnail: 'https://media.rawg.io/media/games/int/intospace3.jpg',
    url: `${BASE_URL}clintospace3.html`,
    category: 'other'
  },
  {
    id: 'clintothedeepweb',
    title: 'intothedeepweb',
    thumbnail: 'https://media.rawg.io/media/games/int/intothedeepweb.jpg',
    url: `${BASE_URL}clintothedeepweb.html`,
    category: 'other'
  },
  {
    id: 'clintrusion',
    title: 'intrusion',
    thumbnail: 'https://media.rawg.io/media/games/int/intrusion.jpg',
    url: `${BASE_URL}clintrusion.html`,
    category: 'other'
  },
  {
    id: 'cliqball',
    title: 'iqball',
    thumbnail: 'https://media.rawg.io/media/games/iqb/iqball.jpg',
    url: `${BASE_URL}cliqball.html`,
    category: 'other'
  },
  {
    id: 'clironsnout',
    title: 'ironsnout',
    thumbnail: 'https://media.rawg.io/media/games/iro/ironsnout.jpg',
    url: `${BASE_URL}clironsnout.html`,
    category: 'other'
  },
  {
    id: 'clironsoldier',
    title: 'ironsoldier',
    thumbnail: 'https://media.rawg.io/media/games/iro/ironsoldier.jpg',
    url: `${BASE_URL}clironsoldier.html`,
    category: 'other'
  },
  {
    id: 'cliwbtg',
    title: 'iwbtg',
    thumbnail: 'https://media.rawg.io/media/games/iwb/iwbtg.jpg',
    url: `${BASE_URL}cliwbtg.html`,
    category: 'other'
  },
  {
    id: 'cljacksmith',
    title: 'jacksmith',
    thumbnail: 'https://media.rawg.io/media/games/jac/jacksmith.jpg',
    url: `${BASE_URL}cljacksmith.html`,
    category: 'other'
  },
  {
    id: 'cljacksmithencryptedorsmthn',
    title: 'jacksmithencryptedorsmthn',
    thumbnail: 'https://media.rawg.io/media/games/jac/jacksmithencryptedorsmthn.jpg',
    url: `${BASE_URL}cljacksmithencryptedorsmthn.html`,
    category: 'other'
  },
  {
    id: 'cljailbreakobbbobob',
    title: 'jailbreakobbbobob',
    thumbnail: 'https://media.rawg.io/media/games/jai/jailbreakobbbobob.jpg',
    url: `${BASE_URL}cljailbreakobbbobob.html`,
    category: 'other'
  },
  {
    id: 'cljefflings',
    title: 'jefflings',
    thumbnail: 'https://media.rawg.io/media/games/jef/jefflings.jpg',
    url: `${BASE_URL}cljefflings.html`,
    category: 'other'
  },
  {
    id: 'cljellydadhero',
    title: 'jellydadhero',
    thumbnail: 'https://media.rawg.io/media/games/jel/jellydadhero.jpg',
    url: `${BASE_URL}cljellydadhero.html`,
    category: 'other'
  },
  {
    id: 'cljellydrift',
    title: 'jellydrift',
    thumbnail: 'https://media.rawg.io/media/games/jel/jellydrift.jpg',
    url: `${BASE_URL}cljellydrift.html`,
    category: 'other'
  },
  {
    id: 'cljellytruck',
    title: 'jellytruck',
    thumbnail: 'https://media.rawg.io/media/games/jel/jellytruck.jpg',
    url: `${BASE_URL}cljellytruck.html`,
    category: 'other'
  },
  {
    id: 'cljellytruckgood',
    title: 'jellytruckgood',
    thumbnail: 'https://media.rawg.io/media/games/jel/jellytruckgood.jpg',
    url: `${BASE_URL}cljellytruckgood.html`,
    category: 'other'
  },
  {
    id: 'cljetforcegemini',
    title: 'jetforcegemini',
    thumbnail: 'https://media.rawg.io/media/games/jet/jetforcegemini.jpg',
    url: `${BASE_URL}cljetforcegemini.html`,
    category: 'other'
  },
  {
    id: 'cljetpackjoyride',
    title: 'jetpackjoyride',
    thumbnail: 'https://media.rawg.io/media/games/jet/jetpackjoyride.jpg',
    url: `${BASE_URL}cljetpackjoyride.html`,
    category: 'other'
  },
  {
    id: 'cljetrush',
    title: 'jetrush',
    thumbnail: 'https://media.rawg.io/media/games/jet/jetrush.jpg',
    url: `${BASE_URL}cljetrush.html`,
    category: 'other'
  },
  {
    id: 'cljetskiracing',
    title: 'jetskiracing',
    thumbnail: 'https://media.rawg.io/media/games/jet/jetskiracing.jpg',
    url: `${BASE_URL}cljetskiracing.html`,
    category: 'other'
  },
  {
    id: 'cljohnnytrigger',
    title: 'johnnytrigger',
    thumbnail: 'https://media.rawg.io/media/games/joh/johnnytrigger.jpg',
    url: `${BASE_URL}cljohnnytrigger.html`,
    category: 'other'
  },
  {
    id: 'cljohnnyupgrade',
    title: 'johnnyupgrade',
    thumbnail: 'https://media.rawg.io/media/games/joh/johnnyupgrade.jpg',
    url: `${BASE_URL}cljohnnyupgrade.html`,
    category: 'other'
  },
  {
    id: 'cljourneydownhill',
    title: 'journeydownhill',
    thumbnail: 'https://media.rawg.io/media/games/jou/journeydownhill.jpg',
    url: `${BASE_URL}cljourneydownhill.html`,
    category: 'other'
  },
  {
    id: 'cljsvecx',
    title: 'jsvecx',
    thumbnail: 'https://media.rawg.io/media/games/jsv/jsvecx.jpg',
    url: `${BASE_URL}cljsvecx.html`,
    category: 'other'
  },
  {
    id: 'cljumpingshell',
    title: 'jumpingshell',
    thumbnail: 'https://media.rawg.io/media/games/jum/jumpingshell.jpg',
    url: `${BASE_URL}cljumpingshell.html`,
    category: 'other'
  },
  {
    id: 'cljustfalllol',
    title: 'justfalllol',
    thumbnail: 'https://media.rawg.io/media/games/jus/justfalllol.jpg',
    url: `${BASE_URL}cljustfalllol.html`,
    category: 'other'
  },
  {
    id: 'cljusthitthebutton',
    title: 'justhitthebutton',
    thumbnail: 'https://media.rawg.io/media/games/jus/justhitthebutton.jpg',
    url: `${BASE_URL}cljusthitthebutton.html`,
    category: 'other'
  },
  {
    id: 'cljustoneboss',
    title: 'justoneboss',
    thumbnail: 'https://media.rawg.io/media/games/jus/justoneboss.jpg',
    url: `${BASE_URL}cljustoneboss.html`,
    category: 'other'
  },
  {
    id: 'clkaizomarioworld',
    title: 'kaizomarioworld',
    thumbnail: 'https://media.rawg.io/media/games/kai/kaizomarioworld.jpg',
    url: `${BASE_URL}clkaizomarioworld.html`,
    category: 'other'
  },
  {
    id: 'clkalikan',
    title: 'kalikan',
    thumbnail: 'https://media.rawg.io/media/games/kal/kalikan.jpg',
    url: `${BASE_URL}clkalikan.html`,
    category: 'other'
  },
  {
    id: 'clkapi',
    title: 'kapi',
    thumbnail: 'https://media.rawg.io/media/games/kap/kapi.jpg',
    url: `${BASE_URL}clkapi.html`,
    category: 'other'
  },
  {
    id: 'clkaratebros',
    title: 'karatebros',
    thumbnail: 'https://media.rawg.io/media/games/kar/karatebros.jpg',
    url: `${BASE_URL}clkaratebros.html`,
    category: 'other'
  },
  {
    id: 'clkarlson',
    title: 'karlson',
    thumbnail: 'https://media.rawg.io/media/games/kar/karlson.jpg',
    url: `${BASE_URL}clkarlson.html`,
    category: 'other'
  },
  {
    id: 'clkartbros',
    title: 'kartbros',
    thumbnail: 'https://media.rawg.io/media/games/kar/kartbros.jpg',
    url: `${BASE_URL}clkartbros.html`,
    category: 'other'
  },
  {
    id: 'clkillerinstinct',
    title: 'killerinstinct',
    thumbnail: 'https://media.rawg.io/media/games/kil/killerinstinct.jpg',
    url: `${BASE_URL}clkillerinstinct.html`,
    category: 'other'
  },
  {
    id: 'clkillover',
    title: 'killover',
    thumbnail: 'https://media.rawg.io/media/games/kil/killover.jpg',
    url: `${BASE_URL}clkillover.html`,
    category: 'other'
  },
  {
    id: 'clkilltheiceagebabyadventure',
    title: 'killtheiceagebabyadventure',
    thumbnail: 'https://media.rawg.io/media/games/kil/killtheiceagebabyadventure.jpg',
    url: `${BASE_URL}clkilltheiceagebabyadventure.html`,
    category: 'other'
  },
  {
    id: 'clkingdomheartsdays',
    title: 'kingdomheartsdays',
    thumbnail: 'https://media.rawg.io/media/games/kin/kingdomheartsdays.jpg',
    url: `${BASE_URL}clkingdomheartsdays.html`,
    category: 'other'
  },
  {
    id: 'clkingdomheartsrecoded',
    title: 'kingdomheartsrecoded',
    thumbnail: 'https://media.rawg.io/media/games/kin/kingdomheartsrecoded.jpg',
    url: `${BASE_URL}clkingdomheartsrecoded.html`,
    category: 'other'
  },
  {
    id: 'clkingdomheartsrecodedalt',
    title: 'kingdomheartsrecodedalt',
    thumbnail: 'https://media.rawg.io/media/games/kin/kingdomheartsrecodedalt.jpg',
    url: `${BASE_URL}clkingdomheartsrecodedalt.html`,
    category: 'other'
  },
  {
    id: 'clkirby64',
    title: 'kirby64',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirby64.jpg',
    url: `${BASE_URL}clkirby64.html`,
    category: 'other'
  },
  {
    id: 'clkirbyandtheamzingmirror',
    title: 'kirbyandtheamzingmirror',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirbyandtheamzingmirror.jpg',
    url: `${BASE_URL}clkirbyandtheamzingmirror.html`,
    category: 'other'
  },
  {
    id: 'clkirbysadventure',
    title: 'kirbysadventure',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirbysadventure.jpg',
    url: `${BASE_URL}clkirbysadventure.html`,
    category: 'other'
  },
  {
    id: 'clkirbysdreamland',
    title: 'kirbysdreamland',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirbysdreamland.jpg',
    url: `${BASE_URL}clkirbysdreamland.html`,
    category: 'other'
  },
  {
    id: 'clkirbysdreamland3',
    title: 'kirbysdreamland3',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirbysdreamland3.jpg',
    url: `${BASE_URL}clkirbysdreamland3.html`,
    category: 'other'
  },
  {
    id: 'clkirbysqueaksquad',
    title: 'kirbysqueaksquad',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirbysqueaksquad.jpg',
    url: `${BASE_URL}clkirbysqueaksquad.html`,
    category: 'other'
  },
  {
    id: 'clkirbysuperstar',
    title: 'kirbysuperstar',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirbysuperstar.jpg',
    url: `${BASE_URL}clkirbysuperstar.html`,
    category: 'other'
  },
  {
    id: 'clkirbysuperstarultra',
    title: 'kirbysuperstarultra',
    thumbnail: 'https://media.rawg.io/media/games/kir/kirbysuperstarultra.jpg',
    url: `${BASE_URL}clkirbysuperstarultra.html`,
    category: 'other'
  },
  {
    id: 'clkittencannon',
    title: 'kittencannon',
    thumbnail: 'https://media.rawg.io/media/games/kit/kittencannon.jpg',
    url: `${BASE_URL}clkittencannon.html`,
    category: 'other'
  },
  {
    id: 'clklifur',
    title: 'klifur',
    thumbnail: 'https://media.rawg.io/media/games/kli/klifur.jpg',
    url: `${BASE_URL}clklifur.html`,
    category: 'other'
  },
  {
    id: 'clknifehit',
    title: 'knifehit',
    thumbnail: 'https://media.rawg.io/media/games/kni/knifehit.jpg',
    url: `${BASE_URL}clknifehit.html`,
    category: 'other'
  },
  {
    id: 'clknightmaretower',
    title: 'knightmaretower',
    thumbnail: 'https://media.rawg.io/media/games/kni/knightmaretower.jpg',
    url: `${BASE_URL}clknightmaretower.html`,
    category: 'other'
  },
  {
    id: 'clkonkrio',
    title: 'konkrio',
    thumbnail: 'https://media.rawg.io/media/games/kon/konkrio.jpg',
    url: `${BASE_URL}clkonkrio.html`,
    category: 'other'
  },
  {
    id: 'clkoopasrevenge',
    title: 'koopasrevenge',
    thumbnail: 'https://media.rawg.io/media/games/koo/koopasrevenge.jpg',
    url: `${BASE_URL}clkoopasrevenge.html`,
    category: 'other'
  },
  {
    id: 'clkourio',
    title: 'kourio',
    thumbnail: 'https://media.rawg.io/media/games/kou/kourio.jpg',
    url: `${BASE_URL}clkourio.html`,
    category: 'other'
  },
  {
    id: 'cllaceysflashgames',
    title: 'laceysflashgames',
    thumbnail: 'https://media.rawg.io/media/games/lac/laceysflashgames.jpg',
    url: `${BASE_URL}cllaceysflashgames.html`,
    category: 'other'
  },
  {
    id: 'cllastfirered',
    title: 'lastfirered',
    thumbnail: 'https://media.rawg.io/media/games/las/lastfirered.jpg',
    url: `${BASE_URL}cllastfirered.html`,
    category: 'other'
  },
  {
    id: 'cllasthorizon',
    title: 'lasthorizon',
    thumbnail: 'https://media.rawg.io/media/games/las/lasthorizon.jpg',
    url: `${BASE_URL}cllasthorizon.html`,
    category: 'other'
  },
  {
    id: 'cllaststand',
    title: 'laststand',
    thumbnail: 'https://media.rawg.io/media/games/las/laststand.jpg',
    url: `${BASE_URL}cllaststand.html`,
    category: 'other'
  },
  {
    id: 'cllaststand2',
    title: 'laststand2',
    thumbnail: 'https://media.rawg.io/media/games/las/laststand2.jpg',
    url: `${BASE_URL}cllaststand2.html`,
    category: 'other'
  },
  {
    id: 'clleaderstrike',
    title: 'leaderstrike',
    thumbnail: 'https://media.rawg.io/media/games/lea/leaderstrike.jpg',
    url: `${BASE_URL}clleaderstrike.html`,
    category: 'other'
  },
  {
    id: 'cllearntofly',
    title: 'learntofly',
    thumbnail: 'https://media.rawg.io/media/games/lea/learntofly.jpg',
    url: `${BASE_URL}cllearntofly.html`,
    category: 'other'
  },
  {
    id: 'cllearntofly2',
    title: 'learntofly2',
    thumbnail: 'https://media.rawg.io/media/games/lea/learntofly2.jpg',
    url: `${BASE_URL}cllearntofly2.html`,
    category: 'other'
  },
  {
    id: 'cllearntofly3',
    title: 'learntofly3',
    thumbnail: 'https://media.rawg.io/media/games/lea/learntofly3.jpg',
    url: `${BASE_URL}cllearntofly3.html`,
    category: 'other'
  },
  {
    id: 'cllearntoflyidle',
    title: 'learntoflyidle',
    thumbnail: 'https://media.rawg.io/media/games/lea/learntoflyidle.jpg',
    url: `${BASE_URL}cllearntoflyidle.html`,
    category: 'other'
  },
  {
    id: 'cllegobatman',
    title: 'legobatman',
    thumbnail: 'https://media.rawg.io/media/games/leg/legobatman.jpg',
    url: `${BASE_URL}cllegobatman.html`,
    category: 'other'
  },
  {
    id: 'cllegobatman2superheroes',
    title: 'legobatman2superheroes',
    thumbnail: 'https://media.rawg.io/media/games/leg/legobatman2superheroes.jpg',
    url: `${BASE_URL}cllegobatman2superheroes.html`,
    category: 'other'
  },
  {
    id: 'cllegoindianajones',
    title: 'legoindianajones',
    thumbnail: 'https://media.rawg.io/media/games/leg/legoindianajones.jpg',
    url: `${BASE_URL}cllegoindianajones.html`,
    category: 'other'
  },
  {
    id: 'cllegoindianajones2',
    title: 'legoindianajones2',
    thumbnail: 'https://media.rawg.io/media/games/leg/legoindianajones2.jpg',
    url: `${BASE_URL}cllegoindianajones2.html`,
    category: 'other'
  },
  {
    id: 'cllegoninjago',
    title: 'legoninjago',
    thumbnail: 'https://media.rawg.io/media/games/leg/legoninjago.jpg',
    url: `${BASE_URL}cllegoninjago.html`,
    category: 'other'
  },
  {
    id: 'cllegostarwars',
    title: 'legostarwars',
    thumbnail: 'https://media.rawg.io/media/games/leg/legostarwars.jpg',
    url: `${BASE_URL}cllegostarwars.html`,
    category: 'other'
  },
  {
    id: 'cllemmings',
    title: 'lemmings',
    thumbnail: 'https://media.rawg.io/media/games/lem/lemmings.jpg',
    url: `${BASE_URL}cllemmings.html`,
    category: 'other'
  },
  {
    id: 'clleveldevil',
    title: 'leveldevil',
    thumbnail: 'https://media.rawg.io/media/games/lev/leveldevil.jpg',
    url: `${BASE_URL}clleveldevil.html`,
    category: 'other'
  },
  {
    id: 'clleverwarriors',
    title: 'leverwarriors',
    thumbnail: 'https://media.rawg.io/media/games/lev/leverwarriors.jpg',
    url: `${BASE_URL}clleverwarriors.html`,
    category: 'other'
  },
  {
    id: 'cllightitup',
    title: 'lightitup',
    thumbnail: 'https://media.rawg.io/media/games/lig/lightitup.jpg',
    url: `${BASE_URL}cllightitup.html`,
    category: 'other'
  },
  {
    id: 'cllilrunmo',
    title: 'lilrunmo',
    thumbnail: 'https://media.rawg.io/media/games/lil/lilrunmo.jpg',
    url: `${BASE_URL}cllilrunmo.html`,
    category: 'other'
  },
  {
    id: 'cllinerider',
    title: 'linerider',
    thumbnail: 'https://media.rawg.io/media/games/lin/linerider.jpg',
    url: `${BASE_URL}cllinerider.html`,
    category: 'other'
  },
  {
    id: 'cllinktothepast',
    title: 'linktothepast',
    thumbnail: 'https://media.rawg.io/media/games/lin/linktothepast.jpg',
    url: `${BASE_URL}cllinktothepast.html`,
    category: 'other'
  },
  {
    id: 'cllittlerunmo',
    title: 'littlerunmo',
    thumbnail: 'https://media.rawg.io/media/games/lit/littlerunmo.jpg',
    url: `${BASE_URL}cllittlerunmo.html`,
    category: 'other'
  },
  {
    id: 'cllockthedoor',
    title: 'lockthedoor',
    thumbnail: 'https://media.rawg.io/media/games/loc/lockthedoor.jpg',
    url: `${BASE_URL}cllockthedoor.html`,
    category: 'other'
  },
  {
    id: 'clloderunner',
    title: 'loderunner',
    thumbnail: 'https://media.rawg.io/media/games/lod/loderunner.jpg',
    url: `${BASE_URL}clloderunner.html`,
    category: 'other'
  },
  {
    id: 'cllonewolf',
    title: 'lonewolf',
    thumbnail: 'https://media.rawg.io/media/games/lon/lonewolf.jpg',
    url: `${BASE_URL}cllonewolf.html`,
    category: 'other'
  },
  {
    id: 'cllosangelesshark',
    title: 'losangelesshark',
    thumbnail: 'https://media.rawg.io/media/games/los/losangelesshark.jpg',
    url: `${BASE_URL}cllosangelesshark.html`,
    category: 'other'
  },
  {
    id: 'cllowknight',
    title: 'lowknight',
    thumbnail: 'https://media.rawg.io/media/games/low/lowknight.jpg',
    url: `${BASE_URL}cllowknight.html`,
    category: 'other'
  },
  {
    id: 'clloz1',
    title: 'loz1',
    thumbnail: 'https://media.rawg.io/media/games/loz/loz1.jpg',
    url: `${BASE_URL}clloz1.html`,
    category: 'other'
  },
  {
    id: 'cllozlinkawakening',
    title: 'lozlinkawakening',
    thumbnail: 'https://media.rawg.io/media/games/loz/lozlinkawakening.jpg',
    url: `${BASE_URL}cllozlinkawakening.html`,
    category: 'other'
  },
  {
    id: 'cllozminishcap',
    title: 'lozminishcap',
    thumbnail: 'https://media.rawg.io/media/games/loz/lozminishcap.jpg',
    url: `${BASE_URL}cllozminishcap.html`,
    category: 'other'
  },
  {
    id: 'cllozoracleofseasons',
    title: 'lozoracleofseasons',
    thumbnail: 'https://media.rawg.io/media/games/loz/lozoracleofseasons.jpg',
    url: `${BASE_URL}cllozoracleofseasons.html`,
    category: 'other'
  },
  {
    id: 'cllozspirittracks',
    title: 'lozspirittracks',
    thumbnail: 'https://media.rawg.io/media/games/loz/lozspirittracks.jpg',
    url: `${BASE_URL}cllozspirittracks.html`,
    category: 'other'
  },
  {
    id: 'clluckyblocks',
    title: 'luckyblocks',
    thumbnail: 'https://media.rawg.io/media/games/luc/luckyblocks.jpg',
    url: `${BASE_URL}clluckyblocks.html`,
    category: 'other'
  },
  {
    id: 'clmadalinstuntcars',
    title: 'madalinstuntcars',
    thumbnail: 'https://media.rawg.io/media/games/mad/madalinstuntcars.jpg',
    url: `${BASE_URL}clmadalinstuntcars.html`,
    category: 'other'
  },
  {
    id: 'clmadalinstuntcarsgood',
    title: 'madalinstuntcarsgood',
    thumbnail: 'https://media.rawg.io/media/games/mad/madalinstuntcarsgood.jpg',
    url: `${BASE_URL}clmadalinstuntcarsgood.html`,
    category: 'other'
  },
  {
    id: 'clmadalinstuntcarsmultiplayerfixed',
    title: 'madalinstuntcarsmultiplayerfixed',
    thumbnail: 'https://media.rawg.io/media/games/mad/madalinstuntcarsmultiplayerfixed.jpg',
    url: `${BASE_URL}clmadalinstuntcarsmultiplayerfixed.html`,
    category: 'other'
  },
  {
    id: 'clmadden93',
    title: 'madden93',
    thumbnail: 'https://media.rawg.io/media/games/mad/madden93.jpg',
    url: `${BASE_URL}clmadden93.html`,
    category: 'other'
  },
  {
    id: 'clmadden94',
    title: 'madden94',
    thumbnail: 'https://media.rawg.io/media/games/mad/madden94.jpg',
    url: `${BASE_URL}clmadden94.html`,
    category: 'other'
  },
  {
    id: 'clmadden95',
    title: 'madden95',
    thumbnail: 'https://media.rawg.io/media/games/mad/madden95.jpg',
    url: `${BASE_URL}clmadden95.html`,
    category: 'other'
  },
  {
    id: 'clmadden96',
    title: 'madden96',
    thumbnail: 'https://media.rawg.io/media/games/mad/madden96.jpg',
    url: `${BASE_URL}clmadden96.html`,
    category: 'other'
  },
  {
    id: 'clmadden99',
    title: 'madden99',
    thumbnail: 'https://media.rawg.io/media/games/mad/madden99.jpg',
    url: `${BASE_URL}clmadden99.html`,
    category: 'other'
  },
  {
    id: 'clmaddenfootball',
    title: 'maddenfootball',
    thumbnail: 'https://media.rawg.io/media/games/mad/maddenfootball.jpg',
    url: `${BASE_URL}clmaddenfootball.html`,
    category: 'other'
  },
  {
    id: 'clmaddenfootball64',
    title: 'maddenfootball64',
    thumbnail: 'https://media.rawg.io/media/games/mad/maddenfootball64.jpg',
    url: `${BASE_URL}clmaddenfootball64.html`,
    category: 'other'
  },
  {
    id: 'clmaddennfl',
    title: 'maddennfl',
    thumbnail: 'https://media.rawg.io/media/games/mad/maddennfl.jpg',
    url: `${BASE_URL}clmaddennfl.html`,
    category: 'other'
  },
  {
    id: 'clmaddennfl2000',
    title: 'maddennfl2000',
    thumbnail: 'https://media.rawg.io/media/games/mad/maddennfl2000.jpg',
    url: `${BASE_URL}clmaddennfl2000.html`,
    category: 'other'
  },
  {
    id: 'clmaddennfl2001',
    title: 'maddennfl2001',
    thumbnail: 'https://media.rawg.io/media/games/mad/maddennfl2001.jpg',
    url: `${BASE_URL}clmaddennfl2001.html`,
    category: 'other'
  },
  {
    id: 'clmaddennfl2002',
    title: 'maddennfl2002',
    thumbnail: 'https://media.rawg.io/media/games/mad/maddennfl2002.jpg',
    url: `${BASE_URL}clmaddennfl2002.html`,
    category: 'other'
  },
  {
    id: 'clmaddy98',
    title: 'maddy98',
    thumbnail: 'https://media.rawg.io/media/games/mad/maddy98.jpg',
    url: `${BASE_URL}clmaddy98.html`,
    category: 'other'
  },
  {
    id: 'clmadness-retaliation',
    title: 'madness-retaliation',
    thumbnail: 'https://media.rawg.io/media/games/mad/madness-retaliation.jpg',
    url: `${BASE_URL}clmadness-retaliation.html`,
    category: 'other'
  },
  {
    id: 'clmadnessaccelerant',
    title: 'madnessaccelerant',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnessaccelerant.jpg',
    url: `${BASE_URL}clmadnessaccelerant.html`,
    category: 'other'
  },
  {
    id: 'clmadnesscombatdefense',
    title: 'madnesscombatdefense',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnesscombatdefense.jpg',
    url: `${BASE_URL}clmadnesscombatdefense.html`,
    category: 'other'
  },
  {
    id: 'clmadnesscombatnexus',
    title: 'madnesscombatnexus',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnesscombatnexus.jpg',
    url: `${BASE_URL}clmadnesscombatnexus.html`,
    category: 'other'
  },
  {
    id: 'clmadnessgemini',
    title: 'madnessgemini',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnessgemini.jpg',
    url: `${BASE_URL}clmadnessgemini.html`,
    category: 'other'
  },
  {
    id: 'clmadnesshydraulic',
    title: 'madnesshydraulic',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnesshydraulic.jpg',
    url: `${BASE_URL}clmadnesshydraulic.html`,
    category: 'other'
  },
  {
    id: 'clmadnessinteractive',
    title: 'madnessinteractive',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnessinteractive.jpg',
    url: `${BASE_URL}clmadnessinteractive.html`,
    category: 'other'
  },
  {
    id: 'clmadnessoffcolor',
    title: 'madnessoffcolor',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnessoffcolor.jpg',
    url: `${BASE_URL}clmadnessoffcolor.html`,
    category: 'other'
  },
  {
    id: 'clmadnesspremediation',
    title: 'madnesspremediation',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnesspremediation.jpg',
    url: `${BASE_URL}clmadnesspremediation.html`,
    category: 'other'
  },
  {
    id: 'clmadnessretaliation',
    title: 'madnessretaliation',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnessretaliation.jpg',
    url: `${BASE_URL}clmadnessretaliation.html`,
    category: 'other'
  },
  {
    id: 'clmadnesss2010',
    title: 'madnesss2010',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnesss2010.jpg',
    url: `${BASE_URL}clmadnesss2010.html`,
    category: 'other'
  },
  {
    id: 'clmadnessstand',
    title: 'madnessstand',
    thumbnail: 'https://media.rawg.io/media/games/mad/madnessstand.jpg',
    url: `${BASE_URL}clmadnessstand.html`,
    category: 'other'
  },
  {
    id: 'clmadskillsmotocross2',
    title: 'madskillsmotocross2',
    thumbnail: 'https://media.rawg.io/media/games/mad/madskillsmotocross2.jpg',
    url: `${BASE_URL}clmadskillsmotocross2.html`,
    category: 'other'
  },
  {
    id: 'clmadstick',
    title: 'madstick',
    thumbnail: 'https://media.rawg.io/media/games/mad/madstick.jpg',
    url: `${BASE_URL}clmadstick.html`,
    category: 'other'
  },
  {
    id: 'clmadstuntcars2',
    title: 'madstuntcars2',
    thumbnail: 'https://media.rawg.io/media/games/mad/madstuntcars2.jpg',
    url: `${BASE_URL}clmadstuntcars2.html`,
    category: 'other'
  },
  {
    id: 'clmagictiles3',
    title: 'magictiles3',
    thumbnail: 'https://media.rawg.io/media/games/mag/magictiles3.jpg',
    url: `${BASE_URL}clmagictiles3.html`,
    category: 'other'
  },
  {
    id: 'clmajorasmask',
    title: 'majorasmask',
    thumbnail: 'https://media.rawg.io/media/games/maj/majorasmask.jpg',
    url: `${BASE_URL}clmajorasmask.html`,
    category: 'other'
  },
  {
    id: 'clmakesureitsclosed',
    title: 'makesureitsclosed',
    thumbnail: 'https://media.rawg.io/media/games/mak/makesureitsclosed.jpg',
    url: `${BASE_URL}clmakesureitsclosed.html`,
    category: 'other'
  },
  {
    id: 'clmanagod',
    title: 'managod',
    thumbnail: 'https://media.rawg.io/media/games/man/managod.jpg',
    url: `${BASE_URL}clmanagod.html`,
    category: 'other'
  },
  {
    id: 'clmario3',
    title: 'mario3',
    thumbnail: 'https://media.rawg.io/media/games/mar/mario3.jpg',
    url: `${BASE_URL}clmario3.html`,
    category: 'other'
  },
  {
    id: 'clmarioandluigisuperstarsaga',
    title: 'marioandluigisuperstarsaga',
    thumbnail: 'https://media.rawg.io/media/games/mar/marioandluigisuperstarsaga.jpg',
    url: `${BASE_URL}clmarioandluigisuperstarsaga.html`,
    category: 'other'
  },
  {
    id: 'clmariocombat',
    title: 'mariocombat',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariocombat.jpg',
    url: `${BASE_URL}clmariocombat.html`,
    category: 'other'
  },
  {
    id: 'clmariogolf',
    title: 'mariogolf',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariogolf.jpg',
    url: `${BASE_URL}clmariogolf.html`,
    category: 'other'
  },
  {
    id: 'clmariokart64',
    title: 'mariokart64',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariokart64.jpg',
    url: `${BASE_URL}clmariokart64.html`,
    category: 'other'
  },
  {
    id: 'clmariokartds',
    title: 'mariokartds',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariokartds.jpg',
    url: `${BASE_URL}clmariokartds.html`,
    category: 'other'
  },
  {
    id: 'clmariokartsupercircuit',
    title: 'mariokartsupercircuit',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariokartsupercircuit.jpg',
    url: `${BASE_URL}clmariokartsupercircuit.html`,
    category: 'other'
  },
  {
    id: 'clmariomadness',
    title: 'mariomadness',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariomadness.jpg',
    url: `${BASE_URL}clmariomadness.html`,
    category: 'other'
  },
  {
    id: 'clmariominusrabbids',
    title: 'mariominusrabbids',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariominusrabbids.jpg',
    url: `${BASE_URL}clmariominusrabbids.html`,
    category: 'other'
  },
  {
    id: 'clmariopaint',
    title: 'mariopaint',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariopaint.jpg',
    url: `${BASE_URL}clmariopaint.html`,
    category: 'other'
  },
  {
    id: 'clmarioparty',
    title: 'marioparty',
    thumbnail: 'https://media.rawg.io/media/games/mar/marioparty.jpg',
    url: `${BASE_URL}clmarioparty.html`,
    category: 'other'
  },
  {
    id: 'clmarioparty2',
    title: 'marioparty2',
    thumbnail: 'https://media.rawg.io/media/games/mar/marioparty2.jpg',
    url: `${BASE_URL}clmarioparty2.html`,
    category: 'other'
  },
  {
    id: 'clmarioparty3',
    title: 'marioparty3',
    thumbnail: 'https://media.rawg.io/media/games/mar/marioparty3.jpg',
    url: `${BASE_URL}clmarioparty3.html`,
    category: 'other'
  },
  {
    id: 'clmariopartyds',
    title: 'mariopartyds',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariopartyds.jpg',
    url: `${BASE_URL}clmariopartyds.html`,
    category: 'other'
  },
  {
    id: 'clmariosmysterymeat',
    title: 'mariosmysterymeat',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariosmysterymeat.jpg',
    url: `${BASE_URL}clmariosmysterymeat.html`,
    category: 'other'
  },
  {
    id: 'clmariotennis',
    title: 'mariotennis',
    thumbnail: 'https://media.rawg.io/media/games/mar/mariotennis.jpg',
    url: `${BASE_URL}clmariotennis.html`,
    category: 'other'
  },
  {
    id: 'clmaskedforcesunlimited',
    title: 'maskedforcesunlimited',
    thumbnail: 'https://media.rawg.io/media/games/mas/maskedforcesunlimited.jpg',
    url: `${BASE_URL}clmaskedforcesunlimited.html`,
    category: 'other'
  },
  {
    id: 'clmastermindworldconquerer',
    title: 'mastermindworldconquerer',
    thumbnail: 'https://media.rawg.io/media/games/mas/mastermindworldconquerer.jpg',
    url: `${BASE_URL}clmastermindworldconquerer.html`,
    category: 'other'
  },
  {
    id: 'clmatrixrampage',
    title: 'matrixrampage',
    thumbnail: 'https://media.rawg.io/media/games/mat/matrixrampage.jpg',
    url: `${BASE_URL}clmatrixrampage.html`,
    category: 'other'
  },
  {
    id: 'clmattv2',
    title: 'mattv2',
    thumbnail: 'https://media.rawg.io/media/games/mat/mattv2.jpg',
    url: `${BASE_URL}clmattv2.html`,
    category: 'other'
  },
  {
    id: 'clmcfpsfbhd',
    title: 'mcfpsfbhd',
    thumbnail: 'https://media.rawg.io/media/games/mcf/mcfpsfbhd.jpg',
    url: `${BASE_URL}clmcfpsfbhd.html`,
    category: 'other'
  },
  {
    id: 'clmcraerally',
    title: 'mcraerally',
    thumbnail: 'https://media.rawg.io/media/games/mcr/mcraerally.jpg',
    url: `${BASE_URL}clmcraerally.html`,
    category: 'other'
  },
  {
    id: 'clmeatboy',
    title: 'meatboy',
    thumbnail: 'https://media.rawg.io/media/games/mea/meatboy.jpg',
    url: `${BASE_URL}clmeatboy.html`,
    category: 'other'
  },
  {
    id: 'clmeatboyflash',
    title: 'meatboyflash',
    thumbnail: 'https://media.rawg.io/media/games/mea/meatboyflash.jpg',
    url: `${BASE_URL}clmeatboyflash.html`,
    category: 'other'
  },
  {
    id: 'clmedalofhonor',
    title: 'medalofhonor',
    thumbnail: 'https://media.rawg.io/media/games/med/medalofhonor.jpg',
    url: `${BASE_URL}clmedalofhonor.html`,
    category: 'other'
  },
  {
    id: 'clmedievalshark',
    title: 'medievalshark',
    thumbnail: 'https://media.rawg.io/media/games/med/medievalshark.jpg',
    url: `${BASE_URL}clmedievalshark.html`,
    category: 'other'
  },
  {
    id: 'clmedievil',
    title: 'medievil',
    thumbnail: 'https://media.rawg.io/media/games/med/medievil.jpg',
    url: `${BASE_URL}clmedievil.html`,
    category: 'other'
  },
  {
    id: 'clmegachess',
    title: 'megachess',
    thumbnail: 'https://media.rawg.io/media/games/meg/megachess.jpg',
    url: `${BASE_URL}clmegachess.html`,
    category: 'other'
  },
  {
    id: 'clmegaman',
    title: 'megaman',
    thumbnail: 'https://media.rawg.io/media/games/meg/megaman.jpg',
    url: `${BASE_URL}clmegaman.html`,
    category: 'other'
  }
];

export const APPS: AppItem[] = [
  {
    id: 'discord',
    title: 'discord',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/discord.webp',
    url: 'https://discord.com/app',
    description: 'the place to talk and hang out.'
  },
  {
    id: 'spotify',
    title: 'spotify',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/spotify.webp',
    url: 'https://open.spotify.com',
    description: 'digital music, podcast, and video service.'
  },
  {
    id: 'youtube',
    title: 'youtube',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/youtube.webp',
    url: 'https://www.youtube.com',
    description: 'share your videos with friends, family, and the world.'
  },
  {
    id: 'monochrome',
    title: 'monochrome.tf',
    thumbnail: 'https://media.rawg.io/media/games/mon/monochrome.tf.jpg',
    url: 'https://monochrome.tf',
    description: 'minimalist music streaming.'
  },
  {
    id: 'geforce-now',
    title: 'geforce now',
    thumbnail: 'https://raw.githubusercontent.com/3kh0/3kh0-assets/main/icons/geforce-now.webp',
    url: 'https://play.geforcenow.com',
    description: 'cloud gaming service.'
  },
  {
    id: 'google',
    title: 'google',
    thumbnail: 'https://www.google.com/favicon.ico',
    url: 'https://www.google.com',
    description: 'search the world\'s information.'
  },
  {
    id: 'bing',
    title: 'bing',
    thumbnail: 'https://www.bing.com/favicon.ico',
    url: 'https://www.bing.com',
    description: 'microsoft search engine.'
  },
  {
    id: 'duckduckgo',
    title: 'duckduckgo',
    thumbnail: 'https://duckduckgo.com/favicon.ico',
    url: 'https://duckduckgo.com',
    description: 'the search engine that doesn\'t track you.'
  },
  {
    id: 'wikipedia',
    title: 'wikipedia',
    thumbnail: 'https://en.wikipedia.org/favicon.ico',
    url: 'https://en.wikipedia.org',
    description: 'the free encyclopedia.'
  }
];

export const MEDIA: MediaItem[] = [
  {
    id: 'm1',
    title: 'interstellar',
    thumbnail: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6vCU67oQvKFwh.jpg',
    url: 'https://vidsrc.to/embed/movie/tt0816692',
    type: 'movie'
  },
  {
    id: 'm2',
    title: 'the dark knight',
    thumbnail: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDp92SUNGvP9S7XyOAt.jpg',
    url: 'https://vidsrc.to/embed/movie/tt0468569',
    type: 'movie'
  },
  {
    id: 'm3',
    title: 'oppenheimer',
    thumbnail: 'https://image.tmdb.org/t/p/w500/8Gxv2mYrsUicMUPvU7YvHDl9z9l.jpg',
    url: 'https://vidsrc.to/embed/movie/tt15398776',
    type: 'movie'
  },
  {
    id: 'm4',
    title: 'spider-man: across the spider-verse',
    thumbnail: 'https://image.tmdb.org/t/p/w500/8Vtpi9p9vC4uH6SrluX0R6hVAp1.jpg',
    url: 'https://vidsrc.to/embed/movie/tt13975146',
    type: 'movie'
  },
  {
    id: 's1',
    title: 'lofi beats',
    thumbnail: 'https://i.ytimg.com/vi/jfKfPfyJRdk/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    type: 'music'
  },
  {
    id: 's2',
    title: 'synthwave radio',
    thumbnail: 'https://i.ytimg.com/vi/4xDzrJKXOOY/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/4xDzrJKXOOY',
    type: 'music'
  },
  {
    id: 's3',
    title: 'monochrome music',
    thumbnail: 'https://media.rawg.io/media/games/mon/monochrome-music.jpg',
    url: 'https://monochrome.tf',
    type: 'music'
  },
  {
    id: 'a1',
    title: 'anicrush',
    thumbnail: 'https://media.rawg.io/media/games/ani/anicrush.jpg',
    url: 'https://anicrush.to',
    type: 'movie'
  }
];
