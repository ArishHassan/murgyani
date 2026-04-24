'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-neutral-900 border border-brand-gold/30 rounded-2xl w-full max-w-md p-6 shadow-2xl shadow-brand-gold/10 transform transition-all">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-serif text-brand-gold mb-2">Order Now</h2>
          <p className="text-neutral-400 text-sm font-sans">Choose your preferred delivery partner.</p>
        </div>

        <div className="flex flex-col gap-4">
          <a 
            href="https://link.zomato.com/xqzv/rshare?id=YOUR_ZOMATO_ID_HERE" // Zomato often prefers share links or specific deep links. Placeholder used.
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full bg-[#E23744] hover:bg-[#cb202d] text-white py-4 px-6 rounded-xl font-bold font-sans flex items-center justify-center gap-3 transition-colors text-center"
          >
            Order on Zomato
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full"></span>
          </a>

          <a 
            href="https://www.swiggy.com/city/kolkata/murgyani-the-khaandani-biryani-santoshpur-rest1083054"
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full bg-[#FC8019] hover:bg-[#e46d08] text-white py-4 px-6 rounded-xl font-bold font-sans flex items-center justify-center gap-3 transition-colors text-center"
          >
            Order on Swiggy
          </a>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.getElementById('modal-root')!);
};
