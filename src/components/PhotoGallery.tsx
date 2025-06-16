import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import {
  DraggableCardBody,
  DraggableCardContainer,
} from './ui/draggable-card';
import { Vortex } from './ui/vortex';

export function PhotoGallery() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const captions = [
    "Celebrating life's beautiful moments",
    "Every year brings new adventures",
    "Memories that last forever",
    "Joy in every celebration",
    "Another year of wonderful experiences"
  ];

  const items = [
    {
      title: 'The Hidden Gem',
      image: '/Photos/IMG_20250616_192902.jpg',
      className: 'absolute top-10 left-[20%] rotate-[-5deg]',
    },
    {
      title: 'One of One',
      image: '/Photos/IMG_20250616_192919.jpg',
      className: 'absolute top-40 left-[25%] rotate-[-7deg]',
    },
    {
      title: 'My Favorite Chapter',
      image: '/Photos/IMG_20250616_195248.jpg',
      className: 'absolute top-5 left-[40%] rotate-[8deg]',
    },
    {
      title: 'All Love, No Filters',
      image: '/Photos/IMG_20250616_193052.jpg',
      className: 'absolute top-32 left-[55%] rotate-[10deg]',
    },
    {
      title: 'Undeniably You',
      image: '/Photos/IMG_20250616_193033.jpg',
      className: 'absolute top-20 right-[35%] rotate-[2deg]',
    },
    {
      title: 'Grace in Every Year',
      image: '/Photos/IMG_20250616_193016.jpg',
      className: 'absolute top-24 left-[45%] rotate-[-7deg]',
    },
    {
      title: 'Journeys & Joyrides',
      image: '/Photos/IMG_20250616_192959.jpg',
      className: 'absolute top-8 left-[30%] rotate-[4deg]',
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Vortex background covers the entire section */}
      <div className="absolute inset-0 w-full h-full">
        <Vortex
          containerClassName="w-full h-full"
          particleCount={500}
          baseHue={240}
          baseSpeed={0.2}
          rangeSpeed={1.0}
          baseRadius={1.5}
          rangeRadius={1.5}
          backgroundColor="rgba(0,0,0,0.8)"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="text-center py-8 px-4">
          <h1 className="text-3xl font-bold text-gray-200 mb-2">
            A Journey Through Smiles
          </h1>
          <p className="text-gray-300">
            ✨ Drag the photos to see them come to life with 3D animations! ✨
          </p>
        </div>

        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center">
          <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-300 md:text-4xl">
            No lens can capture the grace you hold
            your beauty outshines every image ever taken ✨
          </p>
          {items.map((item, index) => (
            <DraggableCardBody key={index} className={item.className}>
              <img
                src={item.image}
                alt={item.title}
                className="pointer-events-none relative z-10 h-80 w-80 object-cover"
              />
              <h3 className="mt-4 text-center text-2xl font-bold text-neutral-300">
                {item.title}
              </h3>
            </DraggableCardBody>
          ))}
        </DraggableCardContainer>
      </div>
    </section>
  );
}

export default PhotoGallery;