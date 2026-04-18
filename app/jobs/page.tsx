import React from 'react';
import {
    Search,
    SlidersHorizontal,
    LayoutGrid,
    StretchHorizontal,
    ChevronLeft,
    ChevronRight,
    ArrowRight
} from 'lucide-react';

const JobsPage = () => {
    // Mock data for the cards
    const jobListings = Array(15).fill({
        title: "Computer Science Instructor",
        company: "WVSU - Main Campus",
        location: "Luna St, La Paz, Iloilo City, 5000 Iloilo",
        salary: "₱ 30,000.00",
        type: "Full-time",
    });

    return (
        <div className="min-h-screen bg-[#FBFBF5] font-sans">
            {/* --- HERO SECTION --- */}
            <section className="relative h-[510px] w-full flex items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(20, 17, 17, 0.52), rgba(20, 17, 17, 0.52)), url('https://www.allproperties.com.ph/wp-content/uploads/2022/01/House-and-Lot-for-sale-in-Iloilo-Photo-Credit-Scholarris20-scaled-1-2048x1536.jpg')`,
                        zIndex: 0
                    }}
                />

                <div className="relative z-10 text-center text-[#FCFCF5] max-w-[910px] px-4">
                    <h1 className="text-[45px] leading-[1.2] font-bold mb-6 tracking-tight">
                        Job Listings
                    </h1>
                    <p className="text-[24px] leading-[38px] font-medium opacity-90">
                        Make your business known and drive quality leads to your website, your social network pages, and receive inquiries from potential clients with Iloilo Directory!
                    </p>
                </div>
            </section>

            {/* --- MAIN CONTENT AREA --- */}
            <main className="max-w-[1152px] mx-auto px-6 pt-24 pb-20">

                {/* Results Info & Filter Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                    <div>
                        <p className="text-[#343434] text-sm mb-2 opacity-70">Showing 1 - 40 of 10,085 Results</p>
                        <h2 className="text-[30px] font-bold text-[#343434]">Find the Perfect Job</h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative min-w-[160px]">
                            <select className="w-full appearance-none bg-[#FAFAEF] border-none shadow-sm rounded-xl px-4 py-2.5 text-sm text-[#827D7D] focus:ring-0">
                                <option>Sort by:</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#827D7D]">
                                <ChevronRight size={16} className="rotate-90" />
                            </div>
                        </div>

                        <button className="p-2.5 bg-[#113FC8] rounded-xl text-white shadow-md">
                            <LayoutGrid size={22} />
                        </button>
                        <button className="p-2.5 bg-[#FAFAEF] rounded-xl text-[#324558] shadow-sm border border-gray-100">
                            <StretchHorizontal size={22} />
                        </button>
                    </div>
                </div>

                <hr className="border-[#DCDCD6] mb-10 border-t-2" />

                {/* --- JOB GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {jobListings.map((job, index) => (
                        <div
                            key={index}
                            className="bg-[#FCFCF5] rounded-[12px_24px_24px_24px] p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] border border-transparent hover:border-[#113FC8]/30 transition-transform duration-300 hover:-translate-y-1 group cursor-pointer"
                        >
                            {/* Badge */}
                            <div className="flex justify-end mb-2">
                                <span className="bg-[#115FC8] text-[#FCFCF5] text-[10px] font-bold px-3 py-1 rounded-md">
                                    {job.type}
                                </span>
                            </div>

                            {/* Card Header: Logo & Title */}
                            <div className="flex gap-4 mb-4">
                                <div className="w-[90px] h-[82px] bg-[#FAFAEF] rounded-xl flex items-center justify-center border border-gray-100 shrink-0 overflow-hidden">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/dc/WVSU_Main_Campus_Logo.svg"
                                        alt="WVSU Logo"
                                        className="w-14 h-14 object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-bold text-[#4D4D4D] leading-tight mb-1 group-hover:text-[#115FC8] transition-colors">
                                        {job.title}
                                    </h3>
                                    <p className="text-[12px] text-gray-600 font-medium">{job.company}</p>
                                    <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{job.location}</p>
                                </div>
                            </div>

                            <hr className="border-[#DCDCD6] mb-4" />

                            {/* Card Footer: Price & Action */}
                            <div className="flex justify-between items-center">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[16px] font-bold text-[#115FC8]">{job.salary}</span>
                                    <span className="text-[10px] font-bold text-[#4D4D4D]">/monthly</span>
                                </div>
                                <button className="flex items-center gap-1.5 border-2 border-[#113FC8] text-[#113FC8] text-[11px] font-bold px-4 py-2 rounded-xl hover:bg-[#113FC8] hover:text-white transition-all">
                                    View Details
                                    <ArrowRight size={12} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- PAGINATION SECTION --- */}
                <div className="mt-20 flex flex-wrap items-center justify-between gap-6">
                    {/* Page Numbers */}
                    <div className="flex items-center gap-2">
                        <button className="p-3 bg-[#113FC8] text-white rounded-lg hover:bg-blue-700">
                            <ChevronLeft size={20} />
                        </button>

                        <div className="flex items-center gap-1.5">
                            {[1, 2, 3, 4, 5, 6].map((n) => (
                                <button
                                    key={n}
                                    className={`w-10 h-10 rounded-lg font-bold text-sm border transition-all ${n === 1
                                        ? 'bg-blue-100 text-[#113FC8] border-[#113FC8]'
                                        : 'bg-[#FCFCF5] text-[#113FC8] border-transparent shadow-sm hover:border-blue-300'
                                        }`}
                                >
                                    {n}
                                </button>
                            ))}
                            <div className="flex gap-1 px-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#113FC8]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[#113FC8]" />
                                <span className="w-1.5 h-1.5 rounded-full bg-[#113FC8]" />
                            </div>
                            {[138, 139, 140].map((n) => (
                                <button key={n} className="w-10 h-10 rounded-lg font-bold text-sm bg-[#FCFCF5] text-[#113FC8] border border-transparent shadow-sm">
                                    {n}
                                </button>
                            ))}
                        </div>

                        <button className="p-3 bg-[#113FC8] text-white rounded-lg hover:bg-blue-700">
                            <ChevronRight size={20} />
                        </button>
                    </div>

                    {/* Go to Page Input */}
                    <div className="flex items-center gap-4">
                        <span className="font-bold text-[#000000] text-sm">Go to page:</span>
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="e.g 25"
                                className="w-24 px-4 py-3 bg-[#FCFCF5] border border-[#343434] rounded-lg shadow-inner text-sm text-center focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default JobsPage;