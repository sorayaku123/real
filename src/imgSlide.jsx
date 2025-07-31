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
  },
  {
    img: "/an phuoke.jpg",
    title: 'Khu đô thị ven sông',
    desc: 'Thiết kế thông minh, sống xanh mỗi ngày.',
  },
  {
    img: "/masterise.webp",
    title: 'Tâm điểm Ocean Park',
    desc: 'Sống giữa nhịp đập đại đô thị xanh.',
  }
]

export default function Imgslide() {
  return (
    <section className="w-full h-screen overflow-hidden relative">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet custom-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
        }}
        loop={true}
        className="w-full h-full"
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
    <div ref={ref} className="relative w-full h-screen bg-white overflow-hidden">
      <motion.img
        src={slide.img}
        initial={{ x: '100%' }}
        animate={inView ? { x: '0%' } : {}}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      <div className="absolute bottom-10 left-6 text-white z-10 max-w-[80%]">
        <motion.h2
          initial={{ x: '-50%', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-3xl font-semibold"
        >
          {slide.title}
        </motion.h2>
        <motion.p
          initial={{ x: '50%', opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-2 text-lg"
        >
          {slide.desc}
        </motion.p>
      </div>
    </div>
  )
}



