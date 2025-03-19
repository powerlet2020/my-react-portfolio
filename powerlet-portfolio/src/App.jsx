import React from 'react'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/Mywork/Mywork'
import Contact from './Components/Contact/Contact'
import Reviews from './Components/Review/Reviews'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App