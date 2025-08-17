import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // 👈 put your logo inside src/assets folder

const Navbar = () => {
  return (
  <nav className="bg-[#2B3335] text-white flex items-center justify-between p-3">

      {/* Left: Logo */}
      <div className="pl-[94px] ">
        <img src={logo} alt="Logo" className="h-[50px] w-auto" />
      </div>

      {/* Center: Arabic word */}
      <div className="text-[38px] font-nastaliq font-bold">
  إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
</div>


      {/* Right: Navigation */}
      <ul className="flex gap-6 p-6 pr-[50px] text-[20px]">
        <li><Link to="/" className="hover:underline">Home</Link></li>
        <li><Link to="/surah" className="hover:underline">Surah</Link></li>
        <li><Link to="/about" className="hover:underline">About</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

