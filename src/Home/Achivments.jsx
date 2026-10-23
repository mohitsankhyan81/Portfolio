export default function Achievements() {
  const achievementsList = [
    {
      id: 1,
      title: "College Level Hackathon Achievements",
      category: "College Level",
      description:
        "Achieved 1st Position in 'Build X' hackathon and 3rd Position in 'NexoraA' hackathon for high-impact software design.",
      // SIH Image moved to 1st
      image: "https://lh3.googleusercontent.com/d/1cS0mqopgDAAlVxiR0A9W1E9AKKOS0WJ_",
      badge: "1st in Build X & 3rd in NexoraA",
      fullImageLink: "https://drive.google.com/file/d/1cS0mqopgDAAlVxiR0A9W1E9AKKOS0WJ_/view?usp=drivesdk",
    },
    {
      id: 2,
      title: "National Winner in National Aimee Hackathon",
      category: "National Level",
      description:
        "Secured the 1st position nationwide in the National Aimee Hackathon for developing an innovative technology-driven solution.",
      // Middle Item Image remains same
      image: "https://lh3.googleusercontent.com/d/1VPHJlBGFPgX07u3zZZD75O55SB-jHO1n",
      badge: "National Winner (1st)",
      fullImageLink: "https://drive.google.com/file/d/1VPHJlBGFPgX07u3zZZD75O55SB-jHO1n/view?usp=drivesdk",
    },
    {
      id: 3,
      title: "Selected for National Smart India Hackathon (SIH)",
      category: "National Level",
      description:
        "Shortlisted for the prestigious Smart India Hackathon at the national level after winning the internal evaluation round.",
      // Build X Image moved to 3rd
      image: "https://lh3.googleusercontent.com/d/1UCHPdEOcovexptYR2AezpC4afeKob_EY",
      badge: "National Finalist",
      fullImageLink: "https://drive.google.com/file/d/1UCHPdEOcovexptYR2AezpC4afeKob_EY/view?usp=drivesdk",
    },
  ];

  return (
    <section id="achievements" className="relative bg-[#080808] px-6 py-24 text-white lg:px-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-red-500 text-sm">
            Milestones & Recognition
          </p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            My <span className="text-red-500">Achievements</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Recognition and awards earned through national hackathons, innovation challenges, and tech competitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsList.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-[#121212]/90 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
            >
              {/* Image Container with Click-to-Open functionality */}
              {item.fullImageLink ? (
                <a 
                  href={item.fullImageLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="relative h-56 w-full overflow-hidden bg-gray-900 block cursor-pointer"
                  title="Click to view full photo"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>

                  {/* Badge Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-red-500/40 bg-red-600/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </a>
              ) : (
                <div className="relative h-56 w-full overflow-hidden bg-gray-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80"></div>

                  {/* Badge Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full border border-red-500/40 bg-red-600/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md shadow-md">
                      {item.badge}
                    </span>
                  </div>
                </div>
              )}

              {/* Text Details */}
              <div className="flex flex-col flex-grow p-6 sm:p-8">
                <span className="text-xs font-semibold text-red-500 tracking-widest uppercase">
                  {item.category}
                </span>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}