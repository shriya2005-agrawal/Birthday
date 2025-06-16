import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Calendar, Gift, PartyPopper } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleCelebrate = () => {
    // Trigger confetti animation
    setShowConfetti(true);
    setIsAnimating(true);
    
    // Reset animations after duration
    setTimeout(() => {
      setShowConfetti(false);
      setIsAnimating(false);
    }, 3000);

    // Smooth scroll to photo gallery section
    setTimeout(() => {
      const photoSection = document.querySelector('#photo-gallery');
      if (photoSection) {
        photoSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 1000);

    // Play celebration sound
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 17;
      audio.play();
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 35000); // Play for 10 seconds
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              <div 
                className={`w-3 h-3 rounded-full ${
                  ['bg-yellow-400', 'bg-pink-400', 'bg-cyan-400', 'bg-purple-400', 'bg-green-400'][Math.floor(Math.random() * 5)]
                }`}
              />
            </div>
          ))}
          
          {/* Firework bursts */}
          {[...Array(8)].map((_, i) => (
            <div
              key={`firework-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 1.5}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className={`text-center z-10 px-8 transform transition-all duration-2000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      } ${isAnimating ? 'animate-pulse scale-105' : ''}`}>
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className={`w-20 h-20 text-yellow-400 ${isAnimating ? 'animate-spin' : 'animate-spin-slow'}`} />
            <div className="absolute inset-0 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        <h1 className={`text-7xl md:text-8xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 animate-gradient-x ${
          isAnimating ? 'animate-bounce' : ''
        }`}>
          Happy Birthday
        </h1>
        
        <h2 className={`text-5xl md:text-6xl font-semibold text-white mb-8 tracking-wide ${
          isAnimating ? 'animate-pulse' : ''
        }`}>
          Aditi
        </h2>

        <div className="flex items-center justify-center gap-4 mb-8">
          <Calendar className={`w-8 h-8 text-cyan-400 ${isAnimating ? 'animate-bounce' : ''}`} />
          <p className="text-2xl text-gray-300 font-light">June 17th</p>
          <Gift className={`w-8 h-8 text-pink-400 ${isAnimating ? 'animate-bounce delay-200' : ''}`} />
        </div>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Today we celebrate you and all the wonderful moments yet to come
        </p>

        <div className="mt-12">
          <button 
            onClick={handleCelebrate}
            className={`group px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 ${
              isAnimating ? 'animate-pulse scale-110 shadow-purple-500/70' : ''
            }`}
          >
            <span className="flex items-center gap-3">
              <PartyPopper className={`w-6 h-6 transition-transform duration-300 ${isAnimating ? 'animate-spin' : 'group-hover:rotate-12'}`} />
              Let's Celebrate!
              <PartyPopper className={`w-6 h-6 transition-transform duration-300 ${isAnimating ? 'animate-spin' : 'group-hover:-rotate-12'}`} />
            </span>
          </button>
          
          {isAnimating && (
            <p className="mt-4 text-cyan-400 font-medium animate-bounce">
              🎉 Celebration Mode Activated! 🎉
            </p>
          )}
        </div>
      </div>

      {/* Enhanced floating elements */}
      <div className={`absolute top-1/4 left-1/4 ${isAnimating ? 'animate-ping' : 'animate-float'}`}>
        <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-70"></div>
      </div>
      <div className={`absolute top-3/4 right-1/4 ${isAnimating ? 'animate-ping delay-300' : 'animate-float-delayed'}`}>
        <div className="w-6 h-6 bg-pink-400 rounded-full opacity-60"></div>
      </div>
      <div className={`absolute top-1/2 left-1/6 ${isAnimating ? 'animate-ping delay-500' : 'animate-float-slow'}`}>
        <div className="w-3 h-3 bg-cyan-400 rounded-full opacity-80"></div>
      </div>
      
      {/* Additional celebration elements when animating */}
      {isAnimating && (
        <>
          <div className="absolute top-1/3 right-1/3 animate-bounce">
            <div className="w-5 h-5 bg-purple-400 rounded-full opacity-70"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-bounce delay-200">
            <div className="w-4 h-4 bg-green-400 rounded-full opacity-60"></div>
          </div>
        </>
      )}

      <audio ref={audioRef} src="public\Sapphire.mp3" />
    </section>
  );
};

export default Hero;