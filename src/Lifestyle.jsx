import { motion } from "framer-motion"

export default function Lifestyle({ imgSrc, title, subtitle, paragraphs, imgBottom = "/img7.png", reverse = false }) {

  return (
    <div className="bg-amber-200 min-h-96 relative xl:flex gap-4 text-lg">
      {!reverse && (
        <motion.img
          src={imgSrc}
          className="max-w-full min-h-[300px] md:object-left h-[300px] w-full xl:h-[500px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
      )}

      <motion.section
        className="pt-4 pl-4 pr-4"
        
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div
  className={`transition-all duration-300  ${
    reverse ? 'md:text-right pr-10' : ''
  }`}
   style={{ fontFamily: 'Monaco'}}
>

                      <h1 className="text-[23px] mb-2 text-amber-200 uppercase font-bold xl:pt-4 xl:text-4xl md:text-sm">{title}</h1>
                   <span className="text-[23px] text-amber-400 uppercase font-semibold block mb-2 xl:text-4xl italic">{subtitle}</span>
        </div>

        {paragraphs.map((text, i) => (
          <p key={i} className="mt-2 text-sm pb-2 md:text-sm md:font-myfont2 xl:text-md">{text}</p>
        ))}


<img
  src={imgBottom}
  className={`absolute bottom-0 
    ${reverse 
      ? 'left-0 md:right-0 md:left-auto md:scale-x-[-1]' 
      : 'right-0 md:left-0 top-[172px] md:scale-x-100'
    } 
    size-32 brightness-80 transition-all duration-150 
  `}
/>



      </motion.section>

      {reverse && (
        <div className="w-full">
           <motion.img
          src={imgSrc}
           className="max-w-full md:h-[300px] object-top xl:h-[500px] w-full"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          viewport={{ once: true }}
        />
          </div>
       
      )}
    </div>
  )
}
