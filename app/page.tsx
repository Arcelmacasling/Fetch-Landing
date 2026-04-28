"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Calendar, 
  Package, 
  Shield, 
  MapPin, 
  Activity,
  ChevronRight,
  Menu,
  Smartphone,
  Clock,
  Truck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax effects
  const yCenter = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yLeft = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yRight = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  // Fade out effects perfectly matched to scroll
  const opacityCenter = useTransform(scrollYProgress, [0, 0.4, 0.8], [1, 1, 0]);
  const opacitySide = useTransform(scrollYProgress, [0, 0.3, 0.6], [1, 0.8, 0]);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 overflow-x-hidden relative">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-600 flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">FETCH MALAYBALAY</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="text-slate-900">• Home</a>
            <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
            <a href="#screenshots" className="hover:text-slate-900 transition-colors">Screenshots</a>
            <Link href="/manual" className="hover:text-slate-900 transition-colors">Manual</Link>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          </div>

          <div className="flex items-center gap-4 relative z-50">
            {/* Download Button */}
            <a 
              href="/Fetch.apk" 
              download="Fetch.apk"
              className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-sm"
            >
              Download App <ChevronRight className="w-4 h-4" />
            </a>
            <button className="md:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={containerRef} className="relative pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-20 px-4 sm:px-6 max-w-7xl mx-auto min-h-[100svh] md:min-h-[130vh]">
        <AnimatedMapBackground />
        
        <motion.div 
          className="relative z-20 text-center max-w-4xl mx-auto sticky top-24 md:top-36"
          initial="initial"
          animate="animate"
          variants={stagger}
        >
          <motion.div variants={fadeInUp} className="inline-block mb-6">
            <span className="px-4 py-1.5 rounded-full border border-rose-200 text-rose-600 text-sm font-medium bg-white/80 backdrop-blur-sm shadow-sm">
              Rider at Your Service
            </span>
          </motion.div>
          
          <motion.h1 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-tight md:leading-[1.1]"
          >
            One Call Away Riders!<br />Anytime, Anywhere.
          </motion.h1>

          <motion.p 
            variants={fadeInUp}
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the future of fetching tasks with our cutting-edge app. Whether it'apos;s a quick errand or a long-distance haul, we'apos;ve got you covered with reliable, fast, and secure service at your fingertips.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-30">
            <a 
              href="/Fetch.apk" 
              download="Fetch.apk"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-slate-800 transition-all hover:shadow-xl hover:-translate-y-0.5 relative z-30"
            >
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-[10px] text-slate-300 leading-none mb-1">Download for</div>
                <div className="text-sm font-semibold leading-none">Android Only</div>
              </div>
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Mockups Area */}
        <div className="mt-12 md:mt-20 relative h-[300px] sm:h-[360px] md:h-[600px] w-full max-w-5xl mx-auto z-30 pointer-events-none md:sticky md:top-96">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            style={{ y: yCenter, opacity: opacityCenter }}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[220px] h-[390px] sm:w-[260px] sm:h-[460px] md:w-[320px] md:h-[500px] bg-white rounded-t-[40px] shadow-2xl border-[8px] border-slate-900 overflow-hidden flex flex-col pointer-events-auto"
          >
            <div className="w-32 h-6 bg-slate-900 mx-auto rounded-b-2xl mb-6 shadow-sm"></div>
            <div className="px-6 flex-1">
               <div className="flex bg-rose-50 rounded-2xl p-4 items-center gap-4 mb-4 border border-rose-100">
                 <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center text-white shadow-md"><MapPin /></div>
                 <div>
                    <h4 className="font-semibold text-slate-900">Track Rider</h4>
                    <p className="text-xs text-rose-500">Live GPS updates</p>
                 </div>
               </div>
               <div className="space-y-3">
                  <div className="h-20 bg-slate-50 rounded-2xl border border-slate-100 flex items-center p-4 gap-4 shadow-sm">
                    <Clock className="text-rose-500 w-8 h-8 drop-shadow-sm" />
                    <div><div className="font-bold text-slate-800">Est. Arrival</div><div className="text-sm text-slate-500">15 mins away</div></div>
                  </div>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: -50, y: 50, rotate: -5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: -10 }}
            transition={{ duration: 1, delay: 0.4, type: "spring" }}
            style={{ y: yLeft, opacity: opacitySide }}
            className="absolute left-[10%] md:left-[5%] bottom-10 w-[240px] md:w-[280px] h-[400px] bg-slate-900 rounded-[32px] shadow-2xl border-[6px] border-slate-800 hidden sm:block p-6 pointer-events-auto"
          >
             <div className="w-20 h-4 bg-slate-800 mx-auto rounded-full mb-8"></div>
             <div className="space-y-4">
                 <div className="h-12 bg-slate-800 rounded-xl" />
                 <div className="h-24 bg-rose-900/40 rounded-xl border border-rose-800/50" />
             </div>
             
             {/* Floating badge */}
             <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-10 top-1/2 bg-white rounded-2xl p-4 shadow-xl border border-slate-100 z-40"
             >
                <div className="flex -space-x-2 mb-2">
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-rose-100 shrink-0"></div>
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 shrink-0"></div>
                   <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-100 shrink-0"></div>
                </div>
                <div className="text-xs font-bold whitespace-nowrap text-slate-800">4k+ Happy Clients</div>
             </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, y: 50, rotate: 5 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 10 }}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            style={{ y: yRight, opacity: opacitySide }}
            className="absolute right-[10%] md:right-[5%] bottom-20 w-[240px] md:w-[280px] h-[450px] bg-white rounded-[32px] shadow-2xl border-[6px] border-slate-100 hidden sm:block p-6 pointer-events-auto z-20"
          >
             <div className="w-20 h-4 bg-slate-200 mx-auto rounded-full mb-8"></div>
             
             <div className="space-y-4">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                   <div>
                      <div className="w-20 h-3 bg-slate-200 rounded-full mb-2"></div>
                      <div className="w-16 h-2 bg-slate-100 rounded-full"></div>
                   </div>
                </div>
                 <div className="h-32 bg-rose-50 rounded-xl mt-4 flex items-center justify-center border border-rose-100/50" >
                    <Package className="text-rose-400 w-12 h-12" />
                 </div>
             </div>
             
             <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/3 bg-rose-600 rounded-xl p-3 shadow-xl text-white font-medium text-xs flex items-center gap-2 whitespace-nowrap z-40"
             >
               <Shield className="w-4 h-4 text-white" /> Secure Package Delivery
             </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Outline */}
      <section id="features" className="py-20 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-40 bg-[#FDFDFD]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Everything You Need.<br />Nothing You Don'apos;t.
          </h2>
          <p className="text-slate-600 text-lg">
            Comprehensive delivery and fetching management designed with simplicity and reliability in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<MapPin className="text-rose-600" />}
            title="Instant Rider Booking"
            description="Find available riders and book deliveries within seconds. Set custom pickup and drop-off locations easily."
            className="md:col-span-1 bg-slate-50"
          />
          
          <div className="md:col-span-1 md:row-span-2 rounded-[32px] bg-rose-300/40 p-6 sm:p-8 flex flex-col justify-end min-h-[300px] md:min-h-[400px] relative overflow-hidden group">
            <div className="absolute inset-x-8 -bottom-10 h-[80%] bg-white rounded-t-[32px] border-[6px] border-slate-900 shadow-xl transition-transform group-hover:-translate-y-4 duration-500 p-6 flex flex-col items-center">
              <div className="w-16 h-4 bg-slate-900 rounded-b-xl -mt-6 mb-6 flex-shrink-0"></div>
              <div className="w-full flex items-center gap-3 bg-rose-50 p-3 rounded-2xl mb-4 border border-rose-100">
                 <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center shrink-0"><Truck className="w-5 h-5 text-rose-600" /></div>
                 <div><div className="text-sm font-bold text-slate-800">Fast Delivery</div><div className="text-xs text-rose-500">On the way!</div></div>
              </div>
            </div>
          </div>
          
          <FeatureCard 
            icon={<Activity className="text-purple-600" />}
            title="Real-Time Tracker"
            description="Follow your package'apos;s live location with smart GPS updates and arrival estimates."
            className="md:col-span-1 bg-slate-50"
          />
          
          <FeatureCard 
            icon={<Smartphone className="text-rose-600" />}
            title="Direct Communication"
            description="Connect with your assigned rider instantly via chat or call directly natively in just one tap."
            className="md:col-span-1 bg-slate-50"
          />
          
          <FeatureCard 
            icon={<Shield className="text-emerald-600" />}
            title="Secure & Reliable"
            description="Your items are safe. Our vetted riders provide secure transit with trusted tracking."
            className="md:col-span-1 bg-slate-50"
          />
        </div>
      </section>

      {/* Screenshots Section */}
      <ScreenshotsCarousel />

      {/* About Section */}
      <AboutSection />
      
      {/* Footer minimal */}
      <footer className="border-t border-slate-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
           <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-rose-600 flex items-center justify-center shadow-sm">
              <Package className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold tracking-tight text-slate-900">FETCH MALAYBALAY</span>
          </div>
          <p className="text-slate-500 text-sm">© {(new Date().getFullYear())} Fetch Malaybalay. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description, className }: { icon: React.ReactNode, title: string, description: string, className?: string }) {
  return (
    <div className={`p-8 rounded-[32px] ${className} hover:shadow-lg transition-all duration-300 border border-slate-100`}>
      <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed max-w-sm">{description}</p>
      <a href="#" className="inline-flex items-center gap-2 mt-6 font-medium text-slate-800 hover:text-rose-600 transition-colors">
        Learn More <ChevronRight className="w-4 h-4" />
      </a>
    </div>
  );
}

