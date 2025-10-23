'use client';

import Image from 'next/image';


export default function HeroSection() {


  return (
    <section className="" style={{background: 'linear-gradient(90deg, #006e88, #13b499)'}}>
      {/* Background */}
      <div className="relative w-full h-[540px] md:h-[800px] lg:h-screen">
        <Image 
          src="/hero.jpg" 
          alt="Hero Background" 
          fill
          className="object-contain object-top"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0">
          {/* Left top side graphics */}
          <div className="absolute left-0 top-0 w-1/3 h-full">
            <div className="relative w-full h-full">
              {/* Floating circles */}
              <div className="absolute top-20 left-8 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-40 left-16 w-8 h-8 bg-cyan-400/30 rounded-full animate-bounce"></div>
              <div className="absolute top-60 left-12 w-12 h-12 bg-teal-500/25 rounded-full animate-pulse delay-1000"></div>
              
              {/* Geometric shapes */}
              <div className="absolute top-32 left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-300 transform rotate-45 animate-spin"></div>
              <div className="absolute top-80 left-20 w-4 h-4 bg-gradient-to-br from-teal-400 to-blue-300 transform rotate-12 animate-pulse delay-500"></div>
              
              {/* Lines */}
              <div className="absolute top-24 left-6 w-20 h-0.5 bg-linear-to-r from-blue-400 to-transparent transform -rotate-12"></div>
              <div className="absolute top-72 left-10 w-16 h-0.5 bg-linear-to-r from-cyan-400 to-transparent transform rotate-12"></div>
            </div>
          </div>
          {/* Left middle side graphics - Hidden on desktop */}
          <div className="absolute left-0 top-100 w-1/3 h-full hidden lg:block">
            <div className="relative w-full h-full">
              {/* Floating circles */}
              <div className="absolute top-20 left-8 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-40 left-16 w-8 h-8 bg-cyan-400/30 rounded-full animate-bounce"></div>
              <div className="absolute top-60 left-12 w-12 h-12 bg-teal-500/25 rounded-full animate-pulse delay-1000"></div>
              
              {/* Geometric shapes */}
              <div className="absolute top-32 left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-300 transform rotate-45 animate-spin"></div>
              <div className="absolute top-80 left-20 w-4 h-4 bg-gradient-to-br from-teal-400 to-blue-300 transform rotate-12 animate-pulse delay-500"></div>
              
              {/* Lines */}
              <div className="absolute top-24 left-6 w-20 h-0.5 bg-linear-to-r from-blue-400 to-transparent transform -rotate-12"></div>
              <div className="absolute top-72 left-10 w-16 h-0.5 bg-linear-to-r from-cyan-400 to-transparent transform rotate-12"></div>
            </div>
          </div>

          {/* Left bottom side graphics */}
          <div className="absolute left-0 top-200 w-1/3 h-full">
            <div className="relative w-full h-full">
              {/* Floating circles */}
              <div className="absolute top-20 left-8 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse"></div>
              <div className="absolute top-40 left-16 w-8 h-8 bg-cyan-400/30 rounded-full animate-bounce"></div>
              <div className="absolute top-60 left-12 w-12 h-12 bg-teal-500/25 rounded-full animate-pulse delay-1000"></div>
              
              {/* Geometric shapes */}
              <div className="absolute top-32 left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-cyan-300 transform rotate-45 animate-spin"></div>
              <div className="absolute top-80 left-20 w-4 h-4 bg-gradient-to-br from-teal-400 to-blue-300 transform rotate-12 animate-pulse delay-500"></div>
              
              {/* Lines */}
              <div className="absolute top-24 left-6 w-20 h-0.5 bg-linear-to-r from-blue-400 to-transparent transform -rotate-12"></div>
              <div className="absolute top-72 left-10 w-16 h-0.5 bg-linear-to-r from-cyan-400 to-transparent transform rotate-12"></div>
            </div>
          </div>

          {/* Right side graphics */}
          <div className="absolute right-0 top-0 w-1/3 h-full">
            <div className="relative w-full h-full">
              {/* Floating circles */}
              <div className="absolute top-16 right-12 w-20 h-20 bg-green-500/20 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-48 right-8 w-10 h-10 bg-emerald-400/30 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-72 right-16 w-14 h-14 bg-teal-500/25 rounded-full animate-pulse delay-1500"></div>
              
              {/* Geometric shapes */}
              <div className="absolute top-28 right-6 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-300 transform -rotate-45 animate-spin delay-1000"></div>
              <div className="absolute top-64 right-12 w-6 h-6 bg-gradient-to-br from-teal-400 to-green-300 transform rotate-45 animate-pulse delay-2000"></div>
              
              {/* Lines */}
              <div className="absolute top-20 right-8 w-24 h-0.5 bg-linear-to-l from-green-400 to-transparent transform rotate-12"></div>
              <div className="absolute top-68 right-12 w-18 h-0.5 bg-linear-to-l from-emerald-400 to-transparent transform -rotate-12"></div>
            </div>
          </div>
          {/* Right middle side graphics - Hidden on desktop */}
          <div className="absolute right-0 top-100 w-1/3 h-full hidden lg:block">
            <div className="relative w-full h-full">
              {/* Floating circles */}
              <div className="absolute top-16 right-12 w-20 h-20 bg-green-500/20 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-48 right-8 w-10 h-10 bg-emerald-400/30 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-72 right-16 w-14 h-14 bg-teal-500/25 rounded-full animate-pulse delay-1500"></div>
              
              {/* Geometric shapes */}
              <div className="absolute top-28 right-6 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-300 transform -rotate-45 animate-spin delay-1000"></div>
              <div className="absolute top-64 right-12 w-6 h-6 bg-gradient-to-br from-teal-400 to-green-300 transform rotate-45 animate-pulse delay-2000"></div>
              
              {/* Lines */}
              <div className="absolute top-20 right-8 w-24 h-0.5 bg-linear-to-l from-green-400 to-transparent transform rotate-12"></div>
              <div className="absolute top-68 right-12 w-18 h-0.5 bg-linear-to-l from-emerald-400 to-transparent transform -rotate-12"></div>
            </div>
          </div>
          {/* Right bottom side graphics */}
          <div className="absolute right-0 top-200 w-1/3 h-full">
            <div className="relative w-full h-full">
              {/* Floating circles */}
              <div className="absolute top-16 right-12 w-20 h-20 bg-green-500/20 rounded-full animate-pulse delay-300"></div>
              <div className="absolute top-48 right-8 w-10 h-10 bg-emerald-400/30 rounded-full animate-bounce delay-700"></div>
              <div className="absolute top-72 right-16 w-14 h-14 bg-teal-500/25 rounded-full animate-pulse delay-1500"></div>
              
              {/* Geometric shapes */}
              <div className="absolute top-28 right-6 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-300 transform -rotate-45 animate-spin delay-1000"></div>
              <div className="absolute top-64 right-12 w-6 h-6 bg-gradient-to-br from-teal-400 to-green-300 transform rotate-45 animate-pulse delay-2000"></div>
              
              {/* Lines */}
              <div className="absolute top-20 right-8 w-24 h-0.5 bg-linear-to-l from-green-400 to-transparent transform rotate-12"></div>
              <div className="absolute top-68 right-12 w-18 h-0.5 bg-linear-to-l from-emerald-400 to-transparent transform -rotate-12"></div>
            </div>
          </div>
        </div>


        
      </div>
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 lg:pt-32">
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
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScqT2WPNW68F7ChWnv-f5Cho3pT6YjW_xWKl4lZpWSaA7Ac0Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-16 py-6 rounded-full text-2xl kanit-black transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105"
            >
              ลงทะเบียนเรียนฟรี
            </a>
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
