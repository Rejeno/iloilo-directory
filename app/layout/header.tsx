"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
export default function Header() {

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Listings', path: '/listings' },
  { name: 'Classifieds', path: '/classifieds' },
  { name: 'Jobs', path: '/jobs' },
  { name: 'Events', path: '/events' },
  { name: 'Coupons', path: '/coupons' }
];
const currentPath = usePathname(); 


  return (
    <header className="bg-[#1866cc] w-full p-6">
      <div className="font-sora max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* Top Navigation Row */}
        <div className="flex items-center justify-between">
          
          {/* Logo Area */}
          <div className="flex cursor-pointer">
            <Link href="/" className="cursor-pointer">
            <img 
                src="/layout-assets/ilodirectlogo.svg" 
                alt="Iloilo Directory Logo" 
                className="w-40 h-15 object-contain" 
            />
            </Link>
            </div>

        {/* Navigation Links */}
        <nav className="translate-x- text-md flex items-end gap-2 text-white font-medium">
            {navItems.map((item) => (
                <a
                    key={item.name}
                    href={item.path} 
                    className={`px-3 py-0.5 rounded-3xl transition-all ${
                        currentPath === item.path
                        ? 'bg-[#FACC15] text-[#115FC8] shadow-inner' 
                        : 'hover:bg-white/10 hover:text-blue-100' 
                    }`}
                >
                    {item.name}
                </a>
            ))}
        </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 text-lg">
            <button className="bg-[#e2e8f0] text-[#1866cc] px-3 py-0.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Log-in
            </button>
            <button className="bg-[#e2e8f0] text-[#1866cc] px-3 py-0.5 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
              Sign-up
            </button>
          </div>
        </div>

    
      </div>
    </header>
  );
}