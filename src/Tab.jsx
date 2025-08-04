import React, { useState, useRef, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    main: 'TIỆN ÍCH',
    subs: [
      {
        sub: 'Ngoài trời',
        public: [
          { img: 'ngoai_troi.jpeg', desc: 'lounghe thư giãn ngoài trời' },
          { img: 'ngoai troi 2.jpeg', desc: 'lounghe thư giãn ngoài trời' },
          { img: 'cong vien.jpg', desc: 'công viên nước tương tác và khu vui chơi trẻ em' }
        ],
      },
      {
        sub: 'Ngoài trời 2',
        public: [
          { img: 'ko gian.jpeg', desc: 'không gian làm việc sáng tạo' },
          { img: 'vuon.jpg', desc: 'vườn xanh' },
        ],
      },
      {
        sub: 'Trong nhà',
        public: [
          { img: 'sanh.jpg', desc: 'sảnh đón tiếp sang trọng' },
          { img: 'beboi.jpg', desc: 'bể bơi tầng thượng' },
                { img: 'trongnha.jpg', desc: 'bể bơi trong nhà' }
        ],
      },
    ],
  },
  {
    main: 'NỘI THẤT',
    subs: [
      {
        sub: 'Studio',
        public: [
          { img: 'studio1.jpg'},
          { img: 'studio2.jpg'}
        ],
      },
      {
        sub: '1 Phòng Ngủ',
        public: [
          { img: '1pn1.jpg'},
          { img: '1pn2.jpg'},
        ],
      },
        {
        sub: '2 Phòng Ngủ',
        public: [
          { img: '2pn1.jpeg'},
          { img: '2pn2.jpeg'},
        ],
      },
        {
        sub: '2 Phòng Ngủ +',
        public: [
          { img: '2pnlus1.jpg'},
          { img: '2pnplus2.jpg'},
          { img: '2pnlus3.jpg'},
        ],
      },
        {
        sub: '3 Phòng Ngủ',
        public: [
          { img: '3pn1.jpg'},
          { img: '3pn2.jpg'},
          { img: '3pn3.jpg'},
          { img: '3pn4.jpg'},
          { img: '3pn5.jpg'},
        ],
      },
    ],
  },
];

export default function Tab() {
  const [activeMain, setActiveMain] = useState(0);
  const [activeSub, setActiveSub] = useState(0);
  const swiperRef = useRef(null);

  const currentSlides = useMemo(() => {
    return data[activeMain].subs.flatMap((s) =>
      s.public.map((img) => ({
        img,
        sub: s.sub,
      }))
    );
  }, [activeMain]);

  const subStartIndexes = useMemo(() => {
    return data[activeMain].subs.map((_, i) =>
      data[activeMain].subs
        .slice(0, i)
        .reduce((acc, s) => acc + s.public.length, 0)
    );
  }, [activeMain]);

  const handleSlideChange = (swiper) => {
    const index = swiper.realIndex;
    let sum = 0;
    for (let i = 0; i < data[activeMain].subs.length; i++) {
      sum += data[activeMain].subs[i].public.length;
      if (index < sum) {
        setActiveSub(i);
        break;
      }
    }
  };

  const handleMainTabClick = (i) => {
    setActiveMain(i);
    setActiveSub(0);
    setTimeout(() => {
      swiperRef.current?.slideTo(0);
    }, 50);
  };

  const handleSubTabClick = (i) => {
    const index = subStartIndexes[i];
    swiperRef.current?.slideTo(index);
  };

  return (
    <section className="okela max-w-full px-4 py-8">
      {/* Main Tabs */}
      <div className="flex space-x-4 mb-4 text-[#52ccbe]">
        {data.map((d, i) => (
          <button
            key={i}
            onClick={() => handleMainTabClick(i)}
            className={`px-4 py-2 rounded ${
              i === activeMain
                ? 'underline decoration-sky-500 decoration-2 underline-offset-8 font-semibold'
                : ''
            }`}
          >
            {d.main}
          </button>
        ))}
      </div>

      {/* Sub Tabs */}
      <div className="space-x-2 mb-4 text-black text-lg">
        {data[activeMain].subs.map((s, i) => (
          <button
            key={i}
            onClick={() => handleSubTabClick(i)}
            className={`px-3 py-1 ${
              i === activeSub ? 'font-bold text-sky-500' : ''
            }`}
          >
            {s.sub}
          </button>
        ))}
      </div>

<Swiper
  slidesPerView={1.3}
  centeredSlides
  spaceBetween={20}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  onSwiper={(swiper) => (swiperRef.current = swiper)}
  onSlideChange={handleSlideChange}
  className="px-0 overflow-visible" // bắt buộc giữ overflow-visible để show ảnh trái/phải
>
  {currentSlides.map((s, i) => (
    <SwiperSlide key={i} className="">
      {({ isActive }) => (
        <div
          className={`
            relative transition-all duration-300 
            ${isActive ? 'z-30 scale-100' : 'z-10 scale-90 opacity-60'}
          `}
        >
          <div className="w-[290px] md:w-[320px] justify-self-center">
            <img
              src={`/${s.img.img}`}
              alt=""
              className="max-w-full object-contain"
            />
          </div>
          <p className="mt-3 text-center text-sm text-pink-400 font-semibold uppercase px-2">
            {s.img.desc}
          </p>
        </div>
      )}
    </SwiperSlide>
  ))}
</Swiper>








    </section>
  );
}



