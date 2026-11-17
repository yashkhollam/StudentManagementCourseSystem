
import React from 'react';
import '../css/Footer.css';

import {
    FaGraduationCap,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaArrowRight,
    FaEnvelope,
    FaPhone,
    FaLocationDot
} from 'react-icons/fa6';

const Footer = () => {

    return (

        <footer className="main_footer">

            <div className="footer_container">

                <div className="row g-4">

                  

                    <div className="col-lg-4 col-md-6">

                        <div className="footer_logo">
                            <FaGraduationCap />
                            <span>EduLearn</span>
                        </div>

                        <p className="footer_about">
                            Empowering students with quality education,
                            expert instructors and practical learning
                            experiences to build a successful future.
                        </p>

                        <div className="footer_social_links">

                            <a href="#" aria-label="Facebook">
                                <FaFacebookF />
                            </a>

                            <a href="#" aria-label="Instagram">
                                <FaInstagram />
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                <FaLinkedinIn />
                            </a>

                            <a href="#" aria-label="Twitter">
                                <FaTwitter />
                            </a>

                        </div>

                    </div>


                   
                    <div className="col-lg-2 col-md-6">

                        <h5 className="footer_heading">
                            Quick Links
                        </h5>

                        <ul className="footer_links">

                            <li><a href="/">Home</a></li>
                            <li><a href="/courses">All Courses</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/instructors">Instructors</a></li>
                            <li><a href="/contact">Contact Us</a></li>

                        </ul>

                    </div>


                 

                    <div className="col-lg-2 col-md-6">

                        <h5 className="footer_heading">
                            Categories
                        </h5>

                        <ul className="footer_links">

                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Programming</a></li>
                            <li><a href="#">Data Science</a></li>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Database</a></li>

                        </ul>

                    </div>


                   

                    <div className="col-lg-4 col-md-6">

                        <h5 className="footer_heading">
                            Get In Touch
                        </h5>

                        <ul className="footer_contact">

                            <li>
                                <FaEnvelope />
                                <span>support@edulearn.com</span>
                            </li>

                            <li>
                                <FaPhone />
                                <span>+91 98765 43210</span>
                            </li>

                            <li>
                                <FaLocationDot />
                                <span>Pune, Maharashtra, India</span>
                            </li>

                        </ul>


                    </div>

                </div>


               
                <hr className="footer_divider" />

                <div className="footer_bottom">

                    <p>
                        © 2026 EduLearn. All Rights Reserved.
                    </p>

                    <div className="footer_bottom_links">

                        <a href="#">Privacy Policy</a>

                        <a href="#">Terms & Conditions</a>

                    </div>

                </div>

            </div>

        </footer>

    );

};

export default Footer;