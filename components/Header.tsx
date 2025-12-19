
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="font-serif text-xl md:text-2xl text-charcoal tracking-widest font-bold">
          DRA. SAMARA <span className="text-burnt-gold">OLIVEIRA</span>
        </div>
        <div className="hidden md:block">
          <span className="text-xs uppercase tracking-[0.2em] text-gray-400 font-semibold">
            Ortodontia • Teresópolis
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
