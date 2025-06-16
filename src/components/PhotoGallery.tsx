import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const PhotoGallery = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Sample photos from Pexels
  const photos = [
    'https://images.pexels.com/photos/1587927/pexels-photo-1587927.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1670977/pexels-photo-1670977.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/2072165/pexels-photo-2072165.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const captions = [
    "Celebrating life's beautiful moments",
    "Every year brings new adventures",
    "Memories that last forever",
    "Joy in every celebration",
    "Another year of wonderful experiences"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [photos.length]);

  const nextPhoto = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevPhoto = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section id="photo-gallery" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">
            Precious Moments
          </h2>
          <p className="text-xl text-gray-400">
            A collection of beautiful memories to celebrate
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main photo container */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <div className={`absolute inset-0 transition-all duration-500 ${
              isAnimating ? 'scale-110 opacity-0' : 'scale-100 opacity-100'
            }`}>
              <img
                src={photos[currentPhoto]}
                alt={`Memory ${currentPhoto + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <Heart className="w-5 h-5 text-red-400 fill-current" />
                <span className="text-white font-medium">
                  {captions[currentPhoto]}
                </span>
              </div>
            </div>
          </div>

          {/* Photo indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentPhoto
                    ? 'bg-purple-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="flex justify-center mt-8 gap-4 overflow-hidden">
            {photos.map((photo, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhoto(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentPhoto
                    ? 'ring-4 ring-purple-500 scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={photo}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default PhotoGallery;