function AnimatedMapBackground() {
  return (
    <div className="absolute top-0 left-[calc(50%-50vw)] w-[100vw] h-full z-0 overflow-hidden pointer-events-none bg-slate-50">      
      {/* Dynamic Lighting Effects & Glowing Orbs */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200/20 via-transparent to-red-300/10 mix-blend-multiply z-0" />
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-rose-400/20 rounded-full blur-[120px] mix-blend-screen z-0 animate-pulse duration-10000" />
      <div className="absolute bottom-1/4 right-1/4 w-[50rem] h-[50rem] bg-red-300/20 rounded-full blur-[150px] mix-blend-screen z-0" />

      {/* Google Maps Base Colors & Geography */}
      <svg className="absolute w-[120%] h-[150%] top-[-10%] -left-[10%] opacity-50" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
         {/* Green Parks/Areas */}
         <path d="M-100,100 L 300,150 L 400,-100 Z" fill="#cee6ba" opacity="0.6"/>
         <path d="M800,900 L 700,500 L 1200,300 L 1400,800 Z" fill="#cee6ba" opacity="0.6"/>
         <path d="M-200,700 L 200,450 L 400,900 Z" fill="#cee6ba" opacity="0.6"/>
         {/* Water / Rivers */}
         <path d="M1200,900 Q 900,200 500,-200 L 700,-200 Q 1100,200 1400,900" fill="#aadaff" opacity="0.5"/>

         <defs>
          <filter id="glowGpsMap" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Thick Light Local Roads */}
        <g stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none">
           <path d="M-100,500 L 200,500 L 350,300 L 600,300 L 800,400 L 1300,100" strokeWidth="20" />
           <path d="M200,-100 L 200,250 L 250,320 L 700,550 L 800,600 L 800,800" strokeWidth="18" />
           <path d="M1000,900 L 900,600 L 750,520 L 300,350 L 150,200" strokeWidth="16" />
           <path d="M0,0 L 200,250" strokeWidth="12" />
           <path d="M600,300 L 700,150 L 1200,0" strokeWidth="12" />
           <path d="M800,400 L 1000,500 L 1200,400" strokeWidth="14" />
        </g>

        {/* Center Lines for Main Highways (Subtle Yellow/Orange) */}
        <path d="M-100,500 L 200,500 L 350,300 L 600,300 L 800,400 L 1300,100" fill="none" stroke="#fff4c2" strokeWidth="8" strokeDasharray="15 15" strokeLinecap="round" />
        
        {/* Active GPS Route Animation - Thick Red Line */}
        <motion.path 
          d="M-100,500 L 200,500 L 350,300 L 600,300 L 800,400 L 1300,100"
          fill="none" 
          stroke="#E11D48" 
          strokeWidth="6" 
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0.3 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        />

        {/* Primary Navigating Marker / Car */}
        <g filter="url(#glowGpsMap)">
          <circle r="14" fill="#FFE4E6" opacity="0.7">
             <animateMotion 
              dur="8s" 
              repeatCount="indefinite" 
              path="M-100,500 L 200,500 L 350,300 L 600,300 L 800,400 L 1300,100" 
            />
          </circle>
          {/* Inner Location Beacon */}
          <g>
            <animateMotion 
              dur="8s" 
              repeatCount="indefinite" 
              path="M-100,500 L 200,500 L 350,300 L 600,300 L 800,400 L 1300,100" 
            />
             <path fill="#E11D48" stroke="#ffffff" strokeWidth="2" d="M0,-8 C4,-8 8,-4 8,0 C8,5 0,14 0,14 C0,14 -8,5 -8,0 C-8,-4 -4,-8 0,-8 Z" />
             <circle r="2.5" cy="-1.5" fill="#ffffff" />
          </g>
        </g>
        
        {/* Secondary Doctor/Ambulance Tracker */}
        <g filter="url(#glowGpsMap)">
          <g>
            <animateMotion 
              dur="10s" 
              repeatCount="indefinite" 
              path="M200,-100 L 200,250 L 250,320 L 700,550 L 800,600 L 800,800" 
            />
            <circle r="12" fill="#E2E8F0" opacity="0.6"/>
            {/* Blue locator */}
            <circle r="5" fill="#3B82F6" stroke="#ffffff" strokeWidth="2" />
          </g>
        </g>

        {/* Location Destination Pins */}
        <g transform="translate(600,300)">
           <path fill="#E11D48" stroke="#ffffff" strokeWidth="2" d="M0,-12 C6,-12 12,-6 12,0 C12,8 0,22 0,22 C0,22 -12,8 -12,0 C-12,-6 -6,-12 0,-12 Z" />
           <circle r="4" cy="-2" fill="#ffffff" />
        </g>
        <g transform="translate(800,400)">
           <path fill="#3B82F6" stroke="#ffffff" strokeWidth="2" d="M0,-10 C5,-10 10,-5 10,0 C10,7 0,18 0,18 C0,18 -10,7 -10,0 C-10,-5 -5,-10 0,-10 Z" />
           <circle r="3" cy="-2" fill="#ffffff" />
        </g>
      </svg>
      
      {/* Light glass overlay so text is readable but map is fully visible */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px] z-10" />
      
      {/* Professional Vignette and Linear Gradient Lighting overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-50/80 via-transparent to-red-50/50 z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_40%,_transparent_20%,_rgba(253,253,253,0.7)_80%)] z-10" />

      {/* Bottom gradient fade-out perfectly into the #FDFDFD next section */}
      <div className="absolute bottom-0 left-0 w-full h-[400px] bg-gradient-to-b from-transparent via-[#FDFDFD]/80 to-[#FDFDFD] z-20" />
    </div>
  );
}

function ScreenshotsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const mockups = [
    "/Screenshots/Screenshot_2026-04-28-23-01-12-21_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-01-16-34_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-01-18-65_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-01-20-77_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-01-22-88_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-02-33-86_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-03-03-75_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-03-08-67_26728033935703b5a43078abc05f9514.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-42-44-12_45801244c86e4081f73ecc2d59f16bca.jpg",
    "/Screenshots/Screenshot_2026-04-28-23-47-25-00_45801244c86e4081f73ecc2d59f16bca.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % mockups.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [mockups.length]);

  return (
    <section id="screenshots" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background glow for the section */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(225,29,72,0.15),_transparent_50%)]"></div>
      
      <div className="text-center mb-16 relative z-10 max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
          See It In Action
        </h2>
        <p className="text-slate-400 text-lg">
          A seamless experience from booking to delivery dropping off. Explore Fetch.
        </p>
      </div>

      <div className="relative flex justify-center items-center h-[380px] sm:h-[460px] md:h-[550px] w-full max-w-[100vw] mx-auto z-10 perspective-1000">
        {mockups.map((src, index) => {
          let offset = index - activeIndex;
          const half = Math.floor(mockups.length / 2);
          if (offset > half) offset -= mockups.length;
          else if (offset < -half) offset += mockups.length;

          const isCenter = offset === 0;
          const absOffset = Math.abs(offset);
          
          const x = offset * 180; 
          let scale = isCenter ? 1 : 0.85;
          let opacity = isCenter ? 1 : 0.4;
          const zIndex = 10 - absOffset;
          
          if (absOffset > 2) {
             opacity = 0;
             scale = 0.5;
          }

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{
                x,
                scale,
                opacity,
                zIndex
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="absolute w-[190px] h-[380px] sm:w-[220px] sm:h-[440px] md:w-[260px] md:h-[520px] rounded-[40px] border-[6px] border-slate-800 bg-slate-950 overflow-hidden shadow-2xl flex flex-col justify-between"
            >
              {/* Fake status bar at the top */}
              <div className="h-6 w-full absolute top-0 inset-x-0 z-20 flex justify-end items-center px-4 gap-1">
                 <div className="w-1 h-2 bg-white/50 rounded-full"></div>
                 <div className="w-1 h-3 bg-white/50 rounded-full"></div>
                 <div className="w-1 h-4 bg-white/50 rounded-full"></div>
                 <div className="w-1 h-4 bg-white/50 rounded-full"></div>
              </div>
              <Image 
                src={src} 
                alt={`App Screenshot ${index + 1}`} 
                fill 
                className="object-cover opacity-90 transition-opacity duration-300"
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-24 px-4 sm:px-6 bg-[#FDFDFD] relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
        <div className="md:w-1/2">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-rose-200 text-rose-600 text-sm font-medium bg-rose-50">
            About Fetch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">
            Connecting Communities, <br />One Delivery at a Time
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mb-6 leading-relaxed">
            Fetch is your ultimate local delivery and errand companion tailored for convenience. Whether you are craving food from your favorite local spot, need an important document fetched, or want to pay your bills without waiting in line, Fetch connects you to reliable local riders ready to assist you.
          </p>
          <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
            With innovative features like <strong className="text-slate-900">PasaBuy</strong>, live map tracking, and seamless direct rider communication, we empower our riders to earn flexibly while ensuring customers enjoy an accessible, fully transparent, and seamless service.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center mb-4">
                <Package className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
              <p className="text-sm text-slate-600">Empowering local economies through fast and accessible transport.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Community Trust</h3>
              <p className="text-sm text-slate-600">Strictly vetted riders and real-time tracking for absolute peace of mind.</p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 relative w-full">
          <div className="absolute inset-0 bg-rose-100 rounded-[40px] transform rotate-3 scale-105 -z-10"></div>
          <div className="bg-slate-900 p-8 sm:p-12 rounded-[32px] sm:rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
            
            <div className="relative z-10 text-white">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">For Customers</h3>
              <ul className="space-y-4 mb-12">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-slate-300">Book instant rides and food delivery</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-slate-300">Request bills payment &amp; custom errands</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-rose-500"></div>
                  <span className="text-slate-300">Share your location natively via chat</span>
                </li>
              </ul>
              
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">For Riders</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-slate-300">Host your own PasaBuy transactions</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-slate-300">Earn at your own flexible pace</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span className="text-slate-300">Keep track of comprehensive analytics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
