"use client"

import { useEffect, useState } from "react"

export default function Navbar() {

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {

    const handleScroll = () => {

      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "contact",
      ]

      const scrollPosition = window.scrollY + 200

      sections.forEach((section) => {

        const element = document.getElementById(section)

        if (element) {

          const offsetTop = element.offsetTop
          const height = element.offsetHeight

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section)
          }

        }

      })

    }

    window.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  const navClass = (section: string) =>
    activeSection === section
      ? `
        px-6
        py-3
        rounded-full
        border
        border-[#d4af3750]
        bg-[#ffffff08]
        text-[#d4af37]
        shadow-[0_0_20px_rgba(212,175,55,0.08)]
        transition
        duration-300
      `
      : `
        hover:text-[#d4af37]
        transition
        duration-300
      `

  return (

    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-[#d4af3715]
      bg-[#0a0503]/80
      backdrop-blur-xl
    ">

      <div className="
        max-w-7xl
        mx-auto
        flex
        items-center
        justify-between
        px-12
        py-5
      ">

        {/* LOGO */}

        <div className="
          text-white
          text-[20px]
          font-semibold
          tracking-[6px]
        ">
          RM / ME
        </div>

        {/* NAV LINKS */}

        <div className="
          flex
          items-center
          gap-8
          text-[15px]
          font-medium
          text-[#e5e5e5]
        ">

          <a href="#home" className={navClass("home")}>
            Home
          </a>

          <a href="#about" className={navClass("about")}>
            About
          </a>

          <a href="#projects" className={navClass("projects")}>
            Projects
          </a>

          <a href="#skills" className={navClass("skills")}>
            Skills
          </a>

          <a href="#experience" className={navClass("experience")}>
            Experience
          </a>

          <a href="#contact" className={navClass("contact")}>
            Contact
          </a>

        </div>

        {/* RESUME BUTTON */}

        <a
          href="/Resume/Rajat(Resume).pdf"
          download
          className="
            px-8
            py-4
            rounded-full
            border-2
            border-[#05cd37]
            text-[#f2f2f2]
            text-[15px]
            font-semibold
            hover:bg-[#d4af37]
            hover:text-black
            transition
            duration-300
          "
        >
          Resume
        </a>

      </div>

    </nav>

  )
}