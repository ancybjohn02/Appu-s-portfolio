// app/contact/page.tsx
'use client'; // REQUIRED: Must be a client component to use state and the modal
import { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Award, ZoomIn } from 'lucide-react';
import Link from 'next/link';
import ImageModal from '@/components/ImageModal'; // Assuming ImageModal is here

export default function ContactPage() {
  // State to control the visibility and content of the modal
  const [modalImage, setModalImage] = useState<{ path: string; alt: string } | null>(null);

  const openModal = (path: string, alt: string) => {
    setModalImage({ path, alt });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const certificatePath = "/images/certificate.png"; // *** Set path to your certificate IMAGE file ***
  const certificateAlt = "Adobe Photoshop Mastery Certification";

  // Define your contact details and social links here
  const contactInfo = [
    { icon: Mail, detail: "abhaybjohn26@gmail.com", link: "mailto:abhaybjohn26@gmail.com" },
    { icon: Phone, detail: "+91 73000 77798", link: "tel:+917300077798" },
    { icon: MapPin, detail: "Kerala, India (Remote Available)", link: "#" },
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", link: "https://www.instagram.com/abhaypsd_/" },
  ];

  return (
    <div className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      
      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-text-dark mb-4">
          Ready to Elevate Your Brand?
        </h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          I'm currently open for new projects, freelance work, and collaborations. Let's start the conversation!
        </p>
      </div>

      <div className="flex justify-center">
        
        {/* CONTACT INFO & SOCIAL LINKS */}
        <div className="w-full max-w-lg space-y-10 p-8 bg-white/5 rounded-2xl shadow-2xl border border-primary/20">
          
          <h2 className="text-3xl font-bold text-primary mb-4 border-b border-secondary/50 pb-4 text-center">
            Connect Directly
          </h2>
          
          {/* Contact Details */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center text-text-dark">
                <item.icon className="w-8 h-8 mr-6 text-secondary flex-shrink-0" />
                <Link 
                  href={item.link} 
                  className="text-lg font-medium hover:text-primary transition duration-200 break-words"
                >
                    {item.detail}
                </Link>
              </div>
            ))}
          </div>

          {/* CALL-TO-ACTION: CERTIFICATE VIEW (Clickable Icon) */}
          <div className="pt-6 border-t border-primary/20">
            <h3 className="text-xl font-bold text-text-dark mb-4">Verify My Credentials</h3>
             
             {/* Clickable Card/Icon to open the Modal */}
             <div
                onClick={() => openModal(certificatePath, certificateAlt)}
                className="flex items-center justify-center p-4 bg-accent-soft rounded-lg cursor-pointer transition duration-300 hover:bg-white border-2 border-transparent hover:border-primary group"
              >
                <Award className="w-6 h-6 mr-4 text-secondary group-hover:text-primary transition" />
                <span className="text-lg font-semibold text-text-dark">
                    Click to View Certification
                </span>
                <ZoomIn className="w-5 h-5 ml-4 text-text-muted group-hover:text-secondary transition" />
              </div>

              <p className="text-xs text-text-muted mt-2 text-center">
                 Note: Click to open.
              </p>
          </div>

          {/* Social Links */}
          <div className="pt-6 border-t border-primary/20">
            <h3 className="text-xl font-bold text-text-dark mb-4">Find Me Online</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  aria-label={social.name} 
                  className="text-text-muted hover:text-primary transition duration-200"
                >
                    <social.icon className="w-10 h-10" />
                </Link>
              ))}
            </div>
          </div>
        </div>
        
      </div>

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