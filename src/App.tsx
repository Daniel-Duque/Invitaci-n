/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, MapPinned, Info, Music2 } from 'lucide-react';
import ParticleReveal from './components/ParticleReveal';
import Home from './components/Home';
import Location from './components/Location';
import Details from './components/Details';
import MusicPlayer from './components/MusicPlayer';

enum Tab {
  HOME = 'home',
  LOCATION = 'location',
  DETAILS = 'details'
}

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.HOME);

  const renderContent = () => {
    switch (activeTab) {
      case Tab.HOME:
        return <Home />;
      case Tab.LOCATION:
        return <Location />;
      case Tab.DETAILS:
        return <Details />;
      default:
        return <Home />;
    }
  };

  const navItems = [
    { id: Tab.HOME, label: 'Inicio', icon: <HomeIcon size={16} /> },
    { id: Tab.LOCATION, label: 'Lugar', icon: <MapPinned size={16} /> },
    { id: Tab.DETAILS, label: 'Notas', icon: <Info size={16} /> },
  ];

  return (
    <div className="min-h-screen bg-cream selection:bg-wine/10">
      {/* Decorative lines/accents */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.05] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-wine" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 h-px w-full bg-wine" />
      </div>

      {/* Snow Effect - Tuned for Natural Tones */}
      <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-40"
            animate={{
              y: ['-5vh', '105vh'],
              x: [Math.random() * 100 + 'vw', (Math.random() * 100 + 5) + 'vw'],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 15
            }}
            style={{
              width: 1 + Math.random() * 3 + 'px',
              height: 1 + Math.random() * 3 + 'px',
              left: Math.random() * 100 + 'vw',
            }}
          />
        ))}
      </div>

      <ParticleReveal>
        <main className="relative pt-24 pb-32 md:pb-24 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>

          {/* Contextual navigation for Home */}
          {activeTab === Tab.HOME && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5 }}
              className="flex justify-center gap-6 mt-4"
            >
              <button 
                onClick={() => setActiveTab(Tab.LOCATION)}
                className="text-[10px] uppercase tracking-[0.3em] text-gold hover:text-wine transition-colors"
              >
                — Ver Ubicación —
              </button>
              <button 
                onClick={() => setActiveTab(Tab.DETAILS)}
                className="text-[10px] uppercase tracking-[0.3em] text-gold hover:text-wine transition-colors"
              >
                — Confirmar —
              </button>
            </motion.div>
          )}
        </main>
      </ParticleReveal>

      {/* Natural Tones Navigation (Dots/Minimal) */}
      <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40 bg-white/40 backdrop-blur-sm px-6 py-3 rounded-full border border-gold/20 shadow-sm">
        <div className="flex items-center gap-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="group flex flex-col items-center gap-1"
            >
              <div 
                className={`
                  w-2 h-2 rounded-full transition-all duration-500
                  ${activeTab === item.id 
                    ? 'wine-bg scale-125' 
                    : 'bg-gray-300 group-hover:bg-gold'}
                `} 
              />
              <span className={`text-[8px] uppercase tracking-widest transition-opacity duration-300 ${activeTab === item.id ? 'opacity-100 wine-text' : 'opacity-0 group-hover:opacity-100 gold-text'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Header Branding */}
      <div className="fixed top-8 left-8 z-30">
        <h2 className="serif italic text-lg tracking-widest wine-text opacity-70">V & D</h2>
      </div>

      <MusicPlayer />
    </div>
  );
}
