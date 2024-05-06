import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id="footer">
            <div className="footer-content">
                  <div className="footer-content-left">
                       <img src={assets.logo} alt="" /> 
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus justo non dui tincidunt, ut aliquam lectus molestie. In hac habitasse platea dictumst. Sed convallis enim id erat bibendum, vel tristique tortor tempus.</p>
                       <div className="footer-social-icons">
                              <img src={assets.facebook_icon} alt="" />
                              <img src={assets.twitter_icon} alt="" />
                              <img src={assets.linkedin_icon} alt="" />
                       </div>
                  </div>

                  <div className="footer-content-center">
                        <h2>COMPANY</h2>
                        <ul>
                              <li>Home</li>
                              <li>About us</li>
                              <li>Delivery</li>
                              <li>Privacy Policy</li>
                        </ul>
                  </div>

                  <div className="footer-content-right">
                         <h2>GET IN TOUCH</h2>
                         <ul>
                              <li>+94 710 123 456</li>
                              <li>contact@tomato.com</li>
                        </ul>     
                  </div>

            </div>
            <hr />
            <p className="footer-copyright">
                  copyright 2024 @ tomato.com - All right reserved
            </p>
    </div>
  );
}


export default Footer;
