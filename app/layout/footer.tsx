import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#115fc8] text-white pt-16 pb-8 font-sora w-full">
      <div className="max-w-360 mx-auto px-24">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-12 gap-16">
          
          {/* About Section */}
          <div className="col-span-5 flex flex-col">
            <h3 className="text-2xl font-bold mb-4 tracking-wide">About</h3>
            <p className="text-sm font-light leading-relaxed max-w-xl mb-6 text-[#FCFCF5]">
                Iloilo Directory is the only platform dedicated to helping our local community in searching for businesses and services online.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* TikTok */}
                <a href="#" className="rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" aria-label="TikTok">
                    <img 
                    src="/layout-assets/tiktok-icon.svg" 
                    alt="TikTok" 
                    className="w-7 h-7 object-contain" 
                    />
                </a>
                
                {/* Email */}
                <a href="#" className="rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" aria-label="Email">
                    <img 
                    src="/layout-assets/gmail-icon.svg" 
                    alt="Email" 
                    className="w-7 h-7 object-contain" 
                    />
                </a>

                {/* Facebook */}
                <a href="#" className="rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" aria-label="Facebook">
                    <img 
                    src="/layout-assets/fb-icon.svg" 
                    alt="Facebook" 
                    className="w-7 h-7 object-contain" 
                    />
                </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="col-span-7 grid grid-cols-3 gap-8 justify-items-end">
            
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 tracking-wide">Website</h3>
              <div className="flex flex-col gap-1">
                <Link href="/how-it-works" className="font-light text-sm text-white hover:text-white hover:underline transition-all w-fit">How it works</Link>
                <Link href="/list-company" className="font-light  text-sm text-white/95 hover:text-white hover:underline transition-all w-fit">List Your Company</Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 tracking-wide">Search</h3>
              <div className="flex flex-col gap-1">
                <Link href="/categories" className="font-light text-sm text-white hover:text-white hover:underline transition-all w-fit">Browse Categories</Link>
                <Link href="/locations" className="font-light text-sm text-white hover:text-white hover:underline transition-all w-fit">Browse Location</Link>
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-2xl font-bold mb-4 tracking-wide">Support</h3>
              <div className="flex flex-col gap-1">
                <Link href="/login" className="font-light text-sm text-white hover:text-white hover:underline transition-all w-fit">Member Log-in</Link>
                <Link href="/contact" className="font-light text-sm text-white hover:text-white hover:underline transition-all w-fit">Contact Us</Link>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-16 text-center text-sm font-extralight text-[#FCFCF5]">
          Copyright 2026 © Iloilo Directory. All rights reserved.
        </div>

      </div>
    </footer>
  );
}