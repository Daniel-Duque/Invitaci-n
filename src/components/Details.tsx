import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Details() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-12 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full text-center"
      >
        <h3 className="serif text-5xl wine-text mb-12">Detalles del Evento</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mb-16">
          <div className="border-l-2 gold-border pl-8 py-2">
            <h4 className="uppercase text-[11px] tracking-[0.3em] font-bold wine-text mb-4">Código de Vestimenta</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Formal. El ambiente es campestre y la temática es Italia Invernal. 
              Recomendamos ropa abrigada y calzado cómodo para disfrutar del entorno natural.
            </p>
          </div>
          
          <div className="border-l-2 gold-border pl-8 py-2">
            <h4 className="uppercase text-[11px] tracking-[0.3em] font-bold wine-text mb-4">Clima y Entorno</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Zipacón nos recibirá con un clima fresco (aprox. 14°C). 
              Agradecemos llevar paraguas para disfrutar plenamente de los jardines de la hacienda.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <p className="serif italic text-2xl text-gray-700 mb-8">Agradecemos confirmar su asistencia</p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSe4DToIfRSruVpcQc0RYkDNNXk1gyVqS03mWYFhp3I-Ra8fhw/viewform?usp=publish-editor" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block border border-wine text-wine px-16 py-4 text-[10px] uppercase tracking-[0.4em] hover:bg-wine hover:text-white transition-all duration-500 shadow-sm"
          >
            Confirmar Asistencia
          </a>
        </div>
        
        <div className="mt-24 opacity-30 flex justify-center gap-4">
           <Heart size={16} className="wine-text" />
           <p className="serif italic text-sm text-gray-400">Valeria & Daniel</p>
           <Heart size={16} className="wine-text" />
        </div>
      </motion.div>
    </div>
  );
}
