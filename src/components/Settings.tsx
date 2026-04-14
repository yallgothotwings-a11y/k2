import React, { useState, useEffect } from 'react';
import { Shield, Keyboard, ExternalLink } from 'lucide-react';

export default function Settings() {
  const [panicKey, setPanicKey] = useState('~');
  const [isListening, setIsListening] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('k2-panic-key');
    if (saved) setPanicKey(saved);
  }, []);

  const startListening = () => {
    setIsListening(true);
  };

  useEffect(() => {
    if (!isListening) return;

    const handleKey = (e: KeyboardEvent) => {
      setPanicKey(e.key);
      localStorage.setItem('k2-panic-key', e.key);
      setIsListening(false);
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isListening]);

  const handleAboutBlank = () => {
    const win = window.open('about:blank', '_blank');
    if (!win) return;
    
    const iframe = win.document.createElement('iframe');
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.src = window.location.href;
    
    win.document.body.appendChild(iframe);
    win.document.body.style.margin = '0';
    win.document.body.style.padding = '0';
    win.document.title = 'Classes';
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3 tracking-tighter">
          <Shield className="text-white/40" />
          security & customization
        </h2>
      </div>

      <div className="space-y-8">
        <div className="bg-k2-gray border-k2 p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Keyboard size={18} className="text-white/40" />
                panic key
              </h3>
              <p className="text-[10px] text-white/20 tracking-widest uppercase">instantly redirects to classroom.google.com</p>
            </div>
            <button
              onClick={startListening}
              className={`px-6 py-2 rounded-lg border transition-all text-xs tracking-widest ${
                isListening 
                  ? 'bg-white border-white text-black animate-pulse' 
                  : 'bg-transparent border-white/10 text-white hover:bg-white/5'
              }`}
            >
              {isListening ? 'listening...' : panicKey}
            </button>
          </div>
        </div>

        <div className="bg-k2-gray border-k2 p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Shield size={18} className="text-white/40" />
                about:blank cloak
              </h3>
              <p className="text-[10px] text-white/20 tracking-widest uppercase">open in a hidden tab to bypass history</p>
            </div>
            <button
              onClick={handleAboutBlank}
              className="px-6 py-2 rounded-lg border border-white/10 text-white hover:bg-white/5 transition-all text-xs tracking-widest"
            >
              launch cloak
            </button>
          </div>
        </div>

        <div className="bg-k2-gray border-k2 p-6 rounded-xl space-y-4">
          <h3 className="text-white font-bold">about k2</h3>
          <div className="text-sm text-white/40 space-y-4 leading-relaxed">
            <p>
              uhhh i was bored
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:underline flex items-center gap-1 text-xs tracking-widest">
                github <ExternalLink size={10} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
