import React from 'react';
import { MessageCircle, Smartphone } from 'lucide-react';
import { WHATSAPP_URL } from '../data/standaloneHtml';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-neutral-800/80 px-4 sm:px-6 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-[#E50914] transition-colors duration-200">
            <span className="text-[#E50914]">STREAM</span> PREMIUM
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-red-950/70 border border-red-800/60 text-red-300 px-2 py-0.5 rounded">
            <Smartphone className="w-3 h-3" />
            Android
          </span>
        </a>

        {/* Action Button WhatsApp with subtle hover */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all duration-200 transform hover:scale-[1.03] hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95 shadow-md"
        >
          <MessageCircle className="w-4 h-4 fill-black transition-transform duration-200 group-hover:rotate-6" />
          <span>Commander (20 MAD)</span>
        </a>
      </div>
    </header>
  );
};
