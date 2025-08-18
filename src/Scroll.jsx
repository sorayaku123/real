
import { useState, useEffect } from "react";

export default function Scroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  const scrollToBottom = () => {
  const scrollHeight = document.documentElement.scrollHeight; // chiều cao toàn bộ trang
  const windowHeight = window.innerHeight; // chiều cao khung nhìn (viewport)

  // còn lại 10% của chiều cao viewport so với bottom
  const offset = windowHeight * 0.9;  

  window.scrollTo({
    top: scrollHeight - windowHeight - offset,
    behavior: "smooth",
  });
};

  return (
    <div>
      {showButton && (
        <>
          {/* Nút scroll lên */}
          <button
            onClick={scrollToTop}
            className="fixed z-20 bottom-20 right-8 w-12 h-12 border border-gray-400 shadow-lg flex items-center 
            justify-center bg-white hover:bg-gray-100
            md:right-10
            "
          >
            <img src="/arrow_up.svg" alt="Scroll Up" className="w-6 h-6" />
          </button>

          {/* Nút scroll xuống */}
          <button
            onClick={scrollToBottom}
            className="fixed z-20 bottom-5 right-8 w-12 h-12 border border-gray-400 shadow-lg rounded-full flex items-center 
            justify-center bg-white hover:bg-gray-100
            md:right-10
            "
          >
            <img
              src="/arrow_up.svg"
              alt="Scroll Down"
              className="w-6 h-6 transform rotate-180"
            />
          </button>
        </>
      )}
    </div>
  );
}



