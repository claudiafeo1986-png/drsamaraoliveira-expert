
import React from 'react';
import { WHATSAPP_LINK } from '../constants';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-teal-deep text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-5xl mb-8 leading-tight">
          Sua saúde bucal em boas mãos, aqui na <span className="text-burnt-gold italic">Região Serrana</span>.
        </h2>
        
        <p className="text-lg md:text-xl font-light mb-12 text-blue-100 max-w-2xl mx-auto">
          Não adie mais o cuidado que você ou seu filho merecem. Minha agenda é planejada para dar atenção total a cada paciente, por isso os horários são limitados.
        </p>

        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full md:w-auto px-12 py-6 bg-burnt-gold text-white font-bold rounded-full text-xl shadow-2xl transition-transform active:scale-95 uppercase tracking-wider mb-10"
        >
          Falar com a Dra. Samara no WhatsApp
        </a>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-blue-200 opacity-80">
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Teresópolis, RJ
          </span>
          <span className="hidden md:block">•</span>
          <span className="flex items-center gap-2">
             <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            Horários Limitados
          </span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
