import { Link } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    title: "Workify – Job Finder for Students",
    category: "software",
    description:
      "A platform designed to help students find relevant jobs and internships based on their specific skills, interests, and career goals.",
    image:
      "https://lh3.googleusercontent.com/d/1t8jEZpKFyhzSKBmXK5RhjkVonU9WRS_B",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/",
    linkText: "View Project ↗",
  },
  {
    id: 2,
    title: "University Sports Management System",
    category: "software",
    description: "A comprehensive web portal for universities to manage sports events, athlete registrations, equipment allocation, and tournament schedules.",
    image:
      "https://lh3.googleusercontent.com/d/1TJTHwmY5wCx1hnxBUzZZGwQwtJ7hGOlp",
    tags: ["React", "Node.js", "MySQL", "Tailwind CSS"],
    link: "https://github.com/",
    linkText: "View Project ↗",
  },
  {
    id: 3,
    title: "Daily Vlog & Content Platform",
    category: "software",
    description:
      "A modern blogging/vlogging platform tailored for daily content creators to upload, manage, and showcase their daily life stories and video logs.",
    image:
      "https://lh3.googleusercontent.com/d/1th0hP0yU1fcIzqlb59YqF87IZweQ7xS4",
    tags: ["React", "Express", "MongoDB", "JavaScript"],
    link: "https://github.com/",
    linkText: "View Project ↗",
  },
  {
    id: 4,
    title: "Rear Car Communication System",
    category: "software",
    description:
      "An innovative vehicle communication system allowing drivers to display messages and communicate with trailing/rear vehicles for enhanced road safety.",
    image:
      "https://lh3.googleusercontent.com/d/1vKhmWZgSEURoCw8mr52nEa7u17JCW6ho",
    tags: ["IoT / Software", "Embedded Logic", "React", "C++ / JS"],
    link: "https://github.com/",
    linkText: "View Project ↗",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#080808] px-6 py-24 text-white lg:px-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-red-500 text-sm">
            Portfolio Showcase
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Real-world software applications, web platforms, and innovative solutions I have developed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <Link
              to={`/projects/project${project.id}`} 
              key={project.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#121212]/90 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-60 w-full overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>
              </div>

              {/* Project Content */}
              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button Text */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-red-500 transition-colors group-hover:text-red-400">
                    {project.linkText}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* YouTube Creator / Social Media Section */}
        <div className="mt-28 pt-16 border-t border-white/10">
          <div className="text-center mb-12">
            <span className="inline-block rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 uppercase tracking-widest mb-3">
              Content Creation & Mentorship
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Build Future <span className="text-red-500">YouTube Channel</span>
            </h2>
            <p className="mt-3 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Sharing technical education, JavaScript tutorials, and programming knowledge with aspiring developers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center bg-[#121212]/70 border border-white/10 rounded-3xl p-8 backdrop-blur-md">
            
            {/* Channel Info Card */}
          {/* Channel Info Card */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-red-600 flex items-center justify-center shadow-[0_0_20px_rgba(239,68,68,0.4)]">
                <img 
                  src="/Build.jpg" 
                  alt="Build Future" 
                  className="w-full h-full object-cover scale-125"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Build Future</h3>
                <p className="text-xs text-red-400 font-medium">@build_future34</p>
              </div>
            </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                AI, Tech, Education, Career & Growth. Watch tutorials designed to build strong programming fundamentals from scratch.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.youtube.com/@build_future34"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                >
                  Visit Channel ↗
                </a>
              </div>
            </div>

            {/* Embedded Latest Video Showcase */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="relative w-full pb-[56.25%] h-0 rounded-2xl overflow-hidden bg-black border border-white/10 shadow-lg">
                <iframe
                  src="https://www.youtube.com/embed/9UFCrY0sBOU"
                  title="JavaScript Tutorial for Beginners in Hindi | Episode 1"
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-1">
                <div>
                  <h4 className="font-bold text-white text-base">JavaScript Tutorial for Beginners in Hindi | Episode 1: Hello World & Introduction</h4>
                  <p className="text-xs text-gray-400 mt-0.5">Build Future • Fresh Upload</p>
                </div>
                <a
                  href="https://youtu.be/9UFCrY0sBOU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-red-400 hover:text-red-300 transition-colors shrink-0"
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}