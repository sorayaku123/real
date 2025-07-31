import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const images = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.webp',
  '/img5.webp',
];

export default function Collection() {
  return (
    <main className="xl:flex justify-center">
      <div className="w-full px-2 py-5 xl:w-2/3 relative">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          spaceBetween={10}
          breakpoints={{
            0: { slidesPerView: 1.1 },
            640: { slidesPerView: 2 },
            1280: { slidesPerView: 1.2 },
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[320px]">
                <img
                  src={src}
                  alt={`img-${i}`}
                  className="object-cover w-full h-full rounded-xl shadow-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}



