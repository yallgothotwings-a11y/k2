import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Gamepad2, 
  Sparkles, 
  Settings as SettingsIcon,
  Layers,
  Activity,
  Home,
  Wrench,
  MessageSquare,
  Mountain,
  BookOpen
} from 'lucide-react';
import Games from './components/Games';
import Unblocker from './components/Unblocker';
import Media from './components/Media';
import AIChat from './components/AIChat';
import Chat from './components/Chat';
import Settings from './components/Settings';
import Learn from './components/Learn';
import { View } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<View | 'home'>('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNavClick = (id: View | 'home') => {
    if (id === currentView || isTransitioning) return;
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentView(id);
    }, 600);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  useEffect(() => {
    const handlePanic = (e: KeyboardEvent) => {
      const savedKey = localStorage.getItem('k2-panic-key') || '~';
      if (e.key === savedKey) {
        window.location.href = 'https://classroom.google.com';
      }
    };

    window.addEventListener('keydown', handlePanic);
    return () => window.removeEventListener('keydown', handlePanic);
  }, []);

  const navItems = [
    { id: 'home', icon: Home, label: 'home' },
    { id: 'games', icon: Gamepad2, label: 'games' },
    { id: 'media', icon: Layers, label: 'media' },
    { id: 'chat', icon: MessageSquare, label: 'chat' },
    { id: 'unblocker', icon: Wrench, label: 'unblocker' },
    { id: 'ai', icon: Sparkles, label: 'ai' },
    { id: 'learn', icon: BookOpen, label: 'learn' },
    { id: 'settings', icon: SettingsIcon, label: 'settings' },
  ];

  return (
    <div className="flex min-h-screen bg-k2-black overflow-hidden selection:bg-white selection:text-black">
      {/* main content */}
      <main className="flex-1 relative overflow-y-auto p-8 lg:p-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="h-full min-h-[calc(100vh-128px)]"
          >
            {currentView === 'home' && (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-8 mt-20">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative"
                >
                  <Mountain size={120} className="text-white opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-8xl font-black text-white tracking-tighter">k2</h1>
                  </div>
                </motion.div>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-white/20 text-sm tracking-[0.5em] uppercase max-w-md mx-auto"
                >
                  i like mountains
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-4 pt-8"
                >
                  <button 
                    onClick={() => handleNavClick('games')}
                    className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
                  >
                    explore archives
                  </button>
                  <button 
                    onClick={() => handleNavClick('unblocker')}
                    className="px-8 py-3 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 transition-all"
                  >
                    open gateway
                  </button>
                </motion.div>
              </div>
            )}
            {currentView === 'games' && <Games />}
            {currentView === 'unblocker' && <Unblocker />}
            {currentView === 'media' && <Media />}
            {currentView === 'chat' && <Chat />}
            {currentView === 'ai' && <AIChat />}
            {currentView === 'learn' && <Learn />}
            {currentView === 'settings' && <Settings />}
          </motion.div>
        </AnimatePresence>

        {/* background noise/texture */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </main>

      {/* sidebar on the right */}
      <aside className="w-20 border-l border-white/5 flex flex-col items-center py-8 gap-12 z-50 bg-k2-black/80 backdrop-blur-md">
        <div className="text-white opacity-20">
          <Activity size={24} />
        </div>
        
        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id as any)}
              className={`relative group p-3 rounded-xl transition-all duration-500 ${
                currentView === item.id 
                  ? 'bg-white/5 text-white' 
                  : 'text-white/20 hover:text-white/60'
              }`}
            >
              <item.icon size={20} strokeWidth={1.5} />
              <span className="absolute right-full mr-4 px-2 py-1 bg-white text-black text-[8px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </span>
              {currentView === item.id && (
                <motion.div 
                  layoutId="active-nav"
                  className="absolute -right-0.5 top-2 bottom-2 w-0.5 bg-white rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto text-[8px] text-white/10 rotate-180 [writing-mode:vertical-lr] tracking-[0.5em] font-bold uppercase">
          k2 . system
        </div>
      </aside>

      {/* Mountain Transition Overlay */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: isTransitioning ? '-10%' : '100%' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[100] pointer-events-none flex flex-col justify-end"
      >
        <svg viewBox="0 0 1200 1200" className="w-full h-[150vh] text-k2-black fill-current drop-shadow-[0_-20px_50px_rgba(255,255,255,0.15)]" preserveAspectRatio="none">
          <path d="M0,1200 L0,400 L150,200 L300,350 L500,100 L700,300 L900,150 L1050,350 L1200,250 L1200,1200 Z" />
        </svg>
      </motion.div>
    </div>
  );
}
