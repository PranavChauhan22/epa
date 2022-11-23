import React from 'react'
import "./Homesub.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"
function Homesub() {
  return (
      <div className='home_sub_main'>

    
        <div className="homesub_head">
        <p className="homesub_head_text">
            Check Your Energy Labels
            </p>
    <div className="homesub">
        <div className='left_homesub'>
            <input className="left_homesub_inp" placeholder='Postcode'/>
            <input className="left_homesub_inp" placeholder='Housenumber'/>
            <input className="left_homesub_inp" placeholder='Cityname'/>
        </div>
        <div className='right_homesub'>
            <div className="btn">Check</div>
        </div>
    </div>
    </div>
    <div>
        <HiOutlineMail className="mail_icon1"/>
        <BsWhatsapp className="mail_icon2"/>
    </div>
    </div>
  )
}

export default Homesub