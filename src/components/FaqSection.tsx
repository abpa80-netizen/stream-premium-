import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../data/standaloneHtml';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Sur quels appareils cela fonctionne-t-il ?",
      a: "L'application fonctionne exclusivement sur les smartphones et tablettes Android (Samsung, Xiaomi, Huawei, Honor, Oppo, Google Pixel, Realme, etc.).",
    },
    {
      q: "Y a-t-il des publicités ?",
      a: "Non, strictement zéro publicité. Le visionnage est entièrement fluide, sans interruption, sans pop-ups et sans bannières gênantes.",
    },
    {
      q: "Comment recevoir l'accès ?",
      a: "Instantanément sur WhatsApp après règlement des 20 MAD. Notre équipe vous transmet le fichier officiel sécurisé et un guide pas-à-pas pour une installation rapide en moins de 2 minutes.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-10 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-4">
        
        {/* Titre avec fade-in-up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            Foire Aux Questions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-1">
            Tout ce que vous devez savoir avant de commander
          </p>
        </motion.div>

        {/* 3 FAQ Accordéon avec fade-in-up en cascade */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#1b1b1b] hover:bg-[#1f1f26] border border-neutral-800 hover:border-neutral-700 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 font-bold text-white text-sm sm:text-base focus:outline-none"
                >
                  <span className="leading-snug">{faq.q}</span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#E50914] text-white rotate-180' : 'bg-neutral-800 text-neutral-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-neutral-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bouton d'action avec fade-in-up et hover réactif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center pt-6"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-lg shadow-emerald-950/50 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] active:scale-95"
          >
            <MessageCircle className="w-5 h-5 fill-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span>Obtenir l'Accès Instantané (20 MAD)</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
