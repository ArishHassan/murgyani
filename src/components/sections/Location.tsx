'use client';

import React from 'react';
import { ExternalLink, MapPin, Clock, Phone } from 'lucide-react';

const googleMapsUrl = 'https://www.google.com/maps/search/?api=1&query=Murgyani%20Arishario%20Food%20and%20Beverages%20Aryan%20Palace%206A%2F49%20near%20Jora%20Mandir%20Road%20Chit%20Kalikapur%20Mukundapur%20Kolkata%20700099';
const mapEmbedUrl = 'https://maps.google.com/maps?q=Murgyani%20The%20Khandaani%20Biryani%202184%206A%2F49%20Ground%20Floor%20Mukundapur%20Kolkata%20700099&z=16&output=embed';

export const Location: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-neutral-950 relative z-10 px-6 lg:px-24 border-t border-brand-gold/10">
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
                    Aryan Palace, 2184, 6A/49, Ground Floor,<br />
                    near Jora Mandir road,<br />
                    Chit Kalikapur, Mukundapur,<br />
                    Kolkata, West Bengal 700099, India
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="inline-block text-xs font-bold bg-brand-green text-white px-3 py-1 rounded-full">
                      Delivery Available Nearby
                    </span>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-gold transition-colors hover:text-yellow-300"
                    >
                      Open in Google Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
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
              src={mapEmbedUrl}
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
