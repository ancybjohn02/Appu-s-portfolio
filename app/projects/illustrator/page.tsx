// app/projects/illustrator/illustration-works/page.tsx
'use client'; // Required for using useState
import { useState } from 'react';
import Image from 'next/image';
import { Brush } from 'lucide-react'; // Import icon for illustration
import ImageModal from '@/components/ImageModal'; // Import the Modal component

// Array of 5 illustration image paths (You MUST ensure these 5 files exist in public/images)
const illustrationImages = [
  { path: "/images/ai-1.png", alt: "Minimalist character vector art" },
  { path: "/images/ai-2.png", alt: "Isometric city illustration" },
  { path: "/images/ai-3.png", alt: "Complex vector pattern design" },
  { path: "/images/ai-4.png", alt: "Flat design icon set preview" },
  { path: "/images/ai-5.png", alt: "Detailed digital painting in vector" },
];

export default function IllustrationWorksSection() {
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
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Digital Illustration Works</h1>
      <p className="text-lg text-gray-600 mb-12">A portfolio of pure vector illustrations, logos, and custom graphics.</p>
      
      {/* Grid Layout: 2 columns on small, 3 on medium, 5 on large screens */}
      {/* Since you have 5, lg:grid-cols-5 is ideal for a single row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {illustrationImages.map((image, index) => (
          <div 
            key={index} 
            // Make the container clickable and apply hover effect
            onClick={() => openModal(image.path, image.alt)} 
            // Aspect ratio set to square (1:1) or near-square for typical vector art/icons
            className="relative w-full aspect-[4/3] overflow-hidden rounded-lg shadow-lg bg-gray-100 flex items-center justify-center group cursor-pointer ring-2 ring-transparent hover:ring-indigo-400 transition duration-200"
          >
            <Image 
              src={image.path} 
              alt={image.alt} 
              layout="fill" 
              objectFit="cover" 
              priority={index < 3} 
              className="transition duration-300 transform group-hover:scale-105"
            />
            
            {/* Large Hover Icon */}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Brush className="w-16 h-16 text-white/90" /> 
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 mt-8">
        Click on any image to view the full-size vector artwork.
      </p>
      
      {/* RENDER THE IMAGE MODAL */}
      <ImageModal
        isOpen={!!modalImage} 
        onClose={closeModal}
        imageUrl={modalImage?.path || ''}
        imageAlt={modalImage?.alt || ''}
      />
    </div>
  );
}