import { useState, useEffect } from "react";
import { FiMoreVertical } from "react-icons/fi";

const Surah = () => {
  const [openMenu, setOpenMenu] = useState(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenMenu(null);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center mb-8">📖 Select a Parah</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => {
          const pdfUrl = `/pdfs/Parah${num}.pdf`;

          return (
            <div
              key={num}
              className="relative bg-white border-2 border-black p-6 rounded-xl shadow hover:shadow-xl transition duration-300 cursor-pointer flex justify-between items-center"
            >
              <span className="font-medium">Parah {num}</span>

              {/* Dots Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenu(openMenu === num ? null : num);
                }}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
                <FiMoreVertical size={20} />
              </button>

              {/* Dropdown */}
              {openMenu === num && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-full right-2 mt-2 bg-white border rounded-lg shadow-lg w-40 z-50 animate-fade-in"
                >
                  {/* Read (open directly in browser) */}
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    📖 Read
                  </a>

                  {/* Download */}
                  <a
                    href={pdfUrl}
                    download={`Parah${num}.pdf`}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    ⬇️ Download
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Surah;
