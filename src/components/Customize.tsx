import React from 'react';
import { Palette, Image as ImageIcon } from 'lucide-react';

interface CustomizeProps {
  themeColor: string;
  setThemeColor: (color: string) => void;
  background: string;
  setBackground: (bg: string) => void;
}

export default function Customize({ themeColor, setThemeColor, background, setBackground }: CustomizeProps) {
  const handleThemeChange = (color: string) => {
    setThemeColor(color);
    localStorage.setItem('k2-theme-color', color);
  };

  const handleBgChange = (bg: string) => {
    setBackground(bg);
    localStorage.setItem('k2-background', bg);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="border-b border-white/10 pb-4">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3 tracking-tighter">
          <Palette className="text-white/40" />
          customize
        </h2>
        <p className="text-white/40 text-sm mt-2 tracking-widest uppercase">personalize your k2 experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-k2-gray border-k2 p-6 rounded-xl space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2">
            <Palette size={18} className="text-white/40" />
            theme color
          </h3>
          <div className="flex gap-4">
            {['bg-white', 'bg-blue-500', 'bg-purple-500', 'bg-rose-500'].map((color, i) => (
              <button 
                key={i} 
                onClick={() => handleThemeChange(color)}
                className={`w-8 h-8 rounded-full ${color} border-2 transition-transform ${themeColor === color ? 'border-white scale-110' : 'border-white/20 hover:scale-110'}`} 
              />
            ))}
          </div>
        </div>

        <div className="bg-k2-gray border-k2 p-6 rounded-xl space-y-4">
          <h3 className="text-white font-bold flex items-center gap-2">
            <ImageIcon size={18} className="text-white/40" />
            background
          </h3>
          <div className="space-y-2">
            <button 
              onClick={() => handleBgChange('noise')}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-xs tracking-widest ${background === 'noise' ? 'border-white text-white bg-white/5' : 'border-white/10 text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              noise (default)
            </button>
            <button 
              onClick={() => handleBgChange('solid')}
              className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-xs tracking-widest ${background === 'solid' ? 'border-white text-white bg-white/5' : 'border-white/10 text-white/40 hover:bg-white/5 hover:text-white'}`}
            >
              solid black
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
