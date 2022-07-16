import React from "react"

const Liquidation = () => {
  return (
    <div className="w-full p-14 bg-primary">
      <div className={`bg-black w-full text-black relative rounded `}>
        <div
          className={` transition-all relative translate-x-[-4px] translate-y-[-4px] border border-black bg-white px-5 md:px-20 pt-14 pb-28 rounded`}
        >
          <img
            className="absolute object-contain w-[200px] md:w-[225px] bottom-[-31px] z-[5] right-[-61px]"
            src="/img/honeycoin.svg"
          />
          <h2 className="w-full text-center font-bold text-3xl lg:text-5xl mb-20 ">
            NFT Liquidation Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div
              className={`bg-black w-full min-h-[290px] text-black relative rounded `}
            >
              <div
                className={` transition-all flex flex-col min-h-[290px] h-full items-center translate-x-[-4px] px-6 py-8 translate-y-[-4px] border border-black bg-white rounded`}
              >

                <h4 className="text-2xl lg:text-3xl text-center mb-4 font-bold">
                  Opportunity Cost
                </h4>
                <p className="text-lg text-primary-paragraph text-center">
                  Capital locked up in NFTs is missing out on all of the
                  opportunities in DeFi.
                </p>
                <p className="text-lg text-primary-paragraph mt-5 text-center">
                  Unlocking liquidity from NFTs allows you to earn yield, or
                  participate in the next NFT mint.
                </p>
              </div>
            </div>
            <div
              className={`bg-black w-full min-h-[290px] text-black relative rounded `}
            >
              <div
                className={` transition-all flex flex-col min-h-[290px] h-full items-center translate-x-[-4px] px-6 py-8 translate-y-[-4px] border border-black bg-white rounded`}
              >

                <h4 className="text-2xl lg:text-3xl  text-center mb-4 font-bold">
                  Non-fungibility{" "}
                </h4>
                <p className="text-lg text-primary-paragraph text-center">
                  NFTs cannot be traded easily. Borrowing against an NFT in your
                  collection means you no longer have to sell it!
                </p>
                <p className="text-lg text-primary-paragraph mt-5 text-center">
                  Collateralisation also means less listings, reducing the
                  volatility of supported collections.
                </p>
              </div>
            </div>
            <div
              className={`bg-black w-full min-h-[290px] text-black relative rounded `}
            >
              <div
                className={` transition-all flex flex-col min-h-[290px] h-full items-center translate-x-[-4px] px-6 py-8 translate-y-[-4px] border border-black bg-white rounded`}
              >

                <h4 className="text-2xl lg:text-3xl  text-center mb-4 font-bold">
                  Unrealized Gains
                </h4>
                <p className="text-lg text-primary-paragraph text-center">
                  Borrowing against NFTs allow collectors to profit from rising
                  prices without needing to cash out early.
                </p>
                <p className="text-lg text-primary-paragraph mt-5 text-center">
                  No need to flip NFTs, you can now invest in the long term
                  without sacrificing your liquidity
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Liquidation }
