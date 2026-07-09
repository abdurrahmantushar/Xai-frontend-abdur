import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
  {
    name: "Features",
    id: "features",
  },
  {
    name: "Dashboard",
    id: "dashboard",
  },
  {
    name: "About",
    id: "about",
  },
  ];
  const scrollToSection = (id) =>{
    document.getElementById(id)?.scrollIntoView({
      behavior:'smooth'
    })
  }
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <h1 
        onClick={() => scrollToSection('home')}
        className="text-3xl font-bold tracking-wide cursor-pointer bg-gradient-to-r
         from-violet-400 to-cyan-400 bg-clip-text 
         text-transparent hover:scale-105 transition-transform duration-300">
          XAI
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-gray-300">
          {navLinks.map((item) => (
            <li
              onClick={() => scrollToSection(item.id)}
              key={item.id}
              className="relative cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 
             after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Desktop Button  er jnne */}
        <button className="hidden md:block px-6 py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium 
                hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,.45)] transition-all duration-300">
          Get Started
        </button>

        {/* Mobile Menu Button er jnne */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl"
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
      {open && (
        <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}

        className="md:hidden bg-[#0B1020] border-t border-white/10 overflow-hidden">
          <ul className="flex flex-col p-6 gap-5 text-gray-300">
            {navLinks.map((item) => (
              <li
                key={item.id}
                onClick={() => {scrollToSection(item.id);
                  setOpen(false)
                }}
                className="hover:text-white cursor-pointer transition"
              >
                {item.name}
              </li>
            ))}

            <button className="mt-2 w-full py-3 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white">
              Get Started
            </button>
          </ul>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

