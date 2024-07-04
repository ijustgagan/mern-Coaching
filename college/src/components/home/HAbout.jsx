import React from "react";
import OnlineCourses from "../allcourses/OnlineCourses";
import Heading from "../common/heading/Heading";
import "../allcourses/courses.css";
import { coursesCard } from "../../dummydata";
import 'animate.css';
import { useNavigate } from "react-router-dom";

const HAbout = () => {
  const navigate = useNavigate();

  const handleSubmit = (course) => {
    navigate("/Enroll", { state: { course } }); // Navigate to enrollment form page with course data
  };

  return (
    <section className='homeAbout animate__animated animate__fadeIn'>
      <div className='container'>
        <Heading subtitle='our courses' title='explore our popular online courses' />
        <div className='coursesCard'>
          <div className='grid2'>
            {coursesCard.slice(0, 3).map((val, index) => (
              <div key={index} className='items shadow animate__animated animate__fadeIn transition-transform transform hover:scale-105 hover:shadow-lg'>
                <div className='content flex'>
                  <div className='left'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                  </div>
                  <div className='text'>
                    <h1>{val.coursesName}</h1>
                    <div className='rate'>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <i className='fa fa-star'></i>
                      <label htmlFor=''>(5.0)</label>
                    </div>
                    <div className='details'>
                      {val.courTeacher.map((details, index) => (
                        <div key={index} className='box'>
                          <div className='dimg'>
                            <img src={details.dcover} alt='' />
                          </div>
                          <div className='para'>
                            <h4>{details.name}</h4>
                          </div>
                          <span>{details.totalTime}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='price'>
                  <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3>
                </div>
                <button onClick={() => handleSubmit(val)} className='outline-btn bg-teal-600 hover:bg-teal-500'>ENROLL NOW!</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <OnlineCourses />
    </section>
  );
};

export default HAbout;
