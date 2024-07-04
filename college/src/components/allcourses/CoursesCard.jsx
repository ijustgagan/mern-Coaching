import React from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import { useNavigate } from "react-router-dom";

const CoursesCard = () => {
  const navigate = useNavigate();

  const handleSubmit = (course) => {
    navigate("/Enroll", { state: { course } });
  };

  return (
    <>
      <section className="coursesCard ">
        <div className="container grid2 mt-12">
          {coursesCard.map((val) => (
            <div className="items shadow-2xl animate__animated animate__fadeIn transition-transform transform hover:scale-105 hover:shadow-2xl'>
                  <div className='content flex'" key={val.id}>
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text h-50">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courTeacher.map((details, index) => (
                      <div className="box" key={index}>
                        <div className="dimg">
                          <img src={details.dcover} alt="" />
                        </div>
                        <div className="para">
                          <h4>{details.name}</h4>
                        </div>
                      </div>
                    ))}
                    <span>{val.totalTime}</span>
                  </div>
                </div>
              </div>
              <div className="price ">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button
                onClick={() => handleSubmit(val)} 
                className="outline-btn outline-btn bg-teal-600 hover:bg-teal-500"
              >
                ENROLL NOW !
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
