import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const linkClasses = (id) =>
    `block px-4 py-2 rounded ${
      active === id ? "text-yellow-300 font-semibold" : "text-white hover:text-gray-300"
    }`;

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-7xl 
        bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg rounded-full px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/MinorHunter.svg" alt="logo" className="h-10 w-10" />
          <span className="text-white text-xl font-bold">Minor Hunters</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" onClick={() => setActive("home")} className={linkClasses("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActive("contact")} className={linkClasses("contact")}>
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* Overlay (click outside to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-lg border-l border-white/30 shadow-xl transform transition-transform duration-300 z-50 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)} className="text-white text-2xl">
            ✖
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-6 font-medium">
          <li>
            <a
              href="#home"
              onClick={() => {
                setActive("home");
                setOpen(false);
              }}
              className={linkClasses("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setActive("contact");
                setOpen(false);
              }}
              className={linkClasses("contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
