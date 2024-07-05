import React from 'react'
import Features from '../../Components/Features/Features'
import Learn from '../../Components/Learn/Learn'
import HeroSection from '../../Components/HeroSection/HeroSection'
import HomieNav from '../../Components/HomieNav/HomieNav'
import AboutStats from '../../Components/AboutStat/AboutStats'
import OnlineSteps from '../../Components/OnlineSteps/OnlineSteps'
const HomePage = () => {
  return (
    <>
    <div>
      <div>
        <HomieNav />
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
      <AboutStats />
      </div>
      <div>
        <Features />
      </div>
      <Learn />
    </div>
    <div>
      <OnlineSteps />
    </div>
    </>
  )
}

export default HomePage
