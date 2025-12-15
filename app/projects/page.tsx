// app/projects/page.tsx
import Link from 'next/link';
import Image from 'next/image'; // Import Image component
import { ChevronRight } from 'lucide-react'; // Keep ChevronRight

interface CategoryCardProps {
    title: string;
    href: string;
    logoPath: string; // Changed from icon to logoPath
}

// NOTE: The CategoryCard component no longer accepts 'icon' directly.
const CategoryCard: React.FC<CategoryCardProps> = ({ title, href, logoPath }) => (
  <Link 
    href={href} 
    // Card Style: Dark background (white/5), subtle border, strong shadow
    className="block bg-white/5 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 
               border border-primary/50 hover:border-secondary group"
  >
    <div className="flex items-start justify-between mb-4">
      {/* RENDER CUSTOM LOGO */}
      <div className="flex items-center justify-center w-10 h-10">
        <Image 
          src={logoPath}
          alt={`${title} Logo`}
          width={40}
          height={40}
          className="object-contain" // Ensures the logo fits well
        />
      </div>
      {/* Arrow Color: Muted, hover to Secondary */}
      <ChevronRight className="w-6 h-6 text-text-muted group-hover:text-secondary transition" />
    </div>
    {/* Title Color: Text Dark */}
    <h2 className="text-3xl font-bold text-text-dark mb-0">{title}</h2>
  </Link>
);

export default function ProjectsPage() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Heading Color: Text Dark */}
      <h1 className="text-5xl font-extrabold text-text-dark mb-12 text-center">
        My Design Toolkit Showcase
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <CategoryCard 
          title="Photoshop Work"
          href="/projects/photoshop"
          // Pass the path to your Photoshop logo file
          logoPath="/images/ps.png" 
        />
        <CategoryCard 
          title="Illustrator Work"
          href="/projects/illustrator"
          // Pass the path to your Illustrator logo file
          logoPath="/images/illustrator.png" 
        />
      </div>
    </div>
  );
}