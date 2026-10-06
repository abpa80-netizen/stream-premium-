import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { FaqSection } from './components/FaqSection';
import { FloatingWhatsAppBar } from './components/FloatingWhatsAppBar';
import { DescriptionModal } from './components/DescriptionModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isDescModalOpen, setIsDescModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-neutral-100 flex flex-col font-sans selection:bg-[#E50914] selection:text-white pb-16 md:pb-0">
      {/* 1. Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">
        {/* Section 1 : Header & Hero Section */}
        <Hero onOpenDescription={() => setIsDescModalOpen(true)} />

        {/* Section 2 : Avantages en 4 Cartes Compactes avec animations de survol */}
        <Features />

        {/* Section 3 : Étapes d'Achat (3 étapes rapides) */}
        <HowItWorks />

        {/* Section 4 : Preuve Sociale (Avis clients juste avant la FAQ) */}
        <SocialProof />

        {/* Section 5 : FAQ Courte (3 questions) */}
        <FaqSection />
      </main>

      {/* Footer épuré */}
      <Footer />

      {/* Bouton Flottant Bas de Page (Sticky Mobile) */}
      <FloatingWhatsAppBar />

      {/* Pop-up Modale : Description Captivante */}
      <DescriptionModal
        isOpen={isDescModalOpen}
        onClose={() => setIsDescModalOpen(false)}
      />
    </div>
  );
}
