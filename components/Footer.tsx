// components/Footer.tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    // Added border-t and border-primary for a distinct separating line
    <footer className="bg-text-dark text-white mt-20 border-t border-primary shadow-inner shadow-black/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Thank You Message: Highlighted with the Primary color */}
        <h3 className="text-4xl font-extrabold mb-4 text-primary">
          Thank you for visiting!
        </h3>
        
        {/* Call to Action Text */}
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
          I hope you enjoyed reviewing my portfolio. Let's create something amazing together.
        </p>
        
        {/* Copyright */}
        <div className="text-sm text-gray-500">
          Built with Next.js & Tailwind CSS. &copy; {currentYear} Abhay B John. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;