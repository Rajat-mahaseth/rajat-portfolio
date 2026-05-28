export default function About() {

  return (

    <section
      id="about"
      className="h-screen flex justify-center items-center px-[6%] py-10 overflow-hidden"
    >

      <div className="w-full max-w-7xl">

        <div className="hero-card rounded-[42px] px-16 py-12 relative h-[88vh] overflow-y-scroll">

          {/* GRID LAYOUT */}

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-start w-full">

            {/* LEFT SIDE */}

            <div>

              {/* TOP SMALL TITLE */}

              <p className="uppercase tracking-[18px] text-[#d4af37] text-[11px] mb-4">
                Engineering Profile
              </p>

              {/* MAIN TITLE */}

              <h2 className="serif text-[72px] leading-[0.9] text-white mb-8">
                About
              </h2>

              {/* SMALL INTRO */}

              <p className="serif text-[24px] leading-[1.9] text-[#d0d0d0] max-w-[720px] mb-8">
                Technical discipline rooted in aerospace fundamentals,
                UAV intelligence, simulation validation, and
                AI-driven engineering execution.
              </p>

              {/* DIVIDER */}

              <div className="w-full h-[1px] bg-[#d4af3720] mb-8"></div>

              {/* QUOTE CARD */}

              <div className="hero-card rounded-[34px] p-8 border border-[#d4af3720]">

                <h3 className="serif text-[38px] leading-[1.5] text-[#f2f2f2] mb-8">

                  “I do not only model systems. I study
                  how they evolve, optimize, and solve
                  real-world aerospace challenges.”

                </h3>

                <div className="w-full h-[1px] bg-[#d4af3720] mb-8"></div>

                {/* DESCRIPTION */}

                <p className="serif text-[24px] leading-[1.9] text-[#c8c8c8] mb-6">

                  I am an Aeronautical Engineer passionate
                  about UAV systems, CFD simulations, drone detection,
                  AI integration, and intelligent aerospace technologies.

                  My work combines computational analysis,
                  aerodynamic research, and engineering-based
                  problem solving to develop practical aerospace solutions.

                </p>

                <p className="serif text-[24px] leading-[1.9] text-[#c8c8c8] mb-8">

                  Most of my experience comes from building simulation models,
                  studying aerodynamic performance, and integrating
                  AI-driven systems into modern UAV research applications.

                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="flex flex-col items-center">

              <div className="relative mb-10">

                {/* OUTER FRAME */}

                <div className="absolute inset-0 border border-[#d4af3720] rounded-[42px] scale-[1.06]"></div>

                {/* IMAGE CONTAINER */}

                <div className="hero-card rounded-[42px] p-5 w-[420px] h-[620px] relative z-10 overflow-hidden">

                  <img
                    src="/images/profile/about.jpg"
                    className="w-full h-full object-cover rounded-[32px]"
                  />

                </div>

              </div>

              {/* INFO GRID BELOW IMAGE */}

              <div className="w-full">

                <div className="grid grid-cols-2 border border-[#d4af3720] rounded-[28px] overflow-hidden">

                  {/* INSTITUTION */}

                  <div className="p-6 border-r border-b border-[#d4af3720] bg-white/[0.01]">

                    <p className="uppercase tracking-[6px] text-[12px] text-[#d4af37] mb-4">
                      Institution
                    </p>

                    <h3 className="serif text-[20px] text-[#f3f3f3] leading-[1.6]">
                      Acharya Institute of Technology
                    </h3>

                  </div>

                  {/* PROGRAM */}

                  <div className="p-6 border-b border-[#d4af3720] bg-white/[0.01]">

                    <p className="uppercase tracking-[6px] text-[12px] text-[#d4af37] mb-4">
                      Program
                    </p>

                    <h3 className="serif text-[20px] text-[#f3f3f3] leading-[1.6]">
                      B.E Aeronautical Engineering
                    </h3>

                  </div>

                  {/* CGPA */}

                  <div className="p-6 border-r border-b border-[#d4af3720] bg-white/[0.01]">

                    <p className="uppercase tracking-[6px] text-[12px] text-[#d4af37] mb-4">
                      CGPA
                    </p>

                    <h3 className="serif text-[20px] text-[#f3f3f3] leading-relaxed">
                      9.2 / 10
                    </h3>

                  </div>

                  {/* GRADUATION */}

                  <div className="p-6 border-b border-[#d4af3720] bg-white/[0.01]">

                    <p className="uppercase tracking-[6px] text-[12px] text-[#d4af37] mb-4">
                      Graduation
                    </p>

                    <h3 className="serif text-[20px] text-[#f3f3f3] leading-relaxed">
                      May 2026
                    </h3>

                  </div>

                  {/* FOCUS */}

                  <div className="p-6 border-r border-[#d4af3720] bg-white/[0.01]">

                    <p className="uppercase tracking-[6px] text-[12px] text-[#d4af37] mb-4">
                      Focus
                    </p>

                    <h3 className="serif text-[20px] text-[#f3f3f3] leading-[1.8]">

                      UAV Systems, CFD,
                      <br />
                      Composite Materials,
                      <br />
                      AI Integration

                    </h3>

                  </div>

                  {/* LOCATION */}

                  <div className="p-6 bg-white/[0.01]">

                    <p className="uppercase tracking-[6px] text-[12px] text-[#d4af37] mb-4">
                      Location
                    </p>

                    <h3 className="serif text-[20px] text-[#f3f3f3] leading-relaxed">
                      Bangalore, India
                    </h3>

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