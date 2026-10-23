import Nav from "../component/Nav";
import { Link } from "react-router-dom";

const Project3 = () => {
  // Main Dashboard / Hero Image from your Drive (vlog1)
  const dashboardImage = "https://lh3.googleusercontent.com/d/18fbMakP4_CHu1EOCi3zYcBXmS2CTBHKb";

  // System Modules Screenshots with Descriptions from your Drive photos
  const screenshots = [
    {
      id: 1,
      url: "https://lh3.googleusercontent.com/d/1th0hP0yU1fcIzqlb59YqF87IZweQ7xS4",
      title: "Daily News & Vlogs Feed Hub",
      description: "Ek centralized feed jahan breaking tech news, AI revolution updates, aur daily lifestyle vlogs videos ke sath-sath live likes aur user comments ke sath display hote hain."
    },
    {
      id: 2,
      url: "https://lh3.googleusercontent.com/d/16z3xjyUSNz8iB_K9JGt-jnIPLhMb-MRz",
      title: "Personal Memory & Trip Timeline",
      description: "Life ke khass pal, jaise Manali mountain trips aur daily morning-to-night routines, ko chronologically archive aur explore karne ke liye dedicated memory timeline."
    },
    {
      id: 3,
      url: "https://lh3.googleusercontent.com/d/1d4fllIO5H5lEIYoMqpBUXDeOq5AEx4-I",
      title: "Interactive Vlog & News Publishing Modal",
      description: "Creator-friendly form jisse aap naye daily vlogs, YouTube embed links, images, aur custom tags ke sath apni stories ya news updates turant publish kar sakte hain."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Nav />
      
      {/* Main Container with top padding to prevent navbar overlap */}
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-16 lg:px-16">
        
        {/* Back Link */}
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-400 mb-8 transition-colors">
          ← Back to Portfolio
        </Link>

        {/* Header Section */}
        <div className="space-y-4">
          <span className="inline-block rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 uppercase tracking-widest">
            Content Creator & Media Platform
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            vlog.<span className="text-red-500">me</span> — Daily Vlog, News & Memories Web App
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            A dynamic web application designed for creators to seamlessly publish daily vlogs, breaking tech news, personal travel memories, and DIY tech inventions in one unified platform.
          </p>

          {/* Action Links (Live Demo & GitHub) */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://github.com/mohitsankhyan81" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              Live Demo ↗
            </a>
            <a 
              href="https://github.com/mohitsankhyan81" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#121212] border border-white/10 hover:border-red-500/50 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              GitHub Repository ↗
            </a>
          </div>
        </div>

        {/* Top Featured Main Dashboard Image */}
        <div className="mt-16">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            Platform Hero & Dashboard Overview
          </h3>
          <div className="rounded-3xl border border-white/10 bg-[#121212] overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <div className="w-full max-h-[520px] overflow-hidden bg-gray-900">
              <img 
                src={dashboardImage} 
                alt="vlog.me Platform Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[#121212]">
              <h4 className="text-lg font-semibold text-white">Centralized Creator Hub</h4>
              <p className="text-sm text-gray-400 mt-1">
                Aapki daily life, news updates, aur memories ka ek hi jagah par interactive aur clean presentation.
              </p>
            </div>
          </div>
        </div>

        {/* Problem Statement vs Solution Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-[#121212]/60 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
          
          {/* Traditional Challenges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              The Traditional Challenges
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Pehle content aur personal memories manage karne mein yeh samasyaein aati thi:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> 
                <span><strong>Scattered Media:</strong> Photos phone gallery mein, vlogs YouTube par alag, aur notes alag jagah hone se unhe ek sath track karna mushkil hota tha.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> 
                <span><strong>No Timeline Structure:</strong> Purani personal trips ya daily routines ko chronological order mein dekhne ka koi proper platform nahi tha.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> 
                <span><strong>Complex Publishing:</strong> Naye news updates ya DIY inventions ko share karne ke liye heavy blogging tools ki zarurat padti thi.</span>
              </li>
            </ul>
          </div>

          {/* Digital Solution & Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Our Web Platform Solution
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Is web app ne creator workflow ko bilkul aasan aur dynamic bana diya hai:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span> 
                <span><strong>All-in-One Hub:</strong> Daily vlogs, tech news, aur personal memories sab kuch ek hi clean feed par available hai.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span> 
                <span><strong>Memory Timeline:</strong> Purani yaadein aur travel diaries ko timeline view mein easily revisit kar sakte hain.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span> 
                <span><strong>Instant Publishing Modal:</strong> Quick form ke zariye naye vlogs ya invention details turant site par live ki ja sakti hain.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Screenshots Gallery with Explanations */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">Platform Modules & <span className="text-red-500">Screenshots</span></h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">Aapke project ki core functionalities ki visual presentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {screenshots.map((shot) => (
              <div key={shot.id} className="group bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-56 w-full overflow-hidden bg-gray-900 relative">
                    <img 
                      src={shot.url} 
                      alt={shot.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-white group-hover:text-red-400 transition-colors text-lg">{shot.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">{shot.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Call to Action */}
        <div className="mt-20 text-center border-t border-white/10 pt-12">
          <h3 className="text-xl font-bold mb-4">Explore More About This Project</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://github.com/mohitsankhyan81" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              View GitHub Repo ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project3;