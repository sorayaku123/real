
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Masterise_text() {
  const [showTextDesktop, setShowTextDesktop] = useState(false);
  const [showHeading, setShowHeading] = useState(true);
  const timeoutRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });

    function handleResize() {
      // clear timeout cũ trước khi set cái mới
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      if (window.innerWidth >= 1280) {
        setShowHeading(true);
        setShowTextDesktop(false);

        timeoutRef.current = setTimeout(() => {
          setShowTextDesktop(true);
        }, 4500);
      } else {
        setShowHeading(true);
        setShowTextDesktop(false);

        timeoutRef.current = setTimeout(() => {
          if (window.innerWidth < 1280) {
            setShowHeading(false);
          }
        }, 3000);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <article className="bg-[url(/masteri.jpeg)] bg-top bg-cover h-[520px] text-center space-y-3 xl:h-[620px] xl:bg-bottom">
      {/* HEADING */}
      {showHeading && (
        <div className="text-[#c28121] font-bold uppercase pt-12 text-3xl xl:text-4xl space-y-2 text-white">
          <p data-aos="fade-left">nhà phát triển</p>
          <p data-aos="fade-right" data-aos-delay="300">
            bất động sản hàng hiệu
          </p>
          <p data-aos="fade-left" data-aos-delay="600">
            đẳng cấp thế giới
          </p>
        </div>
      )}

      {/* SECTION TEXT */}
      <section className="flex justify-center">
        <div className="space-y-3 text-white pt-10 xl:max-w-4xl pt-0">
          {/* Mobile */}
          {!showHeading && (
            <div className="space-y-3 mt-10 animate-fade-in xl:hidden md:max-w-[350px]">
              <p className="text-sm mt-2 leading-relaxed font-semibold md:text-2xl">
                Masterise Homes®, trực thuộc tập đoàn Masterise, là nhà phát
                triển bất động sản hàng hiệu đẳng cấp quốc tế
              </p>
              <p className="text-sm mt-2 leading-relaxed font-semibold md:text-sm">
                Kết hợp tinh hoa quốc tế với chiều sâu văn hóa bản địa, chúng tôi
                kiến tạo trải nghiệm sống xứng tầm, nuôi dưỡng khát vọng và xây
                dựng di sản bền vững.
              </p>
            </div>
          )}

          {/* Desktop */}
          {showTextDesktop && (
            <div className="xl:block space-y-3 animate-fade-in text-amber-100 mt-40">
              <p className="text-[17px] leading-relaxed">
                Masterise Homes®, trực thuộc tập đoàn Masterise, là nhà phát
                triển bất động sản hàng hiệu đẳng cấp quốc tế...
              </p>
              <p className="text-[17px] leading-relaxed">
                Sở hữu danh mục BĐS hàng hiệu lớn nhất Đông Nam Á, Masterise
                Homes hợp tác chiến lược cùng ELIE SAAB, Marriott, JW Marriott,
                The Ritz-Carlton.
              </p>
              <p className="text-[17px] leading-relaxed">
                Kết hợp tinh hoa quốc tế với chiều sâu văn hóa bản địa, chúng
                tôi kiến tạo trải nghiệm sống xứng tầm, nuôi dưỡng khát vọng và
                xây dựng di sản bền vững.
              </p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}


