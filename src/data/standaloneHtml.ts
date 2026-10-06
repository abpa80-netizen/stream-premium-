export const WHATSAPP_URL = "https://wa.me/212655996172?text=Bonjour,%20je%20souhaite%20commander%20l'application%20STREAM%20PREMIUM%20%C3%A0%2020%20MAD.%20Merci%20de%20me%20donner%20les%20instructions.";

export const STANDALONE_HTML_CODE = `<!DOCTYPE html>
<html lang="fr" class="dark scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>STREAM PREMIUM - Vos Films & Séries Préférés Réunis au Même Endroit (20 MAD)</title>
  <meta name="description" content="Accédez à plus de 3 700 films, séries et animes sur Android pour 20 MAD seulement à vie. Zéro publicité, mode hors-ligne et activation WhatsApp instantanée.">
  
  <!-- Tailwind CSS via CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              red: '#E50914',
              whatsapp: '#25D366',
              'whatsapp-hover': '#1ebd5a',
              dark: '#0f0f0f',
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
            display: ['"Outfit"', 'sans-serif'],
          }
        }
      }
    }
  </script>
  
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0f0f0f; color: #f3f4f6; }
    h1, h2, h3, .font-display { font-family: 'Outfit', sans-serif; }
    .glow-green { box-shadow: 0 0 25px -5px rgba(37, 211, 102, 0.4); }
    .glow-red { box-shadow: 0 0 30px -5px rgba(229, 9, 20, 0.3); }
  </style>
</head>
<body class="selection:bg-red-600 selection:text-white pb-20 md:pb-6">

  <!-- TOP HEADER -->
  <header class="sticky top-0 z-30 bg-[#0f0f0f]/90 backdrop-blur-md border-b border-neutral-800/80 px-4 sm:px-6 py-3">
    <div class="max-w-4xl mx-auto flex items-center justify-between">
      <a href="#" class="font-display font-black text-xl sm:text-2xl tracking-tight text-white group hover:text-[#E50914] transition-colors duration-200">
        <span class="text-[#E50914]">STREAM</span> PREMIUM
      </a>

      <a href="https://wa.me/212655996172?text=Bonjour,%20je%20souhaite%20commander%20l'application%20STREAM%20PREMIUM%20%C3%A0%2020%20MAD.%20Merci%20de%20me%20donner%20les%20instructions."
         target="_blank" rel="noopener noreferrer"
         class="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all duration-200 transform hover:scale-[1.03] hover:shadow-lg hover:shadow-emerald-500/25 active:scale-95 shadow-md">
        <svg class="w-4 h-4 fill-black" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
        <span>Commander (20 MAD)</span>
      </a>
    </div>
  </header>

  <!-- 1. HEADER & HERO SECTION -->
  <section class="relative pt-6 pb-10 sm:pt-10 sm:pb-14 px-4 sm:px-6">
    <div class="max-w-3xl mx-auto text-center space-y-4">
      
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/70 border border-red-700/60 text-red-200 text-xs sm:text-sm font-semibold shadow-inner">
        <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
        Offre Spéciale Android - 20 MAD Seulement
      </div>

      <!-- Titre principal -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight">
        Vos Films & Séries Préférés Réunis au Même Endroit
      </h1>

      <!-- Prix & Offre Unique -->
      <div class="inline-block bg-[#161616] border border-amber-500/40 rounded-2xl px-5 py-3 shadow-lg">
        <div class="text-xl sm:text-2xl font-black text-amber-400 tracking-tight">
          20 MAD <span class="text-sm font-semibold text-neutral-300">(Payez une fois, profitez à vie)</span>
        </div>
        <p class="text-xs text-neutral-400 mt-1">
          Paiement unique · Aucun abonnement mensuel · Accès complet débloqué
        </p>
      </div>

      <!-- CARROUSEL AUTOMATIQUE SOUS LE TITRE HERO (3 PLACEHOLDERS D'IMAGES D'INTERFACES) -->
      <div class="pt-2 max-w-lg mx-auto relative group">
        <div class="relative rounded-2xl overflow-hidden bg-black border-2 border-neutral-700 shadow-2xl transition-all duration-300 hover:border-red-600/60 hover:shadow-red-950/40">
          <div class="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-neutral-950">
            <!-- Slide 1 : Mockup Smartphone Streaming App -->
            <div id="slide-0" class="hero-carousel-slide absolute inset-0 opacity-100 transition-opacity duration-700">
              <img id="hero-slide-1" src="images/hero.jpg" onerror="this.onerror=null; this.src='hero.jpg';" alt="Application STREAM PREMIUM sur Smartphone Android" class="w-full h-full object-cover object-top" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30"></div>
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                <span class="bg-[#E50914] text-white font-black px-2.5 py-0.5 rounded text-[10px] uppercase">Interface Officielle Android</span>
                <span class="bg-black/75 border border-neutral-700 text-neutral-300 font-mono text-[10px] px-2 py-0.5 rounded">1 / 4</span>
              </div>
              <div class="absolute bottom-2.5 left-3 right-3 text-left z-10">
                <div class="text-white font-black text-sm">STREAM PREMIUM sur Smartphone Android</div>
                <div class="text-neutral-300 text-[11px]">Design sombre moderne, fluidité totale et navigation ultra-rapide</div>
              </div>
            </div>

            <!-- Slide 2 : Catalogue -->
            <div id="slide-1" class="hero-carousel-slide absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-700">
              <img id="hero-slide-2" src="images/catalog.jpg" onerror="this.onerror=null; this.src='catalog.jpg';" alt="Catalogue STREAM PREMIUM" class="w-full h-full object-cover object-top" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30"></div>
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                <span class="bg-[#E50914] text-white font-black px-2.5 py-0.5 rounded text-[10px] uppercase">Catalogue +3 700 Titres</span>
                <span class="bg-black/75 border border-neutral-700 text-neutral-300 font-mono text-[10px] px-2 py-0.5 rounded">2 / 4</span>
              </div>
              <div class="absolute bottom-2.5 left-3 right-3 text-left z-10">
                <div class="text-white font-black text-sm">Catalogue Films, Séries & Animes</div>
                <div class="text-neutral-300 text-[11px]">Films récents, séries et animes en qualité 4K / HD sans pub</div>
              </div>
            </div>

            <!-- Slide 3 : Lecteur 4K -->
            <div id="slide-2" class="hero-carousel-slide absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-700">
              <img id="hero-slide-3" src="images/player.jpg" onerror="this.onerror=null; this.src='player.jpg';" alt="Lecteur 4K et mode hors-ligne" class="w-full h-full object-cover object-top" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30"></div>
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                <span class="bg-[#E50914] text-white font-black px-2.5 py-0.5 rounded text-[10px] uppercase">Ultra HD & Téléchargement</span>
                <span class="bg-black/75 border border-neutral-700 text-neutral-300 font-mono text-[10px] px-2 py-0.5 rounded">3 / 4</span>
              </div>
              <div class="absolute bottom-2.5 left-3 right-3 text-left z-10">
                <div class="text-white font-black text-sm">Lecteur 4K HDR & Mode Hors-Ligne</div>
                <div class="text-neutral-300 text-[11px]">Visionnage sans coupure et téléchargement 1-clic pour vos trajets</div>
              </div>
            </div>

            <!-- Slide 4 : Espace Jeunesse -->
            <div id="slide-3" class="hero-carousel-slide absolute inset-0 opacity-0 pointer-events-none transition-opacity duration-700">
              <img id="hero-slide-4" src="images/kids.jpg" onerror="this.onerror=null; this.src='kids.jpg';" alt="Espace Jeunesse sécurisé" class="w-full h-full object-cover object-top" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/30"></div>
              <div class="absolute top-3 left-3 right-3 flex items-center justify-between text-xs z-10">
                <span class="bg-[#E50914] text-white font-black px-2.5 py-0.5 rounded text-[10px] uppercase">100% Sans Pub & Protégé</span>
                <span class="bg-black/75 border border-neutral-700 text-neutral-300 font-mono text-[10px] px-2 py-0.5 rounded">4 / 4</span>
              </div>
              <div class="absolute bottom-2.5 left-3 right-3 text-left z-10">
                <div class="text-white font-black text-sm">Espace Jeunesse & Sécurité Enfants</div>
                <div class="text-neutral-300 text-[11px]">Dessins animés, animes et séries familiales sans inscription</div>
              </div>
            </div>
          </div>

          <!-- Boutons Flèches -->
          <button onclick="changeHeroSlide(-1)" aria-label="Image précédente" class="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-neutral-700 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-all">
            ‹
          </button>
          <button onclick="changeHeroSlide(1)" aria-label="Image suivante" class="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/60 hover:bg-black/90 border border-neutral-700 text-white flex items-center justify-center opacity-80 hover:opacity-100 transition-all">
            ›
          </button>
        </div>

        <!-- Pagination Dots -->
        <div class="flex items-center justify-center gap-2 mt-2.5">
          <button onclick="setHeroSlide(0)" class="hero-dot w-7 h-1.5 rounded-full bg-[#E50914] transition-all"></button>
          <button onclick="setHeroSlide(1)" class="hero-dot w-2 h-1.5 rounded-full bg-neutral-700 transition-all"></button>
          <button onclick="setHeroSlide(2)" class="hero-dot w-2 h-1.5 rounded-full bg-neutral-700 transition-all"></button>
          <button onclick="setHeroSlide(3)" class="hero-dot w-2 h-1.5 rounded-full bg-neutral-700 transition-all"></button>
        </div>

        <p class="text-[11px] text-neutral-400 mt-1 italic">
          Carrousel d'aperçu de l'application · Défilement automatique
        </p>
      </div>

      <!-- Boutons d'action : Principal & Secondaire Pop-up avec animations de survol (hover) -->
      <div class="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
        <!-- Bouton Principal WhatsApp avec hover réactif -->
        <a href="https://wa.me/212655996172?text=Bonjour,%20je%20souhaite%20commander%20l'application%20STREAM%20PREMIUM%20%C3%A0%2020%20MAD.%20Merci%20de%20me%20donner%20les%20instructions."
           target="_blank" rel="noopener noreferrer"
           class="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-black text-base sm:text-lg px-8 py-4 rounded-2xl shadow-xl shadow-emerald-950/60 hover:shadow-2xl hover:shadow-emerald-500/35 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] active:scale-95">
          <svg class="w-6 h-6 fill-black shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
          <span>Commander sur WhatsApp (20 MAD)</span>
        </a>

        <!-- Bouton Secondaire Pop-up -->
        <button
          onclick="openDescModal()"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-neutral-900 hover:bg-neutral-800/90 border border-neutral-700 hover:border-neutral-500 text-neutral-200 hover:text-white font-bold text-sm px-6 py-4 rounded-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95">
          <span>👁 Voir la description complète</span>
        </button>
      </div>

      <!-- Rangée de badges de réassurance sous le bouton CTA principal -->
      <div class="pt-1 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <div class="bg-[#15151c] border border-neutral-800 hover:border-emerald-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-neutral-200 transition-colors shadow-sm">
          <span class="text-emerald-400">🔒</span>
          <span>Paiement Sécurisé</span>
        </div>
        <div class="bg-[#15151c] border border-neutral-800 hover:border-amber-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-neutral-200 transition-colors shadow-sm">
          <span class="text-amber-400">🕒</span>
          <span>Support 24/7</span>
        </div>
        <div class="bg-[#15151c] border border-neutral-800 hover:border-cyan-500/40 px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-xs font-bold text-neutral-200 transition-colors shadow-sm">
          <span class="text-cyan-400">⚡</span>
          <span>Livraison Instantanée</span>
        </div>
      </div>

      <div class="text-[11px] text-neutral-400">
        Compatible exclusivement smartphones et tablettes Android · Fichier APK officiel sécurisé
      </div>
    </div>
  </section>

  <!-- 2. AVANTAGES EN 4 CARTES COMPACTES (AVEC SURVOL SUBTIL) -->
  <section class="py-10 bg-[#141414] border-y border-neutral-800/80 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-7">
        <h2 class="text-xl sm:text-2xl font-extrabold text-white">Pourquoi Choisir STREAM PREMIUM ?</h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="group bg-[#1b1b1b] hover:bg-[#202026] border border-neutral-800 hover:border-red-600/50 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-950/20 cursor-default">
          <div class="w-10 h-10 rounded-xl bg-red-950/70 border border-red-900/50 group-hover:scale-110 group-hover:bg-red-900/60 transition-all duration-300 flex items-center justify-center text-2xl mb-2">🎬</div>
          <h3 class="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">Accès Illimité à +3 700 Titres</h3>
          <p class="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
            Films récents, séries cultes, animes et documentaires réunis au même endroit, avec des nouveautés ajoutées chaque semaine.
          </p>
        </div>

        <div class="group bg-[#1b1b1b] hover:bg-[#202026] border border-neutral-800 hover:border-red-600/50 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-950/20 cursor-default">
          <div class="w-10 h-10 rounded-xl bg-red-950/70 border border-red-900/50 group-hover:scale-110 group-hover:bg-red-900/60 transition-all duration-300 flex items-center justify-center text-2xl mb-2">🚫</div>
          <h3 class="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">Zéro Publicité Pendant le Visionnage</h3>
          <p class="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
            Aucune coupure publicitaire intempestive, aucune bannière suspecte. Profitez d'une immersion vidéo totale.
          </p>
        </div>

        <div class="group bg-[#1b1b1b] hover:bg-[#202026] border border-neutral-800 hover:border-red-600/50 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-950/20 cursor-default">
          <div class="w-10 h-10 rounded-xl bg-red-950/70 border border-red-900/50 group-hover:scale-110 group-hover:bg-red-900/60 transition-all duration-300 flex items-center justify-center text-2xl mb-2">📥</div>
          <h3 class="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">Mode Hors-Ligne</h3>
          <p class="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
            Téléchargement en 1 clic pour vos trajets : regardez vos vidéos en avion, dans les transports ou sans connexion internet.
          </p>
        </div>

        <div class="group bg-[#1b1b1b] hover:bg-[#202026] border border-neutral-800 hover:border-red-600/50 p-5 rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-950/20 cursor-default">
          <div class="w-10 h-10 rounded-xl bg-red-950/70 border border-red-900/50 group-hover:scale-110 group-hover:bg-red-900/60 transition-all duration-300 flex items-center justify-center text-2xl mb-2">⚡</div>
          <h3 class="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">Accès Direct Sans Compte</h3>
          <p class="text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors leading-relaxed">
            Pas de mot de passe à retenir, aucun email à renseigner. Ouvrez simplement l'application et lancez vos vidéos.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. ÉTAPES D'ACHAT (3 ÉTAPES RAPIDES) -->
  <section class="py-10 px-4 sm:px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-7">
        <h2 class="text-xl sm:text-2xl font-extrabold text-white">Comment Commander en 3 Étapes ?</h2>
        <p class="text-xs text-neutral-400 mt-1">Activation rapide et sans engagement récurrent</p>
      </div>

      <div class="space-y-3">
        <div class="group flex items-center gap-4 bg-[#181818] hover:bg-[#1e1e24] border border-neutral-800 hover:border-neutral-700 p-4 rounded-2xl transition-all duration-200">
          <div class="w-10 h-10 rounded-xl bg-red-950/80 text-[#E50914] font-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">1</div>
          <div>
            <h3 class="text-sm font-bold text-white group-hover:text-red-400 transition-colors">Cliquez sur le bouton WhatsApp</h3>
            <p class="text-xs text-neutral-400">Le message de commande à 20 MAD est pré-rempli automatiquement.</p>
          </div>
        </div>

        <div class="group flex items-center gap-4 bg-[#181818] hover:bg-[#1e1e24] border border-neutral-800 hover:border-neutral-700 p-4 rounded-2xl transition-all duration-200">
          <div class="w-10 h-10 rounded-xl bg-red-950/80 text-[#E50914] font-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">2</div>
          <div>
            <h3 class="text-sm font-bold text-white group-hover:text-red-400 transition-colors">Payez 20 MAD et recevez le fichier + guide d'installation en 2 min</h3>
            <p class="text-xs text-neutral-400">Notre équipe vous transmet l'APK sécurisé et le tutoriel rapide.</p>
          </div>
        </div>

        <div class="group flex items-center gap-4 bg-[#181818] hover:bg-[#1e1e24] border border-neutral-800 hover:border-neutral-700 p-4 rounded-2xl transition-all duration-200">
          <div class="w-10 h-10 rounded-xl bg-red-950/80 text-[#E50914] font-black flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">3</div>
          <div>
            <h3 class="text-sm font-bold text-white group-hover:text-red-400 transition-colors">Ouvrez l'application et profitez immédiatement</h3>
            <p class="text-xs text-neutral-400">Accès direct et à vie à tous vos contenus favoris sans abonnement mensuel.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 4. PREUVE SOCIALE (AVIS CLIENTS JUSTE AVANT LA FAQ) -->
  <section class="py-10 bg-[#121216] border-y border-neutral-800/80 px-4 sm:px-6">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-7">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/60 text-emerald-300 text-xs font-bold uppercase mb-2">
          ★ Avis Clients Vérifiés
        </div>
        <h2 class="text-xl sm:text-2xl font-extrabold text-white">Ce Que Disent Nos Utilisateurs</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <!-- Avis 1 -->
        <div class="bg-[#18181f] border border-neutral-800 p-4 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div class="flex text-amber-400 mb-2">★★★★★</div>
            <p class="text-xs sm:text-sm text-neutral-300 italic mb-4 leading-relaxed">
              "Pour 20 MAD seulement c'est donné ! Reçu sur WhatsApp en 2 minutes avec la vidéo. Zéro pub et One Piece tourne en super qualité sur mon Samsung."
            </p>
          </div>
          <div class="flex items-center gap-2.5 pt-3 border-t border-neutral-800">
            <div class="w-8 h-8 rounded-full bg-red-600 text-white font-bold text-xs flex items-center justify-center">MK</div>
            <div>
              <div class="text-xs font-bold text-white">Mohamed K.</div>
              <div class="text-[10px] text-neutral-400">Utilisateur vérifié (Casablanca)</div>
            </div>
          </div>
        </div>

        <!-- Avis 2 -->
        <div class="bg-[#18181f] border border-neutral-800 p-4 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div class="flex text-amber-400 mb-2">★★★★★</div>
            <p class="text-xs sm:text-sm text-neutral-300 italic mb-4 leading-relaxed">
              "Vraiment top, aucun compte ni mot de passe à taper. Je télécharge les épisodes pour le train et ça ne coupe jamais. Meilleur achat à ce prix."
            </p>
          </div>
          <div class="flex items-center gap-2.5 pt-3 border-t border-neutral-800">
            <div class="w-8 h-8 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">SB</div>
            <div>
              <div class="text-xs font-bold text-white">Sarah B.</div>
              <div class="text-[10px] text-neutral-400">Utilisateur vérifié (Rabat)</div>
            </div>
          </div>
        </div>

        <!-- Avis 3 -->
        <div class="bg-[#18181f] border border-neutral-800 p-4 rounded-2xl flex flex-col justify-between hover:border-neutral-700 transition-colors">
          <div>
            <div class="flex text-amber-400 mb-2">★★★★★</div>
            <p class="text-xs sm:text-sm text-neutral-300 italic mb-4 leading-relaxed">
              "Adieu les 150 DH par mois sur les plateformes classiques. Les films récents sont là en VF et le téléchargement marche super bien sur ma tablette."
            </p>
          </div>
          <div class="flex items-center gap-2.5 pt-3 border-t border-neutral-800">
            <div class="w-8 h-8 rounded-full bg-blue-600 text-white font-bold text-xs flex items-center justify-center">YT</div>
            <div>
              <div class="text-xs font-bold text-white">Youssef T.</div>
              <div class="text-[10px] text-neutral-400">Utilisateur vérifié (Marrakech)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 5. FAQ COURTE (3 QUESTIONS) -->
  <section class="py-10 px-4 sm:px-6">
    <div class="max-w-2xl mx-auto space-y-3.5">
      <div class="text-center mb-6">
        <h2 class="text-xl sm:text-2xl font-extrabold text-white">Foire Aux Questions</h2>
      </div>

      <div class="bg-[#1b1b1b] hover:bg-[#1f1f26] border border-neutral-800 hover:border-neutral-700 p-4 rounded-xl transition-colors">
        <h3 class="text-sm font-bold text-white mb-1">Sur quels appareils cela fonctionne-t-il ?</h3>
        <p class="text-xs text-neutral-300 leading-relaxed">
          L'application fonctionne exclusivement sur les smartphones et tablettes Android (Samsung, Xiaomi, Huawei, Honor, Oppo, Pixel, etc.).
        </p>
      </div>

      <div class="bg-[#1b1b1b] hover:bg-[#1f1f26] border border-neutral-800 hover:border-neutral-700 p-4 rounded-xl transition-colors">
        <h3 class="text-sm font-bold text-white mb-1">Y a-t-il des publicités ?</h3>
        <p class="text-xs text-neutral-300 leading-relaxed">
          Non, zéro publicité. Le visionnage est entièrement fluide, sans interruption ni bannières.
        </p>
      </div>

      <div class="bg-[#1b1b1b] hover:bg-[#1f1f26] border border-neutral-800 hover:border-neutral-700 p-4 rounded-xl transition-colors">
        <h3 class="text-sm font-bold text-white mb-1">Comment recevoir l'accès ?</h3>
        <p class="text-xs text-neutral-300 leading-relaxed">
          Instantanément sur WhatsApp après règlement des 20 MAD. Vous recevez l'APK direct et le guide d'installation express.
        </p>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="py-6 text-center text-xs text-neutral-400">
    <p>© STREAM PREMIUM · Exclusivité Smartphones & Tablettes Android · Offre 20 MAD</p>
  </footer>

  <!-- BOUTON FLOTTANT BAS DE PAGE (STICKY MOBILE AVEC EFFET HOVER) -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-[#0f0f0f]/95 backdrop-blur-md border-t border-neutral-800 shadow-2xl">
    <a href="https://wa.me/212655996172?text=Bonjour,%20je%20souhaite%20commander%20l'application%20STREAM%20PREMIUM%20%C3%A0%2020%20MAD.%20Merci%20de%20me%20donner%20les%20instructions."
       target="_blank" rel="noopener noreferrer"
       class="group w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-sm py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-950/60 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-200 transform hover:scale-[1.02] active:scale-95">
      <svg class="w-5 h-5 fill-black shrink-0 transition-transform duration-200 group-hover:rotate-12" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
      <span>Commander à 20 MAD sur WhatsApp</span>
    </a>
  </div>

  <!-- POP-UP MODALE : DESCRIPTION CAPTIVANTE -->
  <div id="desc-modal" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm hidden items-center justify-center p-4">
    <div class="relative w-full max-w-lg bg-[#141418] border border-neutral-700 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-4">
      <button onclick="closeDescModal()" class="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-xl bg-neutral-800 transition-colors">
        ✕
      </button>

      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-950/70 text-[#E50914] text-xs font-bold uppercase">
        🎬 Catalogue & Description
      </div>

      <h3 class="text-lg sm:text-xl font-black text-white">
        Tout Votre Divertissement Réuni en 1 Application
      </h3>

      <p class="text-sm text-neutral-300 leading-relaxed">
        Marre de chercher vos séries et films préférés sur plusieurs plateformes ? Retrouvez l'intégralité du cinéma mondial réuni au même endroit : séries primées, récents films, documentaires exclusifs et spectacles d'humour. Emportez tout votre divertissement partout avec vous, en voyage, dans les transports ou pendant vos pauses.
      </p>

      <div class="pt-2">
        <a href="https://wa.me/212655996172?text=Bonjour,%20je%20souhaite%20commander%20l'application%20STREAM%20PREMIUM%20%C3%A0%2020%20MAD.%20Merci%20de%20me%20donner%20les%20instructions."
           target="_blank" rel="noopener noreferrer"
           class="group w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-black font-extrabold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-950/50 hover:shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-[1.02] active:scale-95">
          <span>Commander sur WhatsApp à 20 MAD</span>
        </a>
      </div>
    </div>
  </div>

  <!-- JS MINIMALISTE POUR MODALE & CARROUSEL -->
  <script>
    function openDescModal() {
      const modal = document.getElementById('desc-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }
    function closeDescModal() {
      const modal = document.getElementById('desc-modal');
      modal.classList.remove('flex');
      modal.classList.add('hidden');
    }

    // Carrousel automatique Hero
    let currentHeroSlide = 0;
    const totalHeroSlides = 4;

    function updateHeroSlideUI() {
      for (let i = 0; i < totalHeroSlides; i++) {
        const slide = document.getElementById('slide-' + i);
        if (slide) {
          if (i === currentHeroSlide) {
            slide.classList.remove('opacity-0', 'pointer-events-none');
            slide.classList.add('opacity-100');
          } else {
            slide.classList.remove('opacity-100');
            slide.classList.add('opacity-0', 'pointer-events-none');
          }
        }
      }
      const dots = document.querySelectorAll('.hero-dot');
      dots.forEach((dot, idx) => {
        if (idx === currentHeroSlide) {
          dot.className = 'hero-dot w-7 h-1.5 rounded-full bg-[#E50914] transition-all';
        } else {
          dot.className = 'hero-dot w-2 h-1.5 rounded-full bg-neutral-700 transition-all';
        }
      });
    }

    function setHeroSlide(index) {
      currentHeroSlide = index;
      updateHeroSlideUI();
    }

    function changeHeroSlide(direction) {
      currentHeroSlide = (currentHeroSlide + direction + totalHeroSlides) % totalHeroSlides;
      updateHeroSlideUI();
    }

    setInterval(() => {
      currentHeroSlide = (currentHeroSlide + 1) % totalHeroSlides;
      updateHeroSlideUI();
    }, 3500);
  </script>

</body>
</html>
`;
