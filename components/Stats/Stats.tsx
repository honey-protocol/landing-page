import React from "react"
import Button from "../Button/Button"

const Stats = () => {
  return (
    <div className="w-full relative min-h-screen pt-28 px-10 md:px-32">
      <div className="w-full bg-black h-[546px] absolute z-0 top-0 left-0" />
      <div className="w-full min-h-screen bg-honeyFalling z-0 bg-repeat opacity-[0.02] absolute bottom-0 left-0" />
      <div className="w-full flex flex-col lg:flex-row relative">
        <div className="w-full mr-[30px] mt-auto flex  flex-col">
          <div className="w-full flex flex-wrap justify-around lg:justify-between gap-5 justify-between items-center">
            <div className="w-fit mb-11 mt-8">
              <p className="text-[#B8B8B8] text-center lg:text-left font-semibold text-xl xl:text-2xl">
                TVL
              </p>
              <h6 className="font-medium text-white text-2xl xl:text-[44px]">
                ...
              </h6>
            </div>
            <div className="w-fit mb-11 mt-8">
              <p className="text-[#B8B8B8] text-center lg:text-left font-semibold text-xl xl:text-2xl">
                NFTs Deposited
              </p>
              <h6 className="font-medium  text-center lg:text-left text-white text-2xl xl:text-[44px]">
                ...
              </h6>
            </div>
            <div className="w-fit mb-11 mt-8">
              <p className="text-[#B8B8B8]  text-center lg:text-left font-semibold text-xl xl:text-2xl">
                Daily Transactions
              </p>
              <h6 className="font-medium  text-center lg:text-left text-white text-2xl xl:text-[44px]">
                ...
              </h6>
            </div>
          </div>
          <div className="w-full lg:w-fit grid-cols-1 sm:grid-cols-2  lg:grid-cols-3	grid gap-[30px]">
            <div className="w-full lg:w-fit bg-black rounded  ">
              <div className="px-3 h-full w-full bg-white rounded border border-black translate-y-[-4px] translate-x-[-4px]">
                <div className="w-full flex flex-wrap justify-between items-center mb-5 mt-7">
                  <h6 className="font-bold text-2xl">DegenApe</h6>
                  <p className="text-primary-paragraph text-base">ESe...DuH</p>
                </div>
                <img className=" object-contain w-full" src="/img/1.png" />
                <div className="w-full mb-7 mt-5">
                  <p className="text-primary-paragraph text-base">Avg. Value</p>
                  <h6 className="font-medium text-[20px]">168 SOL</h6>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-fit bg-black rounded  ">
              <div className="px-3 h-full w-full bg-white rounded border border-black translate-y-[-4px] translate-x-[-4px]">
                <div className="w-full flex flex-wrap justify-between items-center mb-5 mt-7">
                  <h6 className="font-bold text-2xl">DeGods</h6>
                  <p className="text-primary-paragraph text-base">@HGE.sol</p>
                </div>
                <img className=" object-contain w-full" src="/img/2.png" />
                <div className="w-full mb-7 mt-5">
                  <p className="text-primary-paragraph text-base">Avg. Value</p>
                  <h6 className="font-medium text-[20px]">288 SOL</h6>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-fit bg-black rounded  ">
              <div className="px-3 h-full w-full bg-white rounded border border-black translate-y-[-4px] translate-x-[-4px]">
                <div className="w-full flex flex-wrap justify-between items-center mb-5 mt-7">
                  <h6 className="font-bold text-2xl">Phunk</h6>
                  <p className="text-primary-paragraph text-base">0xD62...5a5</p>
                </div>
                <img className=" object-contain w-full" src="/img/3.png" />
                <div className="w-full mb-7 mt-5">
                  <p className="text-primary-paragraph text-base">Avg. Value</p>
                  <h6 className="font-medium text-[20px]">1.0324 ETH</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-fit mt-10 lg:mt-0 lg:w-full lg:max-w-[345px] bg-black rounded  ">
          <div className="px-3 w-full lg:max-w-[345px] bg-white rounded border border-black translate-y-[-4px] translate-x-[-4px]">
            <div className="w-full flex flex-wrap justify-between items-center mb-8 mt-11">
              <h6 className="font-bold text-3xl lg:text-4xl">Azuki</h6>
              <p className="text-primary-paragraph text-2xl">0xFa0...2A0</p>
            </div>
            <img className=" object-contain w-full" src="/img/Azuki.png" />
            <div className="w-full mb-11 mt-8">
              <p className="text-primary-paragraph text-2xl">Avg. Value</p>
              <h6 className="font-medium text-[28px]">10.03 ETH</h6>
            </div>
          </div>
        </div>
      </div>
      <Button className="mx-auto my-24">EXPLORE POOLS ON HONEY</Button>
    </div>
  )
}

export default Stats
