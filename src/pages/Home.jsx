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
      className="relative h-screen flex flex-col justify-center items-center text-center px-4"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content above overlay */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Heading */}
        <h2 className="text-white font-bebas font-bold leading-tight drop-shadow-2xl 
          text-5xl sm:text-6xl md:text-8xl lg:text-[150px] max-w-5xl">
          READ THE HOLY QURAN
        </h2>

        {/* Paragraph */}
        <p className="text-gray-200 font-monte font-medium drop-shadow-lg 
          max-w-md sm:max-w-xl text-base sm:text-lg md:text-xl lg:text-[31px]">
          A clean, easy-to-read PDF of the Holy Quran accessible on every device.
        </p>

        {/* Button */}
        <Link
          to="/surah"
          className="mt-6 px-6 sm:px-8 md:px-10 py-2 sm:py-3 bg-white text-black font-bold font-monte rounded-xl border border-black hover:bg-gray-100 transition 
          text-base sm:text-lg md:text-xl"
        >
          Read Quran Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
