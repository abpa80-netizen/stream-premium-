import React from 'react';
import { motion } from 'framer-motion';
import { Film, Ban, Download, Zap } from 'lucide-react';

export const Features: React.FC = () => {
  const items = [
    {
      icon: <Film className="w-5 h-5 text-[#E50914] group-hover:text-red-400 transition-colors duration-200" />,
      title: "Accès Illimité à +3 700 Titres",
      desc: "Films récents, séries cultes, animes et documentaires réunis au même endroit avec des mises à jour régulières.",
    },
    {
      icon: <Ban className="w-5 h-5 text-[#E50914] group-hover:text-red-400 transition-colors duration-200" />,
      title: "Zéro Publicité Pendant le Visionnage",
      desc: "Aucune coupure publicitaire intempestive, aucune bannière suspecte. Profitez d'une immersion vidéo totale.",
    },
    {
      icon: <Download className="w-5 h-5 text-[#E50914] group-hover:text-red-400 transition-colors duration-200" />,
      title: "Mode Hors-Ligne",
      desc: "Téléchargement en 1 clic pour vos trajets : regardez vos vidéos en avion, dans les transports ou sans 4G.",
    },
    {
      icon: <Zap className="w-5 h-5 text-[#E50914] group-hover:text-red-400 transition-colors duration-200" />,
      title: "Accès Direct Sans Compte",
      desc: "Pas de mot de passe à retenir, aucun email obligatoire. Ouvrez l'application et vos flux démarrent en 3 secondes.",
    },
  ];

  return (
    <section className="py-10 bg-[#141414] border-y border-neutral-800/80 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Titre avec fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-7"
        >
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Pourquoi Choisir STREAM PREMIUM ?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            4 atouts majeurs pensés pour votre confort sur smartphone et tablette Android
          </p>
        </motion.div>

        {/* 4 cartes compactes avec fade-in-up en cascade et animations de survol (hover) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-[#1b1b1b] hover:bg-[#202026] border border-neutral-800 hover:border-red-600/50 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-950/20 cursor-pointer overflow-hidden"
            >
              {/* Subtle top edge glow on hover */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#E50914]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="w-10 h-10 rounded-xl bg-red-950/70 border border-red-900/50 group-hover:bg-red-900/60 group-hover:border-red-600/70 group-hover:scale-110 transition-all duration-300 flex items-center justify-center mb-3 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-red-400 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed group-hover:text-neutral-200 transition-colors duration-200">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
