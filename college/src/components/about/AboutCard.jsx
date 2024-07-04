import React, { useEffect, useRef } from "react";
import Heading from "../common/heading/Heading";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";

const AboutCard = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = aboutRef.current;
      if (element && isInViewport(element)) {
        element.classList.add("animate__animated", "animate__fadeInLeft");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  return (
    <>
      <section ref={aboutRef} className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src='./images/about.webp' alt='' className='animate__animated animate__fadeInLeft' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val, index) => (
                <div key={index} className='item flexSB'>
                  <div className='img'>
                    <img src={val.cover} alt='' className='animate__animated animate__fadeInLeft' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
