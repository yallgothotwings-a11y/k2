import React, { useState, useRef } from 'react';
import { Globe, Shield, ArrowRight, Code, Play, X } from 'lucide-react';

export default function Unblocker() {
  const [url, setUrl] = useState('');
  const [activeUrl, setActiveUrl] = useState<string | null>(null);
  const [htmlCode, setHtmlCode] = useState('');
  const [isRunningHtml, setIsRunningHtml] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleGo = () => {
    if (!url) return;
    let target = url;
    if (!target.startsWith('http')) {
      target = 'https://' + target;
    }
    setActiveUrl(target);
  };

  const runHtml = () => {
    if (!htmlCode) return;
    setIsRunningHtml(true);
    setTimeout(() => {
      if (iframeRef.current) {
        const doc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
        if (doc) {
          doc.open();
          doc.write(htmlCode);
          doc.close();
        }
      }
    }, 100);
  };

  if (activeUrl) {
    return (
      <div className="h-full flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setActiveUrl(null)}
              className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 text-xs tracking-widest"
            >
              ← exit gateway
            </button>
            <div className="h-4 w-[1px] bg-white/10" />
            <a 
              href={activeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold"
            >
              new tab
            </a>
          </div>
          <div className="text-[10px] text-white/20 truncate max-w-md tracking-widest uppercase font-bold">tunneling: {activeUrl}</div>
        <div className="flex-1 bg-white rounded-lg overflow-hidden">
          <iframe 
            src={activeUrl} 
            className="w-full h-full border-none"
            title="proxy-frame"
          />
        </div>
      </div>
    );
  }

  if (isRunningHtml) {
    return (
      <div className="h-full flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setIsRunningHtml(false)}
            className="text-white hover:text-gray-400 transition-colors flex items-center gap-2 text-xs tracking-widest"
          >
            <X size={14} /> exit runner
          </button>
          <div className="text-[10px] text-white/20 tracking-widest uppercase font-bold">executing custom source</div>
        </div>
        <div className="flex-1 bg-white rounded-lg overflow-hidden">
          <iframe 
            ref={iframeRef}
            className="w-full h-full border-none"
            title="html-runner"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-7xl font-black text-white tracking-tighter">unblocker</h2>
        <p className="text-white/20 text-xs tracking-[0.5em] uppercase font-bold">unblock stuff if u want</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* URL Proxy */}
        <div className="bg-k2-gray border-k2 p-8 rounded-3xl space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 text-white">
              <Globe size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">web proxy</h3>
              <p className="text-white/40 text-xs">tunnel through restricted networks.</p>
            </div>
          </div>
          
          <div className="relative group">
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleGo()}
              placeholder="enter url..."
              className="w-full bg-black/40 border border-white/5 rounded-xl py-3 px-5 focus:outline-none focus:border-white/20 transition-all text-white text-sm"
            />
            <button
              onClick={handleGo}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black p-1.5 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {['google.com', 'youtube.com', 'discord.com', 'spotify.com'].map((site) => (
              <button
                key={site}
                onClick={() => {
                  setUrl(site);
                  setActiveUrl('https://' + site);
                }}
                className="px-3 py-1 bg-white/5 border border-white/5 rounded-md text-[8px] text-white/40 hover:text-white hover:bg-white/10 transition-all font-bold tracking-widest uppercase"
              >
                {site}
              </button>
            ))}
          </div>
        </div>

        {/* HTML Runner */}
        <div className="bg-k2-gray border-k2 p-8 rounded-3xl space-y-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 text-white">
              <Code size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white tracking-tight">html runner</h3>
              <p className="text-white/40 text-xs">execute custom source code.</p>
            </div>
          </div>

          <textarea
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
            placeholder="paste html code here..."
            className="w-full h-32 bg-black/40 border border-white/5 rounded-xl py-3 px-5 focus:outline-none focus:border-white/20 transition-all text-white text-xs font-mono resize-none"
          />

          <button
            onClick={runHtml}
            className="w-full bg-white text-black py-3 rounded-xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors"
          >
            <Play size={14} fill="currentColor" /> execute source
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-12 pt-12">
        <div className="flex flex-col items-center gap-2 opacity-20">
          <Shield size={24} className="text-white" />
          <span className="text-[8px] uppercase tracking-[0.4em]">private</span>
        </div>
        <div className="flex flex-col items-center gap-2 opacity-20">
          <Globe size={24} className="text-white" />
          <span className="text-[8px] uppercase tracking-[0.4em]">unrestricted</span>
        </div>
      </div>
    </div>
  );
}
