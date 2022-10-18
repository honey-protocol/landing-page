import React from "react"
import Button from "../Button/Button"

const HeroSection = () => {
  return (
    <div className="w-full py-32 md:py-0 min-h-screen items-center flex flex-col md:flex-row justify-start lg:justify-between px-10 md:px-28 relative overflow-hidden">
      <img
        src="/img/HexPattern.svg"
        className="absolute z-0 w-[1626px] h-[1723.66px] top-[-508px] left-[189px]"
      />
      <div className="flex">
        <div className="w-full relative  z-1">
          <h1 className="text-4xl lg:text-5xl text-center md:text-left mb-4 font-semibold max-w-[713px] w-full">
            Lending and borrowing for NFTs
          </h1>
          <p className="text-lg text-primary-paragraph text-center md:text-left mb-7 md:mb-14 max-w-prose w-full">
            Honey is empowering NFT collectors with simple financial tools to
            participate in multichain DeFi.
          </p>
          <div className="flex z-1 justify-center md:justify-start">
            <Button
              onClick={() => {
                window.open("https://beta.honey.finance/")
              }}
              className="mr-9"
            >
              Try beta
            </Button>
            <Button ghost
            onClick={() => {
              window.open("https://docs.honey.finance")
            }}
            className="mr-9"
          >
            Learn more
          </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-fit ml-0 md:ml-7 mt-10 md:mt-0 z-1 relative">
        <img
          className="object-contain w-full max-w-[449px]"
          src="/img/HERO.svg"
        />
      </div>
    </div>
  )
}

export { HeroSection }
