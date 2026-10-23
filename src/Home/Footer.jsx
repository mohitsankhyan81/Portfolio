export default function Footer() {
  return (
    <footer id="contact" className="relative bg-[#080808] text-white border-t border-white/10 pt-16 pb-12 px-6 lg:px-16 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-red-600/10 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
        
        {/* Column 1: Brand & Status */}
        <div className="flex flex-col gap-4">
          <a href="#home" className="text-2xl font-bold tracking-tight text-white">
            Mohit<span className="text-red-500">.</span>
          </a>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            Passionate Software Developer and Creator building scalable web apps, high-performance systems, and engaging digital experiences.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-3.5 py-1 w-fit mt-1">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-xs text-green-400 font-medium">Available for Opportunities</span>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold tracking-wide text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
            <li>
              <a href="#home" className="transition hover:text-red-500">Home</a>
            </li>
            <li>
              <a href="#skills" className="transition hover:text-red-500">Tech Stack & Tools</a>
            </li>
            <li>
              <a href="#projects" className="transition hover:text-red-500">Projects</a>
            </li>
            <li>
              <a href="#achievements" className="transition hover:text-red-500">Achievements</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Us */}
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold tracking-wide text-white">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            Let's connect to discuss software roles, collaborations, or tech projects.
          </p>
          <div className="flex flex-col gap-2.5 text-sm text-gray-300">
            {/* Email Link */}
            <a href="mailto:mohit6031.bca24@chitkarauniversity.edu.in" className="hover:text-red-500 transition flex items-center gap-2">
              <span>📧</span> <span className="text-gray-400">mohit6031.bca24@chitkarauniversity.edu.in</span>
            </a>

            {/* WhatsApp Direct Chat Link */}
            <a href="https://wa.me/917018224306" target="_blank" rel="noreferrer" className="hover:text-red-500 transition flex items-center gap-2">
              <span>💬</span> <span className="text-gray-400">+91 7018224306 (WhatsApp)</span>
            </a>

            {/* LinkedIn Profile */}
            <a href="https://www.linkedin.com/in/tech-mohit/" target="_blank" rel="noreferrer" className="hover:text-red-500 transition flex items-center gap-2">
              <span>💼</span> <span className="text-gray-400">LinkedIn Profile</span>
            </a>

            {/* GitHub Repositories */}
            <a href="https://github.com/mohitsankhyan81" target="_blank" rel="noreferrer" className="hover:text-red-500 transition flex items-center gap-2">
              <span>💻</span> <span className="text-gray-400">GitHub Repositories</span>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-xs text-gray-500 relative z-10">
        <p>© {new Date().getFullYear()} Mohit Sankhyan. All rights reserved. Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}