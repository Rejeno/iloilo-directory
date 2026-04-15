import React from 'react';

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
   {/* Hero Section */}
      <section className="relative w-full h-125 flex flex-col items-center justify-center text-center px-4 overflow-hidden -mt-25 z-0">
        
        {/* Background Image */}
        <img 
          src="/home-assets/ilodirect.jpg" 
          alt="Iloilo Background" 
          className="absolute inset-0 w-full h-full object-[25%_75%] object-cover"
        />

        {/* Dark overlay to make the white text pop */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <h1 className="text-6xl font-bold text-white mb-8 drop-shadow-md">
            Discover Local Businesses in Iloilo
          </h1>
          <p className="text-3xl text-white font-semibold drop-shadow-md max-w-full">
            Let's discover the best places to eat, drink, and shop nearest to you.
          </p>
        </div>
      </section>

    </main>
  );
};

export default HomePage;