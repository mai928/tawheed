import React from 'react'
import Header from './Header'
import Slider from './Slider'
import About from './About'
import Services from './Services'
import Gallary from './Gallary'
import Partner from './Partner'
import Footer from './Footer'
import Contact from './Contact'

const Main = () => {
  return (
   <section>
    <Header/>
    <Slider/>
    <About/>
    <Services/>
    <Gallary/>
    <Partner/>
    <Contact/>
    <Footer/>
   </section>
  )
}

export default Main