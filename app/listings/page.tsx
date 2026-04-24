import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
                <button className="flex items-center justify-center w-10 h-10 pt-2 cursor-pointer">
                    <img 
                    src="/listings-assets/one.svg" 
                    alt="Grid View" 
                    className="w-10 h-10 object-contain" 
                    />
                </button>
                
                {/* List View Button (Inactive) */}
                <button className="flex items-center justify-center w-10 h-10 bg-[#FAFAEF] rounded-xl shadow-md cursor-pointer">
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
        {/* Listings Grid */}
        <section>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <Link key={item} href="/post-type" className="block bg-[#FCFCF5] rounded-2xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                <div className="relative h-48">
                  <img src="/listings-assets/ilodirect.jpg" alt="Coffee Break" className="w-full h-full object-cover" />
                  <div className={`absolute top-3 left-3 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg ${item % 2 === 0 ? 'bg-green-500' : 'bg-red-500'}`}>
                    {item % 2 === 0 ? 'Open' : 'Closed'}
                  </div>
                  <div className="absolute top-3 right-3 bg-white backdrop-blur-sm text-black text-[10px] font-medium px-2.5 py-1 rounded-lg shadow-sm">
                    Education & Training
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div>
                    <h3 className="font-normal text-2xl text-black">Coffee Break Manduriao</h3>
                    <div className="flex items-center text-sm text-black mt-2 gap-4">
                      <span className="flex items-center gap-1">
                        <img 
                          src="/listings-assets/location-icon.svg" 
                          alt="Location" 
                          className="w-5 h-5" 
                        />
                        Miag-ao, Iloilo
                      </span>
                      <span className="flex items-center gap-1">
                        <img 
                          src="/listings-assets/calendar-icon.svg" 
                          alt="Calendar" 
                          className="w-6 h-6" 
                        />
                        Monday - Friday
                      </span>
                    </div>
                  </div>
                <button>
                  <img 
                    src="/listings-assets/blue-arrow-button.svg" 
                    alt="View Details" 
                    className="w-13 h-13 cursor-pointer transition-all duration-300 hover:scale-110 hover:opacity-90" 
                  />
                </button>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-20">
          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#113FC8] text-white hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5, 6].map((page) => (
              <button 
                key={page} 
                className={`w-10 h-10 rounded-lg font-bold transition-colors ${
                  page === 1 
                    ? 'bg-blue-100 text-[#113FC8]' 
                    : 'bg-white text-[#113FC8] hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
            
            <span className="px-2 text-[#113FC8] font-bold tracking-widest">...</span>
            
            {[138, 139, 140].map((page) => (
              <button 
                key={page} 
                className="w-10 h-10 rounded-lg font-bold bg-white text-[#113FC8] hover:bg-blue-50 border border-gray-200 transition-colors"
              >
                {page}
              </button>
            ))}
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#113FC8] text-white hover:bg-blue-700 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex items-center ml-20 gap-2">
            <span className="text-sm font-bold text-black">Go to page:</span>
            <input 
              type="text" 
              placeholder="e.g 25" 
              className="w-16 h-10 px-2 text-[#827D7D] text-sm text-center shadow-md border-2 border-gray-300 rounded-lg outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
    </div>
    </main>
  );
}