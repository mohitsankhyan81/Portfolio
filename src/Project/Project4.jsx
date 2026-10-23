import Nav from "../component/Nav";
import { Link } from "react-router-dom";

const Project4 = () => {
  // Main Hardware Image from Google Drive
  const hardwareImage = "https://lh3.googleusercontent.com/d/1vKhmWZgSEURoCw8mr52nEa7u17JCW6ho";

  // Google Drive Embedded Video Player URL
  const videoEmbedUrl = "https://drive.google.com/file/d/1J7KLmR0N_3Yu7WOvR_vEiSeVOZqqtY54/preview";

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
          <span className="inline-block rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 uppercase tracking-widest">
            Hardware & Embedded IoT Safety System
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Rear Car <span className="text-red-500">Communicator</span> — Vehicle-to-Vehicle Safety Device
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed">
            An innovative hardware safety system mounted on the rear windshield to eliminate communication gaps between drivers. Features voice-activated display controls, GPS tracking, and upcoming AI computer vision detection.
          </p>
        </div>

        {/* Top Featured Main Hardware Image */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            Hardware Module Overview
          </h3>
          <div className="rounded-3xl border border-white/10 bg-[#121212] overflow-hidden p-4 sm:p-8 shadow-[0_0_40px_rgba(239,68,68,0.15)] flex flex-col items-center">
            {/* Image Box with object-contain to avoid pixelation/zoom */}
            <div className="w-full max-h-[420px] flex justify-center items-center bg-[#0a0a0a] rounded-2xl p-4 overflow-hidden">
              <img 
                src={hardwareImage} 
                alt="Rear Car Communicator Device Setup" 
                className="max-h-[380px] w-auto object-contain rounded-lg"
              />
            </div>
            <div className="w-full mt-6 text-left">
              <h4 className="text-lg font-semibold text-white">Rear Window Display Unit</h4>
              <p className="text-sm text-gray-400 mt-1">
                Display module clear visibility ke sath tailing drivers tak real-time instructions pahunchata hai.
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
              The Road Communication Problem
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Roads par real-time communication na hone se seconds me fatal accidents hote hain:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> 
                <span><strong>No Direct Rear Signals:</strong> Driving ke waqt piche wali gadi ko clear message dena (Pass Left/Right, Wait, Help) lagbhag asambhav hota hai.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> 
                <span><strong>High Collision Risk:</strong> Horns ya hand gestures ka galat matlab nikalne par fractions of a second me road accidents ho jate hain.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> 
                <span><strong>Manual Distraction:</strong> Manual switches chalate waqt driver ka focus road se hat jata hai.</span>
              </li>
            </ul>
          </div>

          {/* Hardware Solution & Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              Smart Communicator Solution
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Yeh hardware project vehicle-to-vehicle safety ko transform karta hai:
            </p>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span> 
                <span><strong>Instant Signal Presets:</strong> "Pass from Left", "Pass from Right", "Wait", aur "Help" jaise visual signals display karna.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span> 
                <span><strong>Hands-Free Voice Control:</strong> Voice commands se signals trigger hote hain jisse driver ka dhyan hamesha road par bana rahe.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 font-bold">✓</span> 
                <span><strong>GPS & Upcoming AI Detection:</strong> Integrated GPS tracking ke sath real-time AI computer vision detection integrate ki ja rahi hai.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Video Demonstration Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold">Project <span className="text-red-500">Video Demonstration</span></h2>
            <p className="text-gray-400 text-sm sm:text-base mt-2">Working demonstration video showcasing hardware execution and controls.</p>
          </div>

          {/* Embedded Video Player */}
          <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#121212] overflow-hidden p-4 sm:p-6 shadow-[0_0_40px_rgba(239,68,68,0.15)]">
            <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden bg-black">
              <iframe 
                src={videoEmbedUrl} 
                className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
                allow="autoplay"
                title="Rear Car Communicator Video Demo"
              ></iframe>
            </div>
            <div className="mt-4 p-2 text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">Working Video Prototype</h4>
              <p className="text-sm text-gray-400 mt-1">
                Watch how the Rear Communicator interprets voice triggers and displays safety messages in real-time.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Project4;