import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data/standaloneHtml';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0b0b0b] border-t border-neutral-900 py-6 px-4 text-center text-xs text-neutral-400 space-y-2">
      <div className="flex items-center justify-center gap-4 text-xs font-semibold">
        <a href="#" className="hover:text-white transition-colors">Accueil</a>
        <span>·</span>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#25D366] hover:text-[#1ebd5a] transition-colors flex items-center gap-1"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Support WhatsApp</span>
        </a>
      </div>
      <p className="text-[11px] text-neutral-400">
        © {new Date().getFullYear()} STREAM PREMIUM · Compatible exclusivement smartphones et tablettes Android
      </p>
    </footer>
  );
};
