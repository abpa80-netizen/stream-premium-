import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck, Eye, Lock, Clock, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { WHATSAPP_URL } from '../data/standaloneHtml';

interface HeroProps {
  onOpenDescription: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDescription }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 3 Placeholders d'images pour le catalogue et les interfaces
  const slides = [
    {
      id: "hero-slide-1",
      title: "Catalogue Films & Séries",
      badge: "Catalogue +3 700 Titres",
      sub: "Films récents, séries et animes en VF/VOSTFR",
      src: "/src/assets/images/screenshot_catalog_1791308241198.jpg",
      alt: "Interface du catalogue STREAM PREMIUM",
    },
    {
      id: "hero-slide-2",
      title: "Lecteur 4K & Mode Hors-Ligne",
      badge: "Ultra HD & Téléchargement",
      sub: "Visionnage fluide et téléchargement 1-clic pour vos trajets",
      src: "/src/assets/images/screenshot_player_1791308251674.jpg",
      alt: "Lecteur vidéo 4K et téléchargement hors-ligne",
    },
    {
      id: "hero-slide-3",
      title: "Espace Jeunesse & Sécurité",
      badge: "100% Sans Pub & Protégé",
      sub: "Dessins animés et contenus tous publics sans interruption",
      src: "/src/assets/images/screenshot_kids_1791308261932.jpg",
      alt: "Espace enfants et catégories sécurisées",
    },
  ];

  // Carrousel automatique toutes les 3.5 secondes
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative pt-6 pb-10 sm:pt-10 sm:pb-14 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[radial-gradient(ellipse_at_center,rgba(229,9,20,0.2),transparent_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-3xl mx-auto text-center space-y-5">
        
        {/* Badge & Titre avec fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-700/60 text-red-200 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span>Offre Spéciale Android - 20 MAD Seulement</span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
            Vos Films & Séries Préférés Réunis au Même Endroit
          </h1>
        </motion.div>

        {/* Prix & Offre Unique avec fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-block bg-[#161616] border border-amber-500/40 rounded-2xl px-5 py-3 shadow-lg max-w-xl mx-auto">
            <div className="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
              20 MAD <span className="text-sm sm:text-base font-semibold text-neutral-300">(Payez une fois, profitez à vie)</span>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 mt-1">
              Payez 20 MAD une seule fois et profitez de tous vos films, séries et animes préférés sans limites.
            </p>
          </div>
        </motion.div>

        {/* CARROUSEL AUTOMATIQUE AVEC FADE-IN-UP */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 max-w-lg mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-2xl overflow-hidden bg-black border-2 border-neutral-700 shadow-2xl group transition-all duration-300 hover:border-red-600/60 hover:shadow-red-950/40">
            
            {/* Slider Track */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-950">
              {slides.map((slide, idx) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Image Placeholder */}
                  <img
                    id={slide.id}
                    src={slide.src}
                    alt={slide.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30 pointer-events-none" />

                  {/* Top Bar on slide */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs z-20 pointer-events-none">
                    <span className="bg-[#E50914] text-white font-black px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wide shadow-md">
                      {slide.badge}
                    </span>
                    <span className="bg-black/75 backdrop-blur-md border border-neutral-700 text-neutral-300 font-mono text-[10px] px-2 py-0.5 rounded">
                      {idx + 1} / {slides.length}
                    </span>
                  </div>

                  {/* Bottom Info on slide */}
                  <div className="absolute bottom-2.5 left-3 right-3 text-left z-20 pointer-events-none">
                    <div className="text-white font-black text-sm drop-shadow-md">
                      {slide.title}
                    </div>
                    <div className="text-neutral-300 text-[11px] font-normal drop-shadow">
                      {slide.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              aria-label="Image précédente"
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-sm border border-neutral-700 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-all active:scale-90"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Image suivante"
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 backdrop-blur-sm border border-neutral-700 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-all active:scale-90"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-2.5">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                aria-label={`Aller au slide ${dotIdx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  dotIdx === currentSlide
                    ? 'w-7 bg-[#E50914]'
                    : 'w-2 bg-neutral-700 hover:bg-neutral-500'
                }`}
              />
            ))}
          </div>

          <p className="text-[11px] text-neutral-400 mt-1 italic">
            Carrousel d'aperçu de l'application · Défilement automatique
          </p>
        </motion.div>

        {/* Boutons d'Action avec fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {/* Bouton Principal WhatsApp avec effet hover réactif */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-950/60 hover:shadow-2xl hover:shadow-emerald-500/35 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] active:scale-95 cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <MessageCircle className="w-5 h-5 fill-black text-black" />
            </div>
            <div className="text-left">
              <div className="text-base sm:text-lg font-black leading-tight uppercase tracking-tight">
                Commander sur WhatsApp (20 MAD)
              </div>
              <div className="text-xs font-semibold text-neutral-900 opacity-90">
                Paiement unique · Accès instantané
              </div>
            </div>
          </a>

          {/* Bouton Secondaire : Pop-up Description avec hover subtil */}
          <button
            onClick={onOpenDescription}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800/90 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white font-bold text-sm px-6 py-4 rounded-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-amber-400 transition-transform duration-200 group-hover:scale-110" />
            <span>Voir la description complète</span>
          </button>
        </motion.div>

        {/* RANGÉE DE BADGES DE RÉASSURANCE AVEC FADE-IN-UP */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <div className="bg-[#15151c] border border-neutral-800 hover:border-emerald-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-neutral-200 transition-all duration-200 shadow-sm">
            <Lock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Paiement Sécurisé</span>
          </div>

          <div className="bg-[#15151c] border border-neutral-800 hover:border-amber-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-neutral-200 transition-all duration-200 shadow-sm">
            <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Support 24/7</span>
          </div>

          <div className="bg-[#15151c] border border-neutral-800 hover:border-cyan-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-neutral-200 transition-all duration-200 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span>Livraison Instantanée</span>
          </div>
        </motion.div>

        {/* Micro-mention compatibilité */}
        <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-0.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Compatible exclusivement smartphones et tablettes Android · Zéro pub</span>
        </div>

      </div>
    </section>
  );
};
