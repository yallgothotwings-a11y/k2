import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Music, X, Play } from 'lucide-react';
import { MEDIA } from '../constants';

export default function Media() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  const hubs = [
    { 
      id: 'music', 
      title: 'monochrome.tf', 
      url: 'https://monochrome.tf', 
      icon: Music,
      description: 'minimalist music stream. strictly monochromatic.'
    },
    { 
      id: 'movies', 
      title: 'xprime.su', 
      url: 'https://xprime.su/', 
      icon: Film,
      description: 'unrestricted movie archive. watch everything.'
    },
    {
      id: 'anime',
      title: 'anicrush.to',
      url: 'https://anicrush.to/',
      icon: Play,
      description: 'premium anime streaming. subbed and dubbed.'
    }
  ];

  if (activeUrl) {
    return (
      <div className="h-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => {
                setActiveUrl(null);
                setActiveTitle(null);
              }}
              className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 text-xs tracking-widest"
            >
              <X size={14} /> exit hub
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
          </div>
          <div className="text-[10px] text-white/20 truncate max-w-md tracking-[0.3em] uppercase font-bold">
            {activeTitle || 'streaming'}: {activeUrl}
          </div>
        </div>
        <div className="flex-1 bg-black border-k2 rounded-2xl overflow-hidden shadow-2xl">
          <iframe 
            src={activeUrl} 
            className="w-full h-full border-none"
            title="media-frame"
            allowFullScreen
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto mt-12 space-y-24">
      <div className="text-center space-y-4">
        <h2 className="text-7xl font-black text-white tracking-tighter">media</h2>
        <p className="text-white/20 text-xs tracking-[0.5em] uppercase font-bold">watch stuff</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {hubs.map((hub) => (
          <motion.div
            key={hub.id}
            whileHover={{ y: -8 }}
            onClick={() => {
              setActiveUrl(hub.url);
              setActiveTitle(hub.title);
            }}
            className="group relative bg-k2-gray border-k2 p-10 rounded-3xl cursor-pointer overflow-hidden transition-all hover:border-white/20"
          >
            <div className="relative z-10 space-y-6">
              <div className="inline-flex p-4 rounded-2xl bg-white/5 text-white group-hover:bg-white group-hover:text-black transition-all duration-500">
                <hub.icon size={32} strokeWidth={1.5} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{hub.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{hub.description}</p>
              </div>
              <div className="pt-4">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20 group-hover:text-white transition-colors">
                  connect to stream →
                </span>
              </div>
            </div>
            
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700">
              <hub.icon size={200} strokeWidth={1} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-white/5" />
          <h3 className="text-xs font-bold tracking-[0.5em] uppercase text-white/20">curated archives</h3>
          <div className="h-[1px] flex-1 bg-white/5" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {MEDIA.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              onClick={() => {
                setActiveUrl(item.url);
                setActiveTitle(item.title);
              }}
              className="group relative aspect-[2/3] bg-k2-gray border-k2 rounded-2xl overflow-hidden cursor-pointer transition-all hover:border-white/20"
            >
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-2 mb-1">
                  {item.type === 'movie' ? <Film size={10} className="text-white/40" /> : <Music size={10} className="text-white/40" />}
                  <span className="text-[8px] font-bold tracking-widest uppercase text-white/40">{item.type}</span>
                </div>
                <h4 className="text-xs font-bold text-white leading-tight">{item.title}</h4>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                <div className="p-3 rounded-full bg-white text-black">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
