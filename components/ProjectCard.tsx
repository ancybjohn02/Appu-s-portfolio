// components/ProjectCard.tsx
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string; // Path relative to the public directory (e.g., /images/yt1.jpg)
  tags: string[];
  
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      {/* Image Container */}
      <div className="relative w-full h-48 sm:h-64 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={title} 
          layout="fill" 
          objectFit="cover"
          className="transition duration-500 transform group-hover:scale-105"
        />
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition duration-300">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium text-indigo-700 bg-indigo-100 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;