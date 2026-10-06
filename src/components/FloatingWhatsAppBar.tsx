import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data/standaloneHtml';

export const FloatingWhatsAppBar: React.FC = () => {
  return (
    <aside aria-label="Action rapide WhatsApp" className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-neutral-800 shadow-2xl">
      <div className="max-w-md mx-auto">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/60 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-95"
        >
          <div className="relative flex items-center justify-center">
            <MessageCircle className="w-5 h-5 fill-black shrink-0 transition-transform duration-200 group-hover:rotate-12" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-white animate-ping"></span>
          </div>
          <span className="tracking-tight uppercase font-black text-xs sm:text-sm">
            Commander à 20 MAD sur WhatsApp
          </span>
        </a>
      </div>
    </aside>
  );
};
