import { Link } from "react-router-dom";
import heroBg from "../assets/bg pic.jpg"; // 👈 adjust path if needed

const Hero = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative h-[100vh] flex flex-col justify-start items-center text-center pt-16 space-y-[40px]"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content above overlay */}
      <div className="relative z-10">
        <h2 className="text-[150px] font-bebas font-regular text-white drop-shadow-2xl">
          READ THE HOLY QURAN
        </h2>

        <p className="text-[31px] font-monte font-medium text-gray-200 max-w-xl mx-auto drop-shadow-lg">
          A clean, easy-to-read PDFs of the Holy Quran accessible on every device.
        </p>

        <button className="mt-6 px-10 py-3 bg-white text-black text-[24px] font-bold font-monte rounded-[20px] border-1 border-black hover:bg-gray-100 transition">
          <Link to="/surah">Read Quran Now</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
