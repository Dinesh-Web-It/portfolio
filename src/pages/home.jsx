import React from 'react'
import NaveBar from '../components/navebar/naveBar'
import FrontContent from '../components/frontContent/frontContent'
import Features from '../components/features/features'
import Footer from '../components/footer/footer'

const Home = () => {
  return (
    <div>
        <NaveBar />
        <FrontContent />
        <Features />
        <Footer />
    </div>
  )
}

export default Home