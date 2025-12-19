
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: "🦷",
      title: "Aparelhos Ortodônticos",
      description: "Alinhamento estético e funcional para jovens e adultos com as técnicas mais modernas do mercado."
    },
    {
      icon: "🧸",
      title: "Odontopediatria e Prevenção",
      description: "Acompanhamento do crescimento e correção desde cedo, garantindo uma saúde bucal vitalícia."
    },
    {
      icon: "✨",
      title: "Estética do Sorriso",
      description: "Tratamentos focados nos pequenos detalhes que fazem toda a diferença na sua autoconfiança."
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
            Como posso te ajudar hoje?
          </h2>
          <div className="w-20 h-1 bg-burnt-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-2xl bg-off-white border border-transparent hover:border-burnt-gold transition-all group">
              <div className="text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{service.icon}</div>
              <h3 className="font-serif text-xl text-charcoal mb-4">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
