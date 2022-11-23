import React from "react";
import Map from "../map/Map";
import Navbar from "../services/Navbar";
import { ImLocation } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import Footer from "../footer/Footer";
import "../homesub/Homesub.css"
import {HiOutlineMail} from "react-icons/hi"
import {BsWhatsapp} from "react-icons/bs"

function Contact() {
  return (
    <div>
      <Navbar color={"#FFFFFF"} />
      <Map />
      <div>
        <HiOutlineMail className="mail_icon1"/>
        <BsWhatsapp className="mail_icon2"/>
    </div>
      <div className="contact_sec">
        <div className="left_section_contact">
          <div className="ls_hd">Lorem ipsum dolor sit amet.</div>
          <div className="ls_md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam eros
            eu massa aliquet. Donec sed aliquam leo bibendum amet.
          </div>
          <div className="icons_text">
            <div className="icon_wrap_c">
              <ImLocation className="icon_ls_c" />
              <div className="icon_ls_txt">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
            <div className="icon_wrap_c">
              <AiFillHome className="icon_ls_c" />
              <div className="icon_ls_txt">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
            <div className="icon_wrap_c">
              <IoIosMail className="icon_ls_c" />
              <div className="icon_ls_txt">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
            <div className="icon_wrap_c">
              <BsFillTelephoneFill className="icon_ls_c" />
              <div className="icon_ls_txt">
                Lorem ipsum dolor sit amet, consectetur.
              </div>
            </div>
          </div>
          <div className="ls_hd">Lorem ipsum dolor sit</div>
          <div className="ls_md">Lorem ipsum dolor sit</div>
          <div className="ls_md">Lorem ipsum dolor sit</div>
          <div className="ls_md">Lorem ipsum dolor sit</div>
        </div>
        <div className="right_section_contact">
          <div className="right_sec_txt">Contact Us</div>
          <input className="input_field_c" placeholder="First Name" />
          <input className="input_field_c" placeholder="Last Name" />
          <input className="input_field_c" placeholder="Gmail" />
          <input className="input_field_c" placeholder="Phone Number" />
          <textarea
            className="input_field_c_ta"
            placeholder="Write Something..."
          />
          <div className="right_sec_btn">Submit</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;
