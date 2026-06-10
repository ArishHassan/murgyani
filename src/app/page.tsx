'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ScrollStory } from '@/components/sections/ScrollStory';
import { Menu } from '@/components/sections/Menu';
import { Location } from '@/components/sections/Location';
import { OrderModal } from '@/components/ui/OrderModal';
import { ShoppingBag } from 'lucide-react';

export default function Home() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  const openOrder = () => setIsOrderModalOpen(true);

  return (
    <main className="relative flex min-h-screen flex-col bg-background">
      <Navbar />

      {/* Sticky Order Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={openOrder}
          aria-label="Order Murgyani biryani for delivery"
          className="flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3.5 font-sans font-bold text-background shadow-lg shadow-brand-gold/20 transition-colors hover:bg-yellow-500"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Order Now</span>
        </button>
      </div>

      {/* Homepage / Hero */}
      <Hero onOrderClick={openOrder} />

      {/* Why Us */}
      <ScrollStory />

      {/* Menu */}
      <Menu onOrderClick={openOrder} />

      {/* Contact / Location */}
      <Location />

      {/* Footer */}
      <footer className="border-t border-white/5 bg-neutral-950 py-8 text-center">
        <p className="font-sans text-sm text-neutral-500">
          &copy; {new Date().getFullYear()} Murgyani | Arishario Food and Beverages. All rights reserved.
        </p>
      </footer>

      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </main>
  );
}
