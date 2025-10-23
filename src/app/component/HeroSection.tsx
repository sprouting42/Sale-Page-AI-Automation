'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
  };

  return (
    <section className="pt-20" style={{background: 'linear-gradient(90deg, #006e88, #13b499)'}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl prompt-black text-white mb-6 tracking-tight">
            Online Course
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl prompt-black text-white mb-10 tracking-tight">
            AI AUTOMATION
          </h2>

          {/* Description */}
          <p className="text-2xl md:text-3xl text-white mb-10 max-w-4xl mx-auto kanit-medium leading-relaxed">
            ได้เรียนสดๆ พร้อมจับมือทำ ให้คุณนำกลับไปใช้งานได้จริง!
          </p>

          {/* Features and Free Badge */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
            {/* Features List */}
            <div className="flex flex-col sm:flex-row gap-8 text-white">
              <div className="flex items-center">
                <svg className="h-7 w-7 text-white mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xl kanit-semibold">ไม่มีพื้นฐานก็เรียนได้</span>
              </div>
              <div className="flex items-center">
                <svg className="h-7 w-7 text-white mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xl kanit-semibold">สอนแบบจับมือทำ</span>
              </div>
              <div className="flex items-center">
                <svg className="h-7 w-7 text-white mr-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xl kanit-semibold">เลือกคอร์สได้</span>
              </div>
            </div>

            {/* Free Badge */}
            <div className="relative">
              <div 
                className="flex items-center justify-center text-white text-2xl kanit-black px-8 py-4 shadow-2xl"
                style={{
                  width: '120px',
                  height: '120px',
                  background: '#f97316',
                  clipPath: 'polygon(50% 0%, 75% 25%, 100% 50%, 75% 75%, 50% 100%, 25% 75%, 0% 50%, 25% 25%)'
                }}
              >
                เรียนฟรี
              </div>
            </div>
          </div>

          {/* Registration Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 mb-12 max-w-4xl mx-auto">
            <div className="text-white space-y-6">
              <div className="text-2xl md:text-3xl kanit-black">
                ลงทะเบียน วันนี้ - 26 ต.ค.68
              </div>
              <div className="text-xl md:text-2xl prompt-bold">
                28 ต.ค. 25 เรียน MAKE.COM
              </div>
              <div className="text-xl md:text-2xl prompt-bold">
                30 ต.ค. 25 เรียน n8n
              </div>
            </div>
          </div>

          {/* Partner Logos */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            {/* n8n Logo */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3">
                <Image
                  src="/n8n.jpg"
                  alt="n8n Logo"
                  width={96}
                  height={48}
                  className="w-24 h-12"
                />
                {/* <span className="text-2xl prompt-bold text-black">n8n</span> */}
              </div>
            </div>

            {/* Make Logo */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center space-x-3">
                <Image
                  src="/make.png"
                  alt="make Logo"
                  width={96}
                  height={48}
                  className="w-24 h-12"
                />
                {/* <span className="text-2xl prompt-bold text-black">make</span> */}
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-12 mb-12">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-16 py-6 rounded-full text-2xl kanit-black transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105">
              ลงทะเบียนเรียนฟรี
            </button>
          </div>
        </div>
      </div>

      {/* What You Will Get Section */}
      <div className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-6xl kanit-black text-blue-900 text-center mb-20 tracking-tight">
            สิ่งที่คุณจะได้รับ
          </h2>
          
          <div className="space-y-16 max-w-4xl mx-auto">
            {/* Section 01 - เครื่องมือพื้นฐาน (ซ้าย) */}
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-6">
              <div className="relative order-1 lg:order-1">
                <div className="text-8xl font-bold text-blue-900">01</div>
                <div className="absolute -left-16 -top-8 w-16 h-16 bg-teal-400 transform rotate-45"></div>
                <div className="absolute -left-16 -top-2 flex flex-col gap-2">
                </div>
              </div>
              <div className="flex-1 order-2 lg:order-2">
                <h3 className="text-4xl kanit-black text-blue-900 mb-6">เครื่องมือพื้นฐาน</h3>
                <p className="text-xl text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0 kanit-medium">
                  Make.com และ n8n เครื่องมือ AI Automation ที่พึ่งพาการโค้ดน้อยที่สุด
                </p>
              </div>
            </div>

            {/* Section 02 - แนวคิด (ขวา) */}
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-right gap-6">
              <div className="flex-1 order-2 lg:order-1">
                <h3 className="text-4xl kanit-black text-blue-900 mb-6">แนวคิด</h3>
                <p className="text-xl text-gray-700 leading-relaxed max-w-md  lg:ml-auto kanit-medium">
                  ให้คุณได้เข้าใจการใช้งานและออกแบบเพื่อนำไปทำเองได้ในอนาคต
                </p>
              </div>
              <div className="flex items-center gap-4 order-1 lg:order-2">
                <div className="text-8xl font-bold text-blue-900">02</div>
                <div className="w-4 h-20 bg-teal-400"></div>
              </div>
            </div>

            {/* Section 03 - ไม่ต้องมีพื้นฐานก็เรียนได้ (ซ้าย) */}
            <div className="flex flex-col lg:flex-row items-center text-center lg:text-left gap-6">
              <div className="relative order-1 lg:order-1">
                <div className="text-8xl font-bold text-blue-900">03</div>
                <div className="absolute -left-16 -top-8 w-16 h-16 bg-teal-400 transform rotate-45"></div>
              </div>
              <div className="flex-1 order-2 lg:order-2">
                <h3 className="text-4xl kanit-black text-blue-900 mb-6">ไม่ต้องมีพื้นฐานก็เรียนได้</h3>
                <p className="text-xl text-gray-700 leading-relaxed max-w-md mx-auto lg:mx-0 kanit-medium">
                  จับมือทำ พร้อมถามตอบสดๆ จากผู้บรรยาย ให้คุณได้ลงมือสร้าง Flow การใช้งานจริง
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
