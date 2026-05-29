import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {

  return (

    <section
      id="home"
       className="h-screen flex items-center justify-center px-[6%] pt-24 overflow-hidden"
    >

      <div className="w-full max-w-7xl">

        <div className="hero-card rounded-[40px] px-16 py-10 h-[88vh] overflow-y-auto overflow-x-hidden flex items-start">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

            {/* LEFT SIDE */}

            <div>

              <p className="uppercase tracking-[8px] text-[#f6e19f] text-xs mb-6">
                AERONAUTICAL ENGINEER
              </p>

              <h1 className="serif text-[95px] leading-[0.9] text-white">
                Rajat
              </h1>

              <h1 className="serif text-[95px] leading-[0.9] text-[#f6e9bb] mb-8">
                Mahaseth
              </h1>

              <p className="serif text-[22px] leading-[1.9] text-[#cfcfcf] mb-3 font-light">
                Aeronautical Engineer with experience in computational modeling,
                composite material analysis, and MATLAB-based simulation.
              </p>

              <p className="text-[#d4af37] text-lg mb-10">
                Open to Work
              </p>

              <p className="serif text-[22px] leading-[1.9] text-[#cfcfcf] mb-3 font-light">
                Aerospace engineering portfolio focused on UAV systems,
                CFD simulations, drone detection technologies, and AI-based
                aerospace research solutions.
              </p>

              {/* BUTTONS */}

              <div className="flex gap-5 mb-10 mt-8">

                <a
                  href="https://www.linkedin.com/in/rajat-mahaseth-115151279/"
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 rounded-full bg-[#ecdfb5] text-black font-semibold hover:scale-105 transition"
                >
                  <FaLinkedin size={20} />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/Rajat-mahaseth"
                  target="_blank"
                  className="flex items-center gap-3 px-8 py-4 rounded-full border border-[#d4af37]/30 hover:bg-[#d4af37] hover:text-black transition"
                >
                  <FaGithub size={20} />
                  GitHub
                </a>

              </div>

              {/* STATS */}

              <div className="grid grid-cols-4 border border-[#d4af3720] rounded-[28px] overflow-hidden mt-8">

                <div className="p-8 border-r border-[#d4af3720] bg-white/[0.01]">

                  <h3 className="serif text-[52px] leading-none gold-text mb-3">
                    03
                  </h3>

                  <p className="text-[11px] tracking-[0.35em] text-gray-400 uppercase leading-6">
                    Core <br /> Projects
                  </p>

                </div>

                <div className="p-8 border-r border-[#d4af3720] bg-white/[0.01]">

                  <h3 className="serif text-[52px] leading-none gold-text mb-3">
                    05+
                  </h3>

                  <p className="text-[11px] tracking-[0.35em] text-gray-400 uppercase leading-6">
                    Technical <br /> Skills
                  </p>

                </div>

                <div className="p-8 border-r border-[#d4af3720] bg-white/[0.01]">

                  <h3 className="serif text-[52px] leading-none gold-text mb-3">
                    08+
                  </h3>

                  <p className="text-[10px] tracking-[0.35em] text-gray-400 uppercase leading-6">
                    Engineering <br /> Domains
                  </p>

                </div>

                <div className="p-8 bg-white/[0.01]">

                  <h3 className="serif text-[52px] leading-none gold-text mb-3">
                    2026
                  </h3>

                  <p className="text-[11px] tracking-[0.35em] text-gray-400 uppercase leading-6">
                    Graduated
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="flex justify-center">

              <div className="relative">

                <div className="absolute inset-0 border border-[#d4af3720] rounded-[40px] scale-110"></div>

                <div className="hero-card rounded-[40px] p-5 w-[430px] h-[560px] overflow-hidden relative z-10">

                  <img
                    src="/images/profile/profile.png"
                    className="w-full h-full object-cover rounded-[30px]"
                  />

                </div>

                <div className="mt-8">

                  <p className="serif text-[18px] leading-[1.9] text-[#cfcfcf] mb-3 font-light">
                    Thank you for exploring my portfolio. From UAV intelligence to
                    aerospace simulations, every project here reflects curiosity,
                    innovation, and engineering-driven problem solving.
                  </p>

                  <div className="flex items-center gap-6 mt-8">

                    <a
                      href="#about"
                      className="flex items-center gap-6 group w-fit"
                    >

                      <p className="uppercase tracking-[8px] text-sm text-gray-400 group-hover:text-[#d4af37] transition duration-300">
                        Explore Sections
                      </p>

                      <div className="w-[32px] h-[58px] rounded-full border border-[#d4af3730] flex justify-center pt-3 group-hover:border-[#d4af37] transition duration-300">

                        <div className="w-2 h-2 rounded-full bg-[#f7e7b2] animate-bounce"></div>

                      </div>

                    </a>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  )
}