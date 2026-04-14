import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Play, X } from 'lucide-react';

// Using popular TikTok videos for the feed
const FEED_ITEMS = [
  {
    id: '1',
    type: 'tiktok',
    videoId: '6862153058223197445',
    title: 'M to the B 🐝',
    author: '@bellapoarch',
    likes: '66.4M',
    comments: '2.1M'
  },
  {
    id: '2',
    type: 'tiktok',
    videoId: '6768504823336803589',
    title: 'They rejected my application to Hogwarts but I still found a way to be a wizard. 🧹',
    author: '@zachking',
    likes: '25.3M',
    comments: '540K'
  },
  {
    id: '3',
    type: 'tiktok',
    videoId: '6876424979061804294',
    title: 'Morning vibe 🛹🧃',
    author: '@420doggface208',
    likes: '14.2M',
    comments: '180K'
  },
  {
    id: '4',
    type: 'tiktok',
    videoId: '7033501657805901061',
    title: 'Real Life Squid Game for $456,000! 🦑',
    author: '@mrbeast',
    likes: '38.1M',
    comments: '420K'
  },
  {
    id: '5',
    type: 'tiktok',
    videoId: '6831005881471634693',
    title: 'Wipe it down 🧽',
    author: '@willsmith',
    likes: '19.8M',
    comments: '105K'
  },
  {
    id: '6',
    type: 'tiktok',
    videoId: '6787900405105265925',
    title: 'Renegade 💃',
    author: '@charlidamelio',
    likes: '35.1M',
    comments: '1.2M'
  },
  {
    id: '7',
    type: 'tiktok',
    videoId: '7142436440409246981',
    title: 'Corn kid 🌽',
    author: '@schmoyoho',
    likes: '12.5M',
    comments: '130K'
  },
  {
    id: '8',
    type: 'tiktok',
    videoId: '6916892518485200133',
    title: 'Sea shanty time 🌊',
    author: '@nathanevanss',
    likes: '8.2M',
    comments: '95K'
  }
];

export default function Feed() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  if (selectedVideo) {
    const video = FEED_ITEMS.find(v => v.id === selectedVideo);
    return (
      <div className="h-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 text-xs tracking-widest"
            >
              <X size={14} /> exit video
            </button>
          </div>
          <h2 className="text-xl font-bold text-white tracking-tighter">{video?.author}</h2>
        </div>
        <div className="flex-1 bg-black border-k2 rounded-2xl overflow-hidden shadow-2xl flex justify-center items-center">
          <div className="w-full max-w-[400px] h-full relative">
            <iframe
              src={`https://www.tiktok.com/embed/v2/${video?.videoId}`}
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl font-black text-white tracking-tighter">feed</h2>
          <p className="text-white/40 text-xs tracking-[0.2em] uppercase mt-2">trending videos</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {FEED_ITEMS.map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedVideo(item.id)}
            className="group relative aspect-[9/16] bg-k2-gray border-k2 rounded-2xl overflow-hidden hover:border-white/20 transition-all text-left"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 transition-transform">
                <Play className="text-white ml-1" size={20} fill="currentColor" />
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-black/90 to-transparent">
              <h3 className="text-white font-bold text-lg truncate">{item.author}</h3>
              <p className="text-white/60 text-xs truncate mt-1">{item.title}</p>
              <div className="flex gap-4 mt-3 text-white/40 text-[10px] font-bold tracking-wider">
                <span>{item.likes} LIKES</span>
                <span>{item.comments} COMMENTS</span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
