import React from "react";
import Heading from "../../common/heading/Heading";
import Typewriter from "../../Typewriter"; 
import "./Hero.css";
import 'animate.css';
const Hero = () => {
  
  return (
    <>
      <section className='hero animate__animated animate__fadeIn'>

        <div className='container'>
          <div className='row px-9 py-6 '>
            <Heading subtitle={
                <>
                  WELCOME TO <Typewriter text="Learn-With-Gagan" delay={100} />
                </>
              }
              title={<>
                 <Typewriter text='Best Online Education Expertise' delay={120}/>
              </>} />
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  );
};

export default Hero;
