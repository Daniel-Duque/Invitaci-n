import React, { useState, useRef } from 'react';
import { Music, Music2, Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  React.useEffect(() => {
    if (audioRef.current && isPlaying) {
      audioRef.current.play().catch(err => {
        console.warn("Autoplay blocked by browser. User must interact first.", err);
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.error("Audio play failed:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-white/80 backdrop-blur-sm p-3 rounded-full border border-gold/30 shadow-lg">
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" // Replacing with a more stable/sober placeholder
      />
      <button
        onClick={togglePlay}
        className="w-10 h-10 flex items-center justify-center rounded-full wine-bg text-white hover:opacity-90 transition-all active:scale-95"
        aria-label={isPlaying ? "Pause Music" : "Play Music"}
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>
      <div className="hidden md:block">
        <p className="text-[10px] uppercase tracking-widest wine-text font-medium">Banda Sonora</p>
        <p className="text-[9px] text-gray-500 italic">De fondo para Daniel & Valeria</p>
      </div>
    </div>
  );
}
