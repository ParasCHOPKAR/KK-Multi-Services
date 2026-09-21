"use client";

import { useState, useEffect } from "react";
import { Wrench, Clock, CreditCard, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const slides = [
  {
    tagline: "Trusted Appliance Repair Experts",
    title: <>Reliable Home <br /><span className="text-kk-teal">Appliance</span> Repair.</>,
  },
  {
    tagline: "Professional AC Cooling Solutions",
    title: <>Expert AC <br /><span className="text-kk-teal">Repair &</span> Service.</>,
  },
  {
    tagline: "Fast & Reliable Fridge Service",
    title: <>Premium Fridge <br /><span className="text-kk-teal">Repair</span> Service.</>,
  },
  {
    tagline: "Quick Microwave Fixing",
    title: <>Expert Microwave <br /><span className="text-kk-teal">Repair</span> Solutions.</>,
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative overflow-hidden transition-all duration-1000 ease-in-out"
    >
      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/Man_repairing_air_conditioner_1080p_20260921141441.mp4" type="video/mp4" />
      </video>
      
      {/* Desktop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/hero_video_01.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent lg:w-2/3 z-0 transition-opacity duration-1000"></div>
      <div className="hidden md:block absolute top-4 right-4 z-20 transform rotate-12 opacity-80 font-['Caveat',cursive] text-4xl text-black italic">
        Your Home<br/>Our Care
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="pt-12 pb-14 lg:pt-16 lg:pb-24 min-h-[450px] flex flex-col justify-center">
            
            <div className="min-h-[140px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-12 bg-kk-red"></div>
                <span className="text-sm font-bold tracking-wider text-slate-600 uppercase transition-opacity duration-500">
                  {slides[currentSlide].tagline}
                </span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-kk-blue leading-[1.1] mb-4 transition-all duration-500">
                {slides[currentSlide].title}
              </h1>
            </div>

            <p className="text-base lg:text-lg text-slate-600 mb-6 max-w-lg">
              Fast, efficient, and dependable repair solutions for all your home appliances.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700">
                  <Wrench className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="text-xs lg:text-sm font-bold text-slate-700 leading-tight">Expert<br/>Technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700">
                  <Clock className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="text-xs lg:text-sm font-bold text-slate-700 leading-tight">Quick<br/>Response</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-700">
                  <CreditCard className="w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <span className="text-xs lg:text-sm font-bold text-slate-700 leading-tight">Affordable<br/>Pricing</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#" className="bg-kk-red hover:bg-kk-red-light text-white px-6 py-3 lg:px-8 lg:py-4 rounded-md font-bold transition-all shadow-md text-center flex items-center justify-center gap-2">
                Book a Service <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="bg-white border-2 border-slate-300 hover:border-kk-blue hover:text-kk-blue text-slate-700 px-6 py-3 lg:px-8 lg:py-4 rounded-md font-bold transition-all text-center flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" /> Call Now
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                      <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs lg:text-sm font-bold text-slate-800">5000+ Happy Customers</p>
                <div className="flex items-center gap-1.5 lg:gap-2 text-[10px] lg:text-xs text-slate-500">
                  <div className="flex text-yellow-400">
                    {[1,2,3,4,5].map(i => <svg key={i} className="w-3 h-3 lg:w-3.5 lg:h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  </div>
                  <span>Trusted Across the Region</span>
                </div>
              </div>
            </div>

            {/* Slider dots */}
            <div className="flex items-center gap-2 mt-8">
              {slides.map((_, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentSlide ? 'w-8 bg-kk-red' : 'w-2 bg-slate-300 hover:bg-slate-400'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
            
          </div>

          <div className="relative h-full min-h-[450px] hidden lg:block">
            
            <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-2xl flex items-center gap-4 z-20 max-w-xs">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-kk-teal/10 rounded-full flex items-center justify-center text-kk-teal shrink-0">
                <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <p className="font-bold text-slate-800 text-sm lg:text-base leading-tight">Quality Repairs.<br/>Happy Homes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
