// src/components/ProjectCard.jsx
export default function ProjectCard({ image, title, desc, location, url}) {
  return (
    <a className="block cursor-pointer shadow-lg p-2 bg-white xl:w-[423px]" href={url}
      target="_blank"
      rel="noopener noreferrer"
>
      <img src={image} className="w-full md:h-[250px]" />
      <h2 className="text-xl font-semibold mt-3 text-[#ba7c38]">{title}</h2>
      <p className="mt-2">{desc}</p>
      <div className="flex items-center gap-2 mt-2">
        <img src="/location.png" className="size-4" />
        <p className="uppercase text-[#ba7c38] text-sm">địa chỉ</p>
      </div>
      <p className="mt-1">{location}</p>
      <div className="flex items-center gap-1 mt-2 text-[#ba7c38] cursor-pointer">
        <span>Khám phá</span>
        <img src="/arrow.svg" className="w-4" />
      </div>
    </a>
  )
}











