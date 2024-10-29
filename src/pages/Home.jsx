import React from 'react'
import Hero from '../components/Hero'
import MainMenu from '../components/MainMenu'
import BestSellers from '../components/BestSellers'

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <MainMenu />
    </div>
  )
}

export default Home
