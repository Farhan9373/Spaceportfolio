import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // Import icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-5 md:px-10">
      <div className="w-full h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#about-me" className="flex items-center">
          <img src="/NavLogo.png" alt="logo" width={50} height={50} className="cursor-pointer hover:animate-slowspin transition-all duration-300" />
          <span className="font-bold ml-2 hidden md:block text-gray-300">Farhan Ahmad</span>
        </a>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 border m-8 p-6 border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full text-gray-200">
          <a href="#about-me" className="cursor-pointer hover:bg-slate-300 hover:text-black transition-all p-2 rounded-md">About me</a>
          <a href="#skills" className="cursor-pointer hover:bg-slate-300 hover:text-black transition-all p-2 rounded-md">Skills</a>
          <a href="#projects" className="cursor-pointer hover:bg-slate-300 hover:text-black transition-all p-2 rounded-md">Projects</a>
        </div>
        <div className=" hidden md:flex gap-5">
          <a href="https://www.linkedin.com/in/farhan-ahmad-45800a288/">
            <img src="/linkedin 3.png" className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="mailto:farhanahmadptn@gmail.com">
            <img src="/mail.png" className="w-7 h-7 cursor-pointer" />
          </a>
          <a href="https://github.com/Farhan9373">
            <img src="/githubblue.png" className="w-7 h-7 cursor-pointer" />
          </a>
        </div>
        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-[65px] left-0 w-full bg-black opacity-60 md:hidden flex flex-col items-center space-y-4 py-4 font-medium">
            <a href="#about-me" className="text-gray-200  hover:bg-slate-300 hover:text-black transition-all p-2 rounded-md" onClick={() => setIsOpen(false)}>About me</a>
            <a href="#skills" className="text-gray-200 hover:bg-slate-300 hover:text-black transition-all p-2 rounded-md" onClick={() => setIsOpen(false)}>Skills</a>
            <a href="#projects" className="text-gray-200 hover:bg-slate-300 hover:text-black transition-all p-2 rounded-md" onClick={() => setIsOpen(false)}>Projects</a>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/farhan-ahmad-45800a288/">
            <img src="/linkedin 3.png" className="w-6 h-6 cursor-pointer" />
          </a>
          <a href="mailto:farhanahmadptn@gmail.com">
            <img src="/mail.png" className="w-7 h-7 cursor-pointer" />
          </a>
          <a href="https://github.com/Farhan9373">
            <img src="/githubblue.png" className="w-7 h-7 cursor-pointer" />
          </a>
        </div>
          </div>
        
        )}

      </div>
    </div>
  );
};

export default Navbar;
