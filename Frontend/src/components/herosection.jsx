import React from 'react';
import '../css/herosection.css';

import boyimg from '../../public/Happy Student Learning Online.png';

import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { PiCertificateBold } from "react-icons/pi";
import { FaRegFileCode, FaArrowRight } from "react-icons/fa";

import { categories } from '../components/data/categoryicon.jsx';
import { featuredCourses } from '../components/data/categoryicon';
import feedbackData from '../components/data/categoryicon';

import Footer from '../components/footer.jsx';
import HowItWorks from '../page/howitworks.jsx';

import { useNavigate } from 'react-router-dom';


function Hero() {

  const navigate = useNavigate();

  return (
    <>

      {/* HERO SECTION */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-12 col-lg-6">

              <span className="hero-badge">
                🚀 Learn • Practice • Build
              </span>

              <h1 className="hero-title mt-3">
                Upgrade Your Skills,
                <br />
                Build <span>Your Future</span>
              </h1>

              <p className="hero-description">
                Learn in-demand skills with practical courses,
                hands-on projects and real-world experience.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">

                <button
                  className="btn btn-primary hero-btn"
                  onClick={() => navigate('/allcourses')}
                >
                  Explore Courses →
                </button>

                <button
                  className="btn btn-outline-primary hero-btn"
                  onClick={() => navigate('/howitworks')}
                >
                  How it Works
                </button>

              </div>


              {/* HERO FEATURES */}

              <div className="d-flex flex-wrap gap-4 mt-4">

                <span className="d-flex align-items-center gap-2">
                  <IoMdCheckmarkCircleOutline className="heroicon" />
                  <p className="p-0 m-0">Expert Instructors</p>
                </span>

                <span className="d-flex align-items-center gap-2">
                  <PiCertificateBold className="heroicon" />
                  <p className="p-0 m-0">Certificate</p>
                </span>

                <span className="d-flex align-items-center gap-2">
                  <FaRegFileCode className="heroicon" />
                  <p className="p-0 m-0">Hands-on Projects</p>
                </span>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="col-12 col-lg-6 text-center">

              <img
                src={boyimg}
                alt="Student learning online"
                className="hero-image"
              />

            </div>

          </div>

        </div>

      </section>


      {/* EXPLORE BY CATEGORY */}

      <section className="category-section">

        <div className="d-flex justify-content-between px-3 px-md-5">

          <p className="fw-bold fs-4">
            Explore by Category
          </p>

          <p
            className="viewtext"
            onClick={() => navigate('/allcategory')}
          >
            View All 
          </p>

        </div>


        <div className="categroy" style={{ position: "relative" }}>

          {categories.slice(0, 6).map((category) => {

            const Icon = category.icon;

            return (

              <div
                className="categorycont"
                key={category.id}
                style={{ backgroundColor: category.bgColor }}
              >

                <Icon
                  size={38}
                  style={{ color: category.fontColor }}
                />

                <p className="p-0 m-0">
                  {category.name}
                </p>

                <p className="p-0 m-0">
                  {category.coursesCount}
                </p>

              </div>

            );

          })}

        </div>

      </section>


      {/* FEATURED COURSES */}

      <section className="course-filter-section">

        <div className="d-flex justify-content-between align-items-center px-3 px-md-5 mb-4">

          <p className="fw-bold fs-4 mb-0">
            Featured Courses
          </p>

          <div
            className="viewallcoursecontainer"
            onClick={() => navigate('/allcourses')}
          >
            <p className="viewtext mb-0">
              All Courses
            </p>

            <FaArrowRight />

          </div>

        </div>


        <div className="featured_course_container">

          {featuredCourses.map((course) => (

            <div className="course_card" key={course.id}>

              <div className="row g-0 h-100">

                {/* COURSE IMAGE */}

                <div className="col-12 col-md-6">

                  <img
                    src={course.image}
                    alt={course.title}
                    className="course_image"
                  />

                </div>


                {/* COURSE CONTENT */}

                <div className="col-12 col-md-6">

                  <div className="featured_course_content">

                    {course.badge && (
                      <span className="course-badge">
                        {course.badge}
                      </span>
                    )}

                    <h5>{course.title}</h5>

                    <p>{course.description}</p>

                    <p>⭐ {course.rating}</p>

                    <div className="d-flex justify-content-between flex-wrap gap-2">

                      <p>{course.duration}</p>

                      <p>{course.level}</p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>




      {/* STUDENT TESTIMONIALS */}

      <section className="studentTestimonals_section">

        <div className="student_Test_container">

          <section className="student_feedback_section">

            {/* SECTION HEADING */}

            <div className="feedback_heading">

              <span className="feedback_badge">
                💬 Testimonials
              </span>

              <h2>
                What Our <span>Students</span> Say
              </h2>

              <p>
                Discover how our courses are helping students build skills
                and achieve their career goals.
              </p>

              <div className="heading_underline"></div>

            </div>


            {/* FEEDBACK CARDS */}

            <div className="feedback_card_section">

              {feedbackData.map((data) => (

                <div className="feedback_card" key={data.id}>

                  <div className="feedback_top">

                    <div className="feedback_stars">
                      ★★★★★
                    </div>

                    <div className="feedback_quote">
                      ”
                    </div>

                  </div>


                  <p className="stu_feedback">
                    {data.feedback}
                  </p>

                  <hr />


                  {/* STUDENT DETAILS */}

                  <div className="feedback_content_cont">

                    <div className="feedback_user_details">

                      <div className="feedback_user_image">

                        <img
                          src={data.image}
                          alt={data.name}
                        />

                      </div>

                      <div className="feedback_user_info">

                        <h5>{data.name}</h5>

                        <p className="feedback_course_name">
                          Completed: {data.course}
                        </p>

                        <span className="feedback_role">
                          {data.role}
                        </span>

                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </section>

        </div>

      </section>


      {/* FOOTER */}

      <Footer />

    </>
  );
}

export default Hero;