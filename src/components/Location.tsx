import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Navigation, Car, Compass } from 'lucide-react';

export default function Location() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full text-center"
      >
        <h3 className="serif text-5xl wine-text mb-10 font-light">Lugar de Encuentro</h3>
        
        <div className="bg-white/60 p-8 md:p-12 border border-gold/30 rounded-2xl shadow-sm mb-10 text-left">
          <div className="flex items-start justify-between flex-wrap gap-4 border-b border-gray-100 pb-6 mb-8">
            <div>
              <p className="uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-2 font-medium">Lugar de Celebración</p>
              <h4 className="serif text-3xl wine-text font-normal flex items-center gap-2">
                <MapPin className="text-gold shrink-0" size={24} />
                Vía Subachoque
              </h4>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-xs text-gray-500 italic bg-gold/5 px-4 py-2 rounded-full border border-gold/20">
                <Compass size={16} className="text-gold" />
                A 1.5 horas de Bogotá
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 italic bg-gold/5 px-4 py-2 rounded-full border border-gold/20">
                <Car size={16} className="text-gold" />
                Parqueadero en la hacienda
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-600 font-light leading-relaxed text-sm md:text-base">
            <div>
              <p className="font-semibold text-gray-800 text-base mb-4 flex items-center gap-2">
                <Car size={18} className="text-gold" />
                Instrucciones de llegada desde Bogotá:
              </p>
              
              <ol className="space-y-3 pl-2 text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="serif font-semibold text-gold text-base shrink-0">1.</span>
                  <span><strong className="font-semibold text-gray-800">Sal por la Calle 80:</strong> Dirígete en sentido oriente-occidente buscando la salida de la ciudad hacia Cundinamarca.</span>
                </li>
                <li className="flex gap-3">
                  <span className="serif font-semibold text-gold text-base shrink-0">2.</span>
                  <span><strong className="font-semibold text-gray-800">Pasa el peaje:</strong> Continúa por la Autopista Medellín (Ruta 50) pasando por Siberia hasta el peaje de Siberia/Platanales.</span>
                </li>
                <li className="flex gap-3">
                  <span className="serif font-semibold text-gold text-base shrink-0">3.</span>
                  <span><strong className="font-semibold text-gray-800">Desvío en Puente Piedra:</strong> Sigue recto hasta la intersección de Puente Piedra y toma el desvío a la derecha en dirección a Subachoque.</span>
                </li>
                <li className="flex gap-3">
                  <span className="serif font-semibold text-gold text-base shrink-0">4.</span>
                  <span><strong className="font-semibold text-gray-800">Llegada:</strong> Continúa por esa vía principal aproximadamente 6 km en dirección norte; encontrarás la hacienda a un costado de la carretera. La hacienda cuenta con parqueadero disponible para los invitados.</span>
                </li>
              </ol>
            </div>

            <p className="text-xs text-gray-500 italic border-l-2 gold-border pl-4 py-1 mt-4">
              Recomendamos salir con suficiente tiempo para evitar contratiempos y disfrutar tranquilamente del inicio del evento a las 11:00 AM.
            </p>
          </div>
          
          <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-medium">
              <MapPin size={16} />
              Ubicación del evento
            </div>

            <a 
              href="https://maps.app.goo.gl/EUVjSm6BkXyu1rdC6" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-wine text-white px-10 py-4 text-[10px] uppercase tracking-[0.3em] hover:bg-gold transition-colors shadow-md rounded-full group"
            >
              Abrir en Google Maps
              <Navigation size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

