import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 lg:px-12 py-6 bg-transparent">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden border border-brand-maroon/30 shadow-[0_0_15px_rgba(255,0,0,0.2)] group-hover:border-brand-red transition-all duration-300">
          <Image 
            src="/logo-icon.png" 
            alt="Murgyani Rooster Logo" 
            fill
            className="object-cover scale-[1.3] group-hover:scale-[1.4] transition-transform duration-500"
          />
        </div>
        <div className="flex flex-col">
          {/* We use a combination of serif font, custom styling, and red/white colors to mimic the calligraphy logo */}
          <span className="text-2xl md:text-3xl font-serif tracking-widest text-white leading-none flex items-center">
            <span className="text-red-600 text-3xl md:text-4xl italic mr-[2px]">M</span>
            <span>urg</span>
            <span className="text-red-600 text-3xl md:text-4xl italic ml-1 mr-[1px]">y</span>
            <span>ani</span>
          </span>
          <span className="text-[0.6rem] md:text-xs font-sans tracking-[0.2em] text-neutral-400 font-bold uppercase mt-1">
            The Khandaani Biryani
          </span>
        </div>
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        <a href="#menu" className="text-sm font-sans font-medium text-neutral-300 hover:text-brand-gold transition-colors">Menu</a>
        <a href="#about" className="text-sm font-sans font-medium text-neutral-300 hover:text-brand-gold transition-colors">Story</a>
      </div>
    </nav>
  );
};
