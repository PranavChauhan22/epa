import React from "react";
import "./Footer.css";
import { TbBrandFacebook } from "react-icons/tb";
import { FiTwitter } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import logo from "../../images/epalogo.png";
function Footer() {
  return (
    <div className="footerbg">
      <div className="footer_flex">
        <div className="footer_sec1">
          <div className="footer_head">Contact</div>
          <div className="footer_body">
            <div>EPA Labels Nederland </div>
            <div className="footer_mr">Sumatraraast 257 </div>
            <div className="footer_mr">2585 CR's - Gravenhoge </div>
          </div>
          <div className="footer_body">
            <div>ob - 12345678 </div>
            <div className="footer_mr">info@epalabelsnederland.nl </div>
          </div>
        </div>
        <div className="footer_sec1">
          <div className="footer_head">Opening stijden</div>
          <div className="footer_body footer_mra">Moondag : 9:00 - 18:00</div>
          <div className="footer_body footer_mra">Dinsdag : 9:00 - 18:00</div>
          <div className="footer_body footer_mra">Woendag : 9:00 - 18:00</div>
          <div className="footer_body footer_mra">Ponderdag : 9:00 - 18:00</div>
          <div className="footer_body footer_mra">Vindag : 9:00 - 18:00</div>
          <div className="footer_body footer_mra">Zaterdag : Op aanuraag</div>
          <div className="footer_body footer_mra">Zondog : Geslotenk</div>
        </div>

        <div className="icons_wrap_img">
          <img src={logo} className="img_logo" />
          <div className="icon_flex">
            <TbBrandFacebook className="icon_footer" />
            <FiTwitter className="icon_footer" />
            <FiYoutube className="icon_footer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
