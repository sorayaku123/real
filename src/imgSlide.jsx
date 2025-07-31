import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

import { motion, useScroll, useMotionValue } from 'framer-motion'
import { useRef, useEffect } from 'react'

export default function Imgslide() {
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

  return (
    <section className="w-full h-screen overflow-hidden relative cursor-grab">
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
            <SlideItem img={slide.img} title={slide.title} desc={slide.desc} uniqueKey={i} />
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}

function SlideItem({ img, title, desc, uniqueKey }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center']
  })

  const imageX = useMotionValue('50%')
  const textX = useMotionValue('-30%')
  const textOpacity = useMotionValue(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
 if (v >= 0.4) {
  setTimeout(() => {
    imageX.set('9%')
    textX.set('0%')
    textOpacity.set(1)
  }, 200) // delay 200ms
}

    })
    return () => unsubscribe()
  }, [uniqueKey]) // khi slide đổi → re-run

  return (
    <div ref={sectionRef} className="relative w-full h-screen overflow-hidden">
   <motion.img
  src={img}
  style={{ x: imageX }}
  className="absolute top-0 left-0 w-full h-full object-cover"
  transition={{ type: 'spring', stiffness: 40, damping: 15 }} // 👈 chuyển động mượt
/>


      {/* Optional: overlay mờ ảnh */}
      <div className="absolute inset-0 z-10" />

      <motion.div
        style={{ x: textX, opacity: textOpacity }}
        className="absolute bottom-20 left-[50px] xl:left-[160px] z-20"
      >
        <h2 className="text-3xl font-semibold text-white xl:text-5xl">{title}</h2>
        <p className="text-white mt-1 max-w-md xl:text-2xl">{desc}</p>
      </motion.div>
    </div>
  )
}


