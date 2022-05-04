import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top ">
                <div className='d-flex'>
                    <div>
                        <ul class="nav col-md-4 justify-content-start ps-3 m-3">
                            <p>Contacts</p>
                            <li><small>dipdeb55@gmail.com</small></li>
                            <li><small>+8801636973443</small></li>
                            <li><small>deb55@yahoo.com</small></li>
                            <li><small>www.carhouse.com</small></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="nav col-md-4 justify-content-start ps-3 m-3">
                            <p>Get Help</p>
                            <li><small>24/7 Call Service</small></li>
                            <li><small>Any time training</small> </li>
                            <li><small>Diet for your body</small></li>
                            <li><small>Get motivation</small></li>
                        </ul>
                    </div>
                    <div style={{ gap: "10px" }} className="d-flex m-5 p-3">
                        <div><FaFacebook></FaFacebook></div>
                        <div> <FaInstagram></FaInstagram></div>
                        <div><FaLinkedin></FaLinkedin></div>
                        <div><FaTwitter></FaTwitter></div>
                    </div>
                </div>
                <p className="last-p">© 2022 Dip, Inc</p>
            </footer>
        </div>
    );
};

export default Footer;