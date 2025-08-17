
import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


export default function Navbar({ onSidebarToggle }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)


  // Gửi trạng thái sidebar cho App.jsx
  useEffect(() => {
    onSidebarToggle?.(isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onSidebarToggle])


  // Sau 1s thì header mới hiện ra
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])


  // Lắng nghe scroll, check hướng
  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    if (currentY > lastScrollY) {
      // scroll xuống
      setShowHeader(true)
    } else {
      // scroll lên
      setShowHeader(false)
    }
    setLastScrollY(currentY)
  }, [lastScrollY])


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])


  // Animation parent & item cho sidebar 
const parentVariants = { hidden: { x: 300 }, show: { x: 0, transition: { type: 'tween', duration: 0.35, ease: 'easeOut', staggerChildren: 0.5 } } } 
const itemVariants = { hidden: { opacity: 0, x: 30 }, show: { opacity: 1, x: 0, transition: { duration: 0.5 } } }

  return (
    <main>
      {/* Header */}
      <motion.header
  initial={{ y: -100 }}
  animate={{ y: showHeader || isOpen ? 0 : -100 }}
  transition={{ duration: 0.8 }}
  className="fixed top-0 left-0 z-50 w-full bg-black/40 shadow-md flex items-center md:px-10 pt-5"
>
  <div className="flex items-center justify-between w-96 md:w-[680px] xl:w-full">
    <img src="/logo.png" className="object-cover w-20 xl:w-22" />

    {/* Nút toggle mobile */}
    <button
      className="relative w-10 h-10 xl:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={`absolute left-1/2 top-[10px] w-7 h-[2px] bg-sky-200 transition-all duration-300 transform -translate-x-1/2
          ${isOpen ? 'rotate-45 translate-y-[8px]' : ''}`}
      />
      <span
        className={`absolute left-1/2 top-[18px] w-7 h-[2px] bg-sky-200 transition-all duration-300 transform -translate-x-1/2
          ${isOpen ? 'opacity-0' : 'opacity-100'}`}
      />
      <span
        className={`absolute left-1/2 top-[26px] w-7 h-[2px] bg-sky-200 transition-all duration-300 transform -translate-x-1/2
          ${isOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
      />
    </button>
  </div>



 


        {/* Desktop menu ... giữ code cũ */}
           {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-8 text-white">
            <article className="relative group">
              <motion.a whileHover={{ scale: 0.5 }} className="cursor-pointer hover:text-amber-300">
                About
              </motion.a>
              <div className="absolute left-0 bg-amber-50 text-base p-6 mt-5
              space-y-2 rounded shadow-lg opacity-0 translate-y-12 group-hover:opacity-100
              group-hover:translate-y-0 transition-all duration-500 ease-in-out group-hover:pointer-events-auto border-sky-500">
                <a className="text-amber-300 hover:text-amber-400 block" href="https://masterisehomes.com">History</a>
                <a className="text-amber-300 hover:text-amber-400 block "href="https://masterisehomes.com">Vision</a>
                <a className="text-amber-300 hover:text-amber-400 block"href="https://masterisehomes.com">Leadership</a>
              </div>
            </article>
            <div className="relative group">
              <span className="cursor-pointer hover:text-amber-300">Residences</span>
              <div className="absolute left-0 bg-amber-50 text-base p-6 mt-5
              space-y-2 rounded shadow-lg opacity-0 translate-y-12 group-hover:opacity-100
              group-hover:translate-y-0 transition-all duration-500 ease-in-out group-hover:pointer-events-auto border-sky-500">
                <a className="text-amber-300 hover:text-amber-400 block"href="https://masterisehomes.com">Floor</a>
                <a className="text-amber-300 hover:text-amber-400 block"href="https://masterisehomes.com">Plans</a>
                <a className="text-amber-300 hover:text-amber-400 block"href="https://masterisehomes.com">Gallery</a>
              </div>
            </div>
            <a href="#location" className="hover:text-amber-300">
              Location
            </a>
            <a href="https://masterisehomes.com/lien-he" className="hover:text-amber-300">
              Contact
            </a>
          </nav>
      </motion.header>








     








 








      {/* Mobile Sidebar + Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
            />




            {/* Sidebar */}
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={parentVariants}
              className="fixed top-[63px] right-0 h-full w-72 bg-gray-700 text-amber-200 p-6 space-y-4 opacity-[.95] z-10 xl:hidden"
            >
              <motion.h1 variants={parentVariants} transition={5000} className="text-2xl font-bold mb-6 mt-20">
                Masteri Home
              </motion.h1>




              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <p className="font-bold">About</p>
                  <motion.ul variants={parentVariants} className="pt-2 text-sm text-gray-300 space-y-1">
                    {['History', 'Vision', 'Leadership'].map((item, i) => (
                      <motion.li key={i} variants={itemVariants}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>




                <motion.div variants={itemVariants}>
                  <p className="font-bold">Residences</p>
                  <motion.ul variants={parentVariants} className="pt-2 text-sm text-gray-300 space-y-1">
                    {['Floor Plans', 'Amenities', 'Gallery'].map((item, i) => (
                      <motion.li key={i} variants={itemVariants}>
                        {item}
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>




                <motion.a variants={itemVariants} className="block font-bold">
                  Location
                </motion.a>
                <motion.a variants={itemVariants} className="block font-bold">
                  Contact
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}





