import { useState, useRef, useEffect } from "react";

const links = [
  ["Home", "/"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Achievements", "#achievements"],
  ["Contact", "#contact"],
];

// Document IDs extracted from your Google Docs links
const FS_DOC_ID = "1JUPFNEsBV2y1x-nAs6IYHzd0Izd4fJbi";
const SM_DOC_ID = "1HXJwPErklaV6PMyKQudIlkGmg1h9ccAV";

const resumeOptions = [
  {
    role: "Full Stack Developer",
    badge: "Tech / Web",
    pdfUrl: `https://docs.google.com/document/d/${FS_DOC_ID}/export?format=pdf`,
    docsUrl: `https://docs.google.com/document/d/${FS_DOC_ID}/export?format=docx`,
    viewUrl: `https://docs.google.com/document/d/${FS_DOC_ID}/edit?usp=sharing`,
  },
  {
    role: "Social Media Executive",
    badge: "Marketing / Growth",
    pdfUrl: `https://docs.google.com/document/d/${SM_DOC_ID}/export?format=pdf`,
    docsUrl: `https://docs.google.com/document/d/${SM_DOC_ID}/export?format=docx`,
    viewUrl: `https://docs.google.com/document/d/${SM_DOC_ID}/edit?usp=sharing`,
  },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const modalRef = useRef(null);

  // Close modal when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowResumeModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed top-3 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-2xl md:rounded-full border border-white/15 bg-[#121212]/80 px-4 py-3 backdrop-blur-xl shadow-2xl transition-all duration-300">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="/" className="text-xl font-bold tracking-tight text-white pl-2">
            Mohit<span className="text-red-500">.</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xl text-white md:hidden hover:bg-white/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "✕" : "☰"}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-200 transition-all duration-300 hover:bg-white/20 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                {name}
              </a>
            ))}

            {/* Resume Button with Modal Trigger */}
            <button
              onClick={() => setShowResumeModal(!showResumeModal)}
              className="ml-2 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.6)] cursor-pointer flex items-center gap-1"
            >
              Resume 📄
            </button>
          </div>
        </div>

        {/* Clean Mobile Menu Dropdown */}
        {open && (
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-base font-medium text-gray-200 hover:bg-white/10 hover:text-white transition-all flex items-center justify-between"
              >
                <span>{name}</span>
                <span className="text-xs text-gray-500">→</span>
              </a>
            ))}

            <button
              onClick={() => {
                setOpen(false);
                setShowResumeModal(true);
              }}
              className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:bg-red-500 w-full flex items-center justify-center gap-2"
            >
              <span>Download Resume Options</span> 📄
            </button>
          </div>
        )}
      </nav>

      {/* Resume Download Popup / Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div
            ref={modalRef}
            className="w-full max-w-lg rounded-3xl border border-white/20 bg-[#121212] p-6 shadow-2xl text-white relative animate-in fade-in zoom-in duration-200"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowResumeModal(false)}
              className="absolute top-4 right-4 rounded-full bg-white/10 p-2 text-gray-400 hover:bg-white/20 hover:text-white transition-all"
            >
              ✕
            </button>

            {/* Header */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Download Resume
              </h3>
              <p className="text-xs text-gray-400 mt-1">
                Select profile type and download in your preferred format (PDF, DOCX, or View Docs).
              </p>
            </div>

            {/* Resume Options List */}
            <div className="space-y-4">
              {resumeOptions.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-[#181818] p-4 transition-all hover:border-red-500/40"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-sm text-white">{item.role}</h4>
                      <span className="text-[10px] text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full border border-red-500/20 inline-block mt-1">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Format Download Buttons */}
                  <div className="grid grid-cols-3 gap-2">
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs py-2 px-2 text-center font-medium transition-all shadow-sm flex items-center justify-center gap-1"
                    >
                      <span>📥</span> PDF
                    </a>

                    <a
                      href={item.docsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs py-2 px-2 text-center font-medium transition-all shadow-sm flex items-center justify-center gap-1"
                    >
                      <span>📝</span> DOCX
                    </a>

                    <a
                      href={item.viewUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-neutral-800 hover:bg-neutral-700 text-gray-200 border border-white/10 text-xs py-2 px-2 text-center font-medium transition-all flex items-center justify-center gap-1"
                    >
                      <span>🔗</span> View
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer note */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowResumeModal(false)}
                className="text-xs text-gray-500 hover:text-gray-300 underline"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}