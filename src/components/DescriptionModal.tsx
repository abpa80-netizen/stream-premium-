import React from 'react';
import { X, MessageCircle, Film, Sparkles } from 'lucide-react';
import { WHATSAPP_URL } from '../data/standaloneHtml';

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DescriptionModal: React.FC<DescriptionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-[#141418] border border-neutral-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 transition-colors"
          aria-label="Fermer la description"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 border border-red-800/60 text-[#E50914] text-xs font-bold uppercase">
          <Film className="w-3.5 h-3.5" />
          Catalogue & Description Complète
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Tout Votre Divertissement Réuni en 1 Application
        </h3>

        {/* Captivating description text */}
        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
          Marre de chercher vos séries et films préférés sur plusieurs plateformes ? Retrouvez l'intégralité du cinéma mondial réuni au même endroit : séries primées, récents films, documentaires exclusifs et spectacles d'humour. Emportez tout votre divertissement partout avec vous, en voyage, dans les transports ou pendant vos pauses.
        </p>

        {/* Price callout inside modal */}
        <div className="bg-[#1b1b22] border border-amber-500/30 rounded-2xl p-4 flex items-center justify-between">
          <div>
            <div className="text-xs text-neutral-400">Offre Spéciale Unique</div>
            <div className="text-lg font-black text-amber-400">20 MAD seulement</div>
          </div>
          <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/60">
            Accès à vie
          </span>
        </div>

        {/* CTA Button avec hover réactif */}
        <div className="pt-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-sm sm:text-base py-4 px-6 rounded-2xl shadow-xl shadow-emerald-950/50 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span>Commander sur WhatsApp à 20 MAD</span>
          </a>
        </div>
      </div>
    </div>
  );
};
