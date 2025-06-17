import React from 'react'
import ContactInfo from '../components/ContactInfo'
import ContactBranch from '../components/ContactBranch'
import Nav from './Nav'
import Footer from '../components/Footer'

function ContactPage() {
  return (
    <div className='mt-24'>
      <Nav/>
      <ContactInfo/>
      <ContactBranch/>
      <Footer/>
    </div>
  )
}

export default ContactPage