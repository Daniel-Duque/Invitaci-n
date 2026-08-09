import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import vdLogo from '../assets/images/vd_logo_1786241178460.jpeg';
import couplePhoto from '../assets/images/WhatsApp Image 2026-08-08 at 20.51.41.jpeg';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6 py-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="max-w-3xl w-full"
      >
        <motion.div 
          className="flex justify-center mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img 
            src={vdLogo} 
            alt="Valeria & Daniel Monogram Logo" 
            className="w-28 h-28 md:w-36 md:h-36 object-contain mix-blend-multiply"
          />
        </motion.div>
        
        <motion.p 
          className="serif italic text-lg text-gray-500 mb-6 tracking-widest"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Nuestra Boda
        </motion.p>
        
        <motion.h1 
          className="serif text-6xl md:text-8xl wine-text mb-8 font-light"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Valeria & Daniel
        </motion.h1>

        {/* Couple Photo */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mb-12 flex justify-center"
        >
          <div className="p-2 bg-white/80 border border-gold/30 rounded-2xl shadow-md max-w-xl overflow-hidden">
            <img 
              src={couplePhoto} 
              alt="Valeria & Daniel" 
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[460px] object-cover rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-4 border-t border-b border-gray-100 py-10 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <div className="md:text-right">
            <p className="uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-1">Octubre</p>
            <p className="serif text-4xl wine-text">Lunes 12</p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-14 h-14 border gold-border flex items-center justify-center rotate-45">
              <span className="-rotate-45 serif text-xl gold-text">2026</span>
            </div>
          </div>
          
          <div className="md:text-left">
            <p className="uppercase text-[10px] tracking-[0.3em] text-gray-400 mb-1">Horario</p>
            <p className="serif text-4xl wine-text">12 M - 6 PM</p>
          </div>
        </motion.div>
        
        <motion.p 
          className="serif text-sm tracking-[0.4em] uppercase wine-text font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
        >
          Vía Subachoque
        </motion.p>
      </motion.div>
    </div>
  );
}
