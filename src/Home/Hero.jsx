import { useState, useEffect } from "react";
import Nav from "../component/Nav";

const profiles = [
  {
    id: "software-dev",
    tagline: "Software Developer",
    title: "Software",
    highlight: "Developer",
    image: "https://lh3.googleusercontent.com/rd-d/ALs6j_FltE3aHHjuQH0NNLv3581pdVPU6Y9AfOCJxxppdNl-NC6uzbUobDW7WDb9lTYafQ1qEzB-a5CwiMPQIPqK2sgCFUUm-PnN3CJezGlHWKWmAqLA8Me5_IrhpZbVYdm--RIWyV0qXovOGn_5N9bZJfzYu7gKH5novMsCuGZkmOnOHLz98Eo2eVa0p7j2EZBWVJ7nPNhLcfj6nSp43Ux52qrW4KA_hmxr49fKKicZmKFtiN-Ltqn2UT7Iqi3GYFSZWgb7TgkZFBXMkiJ0y_ycJjSLHyKTLViq9ciDbv2XX8rv5rEzent-qxpu4CV9UxTjr-TOb26nK_88Y81h-3nx_d9sIECYbC1c5bvhf0jsVB6bLZSSbUWtQLemyPKiNyxPdM6vW1yZjVr0ivmd-KSFFP_tl_XX4wyPEHKmkZ8-XIiLZUDoYIetMhPZmBX6lu9jmIFRGETIugd5M-09kQv2gw1WGL14JKs57GcofLXfV1upPfq6k9sEohFsRl-Nfp7aw_hz6zDKKGZkCLW50sblBFduwdj_lwPG81RFWbQjLV0UlAshFWcNNyb8ocZ0XgfEbL7FG6quOSmzI2PSQgflFt6sDdeR3LfTnnEQWr6Th9sc7eDvbS-Mesr7wWONbcjtCsZfxAhk9lUkLUOnFomxdUCAfUiIRyvKGi8CGF2_vO4PmPEiR_OvhhhrDrAhfLWGy7uh-8ulA4fBAylViJf0uVgU6s99JGyehpeHOmG9D1_8iXBtfXw5Urq0k-U6g9qmIHLjl5mLiwO4rj81szA9_eDUKIebIHsVakHgsulBSKs-pqrG5LEy6dKiGPlyPEo2Oagd7sIQdoatxLhTpGvrdBKRicjRKa_gCfgXuC9N9lVQSzhFcuRvCLQuk-XXYBjUgIvYTvo2qQsB_X2Rod8uHDTxSWBEL6p_GQdcVYHSjNvdetGlhtYK0AdtHNRV1C1Fm0yxTGXQwMYD2PD189rnWvFcTS_zc-_ku-KkuYMo9desLIAbaJHQ4i_XLrImeEripyEiWOWLeWZQIkgLRj7lvN47xbxtJj2K11oIFieZOi0BRnaUbjgdD-4Xx3v3WTXQlphLD5R6QujCvN6iNPvuP_IG13d4BA01JQM3pASTabAVD1LjWs_CT2cJ8qOEVlvZ3HfhJ4VkCMfUOiFLDGtHQJh-JEIodC8tzpJ8d2YT0y3kVEkwt-4n2STCHb3JVCleL6t6t3H9mbYuTB86J-NvfD6miLLAl_nOHdZjThcOjguQt78=s1600",
    description:
      "I build scalable software solutions, Dockerized architectures, and high-performance web applications using modern tech stacks.",
    skills: [
      "Software Engineering",
      "Docker",
      "DSA",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "media-exec",
    tagline: "Digital Creator & Marketer",
    title: "Social Media",
    highlight: "Executive & Video Editor",
    image: "https://lh3.googleusercontent.com/rd-d/ALs6j_FltE3aHHjuQH0NNLv3581pdVPU6Y9AfOCJxxppdNl-NC6uzbUobDW7WDb9lTYafQ1qEzB-a5CwiMPQIPqK2sgCFUUm-PnN3CJezGlHWKWmAqLA8Me5_IrhpZbVYdm--RIWyV0qXovOGn_5N9bZJfzYu7gKH5novMsCuGZkmOnOHLz98Eo2eVa0p7j2EZBWVJ7nPNhLcfj6nSp43Ux52qrW4KA_hmxr49fKKicZmKFtiN-Ltqn2UT7Iqi3GYFSZWgb7TgkZFBXMkiJ0y_ycJjSLHyKTLViq9ciDbv2XX8rv5rEzent-qxpu4CV9UxTjr-TOb26nK_88Y81h-3nx_d9sIECYbC1c5bvhf0jsVB6bLZSSbUWtQLemyPKiNyxPdM6vW1yZjVr0ivmd-KSFFP_tl_XX4wyPEHKmkZ8-XIiLZUDoYIetMhPZmBX6lu9jmIFRGETIugd5M-09kQv2gw1WGL14JKs57GcofLXfV1upPfq6k9sEohFsRl-Nfp7aw_hz6zDKKGZkCLW50sblBFduwdj_lwPG81RFWbQjLV0UlAshFWcNNyb8ocZ0XgfEbL7FG6quOSmzI2PSQgflFt6sDdeR3LfTnnEQWr6Th9sc7eDvbS-Mesr7wWONbcjtCsZfxAhk9lUkLUOnFomxdUCAfUiIRyvKGi8CGF2_vO4PmPEiR_OvhhhrDrAhfLWGy7uh-8ulA4fBAylViJf0uVgU6s99JGyehpeHOmG9D1_8iXBtfXw5Urq0k-U6g9qmIHLjl5mLiwO4rj81szA9_eDUKIebIHsVakHgsulBSKs-pqrG5LEy6dKiGPlyPEo2Oagd7sIQdoatxLhTpGvrdBKRicjRKa_gCfgXuC9N9lVQSzhFcuRvCLQuk-XXYBjUgIvYTvo2qQsB_X2Rod8uHDTxSWBEL6p_GQdcVYHSjNvdetGlhtYK0AdtHNRV1C1Fm0yxTGXQwMYD2PD189rnWvFcTS_zc-_ku-KkuYMo9desLIAbaJHQ4i_XLrImeEripyEiWOWLeWZQIkgLRj7lvN47xbxtJj2K11oIFieZOi0BRnaUbjgdD-4Xx3v3WTXQlphLD5R6QujCvN6iNPvuP_IG13d4BA01JQM3pASTabAVD1LjWs_CT2cJ8qOEVlvZ3HfhJ4VkCMfUOiFLDGtHQJh-JEIodC8tzpJ8d2YT0y3kVEkwt-4n2STCHb3JVCleL6t6t3H9mbYuTB86J-NvfD6miLLAl_nOHdZjThcOjguQt78=s1600",
    description:
      "I craft engaging video content, execute strategic B2B & Meta ad campaigns, and boost brand engagement through advanced editing and data analytics.",
    skills: [
      "DaVinci Resolve",
      "Adobe Premiere Pro",
      "Adobe Photoshop",
      "Canva",
      "Meta Ads",
      "YouTube Studio",
      "B2B Marketing",
      "Content Strategy",
    ],
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % profiles.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);

  const currentProfile = profiles[currentIndex];

  return (
    <div className="relative min-h-screen w-full bg-[#080808] text-white flex flex-col justify-between overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-red-600/15 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-red-900/10 blur-[140px] pointer-events-none" />

      {/* Nav Component */}
      <Nav />

      {/* Main Container */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-6 pt-28 pb-12 lg:px-16 max-w-7xl mx-auto w-full">
        <div className="grid w-full items-center gap-12 md:grid-cols-2 lg:gap-16">

          {/* Profile Photo Area */}
          <div className="flex flex-col items-center md:items-start justify-center gap-4">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-red-600 via-rose-500 to-red-800 opacity-40 blur-xl transition duration-500 group-hover:opacity-80 group-hover:blur-2xl" />

              <div className="relative rounded-3xl border border-red-500/30 bg-[#121212]/90 p-2.5 backdrop-blur-sm">
                <img
                  key={currentProfile.id}
                  src={currentProfile.image}
                  alt="Mohit Sankhyan"
                  className="h-72 w-72 rounded-2xl object-cover sm:h-96 sm:w-96 transition-all duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-2">
              {profiles.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-red-500"
                      : "w-2.5 bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Switch profile ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Content Details */}
          <div key={currentProfile.id} className="flex flex-col justify-center transition-all duration-500">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1.5 w-fit">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
              <p className="font-medium text-xs tracking-wider uppercase text-red-400">
                {currentProfile.tagline}
              </p>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
              {currentProfile.title} <br />
              <span className="bg-gradient-to-r from-red-500 via-rose-500 to-red-400 bg-clip-text text-transparent">
                {currentProfile.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg min-h-[4.5rem]">
              {currentProfile.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5 min-h-[4rem]">
              {currentProfile.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-md transition-all duration-300 hover:border-red-500/50 hover:bg-red-500/10 hover:text-white hover:shadow-[0_0_12px_rgba(239,68,68,0.2)]"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/tech-mohit/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-red-500 hover:shadow-red-600/40 hover:-translate-y-0.5"
              >
                Let's Connect ↗
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}