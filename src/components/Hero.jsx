import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-100 h-[60vh] flex flex-col justify-center items-center text-center space-y-[40px]">
      <h2 className="text-[150px] font-bebas font-regular">READ THE HOLY QURAN</h2>

      <p className="text-[31px] font-monte font-medium text-gray-600 max-w-xl">
        A clean, easy-to-read PDFs of the Holy Quran accessible on every device.
      </p>

      <button className="px-6 py-3 bg-black text-white font-monte rounded-lg border-2 border-black">
        <Link to="/surah">Read Quran Now</Link>
      </button>
    </section>
  );
};

export default Hero;
