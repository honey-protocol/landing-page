import React from "react"
import { RedirectArrowIcon } from "../Header"

const ParteneredWith = () => {
  return (
    <div className="w-full relative px-10 lg:px-28 py-32">
      <div className="w-full min-h-screen bg-honeyFalling bg-repeat opacity-[0.02] absolute top-0 left-0" />
      <div className="w-full  bg-primary rounded  ">
        <div className="w-full p-8 lg:p-16 flex flex-wrap items-center justify-center xl:justify-between bg-white overflow-hidden rounded relative translate-y-[-4px] translate-x-[-4px]">
          <div className="h-[430px] w-[430px] left-[96px] top-[160px] z-[2] blur-[332px] opacity-80	 absolute bg-primary" />
          <div className="h-[202px] w-[866px] left-[175px] bottom-[-47px] z-[1] blur-[92px] opacity-25	 absolute bg-black" />
          <div className="relative z-[5] mb-10">
            <h4 className="text-3xl lg:text-5xl font-bold mb-10 text-center lg:text-left">
              Partenered with
            </h4>
            <button className="flex items-center m-auto xl:m-0 rounded-lg bg-[#0000001A] px-6 py-2">
              Blog posts <RedirectArrowIcon />
            </button>
          </div>
          <div className="flex flex-wrap justify-around relative z-[5] gap-10 w-full xl:max-w-[510px]">
            <img src="/img/wormhole.png" className="object-contain" />
            <img src="/img/solvent.png" className="object-contain" />
            <img src="/img/katana.png" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParteneredWith
