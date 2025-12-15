// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-8 text-center bg-background">
      <div className="max-w-4xl pt-16 pb-16">
        
        {/* BIG HEADLINE */}
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight text-text-dark mb-6">
          Hello, I'm
          <span className="block mt-4 text-primary drop-shadow-[0_0_30px_rgba(79,70,229,0.5)]">
            Abhay B John.
          </span>
        </h1>
        
        {/* SUBHEAD - Using Tailwind classes for emphasis */}
        <p className="text-xl md:text-2xl text-text-muted mb-12 max-w-3xl mx-auto">
          A graphic designer specializing in 
          <span className="font-bold text-text-dark"> Brand Identity</span>, 
          <span className="font-bold text-text-dark"> Thumbnail Design</span>, and 
          <span className="font-bold text-text-dark"> Banners & Posters</span>. 
          I translate vision into high-impact visuals.
        </p>
        
        {/* Hero Image / Avatar (Centered and stylized) */}
        <div className="mb-12">
            <div className="w-56 h-56 mx-auto rounded-full 
                bg-gradient-to-br from-primary/40 to-secondary/40 
                p-1 shadow-[0_0_50px_rgba(79,70,229,0.5)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-text-dark">
                    {/* Add your profile image here */}
                    <Image
                        src="/images/profile.jpg"
                        alt="Profile Picture of Abhay B John"
                        width={224}
                        height={224}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>

        {/* CALL TO ACTION */}
        <Link 
          href="/projects" 
          className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full text-white 
            bg-primary hover:bg-secondary 
            shadow-[0_0_30px_rgba(79,70,229,0.4)] 
            transition duration-300 transform hover:scale-105"
        >
            View My Portfolio →
        </Link>
      </div>
    </div>
  );
}