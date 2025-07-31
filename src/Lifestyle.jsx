import { motion } from "framer-motion"

export default function Lifestyle({ imgSrc, title, subtitle, paragraphs, imgBottom = "/img7.png", reverse = false }) {
  return (
    <div className="bg-amber-200 min-h-96 relative xl:flex gap-4 text-lg">
      {!reverse && (
        <motion.img
          src={imgSrc}
          className="max-w-full md:h-[300px] xl:h-[500px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      )}

      <motion.section
        className="pt-4 pl-4 pr-4"
        
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
  className={`transition-all duration-300  ${
    reverse ? 'md:text-right md:pr-4' : ''
  }`}
   style={{ fontFamily: 'Monaco'}}
>

                      <h1 className="text-[23px] mb-2 text-amber-400 uppercase font-bold xl:pt-4">{title}</h1>
                   <span className="text-[23px] text-amber-400 uppercase font-semibold block mb-2">{subtitle}</span>
        </div>

        {paragraphs.map((text, i) => (
          <p key={i} className="mt-2 text-sm pb-2">{text}</p>
        ))}

<img
  src={imgBottom}
  className={`absolute bottom-0 
    ${reverse 
      ? 'left-0 md:right-0 md:left-auto md:scale-x-[-1]' 
      : 'right-0 md:left-0 md:right-auto md:scale-x-100'
    } 
    size-32 brightness-60 transition-all duration-150 
  `}
/>



      </motion.section>

      {reverse && (
        <div className="w-full">
           <motion.img
          src={imgSrc}
           className="max-w-full md:h-[300px] xl:h-[500px] w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
          </div>
       
      )}
    </div>
  )
}
