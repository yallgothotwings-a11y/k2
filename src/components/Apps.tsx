import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, X } from 'lucide-react';
import { APPS } from '../constants';

export default function Apps() {
  const [search, setSearch] = useState('');
  const [selectedApp, setSelectedApp] = useState<string | null>(null);

  const filteredApps = APPS.filter(app => 
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  if (selectedApp) {
    const app = APPS.find(a => a.id === selectedApp);
    return (
      <div className="h-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedApp(null)}
              className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 text-xs tracking-widest"
            >
              <X size={14} /> exit apps
            </button>
            <div className="h-4 w-[1px] bg-white/10" />
            <a 
              href={app?.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold"
            >
              open in new tab <ExternalLink size={10} />
            </a>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tighter">{app?.title}</h2>
        </div>
        <div className="flex-1 bg-black border-k2 rounded-2xl overflow-hidden shadow-2xl">
          <iframe 
            src={app?.url} 
            className="w-full h-full border-none bg-white"
            title={app?.title}
            allow="camera; microphone; geolocation; clipboard-read; clipboard-write"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-7xl mx-auto">
      <div className="text-center space-y-2">
        <h2 className="text-7xl font-black text-white tracking-tighter">apps</h2>
        <p className="text-white/20 text-xs tracking-[0.3em] uppercase font-bold">
          essential tools & platforms
        </p>
      </div>

      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-k2-gray border border-white/5 rounded-xl py-4 px-6 focus:outline-none focus:border-white/10 transition-all text-white text-center placeholder:text-white/10"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredApps.map((app) => (
          <motion.div
            key={app.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            className="group bg-k2-gray border-k2 rounded-2xl p-6 cursor-pointer transition-all hover:border-white/20 hover:shadow-2xl hover:shadow-white/5 flex items-center gap-6"
            onClick={() => setSelectedApp(app.id)}
          >
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-black/40 flex-shrink-0">
              <img 
                src={app.thumbnail} 
                alt={app.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-white font-bold tracking-tight group-hover:text-white transition-colors">{app.title}</h3>
              <p className="text-white/40 text-xs line-clamp-1 mt-1">{app.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredApps.length === 0 && (
        <div className="text-center py-20 text-white/5 italic tracking-[0.5em] text-xs uppercase">
          no records found in the archives.
        </div>
      )}
    </div>
  );
}
