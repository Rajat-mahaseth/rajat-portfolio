const skillCategories = [
  {
    title: "SIMULATION",
    items: [
      { name: "ANSYS Fluent", level: "PROFICIENT", width: "92%" },
      { name: "CFD Analysis", level: "ADVANCED", width: "88%" },
      { name: "Stress-Strain Modeling", level: "ADVANCED", width: "90%" },
      { name: "MPSA Modeling", level: "ADVANCED", width: "92%" },
    ],
  },

  {
    title: "PROGRAMMING",
    items: [
      { name: "MATLAB", level: "PROFICIENT", width: "90%" },
      { name: "Python", level: "PROFICIENT", width: "85%" },
      { name: "C", level: "ADVANCED", width: "88%" },
    
    ],
  },

  {
    title: "CAD & DESIGN",
    items: [
      { name: "CATIA", level: "ADVANCED", width: "88%" },
      { name: "Solid Edge", level: "ADVANCED", width: "85%" },
      { name: "UAV Design", level: "PROFICIENT", width: "82%" },
      { name: "Composite Structures", level: "ADVANCED", width: "86%" },
    ],
  },

  {
    title: "AEROSPACE",
    items: [
      { name: "UAV Systems", level: "ADVANCED", width: "92%" },
      { name: "Aerodynamics", level: "ADVANCED", width: "87%" },
      { name: "Wind Turbine CFD", level: "PROFICIENT", width: "84%" },
      { name: "Drone Detection", level: "ADVANCED", width: "90%" },
    ],
  },

  {
    title: "RESEARCH",
    items: [
      { name: "Experimental Validation", level: "PROFICIENT", width: "82%" },
      { name: "Data Visualization", level: "PROFICIENT", width: "80%" },
      { name: "Engineering Analysis", level: "ADVANCED", width: "88%" },
      { name: "Composite Analysis", level: "ADVANCED", width: "86%" },
    ],
  },

  {
    title: "TOOLS",
    items: [
      { name: "Git & GitHub", level: "FAMILIAR", width: "72%" },
      { name: "Microsoft Office", level: "ADVANCED", width: "88%" },
      { name: "Documentation", level: "ADVANCED", width: "86%" },
      { name: "Research Reporting", level: "PROFICIENT", width: "82%" },
    ],
  },
]

export default function Skills() {

  return (

    <section
      id="skills"
      className="h-screen flex items-center justify-center px-[6%] py-10 overflow-hidden"
    >

      <div className="w-full max-w-7xl">

        <div className="hero-card rounded-[40px] px-16 py-14 h-[88vh] overflow-y-auto">

          {/* TOP */}

          <div className="mb-14">

            <p className="uppercase tracking-[12px] text-[#fff3cc] text-xs mb-6">
              CAPABILITY MATRIX
            </p>

            <h2 className="serif text-[90px] leading-[0.9] text-white mb-6">
              Skills
            </h2>

            <p className="serif text-[24px] leading-[1.9] text-[#cfcfcf] max-w-5xl">
              Categorized technical expertise across aerospace systems,
              computational simulations, AI-driven engineering,
              and advanced research methodologies.
            </p>

          </div>

          {/* LINE */}

          <div className="border-t border-[#d4af3720] mb-12"></div>

          {/* GRID */}

          <div className="grid lg:grid-cols-3 gap-8 pb-10">

            {skillCategories.map((category, index) => (

              <div
                key={index}
                className="
                  hero-card
                  rounded-[24px]
                  p-8
                  border
                  border-[#d4af3720]
                "
              >

                {/* TITLE */}

                <p className="
                  uppercase
                  tracking-[6px]
                  text-[16px]
                  text-[#f9e9b5]
                  mb-10
                ">
                  {category.title}
                </p>

                {/* ITEMS */}

                <div className="space-y-8">

                  {category.items.map((item, i) => (

                    <div key={i}>

                      {/* HEADER */}

                      <div className="
                        flex
                        justify-between
                        items-center
                        mb-3
                      ">

                        <h3 className="
                          serif
                          text-[18px]
                          text-[#f3f3f3]
                        ">
                          {item.name}
                        </h3>

                        <p className="
                          text-[11px]
                          tracking-[4px]
                          uppercase
                          text-[#a9a9a9]
                        ">
                          {item.level}
                        </p>

                      </div>

                      {/* BAR */}

                      <div className="
                        w-full
                        h-[8px]
                        bg-white/[0.05]
                        rounded-full
                        overflow-hidden
                      ">

                        <div
                          className="
                            h-full
                            rounded-full
                            bg-[#07f84b]
                          "
                          style={{ width: item.width }}
                        ></div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

          {/* BOTTOM */}

          <div className="mt-14 border-t border-[#d4af3720] pt-10">

            <p className="serif text-[22px] leading-[1.9] text-[#cfcfcf] max-w-5xl">
              From CFD simulations and AI-powered drone detection to
              composite material analysis and UAV system development,
              these skills represent the core technologies driving my
              aerospace engineering projects and research work.
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}