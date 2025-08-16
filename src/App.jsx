
import Navbar from './Navbar'
import ProjectCard from './Project_card'
import FeedbackCard from './Feedback'
import Lifestyle from "./Lifestyle"
import ContactForm from './Contact'
import { motion} from "framer-motion"
import { useRef } from "react"
import { useEffect, useState } from 'react'
import Imgslide from './imgSlide'
import Masterise_text from './Master_text'
import { useInView } from "react-intersection-observer"
import Tab from './Tab'


export default function App() {

  const flipVariant = {
  hidden: { opacity: 0, rotateX: -90 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}


   const currentProjects = [
    {
      image: '/img9.jpg',
      title: 'Mastery Trinity Square',
      desc: 'Khu phức hợp cao tầng cộng đồng Masteri quy mô nhất tại Ocean City.',
      location: 'Trực diện công viên Empire Park, Ocean Park',
      url: 'https://masterisehomes.com/masteri-trinity-square'
    },
     {
      image: '/thao dien.jpg',
      title: 'Masteri Central Point',
      desc: 'Khu căn hộ compound (khép kín) cao cấp tại trung tâm Đại đô thị Grand Park.',
      location: 'Đại đô thị Vinhomes Grand Park, Phường Long Bình và Phường Long Thạnh Mỹ, TP. Thủ Đức, TP. Hồ Chí Minh',
      url: 'https://masterisehomes.com/masteri-centre-point'
    },
    {
      image: '/height.jpg',
      title: 'Masteri West Heights',
      desc: 'Toạ lạc tại trung tâm đại đô thị thông minh Smart City Hà Nội.',
      location: 'Mặt đường vành đai 3.5, Smart City',
      url: 'https://masterisehomes.com/masteri-west-heights'
    },
        {
      image: '/lake.jpg',
      title: 'Masteri Lakeside',
      desc: 'Masteri Lakeside Biểu tượng sống kết nối Khẳng định dấu ấn Masteri Collection tại Ocenpark1.',
      location: 'Đại đô thị Ocean Park, Dương Xá, Kiêu Kỵ - Đa Tốn, Gia Lâm, Hà Nội',
      url: 'https://masterisehomes.com/masteri-lakeside'
    },  
    // Thêm các dự án khác ở đây
  ]
   
  
const completedProjects = [
  {
    image: '/thao dien.jpg',
    title: 'Masteri West Heights',
    desc: 'Chuẩn mực sống quốc tế đích thực nhất phía Tây Hà Nội',
    location: 'Hồ trung tâm, Đại đô thị Smart City, Tây Mỗ, Đại Mỗ, Quận Nam Từ Liêm, Hà Nội',
    url: 'https://masterisehomes.com/masteri-west-heights'
  },
  // Thêm các dự án đã triển khai...
  {
      image: '/water.jpg',
      title: 'Masteri Waterfront',
      desc: 'Nơi đáng sống nhất giữa lòng Đại đô thị Ocean Park',
      location: 'Đại đô thị Ocean Park, Dương Xá - Kiêu Kỵ - Đa Tốn, Gia Lâm, Hà Nội',
    },
      {
      image: '/an phu.jpg',
      title: 'Masteri An Phú',
      desc: 'Đẳng cấp sống resort ngay vị trí kim cương Thảo Điền với không gian sống xanh an yên, riêng tư, tiện ích cao cấp và kết nối nhanh.',
      location: '179 Xa lộ Hà Nội, P. Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh',
      url: 'https://masterisehomes.com/masteri-waterfront'
    },
   {
      image: '/thao dien.jpg',
      title: 'Masteri Thảo Điền',
      desc: 'Vị trí đẳng cấp tại Thảo Điền, kết nối thuận tiện đến các quận trung tâm, nơi bạn có thể hòa mình giữa không gian xanh.',
      location: '159 Xa lộ Hà Nội, P. Thảo Điền, TP. Thủ Đức, TP. Hồ Chí Minh',
      url: 'https://masterisehomes.com/masteri-thao-dien'
    }
]


const upcomingProjects = [
  {
    image: '/grand.jpg',
    title: 'Masteri Grand Avenue',
    desc: 'Dự án đầu tiên và duy nhất thuộc Bộ sưu tập Masteri Collection tại Global Gate, Hà Nội..',
    location: 'Vinhomes Global Gate, Hà Nội',
    url: 'https://masterigrandavenue.site'
  },
    {
    image: '/grand view.jpg',
    title: 'Masteri Grand View',
    desc: 'Siêu phẩm cao tầng đầu tiên tại Trung Tâm Mới The Global City.',
    location: 'Vinhomes Global Gate, TPHCM',
    url: 'https://masterisehomes.com/the-global-city/vi/masteri-grand-view'
  },
  // Thêm các dự án sắp triển khai...
]


const feedbacks = [
  {
	image: '/imgg2.jpg',
	name: 'Chị Nhã Lê',
	role: 'Khách hàng',
	feedback: 'Nhà của mình nhìn xuống hồ bơi rất đẹp và dài, nhìn rất “chill”. Mình cảm thấy rất hài lòng.',
	size: 'w-64 h-80 xl:w-80 h-96', // mặc định
  },
  {
	image: '/thuy.jpg',
	name: 'Chị Thủy',
	role: 'Khách hàng',
	feedback: 'Vị trí của các dự án gần trung tâm thương mại, gần công viên. Sau này mình đi ra công viên cùng con cái mình cũng rất tiện. Khu compound đối với những người có con nhỏ thì cực kỳ quan trọng vì nó mang đến tính an ninh cho con cái mình.”',
  size: 'w-72 h-80 xl:w-80 h-96', 
}
]


const headingVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
}

const flipVariant_ = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: {
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
}



const [isOpen, setIsOpen] = useState(false)

useEffect(() => {
  document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  return () => {
    document.body.style.overflow = 'auto'
  }
}, [isOpen])

const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // 30% section visible sẽ kích hoạt
  });



  return (

    <div className="relative">
        <Navbar onSidebarToggle={setIsOpen} />
<main className={`transition-transform duration-500 ease-out ${isOpen ? 'translate-x-[-200px]' : ''}`}>





    
      
      <div className="relative h-[500px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/estate.mp4" />
        </video>


    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, delay: 0.2 }}
  viewport={{ once: true, amount: 0.3 }}
  className="flex flex-col items-center justify-center text-center h-[500px]"
