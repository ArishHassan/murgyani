'use client';

import React from 'react';
import Image from 'next/image';
import { ShoppingBag, MapPin } from 'lucide-react';

export const Hero: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-16 md:pt-36 md:pb-24 px-6 lg:px-24">
      {/* Soft static glow accent (no JS, GPU-friendly) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-[60vw] max-h-[520px] w-[60vw] max-w-[520px] rounded-full bg-brand-gold/15 blur-[120px]"
      />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Copy */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-block rounded-full border border-brand-gold/30 bg-brand-gold/5 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
            Delivery-First Cloud Kitchen
          </span>
          <h1 className="mt-6 font-serif text-5xl leading-none text-brand-gold drop-shadow-[0_4px_4px_rgba(0,0,0,0.6)] md:text-7xl">
            MURGYANI
          </h1>
          <p className="mt-3 font-serif text-lg uppercase tracking-[0.3em] text-white md:text-2xl">
            The Khandaani Biryani
          </p>
          <p className="mx-auto mt-6 max-w-md text-pretty font-sans text-base leading-relaxed text-neutral-400 lg:mx-0">
            Authentic Kolkata-style dum biryani, slow-cooked over fire with a closely
            guarded family recipe. Freshly prepared in Mukundapur and delivered hot to
            your door.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start lg:justify-start">
            <button
              onClick={onOrderClick}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3.5 font-sans text-base font-bold text-background transition-colors hover:bg-yellow-500 sm:w-auto"
            >
              <ShoppingBag className="h-5 w-5" />
              Order for Delivery
            </button>
            <a
              href="#menu"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-sans text-base font-medium text-neutral-200 transition-colors hover:border-brand-gold/40 hover:text-brand-gold sm:w-auto"
            >
              View Menu
            </a>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 font-sans text-sm text-neutral-500 lg:justify-start">
            <MapPin className="h-4 w-4 text-brand-gold" />
            Mukundapur, Kolkata &middot; Open daily 12 PM &ndash; 10 PM
          </p>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float relative aspect-square overflow-hidden rounded-full border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.7)]">
            <Image
              src="/biryani-bowl.png"
              alt="Signature Kolkata chicken biryani in a copper handi"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
