
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Services from './components/Services';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <FinalCTA />
      <Footer />
      
      {/* Persistent Call-to-Action for Mobile */}
      <StickyCTA />
    </main>
  );
}

export default App;