>
  <img src="/logo2.png" className="size-32" />
  <h1 className="font-bold text-4xl uppercase tracking-wider text-white mt-4 xl:text-3xl">
    Kiến tạo trải nghiệm xứng tầm
  </h1>
</motion.div>



      </div>

      <Masterise_text />

<section ref={ref} className="relative flex justify-center items-center h-96 overflow-hidden">
  <img
    src="/du an.jpeg"
    className="absolute w-full h-full object-cover object-center"
    alt="Dự Án"
  />


  {/* Overlay tối mờ */}
  <div className="absolute"></div>


  {/* Motion text */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="relative z-10 text-center text-white px-4"
  >
    <h1 className="text-4xl xl:text-5xl font-bold uppercase drop-shadow-md mb-6">
      Dự Án
    </h1>


    <a
      href="#du_an"
      className="inline-flex items-center gap-2 text-lg font-semibold text-sky-400 hover:text-sky-300 transition"
    >
      Xem Thêm
      <img src="/arrow right.svg" alt="arrow" className="w-4 h-4" />
    </a>
  </motion.div>
</section>










      <Tab />
    


<Imgslide/>







<Lifestyle
  imgSrc="/imgg.jpg"
  title="phong cách sống masteri"
  subtitle="sống tinh tế"
  paragraphs={[
    "Giữa nhịp sống đô thị hối hả, bạn đã tìm thấy một không gian đủ tinh tế để chậm lại, cảm nhận và tận hưởng từng khoảnh khắc?",
    "Bộ sưu tập Phong Cách Sống MASTERI mang đến những dấu ấn tinh tế trong từng trải nghiệm từ công việc, kết nối gia đình đến đam mê cá nhân. Mỗi bước chân tại đây dẫn bạn đến hệ tiện ích đủ đầy, cho một cuộc sống trọn vẹn.",
    "Tại MASTERI, mỗi khoảnh khắc là một trải nghiệm sống trọn vẹn, nơi kiến trúc hiện đại giao hòa cùng nghệ thuật, kiến tạo nên không gian mang đậm dấu ấn thẩm mỹ và văn hóa."
  ]}
/>

<Lifestyle
  imgSrc="/ghe.jpg"
  className="mt-8"
  title="phong cách sống masteri"
  subtitle="sống đẳng cấp"
  paragraphs={[
    "Lựa chọn nào giúp bạn khẳng định tuyên ngôn sống đẳng cấp?",
    "MASTERI không chỉ kiến tạo một chốn an cư lý tưởng, mà còn hướng đến định hình chuẩn sống quốc tế giữa lòng đô thị.",
    "Tại đây, sống không chỉ là tận hưởng, mà còn là hành trình vươn mình vun đắp giá trị, kiến tạo nền tảng bền vững và nuôi dưỡng tương lai dài lâu.",
    "Với MASTERI, chuẩn sống đẳng cấp không đơn thuần là lựa chọn, mà được khẳng định mỗi ngày."
  ]}
  reverse={true}
/>
<Lifestyle
  imgSrc="/ho boi.jpg"
  className="mt-8"
  title="phong cách sống masteri"
  subtitle="sống gắn kết"
  paragraphs={[
    "Với bạn, một cuộc sống trọn vẹn bắt đầu từ đâu?",
    "Chúng tôi tin rằng một cuộc sống đáng giá khởi nguồn từ những kết nối ý nghĩa – kết nối với chính bản thân, với cộng đồng và với những giá trị mà bạn trân trọng. MASTERI không chỉ mang đến vị trí thuận tiện hay hệ thống tiện ích hiện đại; hơn thế, chúng tôi kiến tạo một không gian sống kết nối, nơi mọi trải nghiệm được nâng tầm và trở nên trọn vẹn.",
    "Tại MASTERI, mỗi ngày là một cơ hội để bạn vun đắp những kết nối sâu sắc, nuôi dưỡng hạnh phúc và xây đắp nên tổ ấm của riêng mình."
  ]}
  reverse={true}
/>



 <article className="px-6 py-10" id="du_an">
<motion.div
  initial={{ rotateX: -90, opacity: 0 }}
  whileInView={{ rotateX: 0, opacity: 1 }}
  transition={{ duration: 2, ease: "easeOut" }}
  viewport={{ once: true }}
  style={{ fontFamily: 'Times New Roman'}}
>
  <p className="text-3xl font-bold text-[#ba7c38] uppercase mb-4">các dự án</p>
  <p className="text-3xl font-semibold text-[#ba7c38] uppercase xl:text-6xl ">masteri collection</p>
</motion.div>

  <div className="border-b-2 border-[#ba7c38] mt-4 bt-6 mb-6 xl:border-[2px]"> </div>

<div>

<div> 
 {/* ĐANG TRIỂN KHAI */}
  <motion.h1 className="text-3xl font-bold text-[#ba7c38] uppercase mb-6"  
    variants={headingVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  style={{ fontFamily: 'SFMono-Regular'}}

  >
    dự án | đang triển khai
  </motion.h1>


<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
    {currentProjects.map((p, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: i * 0.1, ease: "easeInOut" }}
    viewport={{ once: true, amount: 0.3 }}
    className={`
      ${(i === currentProjects.length - 1 && currentProjects.length % 3 !== 0)
        ? 'col-span-full flex justify-center' // Cho phần tử cuối ra giữa
        : ''}
    `}
  >
    <ProjectCard {...p} />
  </motion.div>
))}


  </div>
