
import React from 'react';
import { WHATSAPP_LINK, HERO_IMAGE } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen bg-off-white flex items-center pt-32 md:pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full h-full fade-in">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Coluna de Texto */}
          <div className="w-full md:w-3/5 lg:w-1/2 text-center md:text-left z-10 order-2 md:order-1">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-charcoal leading-tight mb-6">
              Transformando <br />
              <span className="text-burnt-gold italic">Sorrisos e Vidas</span>
              <span className="block text-xl md:text-2xl lg:text-3xl mt-4 font-sans font-light text-gray-600">
                Especialista em Ortodontia e Odontopediatria em Teresópolis.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-charcoal font-light mb-10 max-w-xl mx-auto md:mx-0 leading-relaxed">
              Cuidar do sorriso da sua família não precisa ser traumático. Uno técnica avançada e atendimento humanizado para transformar a autoestima de crianças e adultos.
            </p>

            <div className="flex flex-col items-center md:items-start gap-4">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto px-8 py-5 bg-burnt-gold text-white font-bold rounded-full text-lg shadow-xl animate-pulse-gold transition-transform hover:scale-105 active:scale-95 uppercase tracking-wider"
              >
                Agendar minha 1ª consulta gratuita
              </a>
              <span className="flex items-center gap-2 text-sm text-gray-400 font-medium italic">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
                Resposta rápida por WhatsApp.
              </span>
            </div>
          </div>

          {/* Coluna da Imagem */}
          <div className="w-full md:w-2/5 lg:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-[400px] md:max-w-full">
              {/* Moldura elegante */}
              <div className="absolute -inset-4 border border-burnt-gold/20 rounded-3xl -z-10 transform rotate-3"></div>
              
              <div className="overflow-hidden rounded-3xl shadow-2xl bg-white border-8 border-white">
                <img 
                  src={HERO_IMAGE} 
                  alt="Dra. Samara Oliveira" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Detalhe estético de fundo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 -z-20 hidden lg:block opacity-50"></div>
    </section>
  );
};

export default Hero;
