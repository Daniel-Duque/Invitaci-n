import React from 'react';
import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-6">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl w-full text-center"
      >
        <h3 className="serif text-5xl wine-text mb-10">Lugar de Encuentro</h3>
        
        <div className="bg-white/40 p-10 border border-gold/30 rounded-lg shadow-sm mb-10">
          <p className="serif italic text-xl mb-6 text-gray-700">Zipacón se encuentra a 1.5 horas de Bogotá.</p>
          <p className="text-sm leading-relaxed text-gray-600 mb-10 max-w-2xl mx-auto">
            Saliendo por la calle 13, tome la vía hacia Facatativá y desvíese hacia Zipacón. 
            Disfrute del paisaje montañoso y la arquitectura colonial que nos acompañará en este día especial.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a 
              href="https://maps.app.goo.gl/cUQwrYuvAAfQPjhL9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-wine text-white px-12 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold transition-colors shadow-md"
            >
              Ver en Google Maps
            </a>
            
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-gold font-medium">
              <MapPin size={14} />
              Hacienda El Refugio, Zipacón
            </div>
          </div>
        </div>


      </motion.div>
    </div>
  );
}
