
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
          <div className="flex justify-between items-center mb-12 mt-25">
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

          {/* Recent Listings */}
        <section>
          <div className="flex justify-between items-center mb-12 mt-25">
            <h2 className="text-5xl font-bold text-[#343434]">Recent Listings</h2>
            <button className="bg-[#115FC8] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 cursor-pointer">
              View All <span>▶</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-[#FCFCF5] rounded-2xl overflow-hidden shadow-md hover:shadow-lg  transition">
                <div className="relative h-48">
                  <img src="/home-assets/ilodirect.jpg" alt="Coffee Break" className="w-full h-full object-cover" />
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
                          src="/home-assets/location-icon.svg" 
                          alt="Location" 
                          className="w-5 h-5" 
                        />
                        Miag-ao, Iloilo
                      </span>
                      <span className="flex items-center gap-1">
                        <img 
                          src="/home-assets/calendar-icon.svg" 
                          alt="Calendar" 
                          className="w-6 h-6" 
                        />
                        Monday - Friday
                      </span>
                    </div>
                  </div>
                <button>
                  <img 
                    src="/home-assets/blue-arrow-button.svg" 
                    alt="View Details" 
                    className="w-13 h-13 cursor-pointer transition-transform duration-200 hover:scale-110" 
                  />
                </button>
                </div>
              </div>
            ))}
          </div>
        </section>

          {/* Job Offerings */}
        <section>
          <div className="flex justify-between items-center mb-12 mt-25">
            <h2 className="text-5xl font-bold text-[#343434]">Job Offerings</h2>
            <button className="bg-[#115FC8] text-white px-5 py-2 rounded-xl font-medium flex items-center gap-2 cursor-pointer">
              View All <span>▶</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-[#FCFCF5] rounded-xl p-5 shadow-md hover:shadow-lg transition flex flex-col justify-between">
                <div className="flex gap-4 mb-4">
                  <div className="w-22 h-22 rounded-full bg-gray-50 shrink-0 flex items-center justify-center border border-blue-200 overflow-hidden">
                    <img src="/home-assets/wvsu-logo.svg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-[#4D4D4D] leading-tight">Computer Science<br/>Instructor</h3>
                      <span className="bg-[#115FC8] text-white text-[10px] font-medium px-2 rounded-sm">Full-time</span>
                    </div>
                    <p className="text-xs text-black mt-1 font-normal">WVSU - Main Campus</p>
                    <p className="text-xs text-black mt-0.5 truncate">Luna St, La Paz, Iloilo City, 5000 Iloilo</p>
                  </div>
                </div>
                <div className="border-t-2 border-[#DCDCD6] pt-4 flex justify-between items-center">
                  <p className="text-[#115FC8] font-semibold">₱ 30,000.00 <span className="text-[#4D4D4D] text-xs font-semibold">/monthly</span></p>
                  <button className="text-[#113FC8] border-2 border-[#113FC8] px-3 py-1.5 rounded-xl text-xs font-semibold hover:bg-blue-50 transition">
                    View Details ❯
                  </button>
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