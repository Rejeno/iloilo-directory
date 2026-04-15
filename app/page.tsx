
const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
   {/* Hero Section */}
      <section className="font-sora relative w-full h-125 flex flex-col items-center justify-center text-center px-4 overflow-hidden -mt-25 z-0">
        
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

    {/* Main Content Container */}
      <div className="font-sora max-w-7xl mx-auto px-4 py-12 space-y-16">
        
       {/* Popular Categories */}
        <section>
          <div className="flex justify-between items-center mt-12 mb-12">
            <h2 className="text-5xl font-bold text-gray-800">Popular Categories</h2>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition flex items-center gap-2 cursor-pointer">
              View All <span>▶</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative rounded-xl overflow-hidden group cursor-pointer h-62 shadow-sm">
                <img 
                  src="/home-assets/ilobed.jpg" 
                  alt="Category" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#115FC8]/80 text-white py-3 px-3 text-center z-10">
                  <p className="font-bold text-xl leading-tight">Government & Orgs</p>
                  <p className="text-sm font-medium text-white mt-1">117 Listings</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default HomePage;