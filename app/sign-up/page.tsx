"use client";

import React, { useState } from 'react';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Scale Factor: 0.6
    return (
        <div className="min-h-screen bg-[#FBFBF5] flex justify-center py-12">
            {/* Main Container: Scaled to 60% (Original 970px x 1660px -> 582px x 996px) */}
            <div className="relative w-[582px] min-h-[996px] bg-[#FEFEFE] border-[0.3px] border-[#343434] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[9.6px] flex flex-col items-center pt-[60px] pb-[60px]">

                {/* Title: Scaled to 60% (60px -> 36px) */}
                <h1 className="font-['Sora',sans-serif] font-bold text-[36px] leading-[45.6px] text-[#343434] text-center mb-[12px]">
                    Create Account
                </h1>

                {/* Subtitle: Scaled to 60% (40px -> 24px) */}
                <p className="font-['Wix_Madefor_Text',sans-serif] font-normal text-[24px] leading-[30px] text-black text-center mb-[18px]">
                    Please enter your details.
                </p>

                {/* Tab Buttons (Group 36): Scaled to 60% */}
                <div className="flex gap-[18px] mb-[30px]">
                    <button className="w-[197.2px] h-[36.6px] bg-[#FACC15] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[19.2px] text-[rgba(20,17,17,0.52)] flex items-center justify-center cursor-pointer">
                        Login
                    </button>
                    <button className="w-[197.2px] h-[36.6px] bg-[#FAFAEF] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[19.2px] text-[rgba(20,17,17,0.52)] flex items-center justify-center cursor-pointer">
                        Register
                    </button>
                </div>

                {/* Form Content: Scaled width 418.8px (698px * 0.6) */}
                <div className="w-[418.8px] space-y-[18px]">
                    {/* First Name */}
                    <div className="flex flex-col">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-black mb-[6px]">First Name</label>
                        <input type="text" className="w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none focus:ring-1 focus:ring-blue-400" />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-black mb-[6px]">Last Name</label>
                        <input type="text" className="w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none" />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-black mb-[6px]">Phone Number</label>
                        <input type="tel" className="w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none" />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-black mb-[6px]">Email</label>
                        <input type="email" className="w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none" />
                    </div>

                    {/* Confirm Email */}
                    <div className="flex flex-col">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-black mb-[6px]">Confirm Email</label>
                        <input type="email" className="w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none" />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col relative">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-black mb-[6px]">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} className="w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none" />
                            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="flex flex-col relative">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] leading-[21px] text-black mb-[6px]">Confirm Password</label>
                        <div className="relative">
                            <input type={showConfirmPassword ? "text" : "password"} className="w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none" />
                            <button onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                                    <line x1="1" y1="1" x2="23" y2="23"></line>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Checkboxes Area: Scaled to 60% */}
                <div className="w-[418.8px] mt-6 space-y-3">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-[14.4px] h-[14.4px] border-[#1D1B20]" />
                        <span className="font-['Wix_Madefor_Text',sans-serif] text-[9.6px] text-black">
                            By creating an account, you agree to our <span className="underline cursor-pointer">terms & conditions</span>
                        </span>
                    </div>
                    <div className="flex items-center justify-between bg-white p-2 border border-gray-200 rounded-[3px] w-[180px]">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" className="w-[14.4px] h-[14.4px]" />
                            <span className="font-['Wix_Madefor_Text',sans-serif] text-[10px] text-black">I'm not a Robot</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="recaptcha" className="w-[18px] h-[18px]" />
                            <span className="text-[6px] text-gray-400">reCAPTCHA</span>
                        </div>
                    </div>
                </div>

                {/* Create Account Button: Scaled to 60% (304px x 53px -> 182.4px x 31.8px) */}
                <button className="mt-8 w-[182.4px] h-[31.8px] bg-[#115FC8] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[16.8px] text-[#FCFCF5] flex items-center justify-center cursor-pointer hover:bg-[#0d4ea5] transition-colors">
                    Create Account
                </button>

            </div>
        </div>
    );
};

export default SignUpPage;