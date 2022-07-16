import React from "react"
import { RedirectArrowIcon } from "../Header"

const HowItWorks = () => {
  return (
    <div className=" pt-10 w-full items-center pl-5 lg:pl-[135px] flex flex-wrap md:flex-nowrap bg-black min-h-[433px]">
      <div className="w-full">
        <h2 className="text-white text-3xl lg:text-5xl text-center lg:text-left font-bold mb-4">
          How it works?
        </h2>
        <a
          href="https://docs.honey.finance/"
          className="bg-white w-fit px-5 shadow-[inset_1px_1px_1px_#E7B400] py-2 flex  m-auto lg:m-0 text-black font-semibold text-sm"
        >
          Read Docs{"   "}
          <span className="ml-2">
            <RedirectArrowIcon />
          </span>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative p-12">
        <img
          src="/img/line.svg"
          className="w-full hidden sm:block absolute top-0 right-0"
        />
        <div className="text-center sm:text-left">
          <h4 className="text-white font-bold text-xl">Liquidity</h4>
          <p className="text-[#fafafa] opacity-[0.45] max-w-prose text-sm font-semibold">
            Honey allows lenders to deposit capital into pools of liquidity in
            return for yield.
          </p>
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-white font-bold text-xl">Collateral</h4>
          <p className="text-[#fafafa] opacity-[0.45] max-w-prose text-sm font-semibold">
            Borrowers deposit NFT collateral to withdraw capital from lending
            pools.
          </p>
        </div>
        <div className="text-center sm:text-left">
          <h4 className="text-white font-bold text-xl">Borrowing</h4>
          <p className="text-[#fafafa] opacity-[0.45] max-w-prose text-sm font-semibold">
            {`Interest accrues on the borrower's debt. It must be repaid to withdraw the collateral`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
