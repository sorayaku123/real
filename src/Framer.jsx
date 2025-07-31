import { motion } from 'framer-motion'

export default function Framer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-10">
      <motion.h1
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold mb-4 text-pink-300"
      >
        Hello, Framer Motion 👋
      </motion.h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
        className="px-6 py-2 bg-blue-600 text-white rounded shadow"
      >
        Hover me!
      </motion.button>

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeInOut" }}
  viewport={{ once: true }}
  className="mb-8 p-6 bg-white rounded shadow mt-96"
>
  <h2 className="text-xl font-bold">Section Title</h2>
  <p>Some content here...</p>
</motion.div>

    
      <motion.div
  initial="hidden"
  animate="show"
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }}
  className="space-y-2">

  {["Line one", "Line two", "Line three"].map((line, i) => (
    <motion.p
      key={i}
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.6 }}
      className="text-gray-700"
    >
      {line}
    </motion.p>
  ))}
</motion.div>


    </div>
  )
}









