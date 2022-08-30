import React, { useState } from "react"
import { navOpenClasses, toggleMobileNav } from "../MobileNavMenu/MobileNavMenu"
import { MenuClose, MenuToggle } from "../svg"

const getIsMobileMenuOpen = () => {
  const navMenu = document.getElementById("mobile-nav-menu")
  return navMenu?.classList.contains(navOpenClasses) ? true : false
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const onToggle = () => {
    toggleMobileNav()
    setIsMenuOpen(getIsMobileMenuOpen())
  }
  return (
    <div className="w-full  z-10 px-5 md:px-10 fixed flex justify-between items-center top-0 left-0 h-16">
      <div className="w-full h-full left-0 top-0 bg-white  absolute" />
      <img
        src="./img/Honey_FullLogo_Black.svg"
        className="object-contain w-36 relative"
      />
      <div className="grid-flow-col gap-10 relative hidden md:grid">
        <a
          href="https://app.honey.finance/governance"
          className="cursor-pointer hover:font-medium"
          >
            Governance
        </a>
        <a
          href="https://github.com/honey-labs"
          className="cursor-pointer hover:font-medium"
            >
          Developers
        </a>
        <a
          href="https://blog.honey.finance/"
          className="cursor-pointer hover:font-medium"
        >
          Blog
        </a>
        <a
          href="https://www.notion.so/honey-resources/Honey-Resources-3856fb63153944e5bd1f9792830b2328"
          className="cursor-pointer hover:font-medium"
        >
          Resources
        </a>
      </div>
      <a
        href="https://app.honey.finance/farm"
        className="bg-black relative hidden md:flex px-5 shadow-[inset_1px_1px_1px_#E7B400] py-2 text-white uppercase text-sm"
      >
        GO TO APP
        <RedirectArrowIcon />
      </a>
      <button
        onClick={onToggle}
        className="flex items-center justify-center z-40 md:hidden text-black w-10 h-10"
      >
        {!isMenuOpen ? <MenuToggle /> : <MenuClose />}
      </button>
    </div>
  )
}

export { Header }
export const RedirectArrowIcon = () => {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.4766 5.61902L5.47656 15.619"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.14355 5.61902H15.4769V13.9524"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
