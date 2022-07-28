import React from "react"

const About = () => {
  return (
    <div className="w-full min-h-screen flex items-center relative">
      <div className="w-full min-h-full bg-honeyFalling bg-repeat opacity-[0.04] absolute top-0 left-0" />
      <div className="w-full max-w-[992px] mx-auto pb-[125px]">
        <h1 className="text-center font-bold text-3xl lg:text-5xl mt-24 mb-5">
          Borrow against your NFTs
        </h1>
        <p className="text-lg mb-14 text-center mx-auto text-primary-paragraph   w-full">
          {`Honey Finance allows users to obtain instant liquidity on Defi's most illiquid assests, enabling loans to be issued in the metaverse.`}
        </p>
        <div className="flex flex-col md:flex-row w-full p-10 lg:p-0">
          <div className="bg-primary mb-10 md:mb-0  w-full md:max-w-[372px] min-h-full rounded mr-7">
            <div className="border border-black translate-x-[4px] flex flex-col justify-start translate-y-[-4px] min-h-full w-full rounded px-[27px] bg-white py-[37px]">
              <h4 className="font-bold text-2xl md:text-3xl mb-6">NFT Loans</h4>
              <div>
                <p className="text-md text-primary-paragraph">
                  Borrow from pools of liquidity at a variable interest rate
                </p>
                <p className="text-md text-primary-paragraph mt-3">
                  Lenders earn yield by single staking WETH or USDC, while
                  borrowers can take out loans with their NFTs as collateral.
                </p>
                <p className="text-md text-primary-paragraph mt-3">
                  Honey also enables tokenised strucutred products  to be collateralised, creating a new layer of liquidity for financial derivatives.

                </p>
              </div>
            </div>
          </div>
          <div className="w-full min-h-full flex flex-col justify-between">
            <div className="bg-primary mb-[30px] w-full flex flex-1 rounded">
              <div className="border border-black translate-x-[-4px] flex flex-col justify-start translate-y-[-4px] w-full rounded px-[37px] bg-white py-[22px]">
                <h4 className="font-bold text-2xl md:text-3xl mb-[10px]">
                  Metaverse
                  <br />
                  Liquidity
                </h4>

                <p className="text-md text-primary-paragraph mt-4">
                  {`Honey is building the financial systems of tomorrow's metaverse games.`}
                </p>
              </div>
            </div>
            <div className="w-full flex  flex-1">
              <div className="bg-primary flex  w-1/2  rounded mr-7">
                <div className="border border-black translate-x-[-4px]  translate-y-[-4px] flex-1 w-full rounded px-[27px] bg-white py-5 flex flex-col justify-start">
                  <h4 className="font-bold text-2xl md:text-2xl text-center md:text-left mx-auto lg:mx-0 ">
                    NFT Pools
                  </h4>
                  <p className="text-md text-primary-paragraph mt-4">
                    Borrow from pools of liquidity at a variable interest rate.
                  </p>
                </div>
              </div>
              <div className="bg-primary flex w-1/2  rounded ">
                <div className="border border-black translate-x-[-4px]  translate-y-[-4px] flex-1 w-full rounded px-[20px] bg-white py-5 flex flex-col justify-start">
                  <h4 className="font-bold text-2xl md:text-2xl text-center md:text-left mx-auto ">
                    <span className="text-primary">$HONEY </span>
                    Liquid Assets in DeFi
                  </h4>
                  <p className="text-md text-primary-paragraph mt-4">
                    Earn rewards for directing liquidity across our markets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }
