// app/projects/photoshop/posters-posters/page.tsx
import Image from 'next/image';
import { FileText, Printer } from 'lucide-react';

// Array of 10 image paths (You MUST ensure these 10 files exist in your public/images folder)
// I've used generic names: poster-01.jpg, poster-02.jpg, etc.
const posterPosterImages = [
  { path: "/images/poster-1.jpg", alt: "Modern Event poster", type: "poster" },
  { path: "/images/poster-2.jpg", alt: "Concert Poster Design", type: "poster" },
  { path: "/images/poster-3.jpg", alt: "Startup Promo poster", type: "poster" },
  { path: "/images/poster-4.jpg", alt: "Movie Poster Concept", type: "poster" },
  { path: "/images/poster-5.jpg", alt: "Restaurant Menu poster", type: "poster" },
  { path: "/images/poster-6.jpg", alt: "Abstract Art Poster", type: "poster" },
  { path: "/images/poster-7.jpg", alt: "Workshop Digital poster", type: "poster" },
  { path: "/images/poster-8.jpg", alt: "Typography Focused Poster", type: "poster" },
  { path: "/images/poster-9.jpg", alt: "Product Launch poster", type: "poster" },
  { path: "/images/poster-10.jpg", alt: "Retro Style Poster", type: "poster" },
];

export default function postersPostersSection() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Flyers & Posters</h1>
      <p className="text-lg text-gray-600 mb-12">Examples of print and digital marketing collateral for various industries.</p>
      
      {/* Grid Layout: 2 columns on small, 3 on medium, 4 on large screens */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posterPosterImages.map((image, index) => {
          // Choose icon based on 'type' (can be used to show if it's a poster or poster)
          const Icon = image.type === 'poster' ? FileText : Printer;

          return (
            <div 
              key={index} 
              // Set aspect ratio typical of posters/posters (e.g., A4 is roughly 1.4:1)
              className="relative w-full aspect-[2/3] overflow-hidden rounded-lg shadow-xl bg-gray-100 flex items-center justify-center group"
            >
              <Image 
                src={image.path} 
                alt={image.alt} 
                layout="fill" 
                objectFit="cover" 
                priority={index < 4} // Prioritize loading the first row
                className="transition duration-300 transform group-hover:scale-[1.02]"
              />
              
              {/* Large Overlay Icon - Visible on hover, or slightly transparent normally */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Icon className="w-16 h-16 text-white/90" />
              </div>
            </div>
          );
        })}
      </div>
      
      <p className="text-center text-sm text-gray-500 mt-8">
        *Images are displayed without captions. Hover over the image to see a subtle icon.
      </p>
    </div>
  );
}