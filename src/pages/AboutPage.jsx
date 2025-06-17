import React from 'react'
import AboutHeader from '../components/AboutHeader'
import AboutStory from '../components/AboutStory'
import AboutOwner from '../components/AboutOwner'
import AboutTeam from '../components/AboutTeam'
import Nav from './Nav'
import Footer from '../components/Footer'

function AboutPage() {
  return (
    <div className='mt-24'>
        <Nav/>
        <AboutHeader/>
        <AboutStory/>
        <AboutOwner/>
        <AboutTeam/>
        <Footer/>
    </div>
  )
}

export default AboutPage