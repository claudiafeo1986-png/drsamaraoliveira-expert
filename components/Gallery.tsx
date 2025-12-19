
import React from 'react';
import { GALLERY_IMAGES, WHATSAPP_LINK } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 bg-off-white overflow-hidden">
      <div className="px-6 mb-10 max-w-4xl mx-auto text-center md:text-left">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
          Resultados reais de quem confiou.
        </h2>
        <p className="text-gray-500 italic flex items-center justify-center md:justify-start gap-2">
          Deslize para ver as transformações
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce-x">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </p>
      </div>

      <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-10 no-scrollbar">
        {GALLERY_IMAGES.map((img, index) => (
          <div key={index} className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center">
            <div className="aspect-[4/5] bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-white transition-transform duration-300 hover:scale-[1.02]">
              <img 
                src={img.url} 
                alt={img.alt} 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center mt-8">
        <p className="text-gray-600 font-light mb-8 italic">
          Cada sorriso é uma história única que tive a honra de transformar. O próximo pode ser o seu.
        </p>
        
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto px-10 py-5 bg-teal-deep text-white font-bold rounded-full text-lg shadow-lg hover:bg-opacity-90 transition-all active:scale-95 uppercase tracking-wider"
        >
          Quero um resultado assim
        </a>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
