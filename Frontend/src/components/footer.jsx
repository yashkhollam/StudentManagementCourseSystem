import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Footer.css';

import {
    FaGraduationCap,
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaEnvelope,
    FaPhone,
    FaLocationDot
} from 'react-icons/fa6';

const Footer = () => {

    const navigate = useNavigate();

    return (
        <footer className="main_footer">

            <div className="footer_container">

                <div className="row g-4">

                    {/* BRAND */}

                    <div className="col-lg-4 col-md-6">

                        <div className="footer_logo" onClick={() => navigate('/')}>
                            <FaGraduationCap />
                            <span>EduLearn</span>
                        </div>

                        <p className="footer_about">
                            Empowering students with quality education,
                            expert instructors and practical learning
                            experiences to build a successful future.
                        </p>

                        <div className="footer_social_links">
                            <a href="#"><FaFacebookF /></a>
                            <a href="#"><FaInstagram /></a>
                            <a href="#"><FaLinkedinIn /></a>
                            <a href="#"><FaTwitter /></a>
                        </div>

                    </div>


                    {/* QUICK LINKS */}

                    <div className="col-lg-2 col-md-6">

                        <h5 className="footer_heading">Quick Links</h5>

                        <ul className="footer_links">

                            <li onClick={() => navigate('/')}>Home</li>

                            <li onClick={() => navigate('/allcourses')}>
                                All Courses
                            </li>

                            <li onClick={() => navigate('/allcategory')}>
                                All Categories
                            </li>

                            <li onClick={() => navigate('/howitworks')}>
                                How It Works
                            </li>

                            <li onClick={() => navigate('/contact')}>
                                Contact Us
                            </li>

                        </ul>

                    </div>


                    {/* CATEGORIES */}

                    <div className="col-lg-2 col-md-6">

                        <h5 className="footer_heading">Categories</h5>

                        <ul className="footer_links">

                            <li onClick={() => navigate('/allcategory')}>
                                Web Development
                            </li>

                            <li onClick={() => navigate('/allcategory')}>
                                Programming
                            </li>

                            <li onClick={() => navigate('/allcategory')}>
                                Data Science
                            </li>

                            <li onClick={() => navigate('/allcategory')}>
                                UI/UX Design
                            </li>

                            <li onClick={() => navigate('/allcategory')}>
                                Database
                            </li>

                        </ul>

                    </div>


                    {/* CONTACT */}

                    <div className="col-lg-4 col-md-6">

                        <h5 className="footer_heading">Get In Touch</h5>

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

                    <p>© 2026 EduLearn. All Rights Reserved.</p>

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