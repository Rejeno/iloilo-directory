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

    </main>
  );
}