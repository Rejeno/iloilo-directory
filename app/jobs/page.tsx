"use client";

import React from 'react';
import Image from 'next/image';

export default function JobsPage() {
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
            <section className="relative h-[510px] w-full flex items-center justify-center overflow-hidden -mt-25 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(20, 17, 17, 0.52), rgba(20, 17, 17, 0.52)), url('https://www.allproperties.com.ph/wp-content/uploads/2022/01/House-and-Lot-for-sale-in-Iloilo-Photo-Credit-Scholarris20-scaled-1-2048x1536.jpg')`,
                        zIndex: 0
                    }}
                />
                <div className="relative z-10 text-center text-[#FCFCF5] max-w-[910px] px-4">
                    <h1 className="text-[45px] leading-[1.2] font-bold mb-6 tracking-tight font-sora">
                        Job Listings
                    </h1>
                    <p className="text-[24px] leading-[38px] font-medium opacity-90 font-sora">
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
                        <h2 className="text-[30px] font-bold text-[#343434] font-sora">Find the Perfect Job</h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="relative w-[190px] h-[44px] bg-[#FAFAEF] shadow-sm rounded-xl flex items-center px-4">
                            <select
                                suppressHydrationWarning
                                className="w-full appearance-none bg-transparent border-none text-sm text-[#827D7D] focus:outline-none cursor-pointer pr-8"
                            >
                                <option>Sort by: Newest</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <DropdownIcon />
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button suppressHydrationWarning className="w-10 h-10 bg-[#113FC8] shadow-sm rounded-xl flex items-center justify-center text-[#FCFCF5]">
                                <GridViewIcon />
                            </button>
                            <button suppressHydrationWarning className="w-10 h-10 bg-[#FAFAEF] shadow-sm rounded-xl flex items-center justify-center text-[#324558]">
                                <ListViewIcon />
                            </button>
                        </div>
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
                            <div className="flex justify-end mb-2">
                                <span className="bg-[#115FC8] text-[#FCFCF5] text-[10px] font-bold px-3 py-1 rounded-md">
                                    {job.type}
                                </span>
                            </div>

                            <div className="flex gap-4 mb-4">
                                <div className="w-[90px] h-[82px] bg-[#FAFAEF] rounded-xl flex items-center justify-center border border-gray-100 shrink-0 overflow-hidden relative">
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/d/dc/WVSU_Main_Campus_Logo.svg"
                                        alt="WVSU Logo"
                                        fill
                                        sizes="90px"
                                        className="object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-[16px] font-bold text-[#4D4D4D] leading-tight mb-1 group-hover:text-[#115FC8] transition-colors font-sora">
                                        {job.title}
                                    </h3>
                                    <p className="text-[12px] text-gray-600 font-medium">{job.company}</p>
                                    <p className="text-[10px] text-gray-400 mt-1 line-clamp-1">{job.location}</p>
                                </div>
                            </div>

                            <hr className="border-[#DCDCD6] mb-4" />

                            <div className="flex justify-between items-center">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-[16px] font-bold text-[#115FC8]">{job.salary}</span>
                                    <span className="text-[10px] font-bold text-[#4D4D4D]">/monthly</span>
                                </div>
                                <button suppressHydrationWarning className="flex items-center gap-1.5 border-2 border-[#113FC8] text-[#113FC8] text-[11px] font-bold px-4 py-2 rounded-xl hover:bg-[#113FC8] hover:text-white transition-all">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- PAGINATION --- */}
                <div className="mt-20 flex justify-center">
                    <Pagination />
                </div>
            </main>
        </div>
    );
}

function Pagination() {
    return (
        <div className="flex items-center gap-2">
            {/* Caret Left */}
            <button
                suppressHydrationWarning
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#113FC8] text-white rounded-lg shadow hover:bg-[#0e32a6] transition-colors"
            >
                <CaretLeftIcon />
            </button>

            {/* Page Numbers */}
            {[1, 2, 3, 4, 5, 6].map(num => (
                <button
                    key={num}
                    suppressHydrationWarning
                    className={`w-8 h-10 md:w-10 md:h-12 flex items-center justify-center rounded-lg shadow-sm font-bold transition-all ${num === 1 ? 'bg-[#FCFCF5] text-[#113FC8] border-2 border-[#113FC8]' : 'bg-[#FCFCF5] text-[#113FC8] hover:bg-gray-100'}`}
                >
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
                <button
                    key={num}
                    suppressHydrationWarning
                    className="w-12 h-10 md:w-14 md:h-12 flex items-center justify-center bg-[#FCFCF5] text-[#113FC8] rounded-lg shadow-sm hover:bg-gray-100 font-bold"
                >
                    {num}
                </button>
            ))}

            {/* Caret Right */}
            <button
                suppressHydrationWarning
                className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#113FC8] text-white rounded-lg shadow hover:bg-[#0e32a6] transition-colors"
            >
                <CaretRightIcon />
            </button>

            {/* Go to page select */}
            <div className="ml-8 hidden lg:flex items-center gap-4">
                <span className="font-sora font-semibold text-lg">Go to page:</span>
                <div className="relative w-20 h-10 md:w-24 md:h-12">
                    <input
                        suppressHydrationWarning
                        type="text"
                        placeholder="e.g 25"
                        className="w-full h-full bg-[#FCFCF5] border border-[#343434] shadow-sm rounded-lg text-center font-open-sans text-lg text-[#827D7D] focus:outline-none"
                    />
                </div>
            </div>
        </div>
    );
}

function CaretLeftIcon() {
    return (
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18L2 10L10 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CaretRightIcon() {
    return (
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 18L10 10L2 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}
// Custom Icons
function DropdownIcon() {
    return (
        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 15L19.5 24.5L29 15" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function GridViewIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="16" height="16" fill="currentColor" />
            <rect x="25.5" y="6" width="16.5" height="16" fill="currentColor" />
            <rect x="6" y="25.5" width="16" height="16.5" fill="currentColor" />
            <rect x="25.5" y="25.5" width="16.5" height="16.5" fill="currentColor" />
        </svg>
    );
}

function ListViewIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="6" width="8.2" height="36" fill="currentColor" />
            <rect x="19.9" y="6" width="8.2" height="36" fill="currentColor" />
            <rect x="33.8" y="6" width="8.2" height="36" fill="currentColor" />
        </svg>
    );
}