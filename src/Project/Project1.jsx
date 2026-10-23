import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../component/Nav';

const Project1 = () => {
  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-red-500 selection:text-white">
      {/* Navigation */}
      <Nav />

      {/* Main Container */}
      <main className="px-6 pt-32 pb-24 lg:px-16 max-w-6xl mx-auto">
        
        {/* Back Link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-400 transition-colors mb-8"
        >
          ← Back to Portfolio
        </Link>

        {/* Project Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
              Software Application • Featured Project
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Workify – <span className="text-red-500">Job Finder for Students</span>
          </h1>

          <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
            A specialized platform built to bridge the gap between freshers/students and relevant career opportunities based on exact skill sets and individual interests.
          </p>
        </div>

        {/* Main Banner Image */}
        <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-[#121212] shadow-2xl">
          <img
            src="https://lh3.googleusercontent.com/d/1t8jEZpKFyhzSKBmXK5RhjkVonU9WRS_B"
            alt="Workify Main Banner"
            className="w-full h-auto max-h-[500px] object-cover object-top"
          />
        </div>

        {/* Grid Section: Problem & Solution */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Problem Statement Card */}
          <div className="rounded-3xl border border-red-500/20 bg-[#121212]/80 p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">The Challenge</span>
              <h3 className="text-2xl font-bold mt-2 text-white">Problem Statement</h3>
              <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                Freshers and university students often struggle to land meaningful jobs or internships because traditional job portals are cluttered with experience-heavy roles. Students lack a centralized platform that filters opportunities precisely by their unique <strong>skills, academic interests, and flexibility needs</strong> (Full-time, Part-time, or Remote).
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex gap-2 text-xs text-gray-400">
              <span>⚠️ High Noise on Portals</span> • <span>🚫 Lack of Skill Matching</span>
            </div>
          </div>

          {/* Solution Platform Card */}
          <div className="rounded-3xl border border-white/10 bg-[#121212]/80 p-8 backdrop-blur-md flex flex-col justify-between">
            <div>
              <span className="text-red-500 text-xs font-bold uppercase tracking-widest">The Solution</span>
              <h3 className="text-2xl font-bold mt-2 text-white">How Workify Helps</h3>
              <p className="mt-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <strong>Workify</strong> acts as a dedicated ecosystem for students. It filters and recommends verified job listings matching their tech stacks and domain preferences. Whether looking for remote gig work, part-time shifts alongside studies, or full-time fresher roles post-graduation, Workify streamlines the entire discovery and application process.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex gap-2 text-xs text-red-400 font-medium">
              <span>✓ Tailored Recommendations</span> • <span>✓ Verified Listings</span>
            </div>
          </div>

        </div>

        {/* Application Screenshots & Details Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-red-500 text-xs font-bold uppercase tracking-widest">Visual Walkthrough</span>
            <h2 className="text-3xl font-extrabold mt-2 text-white">Platform Interface & Features</h2>
            <p className="text-gray-400 mt-2 text-sm sm:text-base">A closer look at how students interact with the Workify platform.</p>
          </div>

          <div className="space-y-16">
            
            {/* Screenshot 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#121212]/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                <img 
                  src="https://lh3.googleusercontent.com/d/1o8twBexID3CKvGqAv-pFtgFbZIdDHupM" 
                  alt="Student Dashboard" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Module 01</span>
                <h3 className="text-2xl font-bold text-white">Student Dashboard & Feed</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  The primary hub where students land after logging in. It features personalized job recommendations sorted dynamically according to the user's updated skill set, past project domains, and internship preferences.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs">Live Feed</span>
                  <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs">Quick Apply</span>
                </div>
              </div>
            </div>

            {/* Screenshot 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#121212]/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md lg:flex-row-reverse">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900 lg:order-2">
                <img 
                  src="https://lh3.googleusercontent.com/d/19Vdt3McQysLtgLfu-UX6NA_gokVW6BRf" 
                  alt="Job Filtering & Search" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4 lg:order-1">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Module 02</span>
                <h3 className="text-2xl font-bold text-white">Advanced Search & Filtering</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Students can narrow down opportunities based on work type (Remote, Full-Time, Part-Time, or Internships). This ensures students can seamlessly balance academic timetables with professional experience.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs">Remote / On-site</span>
                  <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs">Flexible Hours</span>
                </div>
              </div>
            </div>

            {/* Screenshot 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#121212]/60 border border-white/10 rounded-3xl p-6 sm:p-8 backdrop-blur-md">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900">
                <img 
                  src="https://lh3.googleusercontent.com/d/1c17yUDD4y9RIKQ-b4ZbvAcjAKyvasgLz" 
                  alt="Application Tracking" 
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Module 03</span>
                <h3 className="text-2xl font-bold text-white">Application Tracking & Profile</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  A centralized tracking panel that lets students monitor the status of their submitted applications (Applied, Shortlisted, Interview Scheduled, or Hired) along with profile portfolio management.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs">Status Tracker</span>
                  <span className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1 rounded-full text-xs">Skill Badges</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16">
          <h2 className="text-xl font-bold text-white mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm font-medium text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons (Under Maintenance for Repo) */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap gap-4 items-center">
          <div className="inline-flex items-center gap-2 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-7 py-3.5 font-semibold text-yellow-400 cursor-not-allowed">
            🔒 Under Maintenance
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-gray-300 transition-all duration-300 hover:bg-white/10 hover:text-white"
          >
            Back to Home
          </Link>
        </div>

      </main>
    </div>
  );
};

export default Project1;