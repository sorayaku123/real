import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Masterise_text() {
  const [showTextDesktop, setShowTextDesktop] = useState(false);
  const [showHeading, setShowHeading] = useState(true);


  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });


    // Sau 2.5s thì show text ở desktop
    const desktopTimer = setTimeout(() => {
      if (window.innerWidth >= 1280) {
        setShowTextDesktop(true);
      }
    }, 2500);


    // Mobile: tự động ẩn heading sau 5s
    const mobileTimer = setTimeout(() => {
      if (window.innerWidth < 1280) {
        setShowHeading(false);
      }
    }, 5000);


    return () => {
      clearTimeout(desktopTimer);
      clearTimeout(mobileTimer);
    };
  }, []);


  return (
    <article className="bg-[url(/masteri.jpeg)] bg-top bg-cover h-[520px] text-center space-y-3 xl:h-[920px]">


      {/* HEADING 3 dòng từ phải qua trái */}
      {showHeading && (
        <div className="text-[#c28121] font-bold uppercase pt-12 text-3xl xl:text-4xl space-y-2">
          <p data-aos="fade-left">nhà phát triển</p>
          <p data-aos="fade-left" data-aos-delay="300">bất động sản hàng hiệu</p>
          <p data-aos="fade-right" data-aos-delay="600">đẳng cấp thế giới</p>
        </div>
      )}


      {/* SECTION TEXT */}
      <section className="flex justify-center">
        <div className="space-y-3 xl:max-w-4xl text-gray-600 pt-10 xl:pt-0">


          {/* Mobile: hiện text sau khi heading ẩn */}
          {!showHeading && (
            <div className="space-y-3 animate-fade-in xl:hidden md:max-w-[350px]">
              <p className="text-sm mt-2 xl:text-[17px] leading-relaxed md:text-2xl">
                Masterise Homes®, trực thuộc tập đoàn Masterise, là nhà phát triển bất động sản hàng hiệu đẳng cấp quốc tế
              </p>
              <p className="text-sm mt-2 xl:text-[17px] leading-relaxed md:text-sm">
                Kết hợp tinh hoa quốc tế với chiều sâu văn hóa bản địa, chúng tôi kiến tạo trải nghiệm sống xứng tầm, nuôi dưỡng khát vọng và xây dựng di sản bền vững.
              </p>
            </div>
          )}


          {/* Desktop: chỉ show text sau khi heading hiện xong */}
          {showTextDesktop && (
            <div className="hidden xl:block animate-fade-in space-y-3">
              <p className="text-[17px] leading-relaxed">
                Masterise Homes®, trực thuộc tập đoàn Masterise, là nhà phát triển bất động sản hàng hiệu đẳng cấp quốc tế...
              </p>
              <p className="text-[17px] leading-relaxed">
                Sở hữu danh mục BĐS hàng hiệu lớn nhất Đông Nam Á, Masterise Homes hợp tác chiến lược cùng ELIE SAAB, Marriott, JW Marriott, The Ritz-Carlton.
              </p>
              <p className="text-[17px] leading-relaxed">
                Kết hợp tinh hoa quốc tế với chiều sâu văn hóa bản địa, chúng tôi kiến tạo trải nghiệm sống xứng tầm, nuôi dưỡng khát vọng và xây dựng di sản bền vững.
              </p>
            </div>
          )}
        </div>
      </section>
    </article>
  );
}
