import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data/standaloneHtml';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Cliquez sur le bouton WhatsApp",
      desc: "Le message de commande pré-rempli à 20 MAD s'ouvre instantanément dans votre application WhatsApp.",
    },
    {
      num: "2",
      title: "Payez 20 MAD et recevez le fichier + guide d'installation en 2 min",
      desc: "Notre équipe vous transmet le fichier APK officiel sécurisé et un guide pas-à-pas très simple.",
    },
    {
      num: "3",
      title: "Ouvrez l'application et profitez immédiatement",
      desc: "Accédez à plus de 3 700 films, séries et animes à vie, sans publicité et sans abonnement mensuel.",
    },
  ];

  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Titre avec fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-7"
        >
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Comment Commander en 3 Étapes ?
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Activation rapide en moins de 2 minutes
          </p>
        </motion.div>

        {/* 3 étapes d'achat avec fade-in-up en cascade et survol subtil */}
        <div className="space-y-3.5">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-start sm:items-center gap-4 bg-[#181818] hover:bg-[#1e1e24] border border-neutral-800 hover:border-neutral-700 p-4 sm:p-5 rounded-2xl transition-all duration-300 transform hover:-translate-x-1 sm:hover:translate-x-1 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/60 text-[#E50914] font-black text-base flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                {step.num}
              </div>
              <div className="flex-1">
                <h3 className="text-sm sm:text-base font-bold text-white mb-0.5 group-hover:text-red-400 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-200 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bouton d'action avec fade-in-up et hover réactif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/50 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span>Commander sur WhatsApp (20 MAD)</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
