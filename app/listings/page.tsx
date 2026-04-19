import React from 'react';
import Image from 'next/image';

// Mock data based on the screenshot
const mockListings = Array(15).fill({
  title: 'Coffee Break Manduriao',
  location: 'Miag-ao, Iloilo',
  schedule: 'Monday - Friday',
  category: 'Education & Training',
  isOpen: false, // toggles the red/green badge
  imageUrl: '/placeholder-image.jpg', // Replace with your actual image path
});

export default function ListingsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
     {/* Hero Section */}
      <section className="font-sora relative w-full h-125 flex flex-col items-center justify-center text-center px-4 overflow-hidden -mt-25 z-0">
        
        {/* Background Image */}
        <img 
          src="/listings-assets/ilodirect.jpg" 
          alt="Iloilo Background" 
          className="absolute inset-0 w-full h-full object-[25%_75%] object-cover"
        />

        {/* Dark overlay to make the white text pop */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-md">
           Listings
          </h1>
          <p className="text-3xl text-white font-semibold drop-shadow-md max-w-full">
            Grow your business, generate quality leads, and get more inquiries with Iloilo Directory!
        </p>
        </div>
      </section>

     {/* Main Content Area */}
      <div className="font-sora max-w-7xl mx-auto px-8 pt-8">
        
        {/* Top Controls: Count, Title, and Filters */}
        <div className="mb-6">
          <p className="text-sm text-[#343434] mb-5">Showing 1 - 40 of 10,085 Results</p>
          <div className="flex flex-row items-center justify-between gap-4">
            <h2 className="text-[40px] font-bold text-[#343434]">Discover New Places</h2>
            
            <div className="flex items-center gap-3">
              <div className="flex items-center bg-[#FAFAEF] border border-gray-200 rounded-xl px-3 py-2 drop-shadow-md">
                <span className="text-base text-[#827D7D] mr-2">Sort by:</span>
                <select className="bg-transparent text-base font-medium text-gray-700 outline-none cursor-pointer">
                  <option>Default</option>
                  <option>Newest</option>
                  <option>Popular</option>
                </select>
              </div>
              
            <div className="flex items-center gap-3">
                {/* Grid View Button (Active) */}
                <button className="flex items-center justify-center w-10 h-10 pt-2">
                    <img 
                    src="/listings-assets/one.svg" 
                    alt="Grid View" 
                    className="w-10 h-10 object-contain" 
                    />
                </button>
                
                {/* List View Button (Inactive) */}
                <button className="flex items-center justify-center w-10 h-10 bg-[#FAFAEF] rounded-xl shadow-md">
                    <img 
                    src="/listings-assets/two.svg"  
                    alt="List View" 
                    className="w-8 h-8 object-contain" 
                    />
                </button>
            </div>
            </div>
          </div>
        </div>

    </div>
    </main>
  );
}