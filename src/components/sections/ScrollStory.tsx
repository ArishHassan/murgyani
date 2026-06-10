'use client';

import React from 'react';
import Image from 'next/image';
import { Flame, Star, Clock } from 'lucide-react';

const STORY_ITEMS = [
  {
    title: 'Royal Spices',
    description: 'We source the finest whole spices, saffron, and herbs to recreate the authentic aroma of Mughal kitchens.',
    icon: <Star className="w-8 h-8 text-brand-gold" />
  },
  {
    title: 'Slow Cooked',
    description: 'Prepared over a slow fire in traditional handis, ensuring every grain of basmati rice is infused with flavor.',
    icon: <Flame className="w-8 h-8 text-brand-gold" />
  },
  {
    title: 'Khandaani Taste',
    description: 'A closely guarded family recipe that brings the true essence of Kolkata biryani straight to your door.',
    icon: <Clock className="w-8 h-8 text-brand-gold" />
  }
];

const STORY_VISUALS = [
  {
    title: 'Signature Handi',
    caption: 'A family-style bowl layered with rice, roast murgh, aloo, and egg.',
    src: '/story/signature-handi.webp',
    alt: 'Overhead view of Murgyani biryani with roast chicken and egg',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Royal Spices',
    caption: 'Rich chaap-style gravy, whole spices, herbs, and slow warmth.',
    src: '/story/royal-spices.webp',
    alt: 'Cinematic chaap gravy plate styled with whole spices',
    className: ''
  },
  {
    title: 'Fire Roast',
    caption: 'Charred tikka pieces that bring the smoke and heat.',
    src: '/story/fire-roast.webp',
    alt: 'Roasted chicken tikka with chutney on a black plate',
    className: ''
  },
  {
    title: 'Dum Biryani',
    caption: 'Kolkata-style biryani built around fragrant rice, aloo, egg, and murgh.',
    src: '/story/dum-biryani.webp',
    alt: 'Plated Kolkata chicken biryani with aloo and egg',
    className: ''
  },
  {
    title: 'Packed With Care',
    caption: 'Finished for delivery with the same attention as the handi.',
    src: '/story/packed-with-care.webp',
    alt: 'Murgyani biryani delivery packaging with gold ribbon',
    className: ''
  }
];

export const ScrollStory: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-neutral-950 relative overflow-hidden border-t border-brand-gold/10 z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-maroon/10 via-neutral-950 to-neutral-950 opacity-80"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-24 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">The Khandaani Heritage</h2>
          <p className="text-neutral-400 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            Every handi we prepare is a tribute to the royal culinary traditions of Kolkata. We do not just cook biryani; we craft an experience that lingers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STORY_ITEMS.map((item, index) => (
            <div key={index} className="bg-neutral-900/40 p-8 rounded-2xl border border-white/5 hover:border-brand-gold/30 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand-maroon/20 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-brand-gold transition-colors">{item.title}</h3>
              <p className="text-neutral-400 font-sans leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-8">
            <div>
              <p className="font-sans text-xs font-bold uppercase tracking-[0.24em] text-brand-gold/80">
                Khandaani Journey
              </p>
              <h3 className="mt-3 font-serif text-3xl text-white md:text-4xl">
                From fire to doorstep
              </h3>
            </div>
          </div>

          <div className="grid auto-rows-[240px] grid-cols-1 gap-5 md:grid-cols-4 md:auto-rows-[220px]">
            {STORY_VISUALS.map((visual, index) => (
              <figure
                key={visual.src}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl shadow-black/30 ${visual.className}`}
              >
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
                  className="story-cinematic-image object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <h4 className="font-serif text-xl text-white">{visual.title}</h4>
                  <p className="mt-2 max-w-sm font-sans text-sm leading-relaxed text-neutral-300">
                    {visual.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