</div>
     <div className="border-b-2 border-[#ba7c38] mt-10 xl:border-[2px] mb-6"> </div>
<div>
  {/* ĐÃ TRIỂN KHAI */}
  <motion.h1 className="text-3xl font-bold text-[#ba7c38] uppercase mb-6"
    variants={headingVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    Các dự án | đã triển khai
  </motion.h1>


<div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
    {completedProjects.map((p, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: i * 0.1 }}
    viewport={{ once: true, amount: 0.3 }}
    className={`
      ${(i === completedProjects.length - 1 && completedProjects.length % 3 !== 0)
        ? 'col-span-full flex justify-center' // Cho phần tử cuối ra giữa
        : ''}
    `}
  >
    <ProjectCard {...p} />
  </motion.div>
))}


  </div>
  
   
</div>

  <div className="border-b-2 border-[#ba7c38] mt-10 xl:border-[2px]"> </div>
<div>
  {/* SẮP TRIỂN KHAI */}
  <motion.h1 className="text-3xl font-bold text-[#ba7c38] uppercase my-5"
    variants={headingVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
  >
    Các dự án sắp triển khai
  </motion.h1>
</div>





<div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10  gap-6">
    {upcomingProjects.map((p, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, x: 40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, delay: i * 0.1 }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <ProjectCard {...p} />
  </motion.div>
))}


  </div>
</div>

</article>




  

