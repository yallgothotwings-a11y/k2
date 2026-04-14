import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, LogIn, Loader2, Hash } from 'lucide-react';
import { 
  collection, 
  query, 
  orderBy, 
  limit, 
  onSnapshot, 
  addDoc, 
  serverTimestamp 
} from 'firebase/firestore';
import { signInAnonymously, onAuthStateChanged, User as FirebaseUser, updateProfile } from 'firebase/auth';
import { db, auth } from '../firebase';
import { ChatMessage } from '../types';

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [username, setUsername] = useState('');
  const [isJoining, setIsJoining] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user || !user.displayName) return;

    const q = query(
      collection(db, 'messages'),
      orderBy('timestamp', 'asc'),
      limit(100)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as ChatMessage[];
      setMessages(msgs);
      
      setTimeout(() => {
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, 100);
    }, (error) => {
      console.error("Firestore error:", error);
    });

    return () => unsubscribe();
  }, [user?.displayName]);

  const handleJoin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || isJoining) return;

    setIsJoining(true);
    setLoginError(null);
    try {
      const cred = await signInAnonymously(auth);
      await updateProfile(cred.user, {
        displayName: username.trim().toLowerCase()
      });
      setUser({ ...cred.user, displayName: username.trim().toLowerCase() } as FirebaseUser);
    } catch (error: any) {
      if (error.code === 'auth/admin-restricted-operation') {
        setLoginError('anonymous auth is disabled. please enable it in the firebase console under authentication > sign-in method.');
      } else {
        setLoginError('failed to join. please try again.');
        console.error("Join error:", error);
      }
    } finally {
      setIsJoining(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !user || sending) return;

    setSending(true);
    try {
      await addDoc(collection(db, 'messages'), {
        text: message.trim(),
        userId: user.uid,
        userName: user.displayName || 'anonymous',
        timestamp: serverTimestamp()
      });
      setMessage('');
    } catch (error) {
      console.error("Send error:", error);
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <Loader2 className="animate-spin text-white/20" size={32} />
      </div>
    );
  }

  if (!user || !user.displayName) {
    return (
      <div className="max-w-md mx-auto h-full flex flex-col items-center justify-center text-center space-y-8">
        <div className="p-6 rounded-full bg-white/5">
          <Hash size={64} className="text-white/20" />
        </div>
        <div className="space-y-2">
          <h2 className="text-3xl font-black text-white tracking-tighter">community access</h2>
          <p className="text-white/40 text-sm leading-relaxed">
            enter a handle to join the community stream. 
            no account required. strictly anonymous.
          </p>
        </div>
        
        <form onSubmit={handleJoin} className="w-full space-y-4">
          <input
            type="text"
            placeholder="choose a handle..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            maxLength={20}
            className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 px-6 focus:outline-none focus:border-white/10 transition-all text-white text-center placeholder:text-white/10"
          />
          <button 
            type="submit"
            disabled={!username.trim() || isJoining}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all disabled:opacity-50"
          >
            {isJoining ? <Loader2 className="animate-spin" size={20} /> : 'join stream'}
          </button>
        </form>

        <AnimatePresence>
          {loginError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="p-4 bg-white/5 border border-white/5 rounded-2xl"
            >
              <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold leading-relaxed">
                {loginError}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto h-full flex flex-col gap-6">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-black text-white tracking-tighter">talk to itha users</h2>
        <p className="text-white/20 text-xs tracking-[0.5em] uppercase">real-time connection • as {user.displayName}</p>
      </div>

      <div className="flex-1 bg-k2-gray border-k2 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
        <div 
          ref={scrollRef}
          className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth"
        >
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center text-center py-20 text-white/5 italic tracking-[0.5em] text-xs uppercase">
              the stream is empty. be the first to speak.
            </div>
          ) : (
            messages.map((msg) => (
              <motion.div 
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex flex-col ${msg.userId === user.uid ? 'items-end' : 'items-start'}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                    {msg.userName}
                  </span>
                </div>
                <div className={`px-4 py-2 rounded-2xl text-sm max-w-[80%] ${
                  msg.userId === user.uid 
                    ? 'bg-white text-black font-medium' 
                    : 'bg-white/5 text-white border border-white/5'
                }`}>
                  {msg.text}
                </div>
              </motion.div>
            ))
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-4 border-t border-white/5 bg-black/20">
          <div className="relative">
            <input
              type="text"
              placeholder="type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={sending}
              className="w-full bg-white/5 border border-white/5 rounded-xl py-4 px-6 focus:outline-none focus:border-white/10 transition-all text-white pr-16 disabled:opacity-50"
            />
            <button 
              type="submit"
              disabled={sending || !message.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-lg bg-white text-black hover:bg-gray-200 transition-all disabled:opacity-50 disabled:hover:bg-white"
            >
              {sending ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
