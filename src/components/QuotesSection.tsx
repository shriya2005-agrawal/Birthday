import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';

const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const quotes = [
    {
      text: "You're not just special today — you're special every single day. But today, I get the perfect excuse to tell you how much you truly mean to me.",
    },
    {
      text: "Tujh Jaisa Koi Mila Hi Nhi, \n Kaise Milta Kahi Pe Tha Hi Nahi,\n Tu Jaha Tak Dikhai Deta H Uske Aage Maine Dekhha Hi Nahi..!",
      
    },
    {
      text: "You're not just a part of my life — you're a reason for my smile, a source of strength, and a constant reminder of how lucky I am. Happy Birthday!",
      
    },
    {
      text: "Kuch Soch Kar Hi Milaya Hoga Upar Wale Ne Tumhe \n Warna Ittefaq Itna Khoobsurat Nahi Hota",
      
    },
    {
      text: "I don't always know how to say it, but if birthdays are for celebrating what matters, then today is for celebrating you — someone who matters far more than you'll ever imagine.",
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [quotes.length]);

  const backgroundPattern = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E";

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ backgroundImage: `url("${backgroundPattern}")` }}
        ></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Quote className="w-16 h-16 text-cyan-400" />
              <div className="absolute inset-0 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Words of Celebration
          </h2>
          <p className="text-lg text-gray-300">
            A collection of heartfelt quotes to celebrate the special moments in life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border border-gray-600/30">
              {/* Decorative stars */}
              <div className="absolute top-8 left-8">
                <Star className="w-6 h-6 text-yellow-400 fill-current animate-pulse" />
              </div>
              <div className="absolute top-8 right-8">
                <Star className="w-6 h-6 text-yellow-400 fill-current animate-pulse delay-500" />
              </div>
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse delay-1000" />
              </div>

              <blockquote className="text-3xl md:text-4xl font-light text-white leading-relaxed mb-8 italic">
                "{quotes[currentQuote].text}"
              </blockquote>
              
              
            </div>

            {/* Quote indicators */}
            <div className="flex justify-center mt-8 gap-3">
              {quotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuote(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentQuote
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional decorative quotes */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <Quote className="w-8 h-8 text-purple-400 mb-4" />
              <p className="text-lg text-gray-300 italic mb-4">
                "You're not just a part of my life — you're the part that makes everything feel right."
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20">
              <Quote className="w-8 h-8 text-blue-400 mb-4" />
              <p className="text-lg text-gray-300 italic mb-4">
                "Hope today brings you smiles as genuine as the ones you give to everyone else."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="w-2 h-2 bg-cyan-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute top-3/4 right-10 animate-float-delayed">
        <div className="w-3 h-3 bg-purple-400 rounded-full opacity-50"></div>
      </div>
      <div className="absolute top-1/2 right-1/4 animate-float-slow">
        <div className="w-2 h-2 bg-pink-400 rounded-full opacity-70"></div>
      </div>
    </section>
  );
};

export default QuotesSection;