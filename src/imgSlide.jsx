import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'


const slides = [
  {
    img: "/an phuu.jpg",
    title: 'Vị trí "kim cương" An Phú',
    desc: 'Kết nối hoàn hảo…',
    overlay: true // thêm flag
  },
  {
    img: "/an phuoke.jpg",
    title: 'Khu đô thị ven sông',
    desc: 'Thiết kế thông minh, sống xanh mỗi ngày.',
    overlay: true
  },
  {
    img: "/masterise.webp",
    title: 'Tâm điểm Ocean Park',
    desc: 'Sống giữa nhịp đập đại đô thị xanh.',
    overlay: true
  }
]


export default function Imgslide() {
  return (
    <section>
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        loop={true}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <SlideItem slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}


function SlideItem({ slide }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })


  return (
    <div ref={ref} className="w-full h-screen cursor-grab">
      <motion.img
        src={slide.img}
        initial={{ x: '100%' }}
        animate={inView ? { x: '0%' } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />


      {/* overlay trắng bên trái cho ảnh cần */}
      {slide.overlay && (
        <div className="absolute top-0 left-0 h-full bg-white"
             style={{ width: '10%' }} />
      )}


      <div className="absolute bottom-10 right-6 text-white z-10 max-w-[60%] text-right">
        <motion.h2
          initial={{ x: '-50%', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-3xl font-semibold xl:text-4xl"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          initial={{ x: '50%', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-2 text-lg xl:text-xl"
        >
          {slide.desc}
        </motion.p>
      </div>
    </div>
  )
}



