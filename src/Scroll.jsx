
import { useState, useEffect } from "react";

export default function Scroll() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // xuống 300px thì hiện nút
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
      behavior: "smooth", // cho nó cuộn mượt
    });
  };


 return (
    <div>
      {showButton && (




<button
  onClick={scrollToTop}
  className="fixed z-10 bottom-5 right-0 w-12 h-12 border-[1px] border-gray shadow-lg hover:cursor-pointes flex items-center justify-center"
>
<img src="/arrow_up.svg"/>
</button>

      )}
    </div>
  );
}
