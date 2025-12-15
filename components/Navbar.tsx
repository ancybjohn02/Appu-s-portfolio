// components/Navbar.tsx
import Link from 'next/link';
import { Mail } from 'lucide-react'; // Import icon for the CTA

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
  ];

  // Using a custom hook or dynamic context for the active link is better,
  // but for static display, we style links based on the dark theme.
  
  return (
    // Background: Darker, subtle backdrop-blur, slight shadow
    <nav className="bg-text-dark/95 sticky top-0 z-50 shadow-lg shadow-black/20 backdrop-blur-md border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          
          {/* LOGO / BRANDING */}
          <div className="flex">
            <Link 
              href="/" 
              className="flex-shrink-0 flex items-center text-2xl font-extrabold text-white tracking-wider"
            >
                {/* Use the same stylized text as the homepage */}
                Abhay B <span className="text-primary ml-1 drop-shadow-md">John</span>
            </Link>
          </div>
          
          {/* NAVIGATION LINKS & CTA */}
          <div className="flex items-center space-x-6">
            
            {/* Nav Links */}
            <div className="hidden sm:flex space-x-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  // Text: Light gray, Hover: Primary color
                  className="text-gray-300 hover:text-primary px-3 py-2 rounded-lg text-base font-medium transition duration-200 hover:bg-white/5"
                >
                    {item.name}
                </Link>
              ))}
            </div>

            {/* CTA BUTTON */}
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-primary text-sm font-semibold rounded-full 
              text-white bg-primary hover:bg-secondary transition duration-300 transform hover:scale-[1.03] shadow-md shadow-primary/40"
            >
              <Mail className="w-4 h-4 mr-2" /> Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;