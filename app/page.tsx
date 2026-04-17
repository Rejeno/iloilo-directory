
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
            <h2 className="text-5xl font-bold text-[#343434]">Popular Categories</h2>
            <button className="bg-[#115FC8] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 cursor-pointer">
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

        {/* Support Local, Buy Local */}
        <section>
          <div className="flex justify-between items-center mb-6 mt-25">
            <h2 className="text-5xl font-bold text-[#343434]">Support Local, Buy Local</h2>
            <button className="bg-[#115FC8] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 cursor-pointer">
              View All <span>▶</span>
            </button>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {/* Ratan Bag */}
            <div className="bg-[#FCFCF5] rounded-2xl p-4 shadow-md hover:shadow-lg transition">
              <div className="relative h-50 overflow-hidden mb-3">
                <img src="/home-assets/ratan.jpg" alt="Ratan Bag" className="w-full h-full object-cover rounded-2xl"/>
                <span className="absolute top-0 right-0 bg-[#BAD1EF] text-[#1D4ED8] text-sm font-semibold px-3 py-1 rounded-bl-2xl rounded-tr-2xl">-25 % off</span>
                <span className="absolute bottom-0 left-0 bg-[#BAD1EF] text-[#1D4ED8] text-sm px-3 py-1 rounded-bl-2xl rounded-tr-2xl">
                  Free Shipping Fee</span>
              </div>
              <h3 className="font-normal text-[#343434]">Ratan Bag</h3>
              <span className="inline-block bg-[#FACC15] text-[#4D4D4D] text-[10px] font-bold px-2 py-0.5 mt-1 mb-2">Brand New</span>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[#115FC8] font-bold">₱ 250.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>
            
             {/* Bischocho */}
             <div className="bg-[#FCFCF5] rounded-3xl p-4  shadow-md hover:shadow-lg transition">
              <div className="relative h-50 rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img src="/home-assets/bischocho.jpg" alt="Bischocho" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <h3 className="font-normal text-[#343434]">Bischocho</h3>
              <div className="flex justify-between items-center mt-8">
                <p className="text-[#115FC8] font-bold">₱ 80.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>

            {/* Mustang */}
            <div className="bg-[#FCFCF5] rounded-3xl border p-4 shadow-md hover:shadow-lgtransition">
              <div className="relative h-50 rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img src="/home-assets/mustang.jpg" alt="Car" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <h3 className="font-normal text-[#343434]">Ford Mustang</h3>
              <span className="inline-block bg-[#FACC15] text-[#4D4D4D] text-[10px] font-bold px-2 py-0.5 mt-1 mb-2">2nd Hand</span>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[#115FC8] font-bold">₱ 1,000,000.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>

            {/* Sinamak */}
            <div className="bg-[#FCFCF5] rounded-3xl p-4 shadow-md hover:shadow-lg transition">
              <div className="relative h-50 rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img src="/home-assets/sinamak.jpg" alt="Sinamak" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <h3 className="font-normal text-[#343434]">Jed's Ilonggo Style Sinamak</h3>
              <div className="flex justify-between items-center mt-8">
                <p className="text-[#115FC8] font-bold">₱ 300.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>
             {/* Ratan Bag */}
            <div className="bg-[#FCFCF5] rounded-2xl p-4 shadow-md hover:shadow-lg transition">
              <div className="relative h-50 overflow-hidden mb-3">
                <img src="/home-assets/ratan.jpg" alt="Ratan Bag" className="w-full h-full object-cover rounded-2xl"/>
                <span className="absolute top-0 right-0 bg-[#BAD1EF] text-[#1D4ED8] text-sm font-semibold px-3 py-1 rounded-bl-2xl rounded-tr-2xl">-25 % off</span>
                <span className="absolute bottom-0 left-0 bg-[#BAD1EF] text-[#1D4ED8] text-sm px-3 py-1 rounded-bl-2xl rounded-tr-2xl">
                  Free Shipping Fee</span>
              </div>
              <h3 className="font-normal text-[#343434]">Ratan Bag</h3>
              <span className="inline-block bg-[#FACC15] text-[#4D4D4D] text-[10px] font-bold px-2 py-0.5 mt-1 mb-2">Brand New</span>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[#115FC8] font-bold">₱ 250.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>
            
             {/* Bischocho */}
             <div className="bg-[#FCFCF5] rounded-3xl p-4  shadow-md hover:shadow-lg transition">
              <div className="relative h-50 rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img src="/home-assets/bischocho.jpg" alt="Bischocho" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <h3 className="font-normal text-[#343434]">Bischocho</h3>
              <div className="flex justify-between items-center mt-8">
                <p className="text-[#115FC8] font-bold">₱ 80.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>

            {/* Mustang */}
            <div className="bg-[#FCFCF5] rounded-3xl border p-4 shadow-md hover:shadow-lgtransition">
              <div className="relative h-50 rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img src="/home-assets/mustang.jpg" alt="Car" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <h3 className="font-normal text-[#343434]">Ford Mustang</h3>
              <span className="inline-block bg-[#FACC15] text-[#4D4D4D] text-[10px] font-bold px-2 py-0.5 mt-1 mb-2">2nd Hand</span>
              <div className="flex justify-between items-center mt-1">
                <p className="text-[#115FC8] font-bold">₱ 1,000,000.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>

            {/* Sinamak */}
            <div className="bg-[#FCFCF5] rounded-3xl p-4 shadow-md hover:shadow-lg transition">
              <div className="relative h-50 rounded-lg overflow-hidden mb-3 bg-gray-100">
                <img src="/home-assets/sinamak.jpg" alt="Sinamak" className="w-full h-full object-cover rounded-2xl"/>
              </div>
              <h3 className="font-normal text-[#343434]">Jed's Ilonggo Style Sinamak</h3>
              <div className="flex justify-between items-center mt-8">
                <p className="text-[#115FC8] font-bold">₱ 300.00</p>
                <p className="text-[#4D4D4D] text-xs">221 sold</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default HomePage;