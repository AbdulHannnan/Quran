import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-2">About</h3>
        <p className="text-gray-700">
          This is a simple website to navigate through Quran Surahs.
        </p>
      </div>
    </div>
  );
};

export default Home;
