import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import 'animate.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleViewCourse = () => {
    navigate("/allcourses"); // Navigate to the '/allcourses' route
  };

  return (
    <>
      <section className='hero animate__animated animate__fadeIn'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO Learn-With-Gagan' title='Best Online Education Expertise' />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className="border-gray-500 m-5 p-1 text-xl text-slate-300 bg-zinc-600 cursor-pointer animate__animated animate__bounce">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button onClick={handleViewCourse} className="border-gray-500 m-5 p-1 text-xl text-slate-300 bg-zinc-600 cursor-pointer animate__animated animate__bounce">
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
