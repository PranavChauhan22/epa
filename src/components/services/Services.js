import React from 'react'
import Bodysec1 from '../bodysec1/Bodysec1'
import Cards from '../cards/Cards'
import Navbar from './Navbar'
import "../home/Home.css"
import Footer from '../footer/Footer'
import "../homesub/Homesub.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"
function Services() {
  return (
    <div>
 
      <Navbar color={"#FFFFFF"}/>
        <Bodysec1/>
        <div>
        <HiOutlineMail className="mail_icon1"/>
        <BsWhatsapp className="mail_icon2"/>
    </div>
        <Cards/>
        <div className='services_sec1'>

        <div className='service_line'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        </div>
        <div className='service_line'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        </div>
        <div className='service_line'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        </div>
       
        </div>
        <div className='services_sec' style={{backgroundColor:"#d3e6c9",padding:"40px",marginTop:"40px",marginBottom:"-120px"}}>

        <div className='service_line_head'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        </div>
        <div className='service_line'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        </div>
        <div className='service_line_head'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        </div>
        <div className='service_line'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
        </div>
        
       
        </div>
        <Footer/>
    </div>
  )
}

export default Services