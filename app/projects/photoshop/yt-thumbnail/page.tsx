// app/projects/photoshop/yt-thumbnail/page.tsx
'use client'; // This component must be a Client Component to use useState
import { useState } from 'react';
import Image from 'next/image';
import { Youtube } from 'lucide-react';
import ImageModal from '@/components/ImageModal'; // Import the new modal component

// Array of 10 image paths
const thumbnailImages = [
  { path: "/images/yt-1.jpg", alt: "Vibrant gaming thumbnail" },
  { path: "/images/yt-2.jpg", alt: "Minimalist financial video cover" },
  { path: "/images/yt-3.jpg", alt: "High-contrast tutorial image" },
  { path: "/images/yt-4.jpg", alt: "Product review thumbnail with text overlay" },
  { path: "/images/yt-5.jpg", alt: "Clean travel vlog image" },
  { path: "/images/yt-6.jpg", alt: "Motivational speech video cover" },
  { path: "/images/yt-7.jpg", alt: "Food cooking channel thumbnail" },
  { path: "/images/yt-8.jpg", alt: "Educational cartoon thumbnail" },
  { path: "/images/yt-9.jpg", alt: "Music reaction video cover" },
  { path: "/images/yt-10.jpg", alt: "DIY home project image" },
];

export default function YTThumbnailSection() {
  // State to track the currently open image (path and alt)
  const [modalImage, setModalImage] = useState<{ path: string; alt: string } | null>(null);

  const openModal = (path: string, alt: string) => {
    setModalImage({ path, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">YouTube Thumbnails</h1>
      <p className="text-lg text-gray-600 mb-12">My practice work</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {thumbnailImages.map((image, index) => (
          <div 
            key={index} 
            // Make the entire container clickable
            onClick={() => openModal(image.path, image.alt)} 
            className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg bg-gray-100 flex items-center justify-center group cursor-pointer ring-2 ring-transparent hover:ring-indigo-400 transition duration-200"
          >
            <Image 
              src={image.path} 
              alt={image.alt} 
              layout="fill" 
              objectFit="cover" 
              priority={index < 5} 
              className="transition duration-300 transform group-hover:scale-105"
            />
            
            {/* Hover Icon */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Youtube className="w-16 h-16 text-white/90" /> 
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-8">
        Click on any thumbnail to view the full-size image.
      </p>

      {/* RENDER THE IMAGE MODAL */}
      <ImageModal
        isOpen={!!modalImage} // Checks if modalImage is NOT null
        onClose={closeModal}
        imageUrl={modalImage?.path || ''}
        imageAlt={modalImage?.alt || ''}
      />
    </div>
  );
}