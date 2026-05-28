import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Contact() {

  return (

    <section
      id="contact"
      className="min-h-screen flex items-center justify-center ..."
    >

      <div className="w-full max-w-7xl">

        <div className="hero-card rounded-[40px] px-16 py-10 h-[88vh] flex flex-col justify-center">

          {/* TOP */}

          <div className="mb-10">

            <p className="uppercase tracking-[12px] text-[#f6e19f] text-xs mb-4">
              LET'S CONNECT
            </p>

            <h2 className="serif text-[70px] leading-[0.9] text-white mb-6">
              Contact
            </h2>

            <p className="serif text-[22px] leading-[1.9] text-[#bdbdbd] max-w-5xl">
              Open to aerospace engineering opportunities, research
              collaborations, internships, UAV projects, and advanced
              computational simulation work.
            </p>

          </div>

          {/* MAIN GRID */}

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">

            {/* LEFT SIDE */}

            <div className="
              hero-card
              rounded-[30px]
              p-8
              border
              border-[#d4af3720]
              relative
              overflow-hidden
              flex
              flex-col
              justify-center
            ">

              {/* GLOW */}

              <div className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#d4af3708]
                to-transparent
                pointer-events-none
              "></div>

              <p className="
                uppercase
                tracking-[6px]
                text-[14px]
                text-[#d4af37]
                mb-6
                relative
                z-10
              ">
                AEROSPACE · AI · UAV SYSTEMS
              </p>

              <h3 className="
                serif
                text-[38px]
                leading-[1.25]
                text-[#f3f3f3]
                mb-8
                relative
                z-10
              ">
                Precision engineering
                meets intelligent
                aerospace systems.
              </h3>

              <p className="
                serif
                text-[20px]
                leading-[1.9]
                text-[#cfcfcf]
                relative
                z-10
                mb-10
              ">
                Passionate about UAV intelligence, CFD simulations,
                aerospace optimization, and computational engineering
                systems designed for real-world innovation.
              </p>

              {/* CONTACT BUTTON */}

              <a
                href="mailto:rajatmahaseth44@gmail.com"
                className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-[#35f505]
                  text-black
                  font-semibold
                  hover:scale-105
                  transition
                  duration-300
                  relative
                  z-10
                  w-fit
                "
              >

                <FaEnvelope size={16} />

                Get In Touch

              </a>

            </div>

            {/* RIGHT SIDE */}

            <div className="
              hero-card
              rounded-[30px]
              p-8
              border
              border-[#d4af3720]
              flex
              flex-col
              justify-between
            ">

              {/* EMAIL */}

              <div className="pb-8 border-b border-[#d4af3720]">

                <div className="flex items-center gap-4 mb-4">

                  <FaEnvelope
                    className="text-[#d4af37]"
                    size={18}
                  />

                  <p className="
                    uppercase
                    tracking-[6px]
                    text-[10px]
                    text-[#d4af37]
                  ">
                    Email
                  </p>

                </div>

                <a
                  href="mailto:rajatmahaseth44@gmail.com"
                  className="
                    serif
                    text-[22px]
                    text-[#f3f3f3]
                    hover:text-[#d4af37]
                    transition
                    break-all
                  "
                >
                  rajatmahaseth44@gmail.com
                </a>

              </div>

              {/* LINKEDIN */}

              <div className="py-8 border-b border-[#d4af3720]">

                <div className="flex items-center gap-4 mb-4">

                  <FaLinkedin
                    className="text-[#d4af37]"
                    size={18}
                  />

                  <p className="
                    uppercase
                    tracking-[6px]
                    text-[10px]
                    text-[#d4af37]
                  ">
                    LinkedIn
                  </p>

                </div>

                <a
                  href="https://www.linkedin.com/in/rajat-mahaseth-115151279/"
                  target="_blank"
                  className="
                    serif
                    text-[22px]
                    text-[#f3f3f3]
                    hover:text-[#d4af37]
                    transition
                    break-all
                  "
                >
                  linkedin.com/in/rajat-mahaseth
                </a>

              </div>

              {/* GITHUB */}

              <div className="pt-8">

                <div className="flex items-center gap-4 mb-4">

                  <FaGithub
                    className="text-[#d4af37]"
                    size={18}
                  />

                  <p className="
                    uppercase
                    tracking-[6px]
                    text-[10px]
                    text-[#d4af37]
                  ">
                    GitHub
                  </p>

                </div>

                <a
                  href="https://github.com/Rajat-mahaseth"
                  target="_blank"
                  className="
                    serif
                    text-[22px]
                    text-[#f3f3f3]
                    hover:text-[#d4af37]
                    transition
                    break-all
                  "
                >
                  github.com/Rajat-mahaseth
                </a>

              </div>

            </div>

          </div>

          {/* BOTTOM */}

          <div className="mt-10 border-t border-[#d4af3720] pt-8">

            <p className="serif text-[18px] leading-[1.9] text-[#cfcfcf] max-w-5xl">
              Interested in aerospace research, intelligent UAV systems,
              CFD simulations, or AI-integrated engineering solutions?
              Let’s connect and build future-focused aerospace technologies.
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}