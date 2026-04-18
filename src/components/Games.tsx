import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Play, X, Image as ImageIcon } from 'lucide-react';
import { GAMES } from '../constants';

export default function Games() {
  const [search, setSearch] = useState('');
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const filteredGames = GAMES.filter(game => 
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedGame) {
    const game = GAMES.find(g => g.id === selectedGame);
    return (
      <div className="h-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedGame(null)}
              className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 text-xs tracking-widest"
            >
              <X size={14} /> exit archives
            </button>
            <div className="h-4 w-[1px] bg-white/10" />
            <button 
              onClick={() => {
                const iframe = document.querySelector('iframe');
                if (iframe?.requestFullscreen) iframe.requestFullscreen();
              }}
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold"
            >
              full screen
            </button>
            <div className="h-4 w-[1px] bg-white/10" />
            <a 
              href={game?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold"
            >
              new tab
            </a>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tighter">{game?.title}</h2>
        </div>
        <div className="flex-1 bg-black border-k2 rounded-2xl overflow-hidden shadow-2xl">
          <iframe 
            src={game?.url} 
            className="w-full h-full border-none"
            title={game?.title}
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-7xl font-black text-white tracking-tighter">games</h2>
        <p className="text-white/20 text-xs tracking-[0.3em] uppercase font-bold">
          showing all {GAMES.length} games
        </p>
      </div>

      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-k2-gray border border-white/5 rounded-xl py-4 px-6 focus:outline-none focus:border-white/10 transition-all text-white text-center placeholder:text-white/10"
        />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {filteredGames.map((game) => (
          <motion.div
            key={game.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            className="group relative aspect-square bg-k2-gray border-k2 rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 flex items-center justify-center p-4 text-center"
            onClick={() => setSelectedGame(game.id)}
          >
            <span className="text-xs font-bold text-white/60 group-hover:text-white transition-colors leading-tight line-clamp-3">{game.title}</span>
          </motion.div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-20 text-white/5 italic tracking-[0.5em] text-xs uppercase">
          no records found in the archives.
        </div>
      )}
    </div>
  );
}
