import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


export default function Navbar({ onSidebarToggle }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)



  useEffect(() => {
  onSidebarToggle?.(isOpen)
  document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  return () => {
    document.body.style.overflow = 'auto'
  }
}, [isOpen, onSidebarToggle])


useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY
    setShowHeader(scrollY > 1)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])




const parentVariants = {
  hidden: {
    x: 300,
  },
  show: {
    x: 0,
    transition: {
      type: "tween",
      duration: 0.4,
      ease: "easeInOut",
      when: "beforeChildren", // ⬅️ đảm bảo parent chạy xong mới tới chữ
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}


const itemVariants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,     // mượt hơn
      ease: [0.25, 0.8, 0.25, 1], // easing tự nhiên hơn
    },
  },
}






  return (
    <main>
   <motion.header
  initial={{ y: -100 }}
  animate={{ y: isOpen || showHeader ? 0 : -100 }} // 🛠 sửa chỗ này
  transition={{ duration: 0.3 }}
  className="fixed top-0 left-0 z-50 w-full bg-black/40 shadow-md border-b border-white/10 md:px-10 pt-5"
>



        <div className="flex justify-between items-center px-4 xl:px-16 xl:pt-4 pb-2 h-16">
          <img src="/logo.png" className="object-cover w-20 xl:w-22" />


          {/* Mobile Button */}
          <button
            className="w-10 h-10 relative mt-[15px] md:mr-5 xl:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className={`absolute top-[8px] left-1/2 w-[24px] h-[2px] bg-sky-200 transition-all duration-300 origin-center ${isOpen ? 'rotate-45 -translate-x-1/2 translate-y-[8px]' : '-translate-x-1/2'}`} />
            <span className={`absolute top-[16px] left-1/2 w-[24px] h-[2px] bg-sky-200 transition-opacity duration-300 ${isOpen ? 'opacity-0 -translate-x-1/2' : 'opacity-100 -translate-x-1/2'}`} />
            <span className={`absolute top-[24px] left-1/2 w-[24px] h-[2px] bg-sky-200 transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-x-1/2 -translate-y-[8px]' : '-translate-x-1/2'}`} />
          </button>


          {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-8 text-white font-semibold">
            <div className="relative group">
              <motion.a whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }} className="cursor-pointer hover:font-bold">About</motion.a>
              <div className="desktop absolute left-0 bg-amber-50 text-base p-6 pb-10 pt-5 mt-5 space-y-2 rounded shadow-lg opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out pointer-events-none group-hover:pointer-events-auto border-sky-500">
                <a className="text-amber-300 hover:text-amber-400">History</a>
                <a className="text-amber-300 hover:text-amber-400">Vision</a>
                <a className="text-amber-300 hover:text-amber-400">Leadership</a>
              </div>
            </div>
            <div className="relative group">
              <span className="cursor-pointer">Residences</span>
              <div className="desktop absolute left-0 bg-amber-50 text-base p-6 pb-10 pt-5 mt-5 space-y-2 rounded shadow-lg opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out pointer-events-none group-hover:pointer-events-auto border-sky-500">
                <a className="text-amber-300 hover:text-amber-400">Floor</a>
                <a className="text-amber-300 hover:text-amber-400">Plans</a>
                <a className="text-amber-300 hover:text-amber-400">Gallery</a>
              </div>
            </div>
            <a href="#location" className="hover:text-amber-300">Location</a>
            <a href="https://masterisehomes.com/lien-he" className="hover:text-amber-300">Contact</a>
          </nav>
        </div>
      </motion.header>


      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          

          

<motion.div
  initial="hidden"
  animate="show"
  exit="hidden"
  variants={parentVariants}
  className="fixed top-[63px] right-[0px] h-full w-72 bg-gray-700 text-white p-6 shadow-lg space-y-4 opacity-[.95] xl:hidden z-40"
>
  <motion.h1 variants={itemVariants} className="text-2xl font-bold mb-6 mt-20">
    Menu
  </motion.h1>

  <div className="space-y-6">
    <motion.div variants={itemVariants}>
      <p className="font-bold">About</p>
      <motion.ul
        variants={parentVariants}
        className="pt-2 text-sm text-gray-300 space-y-1"
      >
        {["History", "Vision", "Leadership"].map((item, i) => (
          <motion.li key={i} variants={itemVariants}>{item}</motion.li>
        ))}
      </motion.ul>
    </motion.div>

    <motion.div variants={itemVariants}>
      <p className="font-bold">Residences</p>
      <motion.ul
        variants={parentVariants}
        className="pt-2 text-sm text-gray-300 space-y-1"
      >
        {["Floor Plans", "Amenities", "Gallery"].map((item, i) => (
          <motion.li key={i} variants={itemVariants}>{item}</motion.li>
        ))}
      </motion.ul>
    </motion.div>

    <motion.a variants={itemVariants} className="block font-bold">Location</motion.a>
    <motion.a variants={itemVariants} className="block font-bold">Contact</motion.a>
  </div>
</motion.div>



        )}
      </AnimatePresence>
    </main>
  )
}

