import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-3xl w-full"
      >
        <div className="w-16 h-px wine-bg mx-auto mb-10 opacity-40" />
        
        <motion.p 
          className="serif italic text-lg text-gray-500 mb-6 tracking-widest"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Nuestra Boda
        </motion.p>
        
        <motion.h1 
          className="serif text-6xl md:text-8xl wine-text mb-6 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Valeria & Daniel
        </motion.h1>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4 border-t border-b border-gray-100 py-10 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="md:text-right">
            <p className="uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-1">Octubre</p>
            <p className="serif text-4xl wine-text">Sábado 10</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-14 h-14 border gold-border flex items-center justify-center rotate-45">
              <span className="-rotate-45 serif text-xl gold-text">2026</span>
            </div>
          </div>
          
          <div className="md:text-left">
            <p className="uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-1">Horario</p>
            <p className="serif text-4xl wine-text">11 AM - 4 PM</p>
          </div>
        </motion.div>
        
        <motion.p 
          className="serif text-sm tracking-[0.4em] uppercase wine-text font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          Zipacón, Cundinamarca
        </motion.p>
      </motion.div>
    </div>
  );
}
