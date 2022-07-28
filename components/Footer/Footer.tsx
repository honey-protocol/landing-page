import React from "react"
import { RedirectArrowIcon } from "../Header"

const Footer = () => {
  return (
    <div className="w-full justify-around relative z-[5] pt-28 px-28 pb-10 flex">
      <div className="w-full h-[1px] absolute top-0 bg-[#D0D0D0]" />
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex h-auto flex-col w-full lg:max-w-[470px]">
          <h4 className="font-bold mb-4 text-[28px] text-center lg:text-left">
            Honey Finance is run by our DAO and operated by Honey Labs.
          </h4>
          <div className="flex items-center justify-center lg:justify-start mb-10">
            <a
              href="https://docs.honey.finance/"
              className="flex items-center mr-2 rounded-lg bg-[#0000001A] px-6 py-2"
            >
              Documentation <RedirectArrowIcon />
            </a>
            <a
              href="https://drive.google.com/file/d/1dN0W9enyq2Q71VXegm6bJL6zUcbRZMkm/view"
              className="flex items-center  rounded-lg bg-[#0000001A] px-6 py-2"
            >
              Whitepaper <RedirectArrowIcon />
            </a>
          </div>
          <div className="grid grid-cols-3 px-10 justify-items-center lg:justify-items-start lg:pl-0 gap-5">
            <a href="https://discord.com/invite/T7RQ8hMamB">
              <img src="/img/Footer/Discord.svg" />
            </a>

            <a href="https://twitter.com/honeydefi">
              <img src="/img/Footer/Twitter.svg" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 w-full lg:grid-cols-2">
          <div
            className={`bg-primary w-full min-h-[290px] text-black relative rounded `}
          >
            <div
              className={` transition-all flex flex-col min-h-[290px] h-full items-center translate-x-[-4px] px-5 py-[30px] translate-y-[-4px] border border-black bg-white rounded`}
            >
              <h4 className="text-[29px] text-center mb-4 font-bold">
                Honey DAO
              </h4>
              <p className="text-xs text-primary-paragraph text-center">
                Governed by veHONEY, the DAO allows stakeholders to vote on
                strategy, treasury, emissions, risk parameters for the protocol.
              </p>
              <p className="text-xs text-primary-paragraph mt-5 text-center">
                {`The DAO allows open source contributors to participate in the development of Honey Finance, paying bounties and incentives to it's builders.`}
              </p>
            </div>
          </div>
          <div
            className={`bg-primary w-full min-h-[290px] text-black relative rounded `}
          >
            <div
              className={` transition-all flex flex-col min-h-[290px] h-full items-center translate-x-[-4px] px-5 py-[30px] translate-y-[-4px] border border-black bg-white rounded`}
            >
              <h4 className="text-[29px] text-center mb-4 font-bold">
                Honey Labs
              </h4>
              <p className="text-xs text-primary-paragraph text-center">
                Honey Labs builds the protocol and proposes changes to the DAO.
                It oversees day to day operations and version updates.
              </p>
              <p className="text-xs text-primary-paragraph text-center mt-5">
                Honey Labs also develops privatised lending markets for
                institutions looking to trade with NFT collateral.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
