"use client";

import React, { useState } from 'react';

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Common style for all input fields to ensure identical height and look
    const inputStyle = "w-full h-[28.8px] bg-[#FCFCF5] border-[0.3px] border-[#343434] rounded-[4.8px] px-3 outline-none focus:ring-1 focus:ring-blue-400 font-['Open_Sans',sans-serif] text-[14.4px]";

    return (
        <div className="min-h-screen bg-[#FBFBF5] flex flex-col items-center py-12">

            {/* Main Container: Scaled to 60% (582px x 996px) */}
            <div className="relative w-[582px] min-h-[996px] bg-[#FEFEFE] border-[0.3px] border-[#343434] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[9.6px] flex flex-col items-center pt-[64.2px] pb-[60px]">

                {/* Title */}
                <h1 className="font-['Sora',sans-serif] font-bold text-[36px] leading-[45.6px] text-[#343434] text-center mb-[13.8px]">
                    Create Account
                </h1>

                {/* Subtitle */}
                <p className="font-['Wix_Madefor_Text',sans-serif] font-normal text-[24px] leading-[30px] text-black text-center mb-[20px]">
                    Please enter your details.
                </p>

                {/* Tab Buttons */}
                <div className="flex gap-[23.6px] mb-[34.2px]">
                    <button className="w-[197.2px] h-[36.6px] bg-[#FACC15] hover:bg-[#eab308] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[19.2px] text-[rgba(20,17,17,0.52)] flex items-center justify-center cursor-pointer transition-colors">
                        Login
                    </button>
                    <button className="w-[197.2px] h-[36.6px] bg-[#FAFAEF] hover:bg-[#f0f0d8] shadow-[0px_2.4px_2.4px_rgba(0,0,0,0.25)] rounded-[2.4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[19.2px] text-[rgba(20,17,17,0.52)] flex items-center justify-center cursor-pointer transition-colors">
                        Register
                    </button>
                </div>

                {/* Form Content */}
                <div className="w-[418.8px] space-y-[20px]">
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] text-black">First Name</label>
                        <input type="text" className={inputStyle} />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] text-black">Last Name</label>
                        <input type="text" className={inputStyle} />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] text-black">Phone Number</label>
                        <input type="tel" className={inputStyle} />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] text-black">Email</label>
                        <input type="email" className={inputStyle} />
                    </div>

                    <div className="flex flex-col gap-[6px]">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] text-black">Confirm Email</label>
                        <input type="email" className={inputStyle} />
                    </div>

                    {/* Password Fields with Eye Icons centered in the same fixed height */}
                    <div className="flex flex-col gap-[6px]">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] text-black">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className={inputStyle}
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    {!showPassword && <line x1="1" y1="1" x2="23" y2="23"></line>}
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[6px]">
                        <label className="font-['Wix_Madefor_Text',sans-serif] text-[16.8px] text-black">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className={inputStyle}
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1E1E1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                    {!showConfirmPassword && <line x1="1" y1="1" x2="23" y2="23"></line>}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Checkboxes and Full-Width Captcha Area */}
                <div className="w-[418.8px] mt-8 space-y-5">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="w-[14.4px] h-[14.4px] cursor-pointer" id="terms" />
                        <label htmlFor="terms" className="font-['Wix_Madefor_Text',sans-serif] text-[11px] text-black cursor-pointer">
                            By creating an account, you agree to our <span className="underline hover:text-blue-700">terms & conditions</span>
                        </label>
                    </div>

                    {/* Enlarged Captcha Box - Width matches the inputs (w-full of the 418.8px container) */}
                    <div className="flex items-center justify-between bg-[#f9f9f9] p-[10px] px-[20px] border border-[#d3d3d3] rounded-[3px] w-full h-[76px] shadow-sm select-none">
                        <div className="flex items-center gap-4">
                            <input
                                type="checkbox"
                                className="w-[28px] h-[28px] cursor-pointer border-[#c1c1c1] rounded-sm focus:ring-0"
                            />
                            <span className="font-['Wix_Madefor_Text',sans-serif] text-[16px] text-black font-normal">
                                I'm not a robot
                            </span>
                        </div>
                        <div className="flex flex-col items-center justify-center pr-1">
                            <img
                                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                                alt="recaptcha logo"
                                className="w-[32px] h-[32px] mb-0.5"
                            />
                            <span className="text-[10px] text-[#555] font-semibold tracking-tight">reCAPTCHA</span>
                            <div className="flex gap-1 text-[8px] text-[#555] mt-0.5">
                                <span className="hover:underline cursor-pointer">Privacy</span>
                                <span className="no-underline">-</span>
                                <span className="hover:underline cursor-pointer">Terms</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Create Account Button with Hover */}
                <button className="mt-10 w-[200px] h-[40px] bg-[#115FC8] hover:bg-[#0d4ea5] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[4px] font-['Wix_Madefor_Text',sans-serif] font-bold text-[18px] text-[#FCFCF5] flex items-center justify-center cursor-pointer transition-all active:scale-95">
                    Create Account
                </button>

            </div>
        </div>
    );
};

export default SignUpPage;