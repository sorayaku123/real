

import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'


export default function Navbar({ onSidebarToggle }) {
  const [isOpen, setIsOpen] = useState(false)
  const [showHeader, setShowHeader] = useState(false)


  // Gửi trạng thái sidebar cho App.jsx
  useEffect(() => {
    onSidebarToggle?.(isOpen)
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onSidebarToggle])


  // Lắng nghe scroll chỉ khi cần
  const handleScroll = useCallback(() => {
    setShowHeader(window.scrollY > 1)
  }, [])


  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])


  // Animation parent & item cho sidebar
  const parentVariants = {
    hidden: { x: 300 },
    show: {
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.35,
        ease: 'easeInOut',
        staggerChildren: 0.12
      }
    }
  }


  const itemVariants = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.35 } }
  }


  return (
    <main>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isOpen || showHeader ? 0 : -100 }}
        transition={{ duration: 1 }}
        className="fixed top-0 left-0 z-50 w-full bg-black/40 shadow-md border-b border-white/10 md:px-10 pt-5"
      >
        <div className="flex justify-between items-center px-4 xl:px-16 xl:pt-4 pb-2 h-16">
          <img src="/logo.png" className="object-cover w-20 xl:w-22" />


          <button
  className="w-10 h-10 relative mt-[15px] md:mr-5 xl:hidden"
  onClick={() => setIsOpen(!isOpen)}
>
  <span
    className={`absolute top-[8px] left-[8px] w-[24px] h-[2px] bg-sky-200 transition-all duration-300 origin-center ${
      isOpen ? 'rotate-45 translate-y-[8px]' : ''
    }`}
  />
  <span
    className={`absolute top-[16px] left-[8px] w-[24px] h-[2px] bg-sky-200 transition-opacity duration-300 ${
      isOpen ? 'opacity-0' : 'opacity-100'
    }`}
  />
  <span
    className={`absolute top-[24px] left-[8px] w-[24px] h-[2px] bg-sky-200 transition-all duration-300 origin-center ${
      isOpen ? '-rotate-45 -translate-y-[8px]' : ''
    }`}
  />
</button>






          {/* Desktop Menu */}
          <nav className="hidden xl:flex space-x-8 text-white">
            <div className="relative group">
              <motion.a whileHover={{ scale: 0.5 }} className="cursor-pointer">
                About
              </motion.a>
              <div className="absolute left-0 bg-amber-50 text-base p-6 mt-5 space-y-2 rounded shadow-lg opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto border-sky-500">
                <a className="text-amber-300 hover:text-amber-400 block">History</a>
                <a className="text-amber-300 hover:text-amber-400 block">Vision</a>
                <a className="text-amber-300 hover:text-amber-400 block">Leadership</a>
              </div>
            </div>
            <div className="relative group">
              <span className="cursor-pointer">Residences</span>
              <div className="absolute left-0 bg-amber-50 text-base p-6 mt-5 space-y-2 rounded shadow-lg opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out pointer-events-none group-hover:pointer-events-auto border-sky-500">
                <a className="text-amber-300 hover:text-amber-400 block">Floor</a>
                <a className="text-amber-300 hover:text-amber-400 block">Plans</a>
                <a className="text-amber-300 hover:text-amber-400 block">Gallery</a>
              </div>
            </div>
            <a href="#location" className="hover:text-amber-300">
              Location
            </a>
            <a href="https://masterisehomes.com/lien-he" className="hover:text-amber-300">
              Contact
            </a>
          </nav>
        </div>
      </motion.header>


      {/* Mobile Sidebar + Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed z-30 xl:hidden"
            />


            {/* Sidebar */}
            <motion.div
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={parentVariants}
              className="fixed top-[63px] right-0 h-full w-72 bg-gray-700 text-white p-6 shadow-lg space-y-4 opacity-[.95] xl:hidden z-40"
            >
              <motion.h1 variants={itemVariants} className="text-2xl font-bold mb-6 mt-20">
                Menu
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






