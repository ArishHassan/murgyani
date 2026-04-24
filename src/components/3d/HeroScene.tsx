'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export const HeroScene = () => {
  const bowlRef = useRef<HTMLDivElement>(null);
  const steamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bowlRef.current || !steamRef.current) return;

    // Gentle floating animation
    gsap.to(bowlRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Very slow continuous rotation
    gsap.to(bowlRef.current, {
      rotation: 360,
      duration: 120,
      repeat: -1,
      ease: "none"
    });

    // Steam pulsating effect
    gsap.to(steamRef.current, {
      scale: 1.1,
      opacity: 0.6,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none overflow-hidden">
      
      {/* Dynamic glow behind the bowl */}
      <div 
        ref={steamRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-brand-gold/20 rounded-full blur-[100px] opacity-40 mix-blend-screen"
      />

      <div 
        ref={bowlRef}
        className="relative w-[80vw] max-w-[600px] aspect-square rounded-full flex items-center justify-center"
      >
        {/* We use a mask to ensure the black edges of the generated image blend softly if needed, 
            though the image is already on a dark background. */}
        <div className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/5">
          <Image 
            src="/biryani-bowl.png" 
            alt="Premium Kolkata Biryani" 
            fill
            className="object-cover scale-105"
            priority
          />
        </div>
      </div>
      
    </div>
  );
};

