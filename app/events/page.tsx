// app/events/page.tsx
import Image from 'next/image';
import { Calendar, ArrowRight } from 'lucide-react';

interface EventCardProps {
    title: string;
    date: string;
    description: string;
    author: string;
    imageUrl: string;
    avatarUrl: string;
    status: 'Upcoming' | 'Past';
}

export const EventCard = ({ title, date, description, author, imageUrl, avatarUrl, status }: EventCardProps) => {
    return (
        <div className="bg-[#FCFCF5] rounded-[12px_24px_24px_24px] p-4 shadow-[0px_4px_10px_rgba(0,0,0,0.1)] flex flex-col h-full transition-transform hover:-translate-y-1 cursor-pointer">
            <div className="relative w-full aspect-video rounded-[12px] overflow-hidden">
                <Image src={imageUrl} alt={title} fill className="object-cover hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="mt-4 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-1.5 text-[#4D4D4D] text-[11px] font-wix leading-none">
                        <Calendar size={13} className="text-[#343434]" />
                        <span className="mt-[1px]">{date}</span>
                    </div>
                    <span className="bg-[#113FC8] text-[#FAFAEF] flex items-center justify-center px-2.5 h-[20px] rounded-[4px] text-[10px] font-bold font-sora leading-none">
                        {status}
                    </span>
                </div>

                <h3 className="font-wix text-xl font-bold text-[#343434] truncate mb-6">
                    {title}
                </h3>

                <p className="text-[#4D4D4D] text-sm font-wix leading-[20px] mb-6 flex-grow">
                    {description}
                </p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[#DCDCD6] gap-2">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-gray-100 shrink-0">
                            <Image src={avatarUrl} alt={author} fill className="object-cover" />
                        </div>
                        <span className="text-[#4D4D4D] text-[10px] font-wix leading-tight">
                            {author}
                        </span>
                    </div>

                    <button className="flex items-center justify-center gap-1 border border-[#113FC8] text-[#113FC8] px-2 py-1.5 rounded-lg text-[9px] font-bold font-sora hover:bg-[#113FC8] hover:text-white transition-colors shrink-0">
                        View Details
                        <ArrowRight size={10} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default function EventsPage() {
    const events = Array.from({ length: 12 }).map((_, idx) => {
        const seed = (idx + 1) * 100;
        return {
            title: "Dinagyang Festival",
            date: "December 26, 2025",
            description: "Jaro National High School's Tribu Salognon delivered a masterful performance to capture the Dinagyang Tribes Competition 2026 championship on Sunday, January 25, dethroning defending champion.",
            author: "Iloilo City Government",
            imageUrl: `https://picsum.photos/seed/${seed}/335/246`,
            avatarUrl: "/seal-iloilo.png",
            status: "Upcoming" as const
        };
    });

    return (
        <main className="bg-[#FBFBF5] min-h-screen pb-20">
            <section className="relative w-full h-[450px] flex flex-col items-center justify-center text-[#FCFCF5] overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(0deg, rgba(20, 17, 17, 0.52), rgba(20, 17, 17, 0.52)), url('https://picsum.photos/1920/850')`,
                        zIndex: 0
                    }}
                />
                <div className="relative z-10 w-full max-w-6xl px-4 text-center">
                    <h1 className="font-sora font-bold text-5xl md:text-6xl leading-tight mb-6">
                        Events
                    </h1>
                    <p className="font-sora font-medium text-lg md:text-2xl max-w-4xl mx-auto text-center">
                        Make your business known and drive quality leads to your website, your social network pages, and receive inquiries from potential clients with Iloilo Directory!
                    </p>
                </div>
            </section>

            <section className="max-w-[1280px] mx-auto px-8 md:px-12 mt-16 pb-24">
                <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-[#343434] font-wix text-base md:text-lg">Showing 1 - 40 of 10,085 Results</p>
                        <h2 className="font-sora font-bold text-2xl md:text-3xl text-[#343434]">Explore Events</h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="relative w-[190px] h-[44px] bg-[#FAFAEF] shadow-sm rounded-xl flex items-center px-4">
                            <select className="w-full font-wix text-base text-[#827D7D] appearance-none bg-transparent focus:outline-none cursor-pointer pr-8">
                                <option>Sort by: Newest</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 9l6 6 6-6" stroke="#827D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <button className="w-10 h-10 bg-[#113FC8] shadow-sm rounded-xl flex items-center justify-center text-[#FCFCF5]">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h8v8H3V3zm0 10h8v8H3v-8zM13 3h8v8h-8V3zm0 10h8v8h-8v-8z" /></svg>
                            </button>
                            <button className="w-10 h-10 bg-[#FAFAEF] shadow-sm rounded-xl flex items-center justify-center text-[#324558]">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <hr className="border-t border-[#DCDCD6] mb-8" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {events.map((event, idx) => (
                        <EventCard key={idx} {...event} />
                    ))}
                </div>

                <div className="mt-20 flex justify-center">
                    <div className="flex items-center gap-2">
                        <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#113FC8] text-white rounded-lg shadow hover:bg-[#0e32a6] transition-colors">
                            <span className="text-xl">◀</span>
                        </button>

                        {[1, 2, 3, 4, 5, 6].map(num => (
                            <button key={num} className={`w-8 h-10 md:w-10 md:h-12 flex items-center justify-center rounded-lg shadow-sm font-bold font-sora transition-all ${num === 1 ? 'bg-[#dee6f0] text-[#113FC8] border-2 border-[#113FC8]' : 'bg-[#dee6f0] text-[#113FC8] hover:bg-[#c8d6e8]'}`}>
                                {num}
                            </button>
                        ))}

                        <div className="flex gap-1.5 px-2">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-1.5 h-1.5 bg-[#113FC8] rounded-full" />
                            ))}
                        </div>

                        {[138, 139, 140].map(num => (
                            <button key={num} className="w-12 h-10 md:w-14 md:h-12 flex items-center justify-center bg-[#dee6f0] text-[#113FC8] rounded-lg shadow-sm hover:bg-[#c8d6e8] font-bold font-sora">
                                {num}
                            </button>
                        ))}

                        <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-[#113FC8] text-white rounded-lg shadow hover:bg-[#0e32a6] transition-colors">
                            <span className="text-xl">▶</span>
                        </button>

                        <div className="ml-8 hidden lg:flex items-center gap-4">
                            <span className="font-sora font-semibold text-lg">Go to page:</span>
                            <div className="relative w-20 h-10 md:w-24 md:h-12">
                                <input
                                    type="text"
                                    placeholder="e.g 25"
                                    className="w-full h-full bg-[#FCFCF5] border border-[#343434] shadow-sm rounded-lg text-center font-wix text-lg text-[#827D7D] focus:outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}