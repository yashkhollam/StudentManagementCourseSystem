import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import coursesData from '../components/data/courseData.jsx';
import '../css/courseDetails.css';

import {
    FaStar,
    FaClock,
    FaUsers,
    FaGraduationCap,
    FaCheckCircle,
    FaPlay,
    FaArrowLeft,
    FaChevronDown,
    FaChevronUp,
    FaBookOpen
} from 'react-icons/fa';




const CourseDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [openModule, setOpenModule] = useState(0);

    // Find particular course
    const course = coursesData.find(
        (item) => item.id === Number(id)
    );

    // Course not found
    if (!course) {
        return (
            <div className="course-not-found">
                <h2>Course Not Found!</h2>
                <button onClick={() => navigate('/allcourses')}>
                    Browse Courses
                </button>
            </div>
        );
    }

    // Toggle curriculum modules
    const toggleModule = (index) => {
        setOpenModule(openModule === index ? -1 : index);
    };

    return (

        <section className="course-details-section">

            <div className="container">

                {/* Back Button */}

                <button
                    className="course-back-btn"
                    onClick={() => navigate('/allcourses')}
                >
                    <FaArrowLeft /> Back to Courses
                </button>


                {/* COURSE HEADER */}

                <div className="course-details-header">

                    <div className="row align-items-center g-4">

                        <div className="col-12 col-lg-7">

                            <span className="course-details-category">
                                {course.category}
                            </span>

                            <h1>{course.title}</h1>

                            <p>{course.description}</p>

                            <div className="course-details-rating">

                                <span>
                                    <FaStar /> {course.rating}
                                </span>

                                <span>
                                    ({course.reviews} Reviews)
                                </span>

                                <span>
                                    {course.totalStudents} Students
                                </span>

                            </div>

                            <div className="course-details-meta">

                                <span>
                                    <FaClock /> {course.duration}
                                </span>

                                <span>
                                    <FaGraduationCap /> {course.level}
                                </span>

                            </div>

                            <p className="course-details-instructor">
                                Created by <strong>{course.instructor}</strong>
                            </p>

                        </div>


                        {/* COURSE PREVIEW CARD */}

                        <div className="col-12 col-lg-5">

                            <div className="course-preview-card">

                                <div className="course-preview-image">

                                    <img
                                        src={course.image}
                                        alt={course.title}
                                    />

                                    <div className="preview-overlay">
                                        <FaPlay />
                                    </div>

                                </div>

                                <div className="course-preview-content">

                                    <div className="course-price-details">

                                        <h2>₹{course.price}</h2>

                                        <del>₹{course.originalPrice}</del>

                                    </div>

                                    <button
                                        className="enroll-now-btn"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Enroll Now
                                    </button>

                                    <p className="course-access-text">
                                        Start your learning journey today!
                                    </p>

                                    <hr />

                                    <div className="course-preview-info">

                                        <p>
                                            <FaClock /> Duration:
                                            <span>{course.duration}</span>
                                        </p>

                                        <p>
                                            <FaBookOpen /> Course Level:
                                            <span>{course.level}</span>
                                        </p>

                                        <p>
                                            <FaUsers /> Students:
                                            <span>{course.totalStudents}</span>
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* WHAT YOU WILL LEARN */}

                <div className="course-details-content">

                    <div className="course-learning-section">

                        <h3>What You'll Learn</h3>

                        <div className="row g-3">

                            {course.whatYouWillLearn.map((item, index) => (

                                <div className="col-12 col-md-6" key={index}>

                                    <div className="learning-item">

                                        <FaCheckCircle />

                                        <span>{item}</span>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>


                    {/* COURSE REQUIREMENTS */}

                    <div className="course-requirements-section">

                        <h3>Requirements</h3>

                        <ul>

                            {course.requirements.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}

                        </ul>

                    </div>


                    {/* COURSE CURRICULUM */}

                    <div className="course-curriculum-section">

                        <h3>Course Curriculum</h3>

                        <p>
                            {course.courseContent.length} Modules
                        </p>

                        {course.courseContent.map((module, index) => (

                            <div className="curriculum-module" key={module.id}>

                                <div
                                    className="curriculum-module-header"
                                    onClick={() => toggleModule(index)}
                                >

                                    <div>
                                        {openModule === index
                                            ? <FaChevronUp />
                                            : <FaChevronDown />
                                        }

                                        <strong>{module.module}</strong>
                                    </div>

                                    <span>
                                        {module.lessons.length} Lessons
                                    </span>

                                </div>


                                {openModule === index && (

                                    <div className="curriculum-lessons">

                                        {module.lessons.map((lesson, lessonIndex) => (

                                            <div
                                                className="curriculum-lesson"
                                                key={lessonIndex}
                                            >
                                                <FaPlay />
                                                <span>{lesson}</span>
                                            </div>

                                        ))}

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>


                    {/* INSTRUCTOR DETAILS */}

                    <div className="course-instructor-section">

                        <h3>Meet Your Instructor</h3>

                        <div className="instructor-card">

                            <img
                                src={course.instructorDetails.image}
                                alt={course.instructorDetails.name}
                            />

                            <div>

                                <h5>{course.instructorDetails.name}</h5>

                                <p>{course.instructorDetails.role}</p>

                                <span>
                                    {course.instructorDetails.experience} Experience
                                </span>

                                <p className="instructor-bio">
                                    {course.instructorDetails.bio}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            {/* ENROLLMENT SUCCESS MODAL */}

            {showModal && (

                <div className="enrollment-modal-overlay">

                    <div className="enrollment-modal">

                        <div className="success-icon">
                            <FaCheckCircle />
                        </div>

                        <h3>Successfully Enrolled!</h3>

                        <p>
                            You have successfully enrolled in
                            <strong> {course.title}</strong>.
                        </p>

                        <button
                            onClick={() => setShowModal(false)}
                        >
                            Continue Learning
                        </button>

                    </div>

                </div>

            )}

        </section>

    );

};

export default CourseDetails;