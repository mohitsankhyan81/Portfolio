import { useState } from "react";

const techCategories = [
  {
    id: "software",
    title: "Software Engineering",
    items: [
      { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
      { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
      { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
      { name: "HTML5", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
      { name: "Tailwind CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    id: "media",
    title: "Social Media & Marketing",
    items: [
      { name: "Premiere Pro", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/premierepro/premierepro-original.svg" },
      { name: "Photoshop", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-original.svg" },
      { name: "DaVinci Resolve", icon: "https://cdn.simpleicons.org/davinciresolve/FFFFFF" },
      { name: "Canva", icon: "https://cdn.simpleicons.org/canva/00C4CC" },
      { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta/0467DF" },
      { name: "Search Console", icon: "https://cdn.simpleicons.org/google/4285F4" },
      { name: "YouTube Studio", icon: "https://cdn.simpleicons.org/youtube/FF0000" },
      { name: "Instagram", icon: "https://cdn.simpleicons.org/instagram/E4405F" },
      { name: "Facebook", icon: "https://cdn.simpleicons.org/facebook/1877F2" },
      { name: "LinkedIn", icon: "https://cdn.simpleicons.org/linkedin/0A66C2" },
      { name: "SEMrush", icon: "https://cdn.simpleicons.org/semrush/FF642D" },
    ],
  },
  {
    id: "ai",
    title: "AI Tools & Workflows",
    items: [
      { name: "ChatGPT", icon: "https://cdn.simpleicons.org/openai/10A37F" },
      { name: "Grok", icon: "https://cdn.simpleicons.org/x/FFFFFF" },
      { name: "DeepSeek", icon: "https://cdn.simpleicons.org/deepseek/4D6BFE" },
      { name: "Google Gemini", icon: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
      { name: "Claude AI", icon: "https://cdn.simpleicons.org/anthropic/D97757" },
      { name: "Midjourney", icon: "https://cdn.simpleicons.org/midjourney/FFFFFF" },
      { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/FFFFFF" },
    ],
  },
];

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("software");

  const currentCategory = techCategories.find((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative bg-[#080808] px-6 py-20 text-white lg:px-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-red-500 text-sm">
            My Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Tools & <span className="text-red-500">Technologies</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Technologies, software suites, and AI models that I use to design, build, and scale products.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {techCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-red-600 text-white shadow-lg shadow-red-600/40"
                  : "border border-white/10 bg-white/5 text-gray-400 hover:border-red-500/40 hover:text-white"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {currentCategory.items.map((tech) => (
            <div
              key={tech.name}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#121212] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/50 hover:bg-[#181818] hover:shadow-[0_0_25px_rgba(239,68,68,0.25)]"
            >
              <div className="h-14 w-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="h-10 w-10 object-contain filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
                  onError={(e) => {
                    // Smart Fallback
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML = `<span class="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600/20 text-red-500 font-bold text-sm border border-red-500/30">${tech.name.charAt(0)}</span>`;
                  }}
                />
              </div>
              <span className="mt-3 text-xs font-semibold text-gray-300 group-hover:text-white text-center tracking-wide">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}