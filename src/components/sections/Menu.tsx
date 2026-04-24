'use client';

import React from 'react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
}

const BIRYANI: MenuItem[] = [
  { id: 'drm-750', name: 'Dum Roast Murgh Biryani [750 ml]', description: '(Chicken 1pc/Aloo 1Pc/Egg 1 Pc)' },
  { id: 'drm-1000', name: 'Dum Roast Murgh Special Biryani [1000 ml]', description: '(Chicken 2pcs/Aloo 1Pc/Egg 1 Pc)' },
  { id: 'drm-2000', name: 'Dum Roast Murgyani Special Murgh Biryani [2000 ml]', description: '(Chicken 3pcs/Aloo 3Pcs/Egg 3 Pcs)' },
  { id: 'drm-4000', name: 'Dum Roast Murgh Biryani Family Pack [4000 ml]', description: '(Chicken 5pcs/Aloo 5Pcs/Egg 5 Pcs)' },
  { id: 'dpm-750', name: 'Dum Pukht Mutton Dum Biryani [750 ml]', description: '(Mutton 1pc/Aloo 1Pc/Egg 1 Pc)' },
  { id: 'dpm-1000', name: 'Dum Pukht Mutton Dum Biryani Special [1000 ml]', description: '(Mutton 2pcs/Aloo 1Pc/Egg 1 Pc)' },
  { id: 'ctb', name: 'Chicken Tikka Biryani', description: '(Chicken Tikka 3pcs/Aloo 1Pcs/Egg 1 Pc)' },
  { id: 'ab', name: 'Aloo Biryani', description: '(Aloo 2pc)' },
  { id: 'eb', name: 'Egg Biryani', description: '2 Piece Egg / 1 Aloo' },
  { id: 'kcb-750', name: 'Kolkata Chicken Biryani [750 ml]', description: '(Chicken 1pc/Aloo 1Pc/Egg 1 Pc)' },
  { id: 'kcb-1000', name: 'Kolkata Special Chicken Biryani [1000 ml]', description: '(Chicken 2pcs/Aloo 1Pc/Egg 1 Pc)' },
  { id: 'kcb-2000', name: 'Kolkata Chicken Biryani Murgyani Special [2000 ml]', description: '(Chicken 3pcs/Aloo 3Pcs/Egg 3 Pcs)' },
  { id: 'kcb-4000', name: 'Kolkata Chicken Biryani Family Pack [4000 ml]', description: '(Chicken 5pcs/Aloo 5Pcs/Egg 5 Pcs)' }
];

const BIRYANI_COMBOS: MenuItem[] = [
  { id: 'c1', name: 'Chicken Biryani with Chicken Galouti Kebab', description: 'Chicken Biryani [1 Piece] with Chicken Galauti [2 Piece]' },
  { id: 'c2', name: 'Chicken Biryani with Tikka Kebab', description: 'Chicken Biryani [1 Piece] with Chicken Tikka [2 Piece]' },
  { id: 'c3', name: 'Chicken Biryani with Chap and Tikka Kebab', description: 'Chicken Biryani [1 Piece] with Chicken Chap [1 Piece] & Tikka Kebab [2 Piece]' },
  { id: 'c4', name: 'Chicken Biryani with Chicken Bharta', description: 'Chicken Biryani [1 Piece] with Chicken Bharta' },
  { id: 'c5', name: 'Chicken Biryani with Chicken Chaap', description: 'Chicken Biryani [1 Piece] with Chicken Chap [1 Piece]' },
  { id: 'c6', name: 'Aloo Biryani with Chicken Chap', description: 'Aloo Biryani [1 Piece] with Chicken Chap [1 Piece]' },
  { id: 'c7', name: 'Aloo Biryani with Chicken Bharta', description: 'Aloo Biryani [1 Piece] with Chicken Bharta' },
  { id: 'c8', name: 'Aloo Biryani with Tikka Kebab', description: 'Aloo Biryani [1 Piece] with Tikka Kebab [2 Pieces]' },
  { id: 'c9', name: 'Mutton Dum Pukht Biryani with Chicken Chap', description: 'Mutton Biryani (1 Piece) with Chicken Chap (1 Piece)' }
];

const BREADS: MenuItem[] = [
  { id: 'b1', name: 'Tawa Lachcha Paratha', description: 'Tawa Lachcha Paratha 1 Pc' }
];

export const Menu: React.FC<{ onOrderClick: () => void }> = ({ onOrderClick }) => {
  return (
    <section id="menu" className="py-24 bg-background relative z-30 px-6 lg:px-24 border-t border-brand-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-4">Our Royal Menu</h2>
          <p className="text-neutral-400 font-sans max-w-xl mx-auto">
            Crafted with passion, served with pride. Experience the authentic taste of Kolkata.
          </p>
        </div>

        <div className="space-y-20">
          {/* Biryani Combos */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-8 border-b border-brand-gold/20 pb-4">Biryani Combos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BIRYANI_COMBOS.map((item) => (
                <div key={item.id} className="bg-neutral-900/30 rounded-xl p-6 border border-white/5 flex flex-col justify-between gap-4 hover:border-brand-gold/30 transition-all group">
                  <div>
                    <h4 className="text-lg font-bold font-sans text-white mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h4>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </div>
                  <button 
                    onClick={onOrderClick}
                    className="self-start mt-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-background px-4 py-2 rounded-full font-bold font-sans text-xs transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Biryani */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-8 border-b border-brand-gold/20 pb-4">Biryani</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {BIRYANI.map((item) => (
                <div key={item.id} className="bg-neutral-900/30 rounded-xl p-6 border border-white/5 flex flex-col justify-between gap-4 hover:border-brand-gold/30 transition-all group">
                  <div>
                    <h4 className="text-lg font-bold font-sans text-white mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h4>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </div>
                  <button 
                    onClick={onOrderClick}
                    className="self-start mt-4 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-background px-4 py-2 rounded-full font-bold font-sans text-xs transition-colors"
                  >
                    Order Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Breads */}
          <div>
            <h3 className="text-2xl font-serif text-white mb-8 border-b border-brand-gold/20 pb-4">Paratha (Choice of Breads)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {BREADS.map((item) => (
                <div key={item.id} className="bg-neutral-900/30 rounded-xl p-6 border border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-brand-gold/20 transition-all">
                  <div>
                    <h4 className="text-lg font-bold font-sans text-white mb-1">{item.name}</h4>
                    <p className="text-neutral-400 text-sm">{item.description}</p>
                  </div>
                  <button 
                    onClick={onOrderClick}
                    className="border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-background px-4 py-2 rounded-full font-bold font-sans text-xs transition-colors shrink-0"
                  >
                    Add to Order
                  </button>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
