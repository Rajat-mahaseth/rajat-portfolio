export default function Experience() {

  return (

    <section
      id="experience"
      className="h-screen flex items-center justify-center px-[6%] pt-24 overflow-hidden"
    >

      <div className="w-full max-w-7xl">

        <div className="hero-card rounded-[40px] px-16 py-10 h-[88vh] overflow-y-auto">

          {/* TOP */}

          <div className="mb-10">

            <p className="uppercase tracking-[8px] text-[#f6e19f] text-xs mb-4">
              PROFESSIONAL TIMELINE
            </p>

            <h2 className="serif text-[72px] leading-[0.9] text-white mb-6">
              Experience
            </h2>

            <p className="serif text-[24px] leading-[1.9] text-[#bdbdbd] max-w-5xl">
              Hands-on aerospace maintenance exposure combined with advanced
              computational research in composite material analysis,
              structural simulations, and intelligent engineering systems.
            </p>

          </div>

          {/* EXPERIENCE GRID */}

          <div className="grid lg:grid-cols-2 gap-6">

            {/* EXPERIENCE 1 */}

            <div className="
              hero-card
              rounded-[30px]
              p-8
              border
              border-[#d4af3720]
              relative
              hover:-translate-y-2
              transition
              duration-500
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

              {/* DATE */}

              <p className="
                uppercase
                tracking-[6px]
                text-[18px]
                text-[#fcc40a]
                mb-4
                relative
                z-10
              ">
                JULY 2025 — AUGUST 2025
              </p>

              {/* COMPANY + LOGO */}

              <div className="
                flex
                items-center
                justify-between
                mb-3
                relative
                z-10
              ">

                <h3 className="
                  serif
                  text-[32px]
                  leading-tight
                  text-[#f3e6b3]
                ">
                  Buddha Air Pvt Ltd.
                </h3>

                <img
                  src="/images/company/buddhaair.png"
                  alt="Buddha Air"
                  className="w-[60px] h-[60px] object-contain"
                />

              </div>

              {/* ROLE */}

              <p className="
                text-gray-400
                text-[20px]
                mb-6
                relative
                z-10
              ">
                Workshop Division · TIA, Kathmandu, Nepal
              </p>

              {/* DESCRIPTION */}

              <p className="
                serif
                text-[24px]
                leading-[1.9]
                text-[#cfcfcf]
                relative
                z-10
              ">
                Worked in the Base Maintenance and Workshop Division for
                ATR 42 and ATR 72 aircraft systems. Assisted in wheel and
                brake inspections, maintenance procedures, and aircraft
                workshop operations while gaining practical exposure to
                aviation maintenance standards.
              </p>

              {/* TAGS */}

              <div className="flex flex-wrap gap-2 mt-8 relative z-10">

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  ATR 42
                </span>

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  ATR 72
                </span>

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  Eddy Current NDT
                </span>

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  Fluorescent Penetrant
                </span>

              </div>

            </div>

            {/* EXPERIENCE 2 */}

            <div className="
              hero-card
              rounded-[30px]
              p-8
              border
              border-[#d4af3720]
              relative
              hover:-translate-y-2
              transition
              duration-500
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

              {/* DATE */}

              <p className="
                uppercase
                tracking-[6px]
                text-[18px]
                text-[#d4af37]
                mb-4
                relative
                z-10
              ">
                FEB 2026 — JUNE 2026
              </p>

              {/* COMPANY + LOGO */}

              <div className="
                flex
                items-center
                justify-between
                mb-3
                relative
                z-10
              ">

                <h3 className="
                  serif
                  text-[32px]
                  leading-tight
                  text-[#f3e6b3]
                ">
                  IIT Madras
                </h3>

                <img
                  src="/images/company/iitm.png"
                  alt="IIT Madras"
                  className="w-[60px] h-[60px] object-contain"
                />

              </div>

              {/* ROLE */}

              <p className="
                text-gray-400
                text-[20px]
                mb-6
                relative
                z-10
              ">
                Research Intern · Chennai, India
              </p>

              {/* DESCRIPTION */}

              <p className="
                serif
                text-[24px]
                leading-[1.9]
                text-[#cfcfcf]
                relative
                z-10
              ">
                Worked on modeling the uniaxial tensile behavior of
                Ramie fibre composites using the MPSA constitutive model.
                Processed experimental data from literature, predicted
                stress–strain responses, analyzed stiffness degradation,
                and validated computational results through numerical
                comparisons in MATLAB.
              </p>

              {/* TAGS */}

              <div className="flex flex-wrap gap-2 mt-8 relative z-10">

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  MATLAB
                </span>

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  MPSA Model
                </span>

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  Composite Analysis
                </span>

                <span className="px-4 py-2 border border-[#d4af3730] rounded-full text-[10px] uppercase tracking-[2px] text-[#d4af37]">
                  Stress–Strain
                </span>

              </div>

            </div>

          </div>

          {/* BOTTOM */}

          <div className="mt-10 border-t border-[#d4af3720] pt-8">

            <p className="serif text-[20px] leading-[1.9] text-[#cfcfcf] max-w-5xl">
              My experience combines aerospace workshop operations,
              aircraft maintenance exposure, computational research,
              and advanced simulation methodologies focused on solving
              real-world engineering problems through analytical and
              intelligent systems.
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}