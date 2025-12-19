
import React from 'react';

const About: React.FC = () => {
  const differentials = [
    "Especialista em Ortodontia: Tratamentos modernos e eficazes.",
    "Foco no Cuidado Infantil: Paciência e metodologia lúdica para os pequenos.",
    "Atendimento Exclusivo: Você não é apenas um número, é um paciente VIP.",
    "Localização Privilegiada: No coração de Teresópolis, RJ."
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-8 leading-tight">
          Mais do que dentista, sua parceira na busca pelo <span className="text-burnt-gold">sorriso perfeito</span>.
        </h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-light mb-12">
          <p>
            "Sei que muitas pessoas — especialmente as crianças — sentem receio de ir ao dentista. Meu consultório foi pensado para quebrar essa barreira."
          </p>
          <p>
            Com foco especial no cuidado infantil e tratamentos ortodônticos para todas as idades, meu objetivo é que você se sinta em casa, enquanto eu cuido da parte técnica com precisão.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {differentials.map((diff, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-burnt-gold transition-colors">
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-off-white text-burnt-gold">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <p className="text-gray-800 font-medium">{diff}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
