
const projects = [
  {
    number: "01",
    org: "Drone Detection Project  (Major Project)",
    title: "Drone Detection System",
    subtitle: "AI-Based UAV Surveillance | 2026",
    status: "Completed",

    tags: ["AI/ML", "Computer Vision", "YOLO"],

    problem:
      "Develop a real-time drone detection and tracking framework capable of differentiating UAVs, birds, and aircraft under varying environmental conditions.",

    approach:
      "Implemented a YOLO-based detection pipeline integrated with DeepSORT tracking and trained the model using custom aerial datasets for improved detection accuracy.",

    analysis:
      "Validated drone classification performance through frame-by-frame tracking consistency, object confidence analysis, and detection stability.",

    result:
      "Successfully achieved reliable UAV detection and multi-object tracking suitable for aerospace surveillance applications.",
  },

  {
    number: "02",
    org: "CFD project  (mini Project)",
    title: "Wind Turbine Optimization",
    subtitle: "ANSYS Fluent Simulation | 2025",
    status: "Completed",

    tags: ["ANSYS Fluent", "CFD", "HAWT"],

    problem:
      "Improve aerodynamic efficiency and startup performance of a horizontal axis wind turbine operating under low wind speed conditions.",

    approach:
      "Designed modified blade geometries with increased solidity and flap-based configurations to improve low-speed rotational characteristics.",

    analysis:
      "Performed CFD simulations in ANSYS Fluent to study pressure contours, velocity distribution, and turbine performance behavior.",

    result:
      "Enhanced turbine startup capability and optimized aerodynamic characteristics for improved low-speed energy extraction.",
  },

  {
    number: "03",
    org: "Indian Institute of Technology, MADRAS",
    title: "MPSA Composite Modeling",
    subtitle: "Ramie Fibre Composite Analysis | 2026",
    status: "Research Work",

    tags: ["MATLAB", "MPSA Model", "Stress-Strain"],

    problem:
      "Model stiffness degradation and tensile constitutive behavior of ramie fibre composites under uniaxial loading conditions.",

    approach:
      "Implemented the MPSA model in MATLAB using experimental stress-strain data extracted from published research literature.",

    analysis:
      "Compared numerical predictions with experimental observations to validate stiffness degradation trends and constitutive response behavior.",

    result:
      "Successfully generated degradation-based tensile response curves and validated computational material behavior models.",
  },
]

export default function Projects() {

  return (

    <section
      id="projects"
      className="h-screen flex items-center justify-center px-[6%] py-10 overflow-hidden"
    >

      <div className="w-full max-w-7xl">

        <div className="hero-card rounded-[42px] px-14 py-12 h-[88vh] overflow-y-auto">

          {/* HEADER */}

          <div className="mb-12">

            <p className="uppercase tracking-[8px] text-[#d4af37] text-[13px] mb-4">
              Engineering Work
            </p>

            <h2 className="serif text-[74px] leading-[0.9] text-white mb-6">
              Projects
            </h2>

            <p className="serif text-[20px] leading-[1.9] text-[#cfcfcf] max-w-[900px]">
              Aerospace, AI, CFD, and computational engineering
              projects focused on intelligent systems, aerodynamic
              simulations, and research-driven aerospace innovation.
            </p>

          </div>

          {/* PROJECTS */}

          <div className="space-y-10">

            {projects.map((project, index) => (

              <div
                key={index}
                className="
                  hero-card
                  rounded-[34px]
                  border
                  border-[#d4af3720]
                  p-10
                "
              >

                {/* TOP */}

                <div className="mb-6">

                  <p className="uppercase tracking-[5px] text-[#d4af37] text-[14px] mb-3">

                    Project {project.number} / {project.org}

                  </p>

                  <h3 className="serif text-[44px] text-[#f3f3f3] mb-2 leading-tight">
                    {project.title}
                  </h3>

                  <p className="serif text-[20px] text-[#d0d0d0] mb-5">
                    {project.subtitle}
                  </p>

                  <div className="flex flex-wrap gap-3">

                    <span className="
                      px-5 py-2
                      border border-[#d4af3760]
                      rounded-full
                      text-[11px]
                      tracking-[2px]
                      uppercase
                      text-[#04f769]
                    ">
                      ● {project.status}
                    </span>

                    {project.tags.map((tag, i) => (

                      <span
                        key={i}
                        className="
                          px-5 py-2
                          rounded-full
                          bg-white/[0.03]
                          border border-[#d4af3720]
                          text-[11px]
                          tracking-[3px]
                          uppercase
                          text-[#d4af37]
                        "
                      >
                        {tag}
                      </span>

                    ))}

                  </div>

                </div>

                {/* CONTENT */}

                <div className="space-y-8">

                  <div className="border-t border-[#d4af3720] pt-6">

                    <p className="uppercase tracking-[5px] text-[#d4af37] text-[16px] mb-4">
                      Problem
                    </p>

                    <p className="serif text-[24px] leading-[1.9] text-[#d0d0d0]">
                      {project.problem}
                    </p>

                  </div>

                  <div className="border-t border-[#d4af3720] pt-6">

                    <p className="uppercase tracking-[5px] text-[#d4af37] text-[16px] mb-4">
                      Approach
                    </p>

                    <p className="serif text-[24px] leading-[1.9] text-[#d0d0d0]">
                      {project.approach}
                    </p>

                  </div>

                  <div className="border-t border-[#d4af3720] pt-6">

                    <p className="uppercase tracking-[5px] text-[#d4af37] text-[16px] mb-4">
                      Analysis
                    </p>

                    <p className="serif text-[24px] leading-[1.9] text-[#d0d0d0]">
                      {project.analysis}
                    </p>

                  </div>

                  <div className="border-t border-[#d4af3720] pt-6">

                    <p className="uppercase tracking-[5px] text-[#d4af37] text-[16px] mb-4">
                      Result
                    </p>

                    <p className="serif text-[24px] leading-[1.9] text-[#d0d0d0]">
                      {project.result}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>

  )
}