<article className="bg-[#ffc549] font-serif pt-4 pl-4"> 
 <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    className="space-y-3"
  >
    <motion.p
      variants={flipVariant_}
      className="text-3xl text-[#ba7c38] uppercase font-bold"
    >
      Câu chuyện
    </motion.p>

    <motion.p
      variants={flipVariant_}
      transition={{ delay: 0.2, duration: 1.4 }}
      className="text-2xl text-[#ba7c38] uppercase font-bold max-w-[320px]"
    >
      Từ khách hàng Masteri
    </motion.p>
  </motion.div>


  <div className="flex flex-wrap gap-6 pb-4 xl:flex justify-center">
  {feedbacks.map((fb, index) => (
  <motion.div
    key={index}
    style={{ transformStyle: 'preserve-3d' }} // 👈 phải có
    initial={{ rotateY: -180, opacity: 0 }}
    whileInView={{ rotateY: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true, amount: 0.3 }}
    className="perspective-[1200px]" // 👈 Tailwind thêm chiều sâu 3D
  >
    <FeedbackCard {...fb} index={index} />
  </motion.div>
))}

  </div>


</article>  

<nav>
  <ContactForm />
</nav>

<article className="bg-sky-300 flex flex-col items-center text-white text-sm py-5 xl:text-lg">
 <div className="max-w-80 flex flex-col items-center">
      <article className="relative">
      <h1 className="text-xl font-bold"> Master Home</h1>
      <span className="absolute top-[3px] right-[-10px] text-xs font-semibold"> ® </span>
       </article>
  </div>
  <section className="text-center">
    <h1> A MEMBER OF MASTERISE GROUP</h1>
    <p> Website thuộc sở hữu bởi: CÔNG TY CỔ PHẦN TẬP ĐOÀN MASTERISE </p>
    <p> GCNĐKDN số 0304840018 do Phòng ĐKKD Thành phố Hồ Chí Minh cấp, đăng ký lần thứ 18 ngày 12/05/2020</p>
    <p>Bản quyền ©2019 thuộc về Công ty Cổ phần Tập đoàn Masterise</p>

  <h1 className="font-bold uppercase mt-4 mb-2 xl:mt-6"> chính sách bảo mật </h1>
  <img src="/pro.png" className="justify-self-center"/>

  </section>


</article>



<footer className="bg-[#b67e3c] text-[12px] text-white pt-4 pb-10 px-3 xl:text-[17px]">
   <p className="text-center">
    sales@masterisehomes.com
   </p>
   <p className="text-center"> 
    (+84) 28 39 159 159                                 
   </p>
  <h2 className="text-lg uppercase text-center mb-4"> kết nối </h2>
  <section className="flex justify-center space-x-3 mb-4">
    <div className="text-center rounded-full border-white border-2 inline-block p-2">
    <img src="/facebook.svg" className="size-5 object-contain"/>
    </div>
        <div className="text-center rounded-full border-white border-2 inline-block p-2">
     <img src="/linked.svg"  className="w-5 h-5"/>
     </div>
         <div className="text-center rounded-full border-white border-2 inline-block p-2">
      <img src="/yt.svg"  className="size-5"/>
      </div>
  </section>

  <p className="mb-5">
    Các thông tin về dự án Masteri Trinity Square tại trang này là sản phẩm và thuộc quyền sở hữu của Công ty TNHH Đầu tư và Phát triển Bất động sản Trường Minh, GCNĐKDN số 0901125981, chủ đầu tư Dự án và được công khai tại đây theo thỏa thuận giữa Công ty Cổ phần Tập đoàn Masterise và Công ty TNHH Đầu tư và Phát triển Bất động sản Trường Minh.
  </p>
  <p>
    Lưu ý: Chúng tôi đã nỗ lực và cẩn trọng để hoàn thiện tài liệu này, tuy nhiên tài liệu chỉ dùng với mục đích tham khảo. Hình ảnh, sơ đồ kỹ thuật, bố trí nội ngoại thất hay thông tin mô tả chỉ nhằm mục đích minh họa, không phải là thông tin hiện thực hay cam kết pháp lý. Thông tin chính thức về dự án, sản phẩm (bao gồm nhưng không giới hạn: tên tòa, phân khu, thông tin căn hộ, ký hiệu căn hộ, diện tích, tiện ích,...) sẽ được căn cứ trên hợp đồng mua bán và các tài liệu được thỏa thuận, ký kết chính thức với khách hàng.
  </p>
</footer>

      </main>
    </div>
    
  

      


  )
}

