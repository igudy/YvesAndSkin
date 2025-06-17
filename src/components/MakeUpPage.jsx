import React from 'react'
import MakeUpOne from './MakeUpOne'
import MakeUpTwo from './MakeUpTwo'
import Nav from '../pages/Nav'
import Footer from './Footer'

function MakeUpPage() {
  return (
    <div className='mt-16'>
      <Nav/>
      <MakeUpOne/>
      <MakeUpTwo/>
      <Footer/>
    </div>
  )
}

export default MakeUpPage