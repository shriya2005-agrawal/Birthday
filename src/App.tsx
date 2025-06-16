import React from 'react';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import QuotesSection from './components/QuotesSection';
import BirthdayMessage from './components/BirthdayMessage';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-x-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Hero />
        <PhotoGallery />
        <QuotesSection />
        <BirthdayMessage />
      </div>
      
      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 border-t border-gray-700 py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-400 text-lg">
            Made with ❤️ for Aditi's Special Day
          </p>
          <p className="text-gray-500 mt-2">
            June 17th • A day to remember
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;