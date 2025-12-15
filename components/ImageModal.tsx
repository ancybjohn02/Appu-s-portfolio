// components/ImageModal.tsx
import Image from 'next/image';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  imageAlt: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ isOpen, onClose, imageUrl, imageAlt }) => {
  if (!isOpen) return null;

  return (
    // Fixed, full-screen overlay
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4" 
      onClick={onClose} // Close when clicking the backdrop
    >
      
      {/* Modal Content - prevents closing when clicking the image itself */}
      <div 
        className="relative max-w-7xl max-h-[90vh] w-full h-full"
        onClick={(e) => e.stopPropagation()} 
      >
        
        {/* Close Button */}
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-all focus:outline-none"
          aria-label="Close image viewer"
        >
          <X className="w-8 h-8" />
        </button>
        
        {/* Full Image Display */}
        <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={imageUrl}
              alt={imageAlt}
              // The style here makes the image fit within the modal boundaries while maintaining aspect ratio
              style={{ objectFit: 'contain' }}
              fill
            />
        </div>
      </div>
    </div>
  );
};

export default ImageModal;