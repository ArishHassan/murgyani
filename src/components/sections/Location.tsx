'use client';

import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 relative z-10 px-6 lg:px-24 border-t border-brand-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-gold mb-6">Find Us</h2>
            <p className="text-neutral-400 font-sans mb-10 text-lg">
              Operating from the heart of Mukundapur, we ensure your biryani reaches you hot and fresh. We are a delivery-first cloud kitchen.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-sans text-xl mb-2">Location</h4>
                  <p className="text-neutral-400 font-sans">
                    Aryan Palace, 6A/49, near Jora Mandir road,<br />
                    Chit Kalikapur, Mukundapur,<br />
                    Kolkata, West Bengal 700099, India
                  </p>
                  <span className="inline-block mt-2 text-xs font-bold bg-brand-green text-white px-3 py-1 rounded-full">
                    Delivery Available Nearby
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Clock className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-sans text-xl mb-2">Hours</h4>
                  <p className="text-neutral-400 font-sans">
                    Everyday: 12:00 PM – 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold font-sans text-xl mb-2">Contact</h4>
                  <p className="text-neutral-400 font-sans">
                    +91 8981940404
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Side */}
          <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-brand-gold/20 shadow-2xl shadow-brand-gold/5">
            {/* 
              NOTE: To use your API key, you can switch this to the Google Maps Embed API:
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=Murgyani,Mukundapur,Kolkata`}
              
              For now, using a free public embed link.
            */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.807353139366!2d88.3965!3d22.4938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273a00282b01d%3A0x6a0283c749b5c!2sMukundapur%2C%20Kolkata!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.5] contrast-[1.2] opacity-80 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
            />
          </div>

        </div>
      </div>
    </section>
  );
};
