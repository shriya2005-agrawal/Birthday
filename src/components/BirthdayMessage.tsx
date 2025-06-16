import React, { useState, useEffect } from 'react';
import { Heart, Gift, Cake, PartyPopper } from 'lucide-react';

const BirthdayMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCelebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-800 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Confetti Effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-8 relative z-10">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {/* Main message card */}
          <div className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-gray-600/30 mb-12">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Cake className="w-20 h-20 text-pink-400 animate-bounce" />
                <div className="absolute inset-0 w-20 h-20 bg-pink-400/30 rounded-full blur-xl animate-pulse"></div>
              </div>
            </div>

            <h2 className="text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-8">
              Dear Aditi
            </h2>

            <div className="text-left max-w-3xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                On this special day, June 17th, I'm not just celebrating your birthday — I'm celebrating you and all the light you bring into the lives around you.
              </p>
              
              <p>
                Another year has passed, full of growth, laughter, and moments that shaped you in beautiful ways. As you begin this next chapter, may it be filled with exciting adventures, new opportunities, and dreams that unfold just the way you hope.
              </p>
              
              <p>
                Your kindness, wisdom, and one-of-a-kind spirit make the world a better place to be. May this birthday be the start of your best year yet — surrounded by love, joy, and everything that makes you smile.
              </p>
              
              <p className="text-center text-xl font-semibold text-white mt-8">
                Here's to you — today, and always. Happy Birthday! 🎉🎂✨
              </p>
            </div>

            <button
              onClick={handleCelebrate}
              className="mt-12 px-12 py-6 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 text-white text-xl font-bold rounded-full hover:from-pink-700 hover:via-purple-700 hover:to-cyan-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50"
            >
              <span className="flex items-center gap-3">
                <PartyPopper className="w-6 h-6" />
                Let's Celebrate!
                <PartyPopper className="w-6 h-6" />
              </span>
            </button>
          </div>

          {/* Decorative cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-800/40 to-red-800/40 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30 hover:border-pink-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 fill-current" />
              <h3 className="text-2xl font-bold text-white mb-4">With Love</h3>
              <p className="text-gray-300">
                Sending you warm wishes and heartfelt love on your special day
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-800/40 to-indigo-800/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <Gift className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Best Wishes</h3>
              <p className="text-gray-300">
                May this year bring you countless blessings and wonderful surprises
              </p>
            </div>

            <div className="bg-gradient-to-br from-cyan-800/40 to-blue-800/40 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105">
              <Cake className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">Celebration</h3>
              <p className="text-gray-300">
                Today I celebrate you and the amazing journey ahead
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BirthdayMessage;