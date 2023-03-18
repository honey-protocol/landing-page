import React from "react"
import { RedirectArrowIcon } from "../Header"

export const navOpenClasses = "translate-x-0"
export const navClosedClasses = "translate-x-full"

export const toggleMobileNav = () => {
  const navMenu = document.getElementById("mobile-nav-menu")
  if (navMenu?.classList.contains(navOpenClasses)) {
    navMenu?.classList.add(navClosedClasses)
    navMenu?.classList.remove(navOpenClasses)
  } else {
    navMenu?.classList.add(navOpenClasses)
    navMenu?.classList.remove(navClosedClasses)
  }
}

const MobileNavMenu = () => {
  return (
    <div
      id="mobile-nav-menu"
      className="fixed z-50 bg-stone-100 duration-500  px-10 right-0 h-screen mt-[64px] w-full max-w-[500px] flex flex-col gap-20 items-center justify-center translate-x-full"
    >
      <div className="flex flex-col items-center gap-10">
        <a className="cursor-pointer hover:font-medium">Governance</a>
        <a className="cursor-pointer hover:font-medium">Developers</a>
        <a
          href="https://blog.honey.finance/"
          className="cursor-pointer hover:font-medium"
        >
          Blog
        </a>
      </div>

      <a
        href="https://docs.honey.finance/"
        className="bg-black relative px-5 shadow-[inset_1px_1px_1px_#E7B400] flex gap-3 py-2 text-white uppercase text-sm"
      >
        Read docs
        <RedirectArrowIcon />
      </a>
    </div>
  )
}

export default MobileNavMenu
