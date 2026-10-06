import React from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2 } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const reviews = [
    {
      name: "Mohamed K.",
      location: "Casablanca",
      initials: "MK",
      avatarColor: "bg-red-600",
      text: "Pour 20 MAD seulement c'est donné ! Reçu sur WhatsApp en 2 minutes avec la vidéo d'explication. Zéro pub et One Piece tourne en super qualité sur mon smartphone Samsung.",
      stars: 5,
    },
    {
      name: "Sarah B.",
      location: "Rabat",
      initials: "SB",
      avatarColor: "bg-emerald-600",
      text: "Vraiment top, aucun compte ni mot de passe à taper. Je télécharge les épisodes pour mes trajets en train et ça ne coupe jamais. C'est le meilleur achat de l'année à ce prix.",
      stars: 5,
    },
    {
      name: "Youssef T.",
      location: "Marrakech",
      initials: "YT",
      avatarColor: "bg-blue-600",
      text: "Adieu les abonnements hors de prix chaque mois. Les films récents sont déjà là en VF et le téléchargement hors-ligne marche à merveille sur ma tablette Android.",
      stars: 5,
    },
  ];

  return (
    <section className="py-10 bg-[#121216] border-y border-neutral-800/80 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title avec fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-7"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
            ★ Preuve Sociale & Avis Clients
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Ce Que Disent Nos Utilisateurs
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Déjà des centaines d'utilisateurs conquis sur Android
          </p>
        </motion.div>

        {/* 3 Testimonials Cards avec fade-in-up en cascade */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#18181f] border border-neutral-800/90 hover:border-neutral-700 p-4 sm:p-5 rounded-2xl flex flex-col justify-between transition-colors transform hover:-translate-y-1 duration-300"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-2.5">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-300 italic leading-relaxed mb-4">
                  "{rev.text}"
                </p>
              </div>

              {/* User Avatar & Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-neutral-800/80">
                <div className={`w-9 h-9 rounded-full ${rev.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-md`}>
                  {rev.initials}
                </div>
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <div className="text-[10px] text-neutral-400">
                    Avis vérifié · {rev.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
