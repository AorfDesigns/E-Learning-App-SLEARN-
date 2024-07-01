import React from 'react'
import Features from '../../Components/Features/Features'
import Learn from '../../Components/Learn/Learn'
import Testimonial from '../../Components/Testimonial/Testimonial'
import HeroSection from '../../Components/HeroSection/HeroSection'

const HomePage = () => {
  return (
    <>
    <div>
      <div>
       {/* <Navbar /> */}
      </div>
      <div>
        <HeroSection />
      </div>
      <div>
        <Features />
      </div>
      <Learn />
    </div>
    <div>
      <Testimonial image="./Images/Account.jpg" name={"John Doe"} content={"SLearn is a beautiful place to be"} />
    </div>
    </>
  )
}

export default HomePage
