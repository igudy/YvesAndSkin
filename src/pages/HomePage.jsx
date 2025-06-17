import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Features from '../components/Features'
import Story from '../components/Story'
import Carousel from '../components/Carousel'
import Nav from './Nav'
import Footer from '../components/Footer'
function HomePage() {
  return (
    <div className='mt-24'>
      <Nav/>
      <Header/>
      <Carousel/>
      <HeroSection/>
      <Features/>
      <Story/>
      <Footer/>
    </div>
  )
}

export default HomePage