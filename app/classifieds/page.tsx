"use client";

import React from 'react';
import Image from 'next/image';

export default function ClassifiedsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBF5] font-wix text-[#343434]">
      {/* Hero Section */}
      <section className="relative w-full h-[450px] flex flex-col items-center justify-center text-[#FCFCF5] overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(20, 17, 17, 0.52), rgba(20, 17, 17, 0.52)), url('https://picsum.photos/1920/850')`,
            zIndex: 0
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-6xl px-4 text-center">
          <h1 className="font-sora font-bold text-5xl md:text-6xl leading-tight mb-6">
            Classifieds
          </h1>
          <p className="font-sora font-medium text-lg md:text-2xl opacity-100 max-w-4xl mx-auto text-center">
            Make your business known and drive quality leads to your website, your social network pages, and receive inquiries from potential clients with Iloilo Directory!
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-[1280px] mx-auto px-8 md:px-12 mt-16 pb-24">
        {/* Results Info & Sort */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
          <div className="flex flex-col gap-2">
            <p className="text-[#343434] font-wix text-base md:text-lg">Showing 1 - 40 of 10,085 Results</p>
            <h2 className="font-sora font-bold text-2xl md:text-3xl text-[#343434]">Local Finds</h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative w-[190px] h-[44px] bg-[#FAFAEF] shadow-sm rounded-xl flex items-center px-4">
              <select className="w-full font-open-sans text-base text-[#827D7D] appearance-none bg-transparent focus:outline-none cursor-pointer pr-8">
                <option>Sort by: Newest</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center pointer-events-none">
                <DropdownIcon />
              </div>
            </div>

            {/* View Toggles */}
            <div className="flex gap-2">
              <button className="w-10 h-10 bg-[#113FC8] shadow-sm rounded-xl flex items-center justify-center text-[#FCFCF5]">
                <GridViewIcon />
              </button>
              <button className="w-10 h-10 bg-[#FAFAEF] shadow-sm rounded-xl flex items-center justify-center text-[#324558]">
                <ListViewIcon />
              </button>
            </div>
          </div>
        </div>

        <hr className="border-t border-[#DCDCD6] mb-8" />

        {/* Item Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {[...Array(12)].map((_, idx) => (
            <ItemCard key={idx} index={idx} />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-20 flex justify-center">
          <Pagination />
        </div>
      </main>
    </div>
  );
}

// Sub-components

function ItemCard({ index }: { index: number }) {
  // Use a stable seed based on index to avoid hydration mismatch
  const seed = (index + 1) * 100;

  return (
    <div className="w-full max-w-[280px] bg-[#FCFCF5] shadow-[0px_4px_10px_rgba(0,0,0,0.1)] rounded-[12px_24px_24px_24px] p-2 relative group cursor-pointer border border-transparent hover:border-[#113FC8]/30 transition-all duration-300 hover:-translate-y-1">
      {/* Discount Badge */}
      <div className="absolute top-[10px] right-2 z-10 w-[70px] h-[24px] bg-[#BAD1EF] rounded-[0px_12px] flex items-center justify-center">
        <span className="text-[#115FC8] font-wix font-bold text-[10px] md:text-xs">
          -25 % off
        </span>
      </div>

      {/* Image Container */}
      <div className="relative w-full aspect-[335/246] rounded-[12px] overflow-hidden bg-[#D9D9D9]">
        <Image
          src={`https://picsum.photos/seed/${seed}/335/246`}
          alt="Product"
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Free Shipping Badge */}
        <div className="absolute bottom-0 left-0 z-10 px-3 py-1 bg-[#BAD1EF] rounded-[0px_20px_0px_12px] flex items-center justify-center">
          <span className="text-[#115FC8] font-wix text-xs text-center">
            Free Shipping Fee
          </span>
        </div>
      </div>

      {/* Details Area */}
      <div className="mt-3 px-2 pb-1">
        <h3 className="font-wix text-lg font-medium text-[#343434] truncate">Ratan Bag</h3>

        {/* Brand New Tag */}
        <div className="mt-1.5 w-[75px] py-0.5 bg-[#FACC15] flex items-center justify-center rounded-sm">
          <span className="text-[#4D4D4D] font-wix text-xs">
            Brand New
          </span>
        </div>

        <div className="flex justify-between items-center mt-2.5">
          <p className="font-wix font-bold text-lg text-[#115FC8]">₱ 250.00</p>
          <p className="text-[#4D4D4D] text-xs font-wix">221 sold</p>
        </div>
      </div>
    </div>
  );
}

function Pagination() {
    return (
        <div className="flex items-center gap-2">
            {/* Caret Left */}
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#113FC8] text-white rounded-lg shadow hover:bg-[#0e32a6] transition-colors">
                <span className="text-xl">◀</span>
            </button>
            
            {/* Page Numbers */}
            {[1, 2, 3, 4, 5, 6].map(num => (
                <button key={num} className={`w-8 h-10 md:w-10 md:h-12 flex items-center justify-center rounded-lg shadow-sm font-bold font-sora transition-all ${num === 1 ? 'bg-[#dee6f0] text-[#113FC8] border-2 border-[#113FC8]' : 'bg-[#dee6f0] text-[#113FC8] hover:bg-[#c8d6e8]'}`}>
                    {num}
                </button>
            ))}
            
            {/* Ellipses */}
            <div className="flex gap-1.5 px-2">
                {[1, 2, 3].map(i => (
                    <div key={i} className="w-1.5 h-1.5 bg-[#113FC8] rounded-full" />
                ))}
            </div>
            
            {/* End Pages */}
            {[138, 139, 140].map(num => (
                <button key={num} className="w-12 h-10 md:w-14 md:h-12 flex items-center justify-center bg-[#dee6f0] text-[#113FC8] rounded-lg shadow-sm hover:bg-[#c8d6e8] font-bold font-sora">
                    {num}
                </button>
            ))}

            {/* Caret Right */}
            <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#113FC8] text-white rounded-lg shadow hover:bg-[#0e32a6] transition-colors">
                <span className="text-xl">▶</span>
            </button>
            
            {/* Go to page select */}
            <div className="ml-8 hidden lg:flex items-center gap-4">
                <span className="font-sora font-semibold text-lg">Go to page:</span>
                <div className="relative w-20 h-10 md:w-24 md:h-12">
                    <input 
                        type="text" 
                        placeholder="e.g 25" 
                        className="w-full h-full bg-[#FCFCF5] border border-[#343434] shadow-sm rounded-lg text-center font-open-sans text-lg text-[#827D7D] focus:outline-none" 
                    />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

// Icons
function DropdownIcon() {
  return (
    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 15L19.5 24.5L29 15" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="45" height="45" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11 11H57L34 38L11 11Z" fill="currentColor" />
      <path d="M34 38V57L40 51V38" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridViewIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="16" height="16" fill="white" />
      <rect x="25.5" y="6" width="16.5" height="16" fill="white" />
      <rect x="6" y="25.5" width="16" height="16.5" fill="white" />
      <rect x="25.5" y="25.5" width="16.5" height="16.5" fill="white" />
    </svg>
  );
}

function ListViewIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="8.2" height="36" fill="#324558" />
      <rect x="19.9" y="6" width="8.2" height="36" fill="#324558" />
      <rect x="33.8" y="6" width="8.2" height="36" fill="#324558" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}