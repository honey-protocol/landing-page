import React from "react";
import Button from "../Button/Button";

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
            Lending and borrowing for NFTS
          </h1>
          <p className="text-lg text-primary-paragraph text-center md:text-left mb-7 md:mb-14 max-w-prose w-full">
              Create lending pools by pairing any NFT and any fungible token together.
          </p>
          <div className="flex z-1 justify-center md:justify-start">
            <Button
              style={{ backgroundColor: "#509EEA", borderColor: "#509EEA" }}
              onClick={() => {
                window.open("https://arbitrum.honey.finance");
              }}
              className="mr-9"
            >
              Arbitrum
            </Button>
            <Button
              style={{ backgroundColor: "#9F65F7", borderColor: "#9F65F7" }}
              onClick={() => {
                window.open("https://polygon.honey.finance/");
              }}
              className="mr-9"
            >
              Polygon
            </Button>{" "}
            <Button
              style={{ backgroundColor: "#25ee99", borderColor: "#25ee99" }}
              onClick={() => {
                window.open("https://solana.honey.finance/");
              }}
              className="mr-9"
            >
              Solana
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
  );
};

export { HeroSection };
