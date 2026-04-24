'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { HeroScene } from '@/components/3d/HeroScene';
import { ScrollStory } from '@/components/sections/ScrollStory';
import { Menu } from '@/components/sections/Menu';
import { Location } from '@/components/sections/Location';
import { OrderModal } from '@/components/ui/OrderModal';
import { ShoppingBag } from 'lucide-react';

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background flex flex-col relative">
      <Navbar />
      
      {/* Sticky Order Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="bg-brand-gold hover:bg-yellow-500 text-background px-6 py-4 rounded-full font-bold font-sans flex items-center gap-3 shadow-2xl shadow-brand-gold/30 hover:scale-105 transition-all group"
        >
          <ShoppingBag className="w-5 h-5 group-hover:animate-bounce" />
          <span className="text-lg">Order Now</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center">
        <HeroScene />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
        
        <div className="relative z-20 text-center px-4 mt-40 pointer-events-none">
          <h1 className="text-6xl md:text-8xl font-serif text-brand-gold mb-4 drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            MURGYANI
          </h1>
          <p className="text-xl md:text-3xl font-serif text-white tracking-widest uppercase drop-shadow-lg">
            The Khandaani Biryani
          </p>
          <p className="mt-6 text-neutral-300 font-sans max-w-lg mx-auto text-sm md:text-base drop-shadow-md">
            Premium delivery-first cloud kitchen in Mukundapur, Kolkata.
          </p>
        </div>
      </section>

      {/* Cinematic Scroll Story */}
      <ScrollStory />

      {/* Menu Section */}
      <Menu onOrderClick={() => setIsOrderModalOpen(true)} />

      {/* Location Section */}
      <Location />

      {/* Footer */}
      <footer className="py-8 bg-neutral-950 text-center border-t border-white/5 relative z-10">
        <p className="text-neutral-500 text-sm font-sans">
          &copy; {new Date().getFullYear()} Murgyani | Arishario Food and Beverages. All rights reserved.
        </p>
      </footer>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </main>
  );
}
