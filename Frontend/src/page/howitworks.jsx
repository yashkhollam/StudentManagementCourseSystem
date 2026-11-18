import React from 'react';
import '../css/howitworks.css'

import {
  FaMagnifyingGlass,
  FaClipboardCheck,
  FaLaptopCode,
  FaCertificate
} from 'react-icons/fa6';



const steps = [
  {
    id: 1,
    icon: FaMagnifyingGlass,
    title: 'Explore Courses',
    description:
      'Browse different IT courses and find the right course based on your interests.'
  },
  {
    id: 2,
    icon: FaClipboardCheck,
    title: 'Enroll in a Course',
    description:
      'Choose your preferred course and enroll to start your learning journey.'
  },
  {
    id: 3,
    icon: FaLaptopCode,
    title: 'Learn & Practice',
    description:
      'Watch video lessons, complete assignments, and build practical projects.'
  },
  {
    id: 4,
    icon: FaCertificate,
    title: 'Get Certified',
    description:
      'Complete your course and earn a certificate to showcase your skills.'
  }
];

function HowItWorks(){
  return (
    <section className="how-it-works-section">

      <div className="container">

        {/* Section Heading */}
        <div className="how-it-works-heading text-center">
          <span className="how-it-works-tag">
            Simple Learning Process
          </span>

          <h2>
            How It <span>Works</span>
          </h2>

          <p>
            Your journey from beginner to skilled professional
            in four simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="row g-4 how-it-works-row">

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div className="col-12 col-sm-6 col-lg-3" key={step.id}>

                <div className="how-step-card">

                  <div className="how-step-number">
                    {String(step.id).padStart(2, '0')}
                  </div>

                  <div className="how-step-icon">
                    <Icon />
                  </div>

                  <h5>{step.title}</h5>

                  <p>{step.description}</p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default HowItWorks;