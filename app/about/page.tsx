// app/about/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Palette, Zap } from 'lucide-react'; // Added lucide icons import

export default function AboutPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] p-8">
      <div className="max-w-3xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-text-dark">
            Abhay B{" "}
            <span className="text-primary drop-shadow-[0_0_25px_rgba(79,70,229,0.6)]">
              John
            </span>
          </h1>
          <p className="text-2xl text-text-muted mb-4">
            Passionate Graphic Designer
          </p>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            I deliver visually compelling and strategically effective design solutions
            across digital media.
          </p>
        </div>


        {/* PROFILE IMAGE */}
        <div className="mb-20 w-64 h-64 mx-auto rounded-full 
          bg-gradient-to-br from-primary/40 to-secondary/40 
          p-1 shadow-[0_0_40px_rgba(79,70,229,0.35)]">

          <div className="w-full h-full rounded-full overflow-hidden bg-text-dark">
            <Image
              src="/images/profile.jpg"
              alt="Abhay B John"
              width={256}
              height={256}
              className="object-cover"
            />
          </div>
        </div>


        {/* CORE EXPERTISE */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-text-dark mb-6 text-center flex items-center justify-center">
            <Palette className="w-6 h-6 mr-3 text-primary" /> Core Expertise
          </h2>
          <p className="text-lg text-text-muted mb-6 text-center">
            I build my work on mastery of essential creative tools:
          </p>
          
          <div className="space-y-6">
            <div className="bg-white/5 p-6 rounded-xl border border-primary/50 
              hover:border-primary transition duration-300 shadow-xl">
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Adobe Photoshop (Professional)
              </h3>
              <p className="text-text-muted">
                Advanced image manipulation, compositing, and professional retouching.
              </p>
            </div>
            
            <div className="bg-white/5 p-6 rounded-xl border border-primary/50 
              hover:border-primary transition duration-300 shadow-xl">
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Adobe Illustrator (Professional)
              </h3>
              <p className="text-text-muted">
                Expert in vector graphics, logo creation, brand identity, and scalable, precise artwork.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT I OFFER */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-text-dark mb-6 text-center flex items-center justify-center">
             <Zap className="w-6 h-6 mr-3 text-primary" /> What I Offer
          </h2>
          <p className="text-lg text-text-muted mb-6 text-center">
            I translate brand goals into powerful visuals, specializing in:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {["Brand Identity & Logo Design", "Marketing & Collateral Design (Digital)", "Vector Illustration & Infographics", "High-End Photo Editing",]
              .map((skill, index) => (
                <div key={index} className="bg-white/5 p-4 rounded-lg border border-secondary/50
                  text-center text-text-dark font-medium hover:border-secondary transition duration-300">
                  {skill}
                </div>
            ))}
          </div>
        </div> {/* <-- Clean closing for WHAT I OFFER */}

        {/* PHILOSOPHY */}
        <div className="mb-16 bg-gradient-to-r from-primary to-secondary 
          p-8 rounded-xl text-white shadow-xl">
          <p className="italic text-lg text-center">
            “Design is about purposeful creativity. Every detail must serve both
            aesthetics and strategy.”
          </p>
        </div>


        {/* CTA */}
        <div className="text-center pb-10">
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 rounded-full font-semibold text-white
              bg-primary hover:bg-secondary
              shadow-[0_0_30px_rgba(79,70,229,0.6)]
              transition duration-300 transform hover:scale-[1.03]"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </div>
  );
}