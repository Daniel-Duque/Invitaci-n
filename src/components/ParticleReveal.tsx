import React, { useEffect, useRef, useState } from 'react';

interface ParticleRevealProps {
  children: React.ReactNode;
}

export default function ParticleReveal({ children }: ParticleRevealProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const isDrawing = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      if (containerRef.current) {
        canvas.width = containerRef.current.offsetWidth;
        canvas.height = containerRef.current.offsetHeight;
        fillCanvas();
      }
    };

    const fillCanvas = () => {
      // Fill with cream (Natural Tones)
      ctx.fillStyle = '#fdfdfb';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add gold particles
      ctx.fillStyle = '#c5a059'; 
      for (let i = 0; i < 600; i++) {
        ctx.globalAlpha = 0.15;
        ctx.beginPath();
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 1.5,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      
      // Wine red flecks
      ctx.fillStyle = '#5e0b15';
      for (let i = 0; i < 150; i++) {
        ctx.globalAlpha = 0.1;
        ctx.beginPath();
        ctx.arc(
          Math.random() * canvas.width,
          Math.random() * canvas.height,
          Math.random() * 1.2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
      
      ctx.globalAlpha = 1.0;
      
      // Instruction text
      ctx.font = 'italic 20px Georgia';
      ctx.fillStyle = '#c5a059';
      ctx.textAlign = 'center';
      ctx.fillText('Desliza para revelar la invitación', canvas.width / 2, canvas.height / 2);
    };

    resize();
    window.addEventListener('resize', resize);

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 40, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[80vh]">
      <div className="absolute inset-0 z-0">
        {children}
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 cursor-crosshair transition-opacity duration-1000"
        style={{ pointerEvents: revealed ? 'none' : 'auto' }}
      />
      {!revealed && (
         <button 
            onClick={() => setRevealed(true)}
            className="absolute bottom-4 right-4 z-20 text-[10px] uppercase tracking-widest text-[#722F37] opacity-50 hover:opacity-100 transition-opacity"
         >
            Saltar revelación
         </button>
      )}
    </div>
  );
}
