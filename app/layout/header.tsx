"use client"

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';

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

const router = useRouter();
const [searchQuery, setSearchQuery] = useState('');
const [category, setCategory] = useState('');
const [location, setLocation] = useState('');

const handleSearch = () => {
  const params = new URLSearchParams();
  if (searchQuery) params.append('q', searchQuery);
  if (category) params.append('category', category);
  if (location) params.append('location', location);
  
  // This will navigate to /search?q=xyz&category=xyz&location=xyz
  router.push(`/search?${params.toString()}`);
};


  return (
    <header className="bg-[#115FC8] w-full p-6 rounded-b-3xl">
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
        <nav className="translate-x- text-md flex items-end gap-2 text-white font-normal">
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
          <div className="flex items-center gap-3 text-md">
            <button className="bg-[#e2e8f0] text-[#1866cc] px-3 py-0.5 rounded-lg font-normal hover:bg-gray-100 transition-colors cursor-pointer">
              Log-in
            </button>
            <button className="bg-[#e2e8f0] text-[#1866cc] px-3 py-0.5 rounded-lg font-normal hover:bg-gray-100 transition-colors cursor-pointer">
              Sign-up
            </button>
          </div>
        </div>
        
       {/* Bottom Search Bar Row */}
        <div className="flex items-center gap-4 w-full">
        
        {/* Main Search Input */}
        <div className="flex-1">
            <input 
            type="text" 
            placeholder="What are you looking for...." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            className="w-full bg-[#FAFAEF] text-black px-4 py-3 rounded-lg outline-none placeholder:text-[#827D7D] focus:ring-2 focus:ring-yellow-400 transition-all"
            />
        </div>

        {/* Category Dropdown */}
        <div className="relative w-48">
            <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-[#FAFAEF] text-[#827D7D] px-4 py-3 rounded-lg appearance-none outline-none cursor-pointer focus:ring-2 focus:ring-yellow-400 transition-all"
            >
            <option value="">Category</option>
            <option value="real-estate">Real Estate</option>
            <option value="vehicles">Vehicles</option>
            <option value="electronics">Electronics</option>
            <option value="jobs">Jobs</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
        </div>

        {/* Location Dropdown */}
        <div className="relative w-48">
            <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-[#FAFAEF] text-[#827D7D] px-4 py-3 rounded-lg appearance-none outline-none cursor-pointer focus:ring-2 focus:ring-yellow-400 transition-all"
            >
            <option value="">Location</option>
            <option value="pavia">Pavia</option>
            <option value="jaro">Jaro</option>
            <option value="lapaz">Lapaz</option>
            <option value="mandurriao">Mandurriao</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-black pointer-events-none" />
        </div>

        {/* Action Buttons */}
        <button 
            onClick={handleSearch}
            className="bg-[#facc15] hover:bg-[#eab308] p-3 rounded-lg text-white transition-colors flex items-center justify-center cursor-pointer"
        >
            <Search className="w-10 h-6 stroke-3" />
        </button>
        
        <button className="bg-[#facc15] hover:bg-[#eab308] p-3 rounded-lg text-white transition-colors flex items-center justify-center cursor-pointer">
            <SlidersHorizontal className="w-10 h-6 stroke-[2.5]" />
        </button>

        </div>
      </div>
    </header>
  );
}