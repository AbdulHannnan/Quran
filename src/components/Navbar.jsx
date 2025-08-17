import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg"; // 👈 put your logo inside src/assets folder

const Navbar = () => {
  return (
    <nav className="bg-gray-600 text-white flex items-center justify-between">
      {/* Left: Logo */}
      <div className="pl-[94px]">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Center: Arabic word */}
      <div className="text-[24px] font-nastaliq font-bold">
  إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
</div>


      {/* Right: Navigation */}
      <ul className="flex gap-6 p-6 pr-[50px]">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/surah" className="hover:underline">Surah</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

