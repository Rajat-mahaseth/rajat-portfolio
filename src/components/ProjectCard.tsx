import Image from "next/image"

interface Props {
  title: string
  desc: string
  image: string
  tech: string[]
}

export default function ProjectCard({
  title,
  desc,
  image,
  tech,
}: Props) {

  return (

    <div className="hero-card rounded-[34px] overflow-hidden border border-[#d4af3720] group hover:border-[#d4af3760] transition duration-500 h-full">

      {/* IMAGE */}

      <div className="relative h-[260px] overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-700"
        />

        {/* IMAGE OVERLAY */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"></div>

      </div>

      {/* CONTENT */}

      <div className="p-8">

        {/* TITLE */}

        <h3 className="serif text-[38px] leading-tight text-[#f5f5f5] mb-6">
          {title}
        </h3>

        {/* DESCRIPTION */}

        <p className="serif text-[18px] leading-[1.9] text-[#bdbdbd] mb-8">
          {desc}
        </p>

        {/* TECH TAGS */}

        <div className="flex flex-wrap gap-3">

          {tech.map((item, index) => (

            <span
              key={index}
              className="
                px-5
                py-2
                rounded-full
                border
                border-[#d4af3730]
                text-[#d4af37]
                text-[11px]
                uppercase
                tracking-[3px]
                bg-white/[0.02]
                hover:bg-[#d4af3710]
                transition
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

    </div>

  )
}