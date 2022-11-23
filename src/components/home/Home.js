import React from 'react'
import "./Home.css"

import sec_img from "../../images/home_sec_img.png"
import { Link } from 'react-router-dom'
import Navbar from '../services/Navbar'
function Home() {
  return (
    <div className="home_section">
        
        <div className="second_sec">
            <div className="sec_left">
                <div className="sec_left_head">
                Lorem ispum dolor sir amet dolo
                </div>
                <div className="sec_left_body">
                Deidcated resources, full root access, & easy scaling. It’s the virtual private server you’ve been cravin
                </div>
                <div className="btns_sec">
                    <div className="btn">
                        Contact Us
                    </div>
                    <div className="btn">
                        Sign Up
                    </div>
                </div>
            </div>
            <div className="sec_right">
                <img src={sec_img} className="img_sec_right"/>
            </div>
        </div>
    </div>
  )
}

export default Home
