import Nav from "../component/Nav";
import { Link } from "react-router-dom";

const Project2 = () => {
  // Correct Dashboard Image for top banner
  const dashboardImage = "https://lh3.googleusercontent.com/d/1TJTHwmY5wCx1hnxBUzZZGwQwtJ7hGOlp";

  // System Modules Screenshots with Descriptions
  const screenshots = [
    {
      id: 1,
      url: "https://lh3.googleusercontent.com/d/1uolA0syQNJ33S51SAC7Yr9L-ZO26vda1",
      title: "System Authentication & Login Portal",
      description: "Secure login system jahan students aur admin/staff apne respective credentials ke sath portal mein enter kar sakte hain, jisse unauthorized access ko roka jaye."
    },
    {
      id: 2,
      url: "https://lh3.googleusercontent.com/d/109Pqpeu0vZs29PlSR6OZ4at9XXFRG7Br",
      title: "Sports Inventory & Equipment Stock",
      description: "College ke saare sports items ki digital list. Admin aur students live dekh sakte hain ki konse equipments available hain, kitni quantity mein stock mein hain ya out of stock hain."
    },
    {
      id: 3,
      url: "https://lh3.googleusercontent.com/d/1aEpnlmF3c1eu26flOozVFLZntI4hIet4",
      title: "Athlete & Student Registration Portal",
      description: "College ke sports competitions aur tournaments ke liye students apni details, branch, aur selected sport ke sath register kar sakte hain, jisse manual physical forms ki zaroorat nahi rehti."
    },
    {
      id: 4,
      url: "https://lh3.googleusercontent.com/d/1eQby0nbFeXXZ0L0edGv_ypo70HQHTARI",
      title: "Equipment Issue & Return Management",
      description: "Is module ke dwara sports items ko digital log ke sath student ko issue aur return kiya jata hai. Admin asaani se track kar sakta hai ki kiske paas konsa item pending hai."
    },
    {
      id: 5,
      url: "https://lh3.googleusercontent.com/d/1C5yl82EJpM_IH9tj_Neey-cRfYSizeD9",
      title: "Admin Panel – Add & Remove Sports Items",
      description: "Admin ke paas poora access hota hai inventory mein naye equipment add karne ka, stock quantity edit karne ka, ya purane/damaged items ko list se remove karne ka."
    },
    {
      id: 6,
      url: "https://lh3.googleusercontent.com/d/1XHyZ_vO8IswWLA1wf_NcSLp1WPDzlvRJ",
      title: "Sports Analytics & Activity Reports",
      description: "Pehle manual registers par frequency analyse karna mushkil tha. Ab portal student participation aur equipment usage reports ka clear graphical aur tabular summary deta hai."
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Nav />
      
      {/* Main Container - Added pt-28 to clear fixed Navbar & fixed responsive padding */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-28 pb-16">
        
        {/* Back Link */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-red-500 hover:text-red-400 transition-colors">
            ← Back to Portfolio
          </Link>
        </div>

        {/* Header Section */}
        <div className="space-y-4">
          <span className="inline-block rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 uppercase tracking-widest">
            Software / Web Platform
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            University Sports <span className="text-red-500">Management System</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            A comprehensive digital web portal built to replace chaotic manual register entries in college sports departments with automated inventory tracking, seamless item issue/returns, athlete registrations, and real-time analytics.
          </p>

          {/* Action Links (Live Demo & GitHub) */}
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="https://sports-system.vercel.app/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              Live Demo ↗
            </a>
            <a 
              href="https://github.com/mohitsankhyan81/SPORTS_SYSTEM" 
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
            Main Sports System Dashboard Overview
          </h3>
          <div className="rounded-3xl border border-white/10 bg-[#121212] overflow-hidden shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <div className="w-full min-h-[250px] max-h-[520px] overflow-hidden bg-gray-900">
              <img 
                src={dashboardImage} 
                alt="Sports Management System Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 bg-[#121212]">
              <h4 className="text-lg font-semibold text-white">Interactive Management Dashboard</h4>
              <p className="text-sm text-gray-400 mt-1">
                Centralized dashboard jahan se active sports equipment, issues/returns status, total registrations, aur quick action controls accessible hain.
              </p>
            </div>
          </div>
        </div>

        {/* Problem Statement vs Solution Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 bg-[#121212]/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
          
          {/* Manual System Challenges */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-red-500 shrink-0"></span>
              The Manual System Challenges
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Pehle college sports department mein saara kaam physical registers par hota tha, jiske wajah se yeh samasyaein aati thi:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">✕</span> 
                <span><strong>Register-based Entries:</strong> Har single entry register par hoti thi, jisse records loose hone ya damaged hone ka darr rehta tha.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">✕</span> 
                <span><strong>Tracking Issues:</strong> Pata nahi chalta tha ki kitne equipment stock mein available hain, kis student ko issue hue hain aur kaunse pending hain.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">✕</span> 
                <span><strong>Hectic Analysis:</strong> Student participation record aur annual equipment requirements ka data nikallna bohot difficult aur time-consuming tha.</span>
              </li>
            </ul>
          </div>

          {/* Digital Solution & Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 shrink-0"></span>
              Our Automated Solution & Features
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Is portal ne pure sports department ke workflow ko dynamic aur digital bana diya hai:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span> 
                <span><strong>Admin Item Control:</strong> Admin aasani se naye sports items add kar sakta hai aur purane items ko remove ya update kar sakta hai.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span> 
                <span><strong>Equipment Issue & Return:</strong> Complete digital record maintain hota hai jab koi item student ko issue ya return kiya jata hai.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold shrink-0">✓</span> 
                <span><strong>Athlete Registrations & Reports:</strong> Tournaments ke liye direct student athlete registration aur continuous usage analytics.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Screenshots Gallery with Explanations */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold">System Modules & <span className="text-red-500">Screenshots</span></h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">Har ek module aur uske specific features ki detailed presentation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {screenshots.map((shot) => (
              <div key={shot.id} className="group bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:border-red-500/50 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-64 w-full overflow-hidden bg-gray-900 relative">
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
          <h3 className="text-xl font-bold mb-4">Explore the Live Application or Repository</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <a 
              href="https://sports-system.vercel.app/login" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(239,68,68,0.3)]"
            >
              Visit Live App ↗
            </a>
            <a 
              href="https://github.com/mohitsankhyan81/SPORTS_SYSTEM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#121212] border border-white/10 hover:border-red-500/50 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              View GitHub Repo ↗
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project2;