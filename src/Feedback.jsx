



export default function FeedbackCard({ image, name, role, feedback, size = 'w-64 h-80', index }) {

  return (
    <div className={`relative rounded-lg ${size}`}>
        <img src={image} alt="" className="w-full h-full object-cover" />

        {/* Gradient nền phía dưới */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-pink-600 to-transparent bg-opacity-30"></div>

{index === 0 && (
  <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-black/40 to-transparent z-0"></div>
)}





        {/* Nội dung phía trên */}
        <div className="absolute top-0 left-0 p-4 text-white">
            <h1 className="text-2xl text-amber-200 font-bold">{name}</h1>
            <span className="text-xl text-amber-200 font-semibold">{role}</span>
        </div>

        {/* Feedback ở dưới */}
        <div className="absolute bottom-0 left-0 p-4 text-white z-10">
            <p className="text-sm italic">"{feedback}"</p>
        </div>
    </div>
  )
}



