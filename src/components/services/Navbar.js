import React from "react";
import { Link } from "react-router-dom";
import "../home/Home.css";
import logo from "../../images/epalogo.png";

function Navbar(props) {
  return (
    <div className="navbar" style={{backgroundColor:props.color}}>
      <div className="left_sec">
        <img src={logo} className="logo_img" />
      </div>
      <div className="right_sec">
        <div className="ele_nav">
        <Link to="/" className="link_style">Home</Link>
        </div>
        <div className="ele_nav">
          <Link to="/services" className="link_style">Diensten</Link>
        </div>
        <div className="ele_nav">
        <Link to="/contact" className="link_style">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
