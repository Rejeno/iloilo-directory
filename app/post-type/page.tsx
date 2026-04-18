"use client";

import React from 'react';
import Image from 'next/image';

export default function PostTypePage() {
    return (
        <div className="min-h-screen bg-[#FBFBF5] font-sans pb-20">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[510px] w-full flex items-end pb-12 md:pb-16 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(20, 17, 17, 0.52), rgba(20, 17, 17, 0.52)), url('https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=2000&auto=format&fit=crop')`, // Placeholder for museum/gallery
                        zIndex: 0
                    }}
                />
                
                <div className="relative z-10 w-full max-w-[1152px] mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-6 pb-6">
                    <div className="w-full md:w-auto">
                        <h1 className="text-[36px] md:text-[45px] leading-[1.2] font-bold text-white mb-6 font-sora tracking-tight">
                            UP ART GALLERY
                        </h1>
                        
                        <div className="flex flex-wrap items-center gap-4 text-white">
                            <div className="bg-[#113FC8] px-4 py-2 rounded-md font-sora font-bold flex items-center gap-2 text-sm md:text-base">
                                <LocationPinIcon /> Art & Culture
                            </div>
                            <div className="flex items-center gap-1 ml-2">
                                {[1, 2, 3, 4].map(star => (
                                    <StarIcon key={star} className="text-[#FFCC00]" />
                                ))}
                                <StarIcon className="text-[#FAFAEF]" />
                                <span className="font-sora text-sm ml-2 opacity-90">(17 Reviews)</span>
                            </div>
                            <div className="flex items-center gap-2 ml-4">
                                <LocationPinIcon />
                                <span className="font-sora text-sm opacity-90">Miagao, Iloilo</span>
                            </div>
                        </div>
                    </div>

                    {/* Floating Action Card */}
                    <div className="w-full md:w-[400px] bg-[#FCFCF5] p-6 shadow-[0px_4px_15px_rgba(0,0,0,0.1)] rounded-[16px_32px_32px_32px] shrink-0">
                        <button suppressHydrationWarning className="w-full bg-[#113FC8] hover:bg-[#0f34a5] transition-colors text-white font-bold py-3.5 rounded-[6px] flex items-center justify-center gap-3 mb-4 group">
                            <PhoneCallIcon /> 
                            <div className="text-left font-sora flex items-baseline gap-2">
                                <span className="text-[20px]">Call Now</span> 
                                <span className="text-xs font-normal opacity-90">+63 33 315 8556</span>
                            </div>
                        </button>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <button suppressHydrationWarning className="bg-[#e4e4e4] hover:bg-gray-300 transition-colors text-black py-2.5 rounded-[8px] flex items-center justify-center gap-2 font-sora font-medium text-sm cursor-pointer">
                                <SaveIcon /> Save
                            </button>
                            <button suppressHydrationWarning className="bg-[#e4e4e4] hover:bg-gray-300 transition-colors text-black py-2.5 rounded-[8px] flex items-center justify-center gap-2 font-sora font-medium text-sm cursor-pointer">
                                <HeartIcon /> Like
                            </button>
                        </div>
                        
                        <button suppressHydrationWarning className="w-full bg-[#FACC15] hover:brightness-95 transition-all text-white font-bold py-3.5 rounded-[6px] text-lg font-sora shadow-sm">
                            Claim Listing
                        </button>
                    </div>
                </div>
            </section>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="max-w-[1152px] mx-auto px-6 pt-16 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-x-10 gap-y-12 items-start tracking-wide">
                    
                    {/* --- LEFT COLUMN: CONTENT --- */}
                    <div className="space-y-12">
                        
                        {/* About Section */}
                        <section className="bg-[#FCFCF5] p-6 md:p-8 rounded-[12px_24px_24px_24px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] border border-transparent">
                            <h2 className="text-[26px] md:text-[30px] font-bold text-[#343434] font-sora mb-4 tracking-tight">
                                About UP Art Gallery
                            </h2>
                            <p className="text-[16px] md:text-[18px] leading-relaxed text-[#565555] font-sora opacity-90">
                                UPV Art Gallery is a contemporary art space located within the University of the Philippines Visayas in Miagao, Iloilo. It serves as a creative platform for both emerging and established artists, showcasing a diverse collection of visual works including paintings, sculptures, installations, and mixed media.
                            </p>
                        </section>

                        {/* Specialties Section */}
                        <section className="bg-[#FCFCF5] p-6 md:p-8 rounded-[12px_24px_24px_24px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] border border-transparent">
                            <h3 className="text-[24px] md:text-[30px] font-bold text-[#343434] font-sora mb-4 tracking-tight">
                                Specialties
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-white border border-gray-200 text-[#343434] font-sora text-sm md:text-base font-medium px-5 py-2.5 rounded-[8px] shadow-sm">Contemporary</span>
                                <span className="bg-white border border-gray-200 text-[#343434] font-sora text-sm md:text-base font-medium px-5 py-2.5 rounded-[8px] shadow-sm">Art Galleries</span>
                                <span className="bg-white border border-gray-200 text-[#343434] font-sora text-sm md:text-base font-medium px-5 py-2.5 rounded-[8px] shadow-sm">Exhibition</span>
                            </div>
                        </section>

                        {/* Opening Hours Section */}
                        <section className="bg-[#FCFCF5] p-6 md:p-8 rounded-[12px_24px_24px_24px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] border border-transparent">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                                <h3 className="text-[26px] md:text-[30px] font-bold text-[#343434] font-sora tracking-tight">
                                    Opening Hours
                                </h3>
                                <span className="bg-[#FACC15] text-[#141111]/80 font-bold px-5 py-1.5 rounded-full text-sm md:text-base inline-block self-start cursor-default shadow-sm">
                                    Open Now
                                </span>
                            </div>
                            
                            <div className="space-y-4 text-[#565555] font-sora text-base md:text-lg font-medium px-1">
                                <div className="flex justify-between items-center py-2 relative">
                                    <span>Monday - Friday</span>
                                    <span className="font-semibold text-[#343434]">8:00 AM - 5:00 PM</span>
                                    <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#E8DEF8] rounded-full overflow-hidden">
                                        <div className="h-full w-1/3 bg-[#113FC8] rounded-full"></div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-2 relative pt-2">
                                    <span>Saturday</span>
                                    <span className="font-semibold text-[#343434]">10:00 AM - 5:00 PM</span>
                                    <div className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#E8DEF8] rounded-full"></div>
                                </div>
                                <div className="flex justify-between items-center py-2 pt-2">
                                    <span>Sunday</span>
                                    <span className="text-red-500 font-bold">Closed</span>
                                </div>
                            </div>
                        </section>

                        {/* Reviews Section */}
                        <section className="bg-[#FCFCF5] p-6 md:p-8 rounded-[12px_24px_24px_24px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] border border-transparent">
                            <h3 className="text-[26px] md:text-[30px] font-bold text-[#343434] font-sora mb-6 tracking-tight">
                                Reviews
                            </h3>
                            
                            <div className="flex flex-col md:flex-row items-baseline gap-4 mb-10">
                                <span className="text-[40px] md:text-[48px] font-sora font-semibold text-[#113FC8] leading-none">4.5</span>
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4].map(star => <StarIcon key={star} className="text-[#FFCC00] w-6 h-6" />)}
                                        <StarIcon className="text-[#827D7D] w-6 h-6" />
                                    </div>
                                    <span className="text-[#827D7D] font-sora text-sm">(17 Reviews)</span>
                                </div>
                                <div className="md:ml-auto">
                                   <button suppressHydrationWarning className="bg-[#FACC15] text-[#141111]/80 font-bold px-6 py-2.5 rounded-full text-sm md:text-base shadow-sm hover:-translate-y-0.5 hover:brightness-95 transition-transform duration-300">
                                      View All
                                   </button>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                {/* Review Items */}
                                {[1, 2, 3].map((_, idx) => (
                                    <div key={idx} className="relative pb-6">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden relative">
                                                <Image 
                                                    src="https://upload.wikimedia.org/wikipedia/commons/d/dc/WVSU_Main_Campus_Logo.svg"
                                                    alt="User avatar"
                                                    fill
                                                    sizes="(max-width: 768px) 50px, 60px"
                                                    className="object-contain p-1.5"
                                                />
                                            </div>
                                            <div className="grow">
                                                <div className="flex justify-between items-start mb-0.5">
                                                    <h4 className="text-[16px] md:text-[18px] font-bold text-[#343434] font-sora">Coffee Break</h4>
                                                    <span className="text-[#827D7D] text-xs md:text-sm font-sora font-medium">13 Feb 2026</span>
                                                </div>
                                                <div className="flex items-center gap-0.5 mb-2">
                                                    {[1, 2, 3, 4, 5].map(star => <StarIcon key={star} className="text-[#FFCC00] w-3.5 h-3.5" />)}
                                                </div>
                                                <p className="text-[#565555] text-[15px] font-sora opacity-90 leading-relaxed">
                                                    Great Gallery with a fantastic collection of modern art. Highly recommend visiting if you love local talent and creative environments!
                                                </p>
                                            </div>
                                        </div>
                                        {/* Separator mimicking progress bar styling */}
                                        {idx !== 2 && (
                                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#DCDCD6]"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* --- RIGHT COLUMN: SIDEBAR --- */}
                    <aside className="space-y-8">
                        {/* Contact Information */}
                        <div className="bg-[#FCFCF5] p-6 md:p-8 rounded-[12px_24px_24px_24px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] border border-transparent">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-[#343434] font-sora mb-6 tracking-tight">Contact Info</h3>
                            
                            <div className="space-y-5">
                                <div className="flex items-start gap-3 text-[#343434]">
                                    <div className="shrink-0 mt-0.5 text-[#113FC8]"><LocationCrossIcon /></div>
                                    <div>
                                        <h4 className="font-sora font-bold text-[16px] mb-0.5">Address</h4>
                                        <p className="font-sora text-[14px] opacity-80 max-w-[280px]">University of The Philippines Visayas, Ybiernas St, Miag-ao, Iloilo, 5023</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-[#343434]">
                                    <div className="shrink-0 mt-0.5 text-[#113FC8]"><PhoneFillIcon /></div>
                                    <div>
                                        <h4 className="font-sora font-bold text-[16px] mb-0.5">Phone</h4>
                                        <p className="font-sora text-[14px] opacity-80">+63 33 315 8556</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-[#343434]">
                                    <div className="shrink-0 mt-0.5 text-[#113FC8]"><EmailIcon /></div>
                                    <div>
                                        <h4 className="font-sora font-bold text-[16px] mb-0.5">Email</h4>
                                        <p className="font-sora text-[14px] opacity-80">info@upv.com</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8">
                                <button suppressHydrationWarning className="w-full h-12 bg-white border-2 border-[#113FC8] hover:bg-[#113FC8] hover:text-white rounded-[6px] text-[#113FC8] font-sora font-semibold text-base flex items-center justify-center gap-3 transition-colors group">
                                    <ChatOutlineIcon /> Send Message
                                </button>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="bg-[#FCFCF5] p-6 md:p-8 rounded-[12px_24px_24px_24px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] border border-transparent">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-[#343434] font-sora mb-6 tracking-tight">Gallery</h3>
                            <div className="space-y-3">
                                <div className="relative w-full h-[180px] md:h-[220px] rounded-[12px] overflow-hidden bg-gray-200">
                                    <Image src="https://images.unsplash.com/photo-1577083165350-14cbdff2a912?q=80&w=600&auto=format&fit=crop" alt="Gallery Main" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="relative w-full h-[80px] md:h-[100px] rounded-[10px] overflow-hidden bg-gray-200">
                                        <Image src="https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=300&auto=format&fit=crop" alt="Gallery item" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="relative w-full h-[80px] md:h-[100px] rounded-[10px] overflow-hidden bg-gray-200">
                                        <Image src="https://images.unsplash.com/photo-1461344577544-486187cc8da8?q=80&w=300&auto=format&fit=crop" alt="Gallery item" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                    <div className="relative w-full h-[80px] md:h-[100px] rounded-[10px] overflow-hidden bg-gray-200">
                                        <Image src="https://images.unsplash.com/photo-1561570535-649df16a7042?q=80&w=300&auto=format&fit=crop" alt="Gallery item" fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="bg-[#FCFCF5] p-6 md:p-8 rounded-[12px_24px_24px_24px] shadow-[0px_4px_10px_rgba(0,0,0,0.05)] border border-transparent">
                            <h3 className="text-[24px] md:text-[28px] font-bold text-[#343434] font-sora mb-6 tracking-tight">Location</h3>
                            <div className="relative w-full h-[240px] md:h-[280px] rounded-[12px] overflow-hidden bg-gray-100 mb-6 border border-gray-200">
                                {/* Map Placeholder Image */}
                                <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=600&auto=format&fit=crop" alt="Map Location" fill className="object-cover opacity-60 mix-blend-multiply" />
                                <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 drop-shadow-md">
                                    <MapPinBigIcon />
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <div className="w-full h-12 bg-white border border-gray-300 rounded-[8px] font-sora text-[15px] flex items-center gap-3 px-4 text-[#827D7D] shadow-sm">
                                    <MapPinOutlineIcon /> Search Location
                                </div>
                            </div>
                            
                            <button suppressHydrationWarning className="w-full bg-[#113FC8] hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 text-white font-bold py-3.5 rounded-[8px] text-base font-sora text-center shadow-sm">
                                Get Direction
                            </button>
                        </div>
                    </aside>
                </div>
                
                {/* --- SIMILAR LISTINGS --- */}
                <hr className="border-[#DCDCD6] mb-12 mt-12 border-t-2" />
                <div className="pb-10">
                    <h2 className="text-[30px] font-bold text-[#343434] font-sora mb-8 tracking-tight">Similar Listings</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                            <div key={item} className="bg-[#FCFCF5] rounded-[12px_24px_24px_24px] overflow-hidden flex flex-col shadow-[0px_4px_10px_rgba(0,0,0,0.1)] border border-transparent hover:border-[#113FC8]/30 transition-transform duration-300 hover:-translate-y-1 group cursor-pointer pb-2">
                                {/* Card Image */}
                                <div className="p-4 pb-2">
                                   <div className="relative w-full h-[200px] rounded-[12px] overflow-hidden bg-gray-100">
                                       <Image 
                                           src="https://images.unsplash.com/photo-1560613865-c3f25c77e6f3?q=80&w=600&auto=format&fit=crop" 
                                           alt="Museum Item" 
                                           fill 
                                           className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                       />
                                   </div>
                                </div>
                                {/* Card Body */}
                                <div className="px-5 pb-5 pt-0 flex flex-col flex-grow">
                                    <h3 className="text-[17px] font-bold font-sora text-[#343434] mb-1.5 group-hover:text-[#115FC8] transition-colors leading-tight">Museo Iloilo</h3>
                                    <p className="text-[13px] text-gray-600 font-sora mb-4 flex-grow leading-relaxed">
                                        Museum featuring various fossils & historical artifacts, plus paintings & sculptures.
                                    </p>
                                    
                                    <hr className="border-[#DCDCD6] mb-4" />
                                    
                                    <div className="mt-auto flex justify-between items-center">
                                        <span className="text-[13px] font-bold text-[#115FC8]">Art Museum</span>
                                        <button suppressHydrationWarning className="flex items-center gap-1.5 border border-[#113FC8] text-[#113FC8] text-[11px] font-bold px-3 py-1.5 rounded-[8px] group-hover:bg-[#113FC8] group-hover:text-white transition-all">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

// --- ICONS (SVG Placeholders) ---

function LocationPinIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C16 16.8 19 12.8 19 9.5C19 5.35786 15.866 2 12 2C8.13401 2 5 5.35786 5 9.5C5 12.8 8 16.8 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function StarIcon({ className }: { className?: string }) {
    return (
        <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
        </svg>
    );
}

function PhoneCallIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22.0032 20.1986 21.9441 20.4735 21.8267 20.7258C21.7094 20.9782 21.5367 21.202 21.321 21.3822C21.1054 21.5624 20.852 21.6946 20.5786 21.7699C20.3053 21.8451 20.0185 21.8616 19.74 21.818C16.6666 21.4839 13.7381 20.4431 11.2 18.78C8.84713 17.2628 6.89201 15.3077 5.37482 12.9548C3.7042 10.4045 2.65655 7.46272 2.32199 4.375C2.27838 4.09882 2.29472 3.81432 2.36881 3.54326C2.44291 3.27219 2.57321 3.02047 2.75091 2.80419C2.9286 2.58792 3.14919 2.41199 3.39801 2.29267C3.64684 2.17336 3.9189 2.11303 4.198 2.115H7.19801C7.68334 2.11109 8.15175 2.28945 8.52042 2.61864C8.88909 2.94784 9.13459 3.40742 9.21399 3.896C9.29051 4.85698 9.48924 5.80376 9.80599 6.711C9.93291 7.07335 9.94825 7.46803 9.84931 7.84024C9.75038 8.21245 9.54181 8.54388 9.25201 8.835L7.982 10.105C9.40698 12.6105 11.4555 14.6591 13.961 16.084L15.231 14.814C15.5221 14.5242 15.8536 14.3156 16.2258 14.2167C16.598 14.1177 16.9927 14.1331 17.355 14.26C18.2623 14.5768 19.2091 14.7755 20.17 14.852C20.6631 14.9317 21.127 15.1805 21.4589 15.5539C21.7907 15.9272 21.9686 16.4014 21.968 16.892L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function SaveIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function HeartIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 3.00003 16.95 3.00003C16.2275 3.00003 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.61C2.1283 5.64169 1.54871 7.04096 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6054C22.3095 9.93789 22.45 9.22248 22.45 8.5C22.45 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.61V4.61Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function LocationCrossIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function PhoneFillIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 16.92V19.92C22.0032 20.1986 21.9441 20.4735 21.8267 20.7258C21.7094 20.9782 21.5367 21.202 21.321 21.3822C21.1054 21.5624 20.852 21.6946 20.5786 21.7699C20.3053 21.8451 20.0185 21.8616 19.74 21.818C16.6666 21.4839 13.7381 20.4431 11.2 18.78C8.84713 17.2628 6.89201 15.3077 5.37482 12.9548C3.7042 10.4045 2.65655 7.46272 2.32199 4.375C2.27838 4.09882 2.29472 3.81432 2.36881 3.54326C2.44291 3.27219 2.57321 3.02047 2.75091 2.80419C2.9286 2.58792 3.14919 2.41199 3.39801 2.29267C3.64684 2.17336 3.9189 2.11303 4.198 2.115H7.19801C7.68334 2.11109 8.15175 2.28945 8.52042 2.61864C8.88909 2.94784 9.13459 3.40742 9.21399 3.896C9.29051 4.85698 9.48924 5.80376 9.80599 6.711C9.93291 7.07335 9.94825 7.46803 9.84931 7.84024C9.75038 8.21245 9.54181 8.54388 9.25201 8.835L7.982 10.105C9.40698 12.6105 11.4555 14.6591 13.961 16.084L15.231 14.814C15.5221 14.5242 15.8536 14.3156 16.2258 14.2167C16.598 14.1177 16.9927 14.1331 17.355 14.26C18.2623 14.5768 19.2091 14.7755 20.17 14.852C20.6631 14.9317 21.127 15.1805 21.4589 15.5539C21.7907 15.9272 21.9686 16.4014 21.968 16.892L22 16.92Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function EmailIcon() {
    return (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function ChatOutlineIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function MapPinOutlineIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function MapPinBigIcon() {
    return (
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#E63946" fill="#E63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" fill="#FFFFFF" />
        </svg>
    );
}

function MapPinSmallIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}
