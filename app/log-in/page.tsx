"use client";

import React, { useState } from 'react';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen bg-[#FBFBF5] flex justify-center py-12">
            {/* Main Container: Scaled to 60% (Original 970px x 1196px -> 582px x 717.6px) */}
            <div className="relative w-[582px] min-h-[717.6px] bg-white border-[0.3px] border-[#343434] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[9.6px] flex flex-col items-center pt-[64.2px] pb-[60px]">

                {/* Title: Scaled to 60% (60px -> 36px) */}
                <h1 className="font-['Sora',sans-serif] font-bold text-[36px] leading-[45.6px] text-[#343434] text-center mb-[13.8px]">
                    Log in to your account
                </h1>

                {/* Subtitle: Scaled to 60% (40px -> 24px) */}
                <p className="font-['Wix_Madefor_Text',sans-serif] font-normal text-[24px] leading-[30px] text-[#343434] text-center mb-[11.4px]">
                    Welcome back!
                </p>

                {/* Tab Buttons: Scaled to 60% (w: 197.2px, h: 36.6px, text: 19.2px) */}
                <div className="flex gap-[23.6px] mb-[16.2px]">
                    <button className="w-[197.2px] h-[36.6px] bg-[#FACC15] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[19.2px] text-[rgba(20,17,17,0.52)] flex items-center justify-center cursor-pointer">
                        Login
                    </button>
                    <button className="w-[197.2px] h-[36.6px] bg-[#FAFAEF] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[19.2px] text-[rgba(20,17,17,0.52)] flex items-center justify-center cursor-pointer">
                        Register
                    </button>
                </div>

                {/* Form Fields: Scaled to 60% (Container width: 418.8px) */}
                <div className="w-[418.8px] space-y-[11.4px]">
                    {/* Email Section */}
                    <div className="flex flex-col">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-[#343434] mb-[11.4px]">
                            Email/Username
                        </label>
                        <input
                            type="text"
                            placeholder="Email/Username"
                            className="w-[418.8px] h-[36.6px] bg-[#FAFAEF] border-[0.3px] border-[#4D4D4D] rounded-[4.8px] px-[14.4px] font-['Open_Sans',sans-serif] text-[14.4px] text-[#827D7D] outline-none focus:ring-2 focus:ring-[#115FC8]"
                        />
                    </div>

                    {/* Password Section */}
                    <div className="flex flex-col relative">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-[#343434] mb-[11.4px]">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="w-[418.8px] h-[36.6px] bg-[#FAFAEF] border-[0.3px] border-[#4D4D4D] rounded-[4.8px] px-[14.4px] font-['Open_Sans',sans-serif] text-[14.4px] text-[#827D7D] outline-none focus:ring-2 focus:ring-[#115FC8]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-[14.4px] top-1/2 -translate-y-1/2 cursor-pointer"
                            >
                                {/* SVG Eye Icon: Scaled to 60% (21px x 19.8px, stroke: 1.8) */}
                                <svg width="21" height="19.8" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.91669 16.5C2.91669 16.5 7.29169 6.875 17.5 6.875C27.7084 6.875 32.0834 16.5 32.0834 16.5C32.0834 16.5 27.7084 26.125 17.5 26.125C7.29169 26.125 2.91669 16.5 2.91669 16.5Z" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.5 20.625C19.7782 20.625 21.625 18.7782 21.625 16.5C21.625 14.2218 19.7782 12.375 17.5 12.375C15.2218 12.375 13.375 14.2218 13.375 16.5C13.375 18.7782 15.2218 20.625 17.5 20.625Z" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    {!showPassword && <line x1="5" y1="5" x2="30" y2="28" stroke="#1E1E1E" strokeWidth="1.8" strokeLinecap="round" />}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Forgot Password: Scaled to 60% */}
                <div className="w-[418.8px] flex justify-end mt-[19.2px] mb-[37.2px]">
                    <a href="#" className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-[#115FC8] hover:underline">
                        Forget password?
                    </a>
                </div>

                {/* Action Buttons: Scaled to 60% (Button w: 271.2px, h: 36.6px) */}
                <div className="flex flex-col items-center space-y-[21px]">
                    {/* Main Login Button */}
                    <button className="w-[271.2px] h-[36.6px] bg-[#115FC8] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[14.4px] leading-[18px] text-[#FCFCF5] flex items-center justify-center cursor-pointer hover:bg-[#0d4ea5] transition-colors">
                        Login
                    </button>

                    {/* Or Separator */}
                    <span className="font-['Wix_Madefor_Text',sans-serif] font-semibold text-[14.4px] leading-[18px] text-[rgba(20,17,17,0.52)]">
                        or
                    </span>

                    {/* Sign in with Google */}
                    <button className="w-[271.2px] h-[36.6px] bg-[#E8E8D6] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] flex items-center justify-center gap-[9px] relative cursor-pointer hover:bg-[#dfdfcc] transition-colors">
                        <svg width="24" height="24" viewBox="0 0 48 48" className="absolute left-[18px]">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24s.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                        </svg>
                        <span className="font-['Wix_Madefor_Text',sans-serif] font-bold text-[14.4px] leading-[18px] text-[#343434]">
                            Sign in with Google
                        </span>
                    </button>

                    {/* Explore Button */}
                    <button className="w-[271.2px] h-[36.6px] bg-[#FFD736] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[14.4px] leading-[18px] text-[rgba(52,52,52,0.8)] flex items-center justify-center cursor-pointer hover:bg-[#e6c131] transition-colors">
                        Explore What Iloilo Offers!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;