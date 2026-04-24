'use client';

import React from 'react';
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

export const ScrollStory: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-neutral-950 relative overflow-hidden border-t border-brand-gold/10 z-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-maroon/10 via-neutral-950 to-neutral-950 opacity-80"></div>
      
      <div className="max-w-6xl mx-auto px-6 lg:px-24 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">The Khandaani Heritage</h2>
          <p className="text-neutral-400 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            Every handi we prepare is a tribute to the royal culinary traditions of Kolkata. We don't just cook biryani; we craft an experience that lingers.
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
      </div>
    </section>
  );
};
