import React from "react"

const FeaturedIn = () => {
  return (
    <div className="w-full px-[50px] lg:px-[140px] relative bg-[#FAFAFA] py-[40px]">
      <p className="text-center w-full text-lg pb-10">AS FEATURED IN</p>
      <div className="w-full flex flex-wrap gap-16 justify-around items-center">
        <img src="/img/featured-in/superteam.svg" className="object-contain" />
        <img src="/img/featured-in/nft-berlin.svg" className="object-contain" />
        <img src="/img/featured-in/nft.svg" className="object-contain" />
        <img src="/img/featured-in/web3-wire.svg" className="object-contain" />
      </div>
    </div>
  )
}

export { FeaturedIn }
