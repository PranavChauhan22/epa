import React from 'react'
import Bodysec1 from '../bodysec1/Bodysec1'
import Bodysec2 from '../bodysec2/Bodysec2'
import Cards from '../cards/Cards'
import Footer from '../footer/Footer'
import Home from '../home/Home'
import Homesub from '../homesub/Homesub'
import Navbar from './Navbar'

function Homeroute() {
  return (
    <>
     <Navbar color={"#d3e6c9"}/>
      <Home/>
      <Homesub/>
      <Bodysec1/>
      <Cards/>
      <Bodysec2/>
      <Footer/>
    </>
  )
}

export default Homeroute