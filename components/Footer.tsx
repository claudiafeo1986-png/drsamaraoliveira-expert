
import React from 'react';
import { INSTAGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 bg-off-white border-t border-gray-100 pb-32 md:pb-12">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6 text-gray-500">
        <a 
          href={INSTAGRAM_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:text-burnt-gold transition-colors"
          aria-label="Instagram"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>
        <div className="text-center space-y-2">
          <p className="font-semibold text-charcoal">Dra. Samara Oliveira</p>
          <p className="text-sm">Teresópolis - RJ | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
