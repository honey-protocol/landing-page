import type { NextPage } from "next"
import { About } from "../components/About"
import { FeaturedIn } from "../components/FeaturedIn"
import Footer from "../components/Footer"
import { Header } from "../components/Header"
import { HeroSection } from "../components/HeroSection"
import HowItWorks from "../components/HowItWorks"
import { Liquidation } from "../components/Liquidation"
import MobileNavMenu from "../components/MobileNavMenu/MobileNavMenu"
import ParteneredWith from "../components/ParteneredWith"
import Stats from "../components/Stats"

const Home: NextPage = () => {
  return (
    <div className="w-full ">
      <Header />
      <MobileNavMenu />
      <HeroSection />
      {/* <FeaturedIn /> */}
      <About />
      <Liquidation />
      <Stats />
      <HowItWorks />
      <ParteneredWith />
      <Footer />
    </div>
  )
}

export default Home
