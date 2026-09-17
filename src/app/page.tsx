import Image from "next/image";
import { 
  Phone, 
  Wrench, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  Home, 
  Users, 
  Wallet, 
  Headset,
  ArrowRight,
  Settings,
  ThumbsUp,
  Building2,
  Building,
  ShoppingBag,
  Users2,
  Landmark,
  Calendar,
  Tv,
  Thermometer,
  Mail,
  MapPin,
  Award,
  Star,
  ShieldCheck,
  Search,
  FileText,
  Quote,
  MessageSquare,
  ArrowUp
} from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen font-sans bg-white text-slate-900">
      {/* Top Bar */}
      <div className="bg-kk-blue text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium"><Clock className="w-3.5 h-3.5" /> 24/7 Emergency Service</span>
            <span className="flex items-center gap-1.5 font-medium"><Mail className="w-3.5 h-3.5" /> support@kkmulti.com</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 md:py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/images/logo.jpg" alt="KK Multi Services Logo" width={240} height={70} className="h-12 md:h-14 w-auto object-contain" priority />
            </Link>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="#" className="text-sm font-bold text-slate-900 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-red">Home</Link>
              <Link href="#" className="text-sm font-medium text-slate-600 hover:text-kk-blue transition-colors">About Us</Link>
              <Link href="#" className="text-sm font-medium text-slate-600 hover:text-kk-blue transition-colors">Services</Link>
              <Link href="#" className="text-sm font-medium text-slate-600 hover:text-kk-blue transition-colors">Areas We Serve</Link>
              <Link href="#" className="text-sm font-medium text-slate-600 hover:text-kk-blue transition-colors">Contact Us</Link>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-slate-700 font-bold hover:text-kk-blue transition-colors">
                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                +91 98765 43210
              </a>
              <a href="#" className="bg-kk-red hover:bg-kk-red-light text-white px-6 py-3 rounded-md font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                Get a Quote <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSlider />

      {/* Features Bar */}
      <section className="bg-kk-blue text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap lg:flex-nowrap justify-between gap-6">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Home className="w-8 h-8 opacity-80" />
              <div>
                <h4 className="font-bold text-sm lg:text-base">Same Day Service</h4>
                <p className="text-xs text-white/60">When You Need It</p>
              </div>
            </div>
            <div className="hidden lg:block w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Users className="w-8 h-8 opacity-80" />
              <div>
                <h4 className="font-bold text-sm lg:text-base">Trained & Verified<br/>Technicians</h4>
              </div>
            </div>
            <div className="hidden lg:block w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Settings className="w-8 h-8 opacity-80" />
              <div>
                <h4 className="font-bold text-sm lg:text-base">Genuine Spare Parts</h4>
              </div>
            </div>
            <div className="hidden lg:block w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Wallet className="w-8 h-8 opacity-80" />
              <div>
                <h4 className="font-bold text-sm lg:text-base">Transparent Pricing</h4>
              </div>
            </div>
            <div className="hidden lg:block w-px h-10 bg-white/10"></div>
            <div className="flex items-center gap-4 w-full md:w-auto">
              <Headset className="w-8 h-8 opacity-80" />
              <div>
                <h4 className="font-bold text-sm lg:text-base">Dedicated Support</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <h4 className="text-sm font-bold tracking-wider text-slate-500 uppercase mb-3">Our Services</h4>
              <h2 className="text-4xl font-extrabold text-kk-blue leading-tight mb-4">
                We Repair All Major<br/>Home <span className="text-kk-teal">Appliances</span>
              </h2>
              <p className="text-slate-600">From kitchen to laundry, we keep your home running smoothly.</p>
            </div>
            <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-800 hover:text-kk-red transition-colors border-b-2 border-transparent hover:border-kk-red pb-1">
              View All Services <ArrowRight className="w-4 h-4 text-kk-red" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Service 1 */}
            <div className="group border border-slate-200 rounded-xl p-8 lg:p-10 text-center hover:shadow-xl hover:border-kk-teal/30 transition-all cursor-pointer">
              <div className="relative w-full h-40 lg:h-48 mb-8">
                <Image src="/images/appliance_fridge_1789636595538.jpg" alt="Refrigerator" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-kk-blue transition-colors">Refrigerator Repair</h3>
              <p className="text-sm text-slate-500">Fast Cooling Solutions</p>
            </div>
            {/* Service 2 */}
            <div className="group border border-slate-200 rounded-xl p-8 lg:p-10 text-center hover:shadow-xl hover:border-kk-teal/30 transition-all cursor-pointer">
              <div className="relative w-full h-40 lg:h-48 mb-8">
                <Image src="/images/appliance_washing_machine_1789636610541.jpg" alt="Washing Machine" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-kk-blue transition-colors">Washing Machine Repair</h3>
              <p className="text-sm text-slate-500">All Major Brands</p>
            </div>
            {/* Service 3 */}
            <div className="group border border-slate-200 rounded-xl p-8 lg:p-10 text-center hover:shadow-xl hover:border-kk-teal/30 transition-all cursor-pointer">
              <div className="relative w-full h-40 lg:h-48 mb-8">
                <Image src="/images/appliance_microwave_1789636624228.jpg" alt="Microwave" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-kk-blue transition-colors">Microwave Repair</h3>
              <p className="text-sm text-slate-500">Quick & Reliable</p>
            </div>
            {/* Service 4 */}
            <div className="group border border-slate-200 rounded-xl p-8 lg:p-10 text-center hover:shadow-xl hover:border-kk-teal/30 transition-all cursor-pointer">
              <div className="relative w-full h-40 lg:h-48 mb-8">
                <Image src="/images/appliance_ac_1789636637732.jpg" alt="AC" fill className="object-contain" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-kk-blue transition-colors">AC Repair & Service</h3>
              <p className="text-sm text-slate-500">Cooling You Can Trust</p>
            </div>

            {/* Service 6 */}
            <div className="group border border-slate-200 rounded-xl p-8 lg:p-10 text-center hover:shadow-xl hover:border-kk-teal/30 transition-all cursor-pointer">
              <div className="relative w-full h-40 lg:h-48 mb-8 flex items-center justify-center">
                 <div className="w-16 h-32 bg-white rounded-t-full rounded-b-xl border border-slate-200 shadow-md relative overflow-hidden flex flex-col items-center pt-3">
                    <div className="w-3 h-3 bg-slate-300 rounded-full mb-2"></div>
                    <div className="w-8 h-16 border border-slate-200 rounded-full mt-auto mb-3 relative overflow-hidden">
                       <div className="absolute bottom-0 w-full h-1/2 bg-kk-red/20"></div>
                       <div className="absolute bottom-1/2 w-full h-px bg-kk-red"></div>
                    </div>
                 </div>
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-kk-blue transition-colors">Geyser Repair</h3>
              <p className="text-sm text-slate-500">Safe & Efficient</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="py-20 bg-slate-50 relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start mb-12">
            
            {/* Left Column: Text & Features */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-0.5 w-8 bg-kk-teal"></div>
                <h4 className="text-sm font-bold tracking-wider text-slate-700 uppercase">Our Work</h4>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.1] mb-6">
                Reliable Home<br/><span className="text-kk-teal">Appliance Repair.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed max-w-md">
                Fast, efficient, and dependable repair solutions for all your home appliances.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-kk-teal rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Expert Technicians</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Skilled professionals to fix it right the first time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-kk-teal rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Quick Response</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">We respond fast and value your time.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-kk-teal rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Quality Service</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Reliable repairs with long-lasting results.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-kk-teal rounded-full flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    <Wallet className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg mb-1">Affordable Pricing</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Transparent pricing with no hidden costs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Image Grid */}
            <div className="grid grid-cols-3 gap-4 h-full">
              {/* Top large image */}
              <div className="col-span-3 relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden shadow-lg group">
                <Image 
                  src="/images/about_ac_repair_1789636581927.jpg" 
                  alt="Technician repairing AC" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Bottom 3 small images */}
              <div className="col-span-1 relative h-32 lg:h-40 rounded-2xl overflow-hidden shadow-md group">
                <Image src="/images/appliance_washing_machine_1789636610541.jpg" alt="Washing Machine Repair" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="col-span-1 relative h-32 lg:h-40 rounded-2xl overflow-hidden shadow-md group">
                <Image src="/images/appliance_microwave_1789636624228.jpg" alt="Microwave Repair" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="col-span-1 relative h-32 lg:h-40 rounded-2xl overflow-hidden shadow-md group">
                <Image src="/images/appliance_ac_1789636637732.jpg" alt="AC Service" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>
          </div>
          
          {/* Bottom Promise Banner */}
          <div className="bg-[#0b1c3d] rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all">
            <div className="absolute right-0 top-0 w-1/3 h-full bg-kk-teal -skew-x-12 translate-x-10 group-hover:translate-x-6 transition-transform"></div>
            
            <div className="flex items-center gap-6 relative z-10 w-full sm:w-auto">
              <div className="w-16 h-16 border-2 border-white/20 rounded-xl flex items-center justify-center shrink-0">
                <div className="relative">
                  <Home className="w-8 h-8 text-white opacity-50" strokeWidth={1} />
                  <Wrench className="w-5 h-5 text-kk-teal absolute bottom-0 right-0 -mr-2 -mb-2 bg-[#0b1c3d] rounded-full p-0.5" />
                </div>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-white">
                  Quality Repairs. Happy Homes. <span className="text-kk-teal font-medium ml-1">That's Our Promise.</span>
                </h3>
              </div>
            </div>
            
            <div className="relative z-10 shrink-0 self-end sm:self-center pr-6">
              <ArrowRight className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h4 className="text-sm font-bold tracking-wider text-slate-700 uppercase mb-4 relative inline-block">
              How It Works
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-kk-teal"></span>
            </h4>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.1] mt-4">
              Simple Process.<br/><span className="text-kk-teal">Seamless Experience.</span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Connecting dashed line (hidden on mobile, visible on md+) */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-kk-teal rounded-full flex items-center justify-center text-white shadow-[0_0_0_8px_rgba(255,255,255,1)] relative z-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-6">
                  <Phone className="w-10 h-10" />
                </div>
                <div className="text-kk-teal font-extrabold text-xl mb-2">01</div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Contact Us</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">Share your requirements</p>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-kk-teal rounded-full flex items-center justify-center text-white shadow-[0_0_0_8px_rgba(255,255,255,1)] relative z-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-6">
                  <Search className="w-10 h-10" />
                </div>
                <div className="text-kk-teal font-extrabold text-xl mb-2">02</div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Inspection</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">We analyze and understand the needs</p>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-kk-teal rounded-full flex items-center justify-center text-white shadow-[0_0_0_8px_rgba(255,255,255,1)] relative z-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-6">
                  <FileText className="w-10 h-10" />
                </div>
                <div className="text-kk-teal font-extrabold text-xl mb-2">03</div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Quote</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">Get transparent and best quotation</p>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-kk-teal rounded-full flex items-center justify-center text-white shadow-[0_0_0_8px_rgba(255,255,255,1)] relative z-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-6">
                  <Settings className="w-10 h-10" />
                </div>
                <div className="text-kk-teal font-extrabold text-xl mb-2">04</div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Service Execution</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">Our experts get the job done</p>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-kk-teal rounded-full flex items-center justify-center text-white shadow-[0_0_0_8px_rgba(255,255,255,1)] relative z-10 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 mb-6">
                  <Headset className="w-10 h-10" />
                </div>
                <div className="text-kk-teal font-extrabold text-xl mb-2">05</div>
                <h4 className="font-bold text-slate-900 text-lg mb-2">Support</h4>
                <p className="text-sm text-slate-500 leading-relaxed max-w-[200px]">We ensure complete satisfaction</p>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="pt-24 pb-12 lg:pb-28 bg-white relative overflow-hidden flex flex-col">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Buildings Background" fill className="object-cover object-center" />
          
          {/* Elegant sweeping white background using SVG for precise curvature and drop-shadow */}
          <svg className="absolute inset-y-0 left-[-5%] w-[65%] h-[105%] text-white drop-shadow-[20px_0_40px_rgba(150,200,220,0.5)] z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 L65,0 C95,45 80,85 50,100 L0,100 Z" fill="currentColor"/>
          </svg>
          
          {/* Subtle dot pattern on the left */}
          <div className="absolute top-12 left-12 w-24 h-48 opacity-[0.15] z-20" style={{ backgroundImage: 'radial-gradient(#0b1c3d 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
          
          {/* Teal wave at the bottom right */}
          <div className="absolute bottom-[-15%] right-0 w-[40%] h-[30%] bg-gradient-to-tr from-kk-teal to-kk-blue/80 blur-[80px] opacity-40 z-0"></div>
        </div>

        {/* Right side floating elements */}
        <div className="absolute top-20 right-20 z-20 hidden lg:flex gap-4 items-start text-white">
          <div className="w-[1.5px] h-32 bg-white/40 mt-1"></div>
          <div className="flex flex-col gap-4 text-[11px] font-bold tracking-[0.25em] uppercase opacity-90">
            <span>Comfort</span>
            <span>Safety</span>
            <span>Efficiency</span>
            <span>Always</span>
          </div>
        </div>

        <div className="absolute top-24 left-[55%] z-20 hidden lg:block -rotate-[10deg]">
          <div className="text-[2.5rem] text-[#0b1c3d] font-serif italic leading-none" style={{ fontFamily: 'cursive' }}>Spaces<br/>We Keep<br/>Running</div>
          <div className="w-24 h-[2px] bg-kk-teal mt-3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full flex flex-col justify-between">
          
          <div className="mb-16 lg:mb-24 max-w-xl lg:pr-8">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#0b1c3d] uppercase mb-6 relative inline-block pb-3">
              Who We Serve
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-kk-teal"></span>
            </h4>
            <h2 className="text-4xl lg:text-[3.5rem] font-extrabold text-[#0b1c3d] leading-[1.05] tracking-tight mb-5">
              Serving Homes,<br/>Businesses &<br/><span className="text-kk-teal">Communities</span>
            </h2>
            <p className="text-[#334155] text-lg mb-10 leading-relaxed max-w-lg">
              Reliable appliance repair and maintenance services for every space, keeping your world running smoothly.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 text-[13px] font-extrabold text-[#0b1c3d]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-9 h-9 text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">Trusted<br/>Service</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <Users className="w-9 h-9 text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">5000+<br/>Happy Customers</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <Settings className="w-9 h-9 text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">Expert<br/>Technicians</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[1.5rem] p-6 lg:py-8 lg:px-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] w-full border border-slate-50 relative lg:translate-y-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-between items-stretch gap-6 lg:gap-0 lg:divide-x divide-slate-100 text-center">
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Home className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Residential</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Comfort for<br/>every home</p>
                <div className="w-8 h-[2px] bg-kk-teal mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Building2 className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Commercial</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Reliable support<br/>for your business</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Building className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Offices</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Minimal downtime,<br/>maximum productivity</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <ShoppingBag className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Retail</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Uninterrupted<br/>service always</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Users2 className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Societies</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Trusted by housing<br/>communities</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Landmark className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Institutions</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Safe & efficient<br/>environments</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say (Testimonials) */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-kk-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-kk-blue/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-sm font-bold tracking-wider text-slate-700 uppercase mb-4 relative inline-block">
              What Our Clients Say
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-kk-teal"></span>
            </h4>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.1] mt-4">
              Trusted by Thousands.<br/><span className="text-kk-teal">Loved for Our Service.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative pt-6">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "Excellent service! My AC broke down in the middle of summer. KK Multi Services sent a technician the same day, and it was fixed in an hour. Very professional."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-lg">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Rahul Sharma</h4>
                  <p className="text-xs text-slate-500 font-medium">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 md:-translate-y-4">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "Their pricing is very transparent. No hidden charges for spare parts. The technician explained the issue with my washing machine clearly before fixing it."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-lg">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Priya Desai</h4>
                  <p className="text-xs text-slate-500 font-medium">Hinjewadi, Pune</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "I run a small restaurant and my commercial fridge stopped working. These guys understood the urgency and repaired it immediately. Highly recommend them for businesses!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-lg">
                  V
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Vikram Singh</h4>
                  <p className="text-xs text-slate-500 font-medium">Balewadi, Pune</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kk-blue text-white py-16 relative overflow-hidden">
        {/* Abstract Wrench watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
           <Wrench className="w-[500px] h-[500px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h4 className="text-slate-300 font-bold text-sm tracking-widest uppercase mb-2">Need Appliance Repair?</h4>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Get Fast & Reliable Service Today!</h2>
              <p className="text-slate-300 text-lg">Book a service request now and let our experts take care of the rest.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <a href="#" className="bg-kk-red hover:bg-kk-red-light text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5" /> Book a Service
              </a>
              <a href="tel:+919876543210" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand & Contact */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image src="/images/logo.jpg" alt="KK Multi Services Logo" width={200} height={60} className="h-12 md:h-14 w-auto object-contain" priority />
              </Link>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your trusted partner for professional home appliance repair services. Fast, efficient, and reliable solutions across the region.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-kk-red mt-0.5 shrink-0" />
                  <a href="tel:+919876543210" className="text-slate-600 hover:text-kk-red text-sm font-bold">+91 98765 43210</a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-kk-blue mt-0.5 shrink-0" />
                  <a href="mailto:support@kkmulti.com" className="text-slate-600 hover:text-kk-blue text-sm font-bold">support@kkmulti.com</a>
                </div>
              </div>
            </div>

            {/* Column 2: Services & Links */}
            <div>
              <h4 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Services & Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> Refrigerator Repair</a></li>
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> AC Repair & Service</a></li>
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> Washing Machine Repair</a></li>
                <li className="pt-2"><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-teal" /> About Us</a></li>
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-teal" /> Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Google Reviews */}
            <div>
              <h4 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Customer Reviews</h4>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative mt-2">
                <div className="absolute -top-4 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#4285F4" d="M23.64 12.2c0-.79-.07-1.54-.19-2.2H12v4.16h6.51c-.28 1.39-1.04 2.56-2.22 3.36l3.57 2.77C21.95 18.36 23.64 15.61 23.64 12.2z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#34A853" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  <span className="text-slate-800 text-xs font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-slate-600 text-xs italic mb-3 leading-relaxed">"Excellent service! The technician arrived on time and fixed our AC within an hour. Highly recommended."</p>
                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">- Rahul Sharma</div>
              </div>
            </div>

            {/* Column 4: Google Map */}
            <div>
              <h4 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Find Us</h4>
              <div className="w-full h-32 bg-slate-200 rounded-xl overflow-hidden shadow-inner relative border border-slate-200">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.08200612663!2d77.138945!3d28.5272181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="mt-4 flex items-start gap-2 text-slate-500 text-xs font-medium">
                <MapPin className="w-4 h-4 shrink-0 text-kk-teal" />
                <span>123 Repair Street, Sector 45, City 123456</span>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} KK Multi Services. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-kk-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-kk-blue transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        {/* Call Button */}
        <a href="tel:+917276748645" className="w-14 h-14 bg-kk-blue hover:bg-kk-blue-light text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(11,28,61,0.4)] hover:scale-110 transition-all duration-300 relative group">
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
            Call Us Now
          </span>
        </a>
        
        {/* WhatsApp Button */}
        <a href="https://wa.me/917276748645" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 relative group">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
            WhatsApp Us
          </span>
        </a>
        
        {/* Scroll to Top Button */}
        <a href="#top" className="w-14 h-14 bg-white border-[1.5px] border-slate-200 hover:border-kk-teal text-slate-600 hover:text-kk-teal rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:scale-110 transition-all duration-300 relative group mt-2">
          <ArrowUp className="w-6 h-6 stroke-[2.5]" />
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
            Back to Top
          </span>
        </a>
      </div>
    </main>
  );
}
