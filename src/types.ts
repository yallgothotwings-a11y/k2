export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: string;
}

export interface MediaItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  type: 'movie' | 'music';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  userId: string;
  timestamp: any;
  userName: string;
}

export interface AppItem {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  description: string;
}

export type View = 'games' | 'unblocker' | 'media' | 'ai' | 'settings' | 'chat' | 'apps' | 'feed' | 'learn';
