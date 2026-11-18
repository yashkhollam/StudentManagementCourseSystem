import React from 'react';
import { useNavigate } from 'react-router-dom';

import coursesData from '../components/data/courseData.jsx';
import '../css/allcourses.css';

import { FaStar, FaClock, FaArrowRight } from 'react-icons/fa6';

const AllCourses = () => {

    const navigate = useNavigate();

    return (

        <section className="all_courses_section">

            {/* Page Heading */}

            <div className="all_courses_heading">

                <h2>
                    Explore All <span>Courses</span>
                </h2>

                <p>
                    Discover the right course to upgrade your skills
                    and build your career in technology.
                </p>

                <span className="total_courses">
                    {coursesData.length} Courses Available
                </span>

            </div>


            {/* Courses Grid */}

            <div className="all_courses_container">

                {coursesData.map((course) => (

                    <div className="all_course_card" key={course.id}>

                        {/* Course Image */}

                        <div className="all_course_image">

                            <img
                                src={course.image}
                                alt={course.title}
                            />

                            {course.badge && (
                                <span className="course_category">
                                    {course.badge}
                                </span>
                            )}

                        </div>


                        {/* Course Content */}

                        <div className="all_course_content">

                            <div className="course_instructor">
                                By {course.instructor}
                            </div>

                            <h5>{course.title}</h5>

                            <p className="course_description">
                                {course.description}
                            </p>


                            {/* Rating */}

                            <div className="course_rating">

                                <span>
                                    <FaStar /> {course.rating}
                                </span>

                                <small>
                                    ({course.reviews} Reviews)
                                </small>

                            </div>


                            {/* Course Information */}

                            <div className="course_info">

                                <span>
                                    <FaClock /> {course.duration}
                                </span>

                                <span>
                                    {course.level}
                                </span>

                            </div>


                            <hr />


                            {/* Price and Button */}

                            <div className="course_card_bottom">

                                <h5>
                                    ₹{course.price}
                                </h5>

                                <button
                                    className="view_course_btn"
                                    onClick={() => navigate(`/courses/${course.id}`)}
                                >
                                    View Course <FaArrowRight />
                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </section>

    );

};

export default AllCourses;