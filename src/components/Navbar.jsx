import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // 👈 npm install lucide-react
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2B3335] text-white flex items-center justify-between p-3 relative">

      {/* Left: Logo (hidden on mobile) */}
      <div className="pl-[94px] hidden md:block">
        <img src={logo} alt="Logo" className="h-[50px] w-auto" />
      </div>

      {/* Center: Arabic word */}
      <div className="text-[22px] md:text-[38px] font-nastaliq font-bold text-center flex-1">
        إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
      </div>

      {/* Right: Navigation (Desktop only) */}
      <ul className="hidden md:flex gap-6 p-6 pr-[50px] text-[20px]">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/surah" className="hover:underline">Surah</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
      </ul>

      {/* Hamburger Button (Mobile only) */}
      <button 
        className="md:hidden pr-4 z-50" // z-50 so it stays above menu
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu (hidden on desktop) */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-screen bg-[#2B3335] shadow-lg flex flex-col items-center p-6 z-40 md:hidden">
          {/* Logo in Mobile Menu */}
          <img src={logo} alt="Logo" className="h-[60px] w-auto mb-6" />

          {/* Navigation Links */}
          <ul className="flex flex-col gap-6 text-[20px]">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/surah" onClick={() => setMenuOpen(false)}>Surah</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
