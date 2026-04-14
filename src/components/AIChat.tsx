import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Terminal as TerminalIcon } from 'lucide-react';
import { Message } from '../types';

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'welcome to k2. i am your assistant. what do you seek?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.toLowerCase();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash-exp',
        contents: userMsg,
        config: {
          systemInstruction: "you are 'k2 ai', a minimalist, helpful, and slightly rebellious assistant for a high-performance portal. respond exclusively in lowercase. no capital letters ever. be concise and authentic. you help users find games, movies, or bypass filters. if asked for excuses, be clever and peer-to-peer focused.",
        }
      });

      const text = response.text?.toLowerCase() || 'the void remains silent.';
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'connection lost.' }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto border-k2 bg-k2-gray/40 rounded-lg overflow-hidden backdrop-blur-sm">
      <div className="p-4 border-b border-white/5 flex items-center gap-2 bg-white/5">
        <TerminalIcon size={18} className="text-white" />
        <span className="text-white font-bold tracking-widest">k2 ai</span>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-white/10 border border-white/10 text-white' 
                  : 'bg-black/60 border border-white/5 text-gray-400 terminal-text'
              }`}>
                {msg.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/20 text-[10px] animate-pulse tracking-widest"
          >
            k2 ai is thinking...
          </motion.div>
        )}
      </div>

      <div className="p-4 border-t border-white/5 bg-black/60">
        <div className="relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="ask k2..."
            className="w-full bg-black border border-white/10 rounded-full py-2 px-4 pr-12 focus:outline-none focus:border-white/30 transition-colors text-white placeholder:text-white/10"
          />
          <button
            onClick={handleSend}
            disabled={isTyping}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-white hover:text-gray-400 transition-colors disabled:opacity-50"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
