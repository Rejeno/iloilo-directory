// app/categories/page.tsx
import React from 'react';
import Image from 'next/image';
import { Sora, Open_Sans } from 'next/font/google';
import { ArrowRightCircle } from 'lucide-react';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

// Mock data with Placeholder Image Logic
const CATEGORIES = [
    "Agriculture and Aquaculture",
    "Art and Culture",
    "Automotive",
    "Beauty and Wellness",
    "Business Services",
    "Churches",
    "Construction",
    "Education",
    "Electronics",
    "Entertainment",
    "Events",
    "Financial Institution",
    "Food and Beverage",
    "Hardware",
    "Home and Parenting",
    "Logistics",
    "Manufacturing and Industrial Supplies and Services",
    "Medical Care",
    "Pets & Animal Care",
    "Professional Services",
    "Property and Real Estate",
    "Shopping and Retail",
    "Sports and Recreation",
    "Tourism and Accommodation",
    "Transportation",
    "Utilities, Public Services and Government",
    "Warehousing"
];
const FEATURE_CARDS = [
    { title: "Accommodations", count: 117, seed: "hotel" },
    { title: "Restaurants", count: 85, seed: "food" },
    { title: "Tourist Spots", count: 42, seed: "mountain" },
];
const VIEWED_CARDS = Array(4).fill(null).map((_, i) => ({
    title: "Accommodations",
    time: "Viewed 1 hour ago",
    seed: `recent-${i}`
}));

export default function ExploreCategories() {
    return (
        <main className={`${sora.variable} ${openSans.variable} font-sans bg-[#FBFBF5] min-h-screen pb-24`}>

            {/* Hero Section - Scaled to match Events Page */}
            <section className="relative w-full h-[450px] flex flex-col items-center justify-center text-[#FCFCF5] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(20, 17, 17, 0.52), rgba(20, 17, 17, 0.52)), url('https://picsum.photos/seed/iloilo/1920/850')`,
                        zIndex: 0
                    }}
                />

                <div className="relative z-10 w-full max-w-6xl px-4 text-center">
                    <h1 className="font-sora font-bold text-5xl md:text-6xl leading-tight mb-6">
                        Explore Business Categories
                    </h1>
                    <p className="font-sora font-medium text-lg md:text-2xl max-w-4xl mx-auto opacity-90 mb-10">
                        Make your business known and drive quality leads to your website, your social network pages, and receive inquiries from potential clients with Iloilo Directory!
                    </p>
                </div>
            </section>

            {/* Featured Categories - Container aligned to 1280px */}
            <section className="max-w-[1280px] mx-auto pt-16 px-8 md:px-12">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#343434]">
                        Featured Categories
                    </h2>
                    <div className="w-20 h-1 bg-[#113FC8] mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {FEATURE_CARDS.map((card, i) => (
                        <div key={i} className="group relative h-[300px] rounded-2xl overflow-hidden shadow-lg cursor-pointer">
                            <Image
                                src={`https://picsum.photos/seed/${card.seed}/600/400`}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 w-full h-[80px] bg-[#113FC8]/80 backdrop-blur-sm flex flex-col items-center justify-center text-[#FCFCF5]">
                                <span className="font-sora font-bold text-xl">{card.title}</span>
                                <span className="font-openSans font-semibold text-sm opacity-90">{card.count} Listings</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Browse All Categories */}
            <section className="max-w-[1280px] mx-auto pt-24 px-8 md:px-12">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#343434]">
                        Browse All Categories
                    </h2>
                    <div className="w-20 h-1 bg-[#113FC8] mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CATEGORIES.map((cat, i) => (
                        <button
                            key={i}
                            className="flex items-center justify-between px-6 w-full h-[80px] bg-[#113FC8] rounded-xl text-[#FCFCF5] hover:bg-[#0e32a6] transition-all hover:shadow-lg group text-left"
                        >
                            <span className="font-sora font-bold text-lg pr-4">{cat}</span>
                            <ArrowRightCircle className="w-6 h-6 shrink-0 text-white group-hover:translate-x-1 transition-transform" />
                        </button>
                    ))}
                </div>
            </section>

            {/* Recently Viewed */}
            <section className="max-w-[1280px] mx-auto pt-24 px-8 md:px-12">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="font-sora font-bold text-3xl md:text-4xl text-[#343434]">
                        Recently Viewed
                    </h2>
                    <div className="w-20 h-1 bg-[#113FC8] mt-4 rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {VIEWED_CARDS.map((card, i) => (
                        <div key={i} className="group relative h-[220px] rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100">
                            <Image
                                src={`https://picsum.photos/seed/${card.seed}/400/300`}
                                alt={card.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute bottom-0 w-full h-[70px] bg-[#113FC8]/80 backdrop-blur-sm px-4 flex flex-col justify-center text-[#FCFCF5]">
                                <span className="font-sora font-bold text-lg leading-tight">{card.title}</span>
                                <span className="font-openSans font-medium text-xs opacity-80">{card.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}