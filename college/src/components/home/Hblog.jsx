import React from "react";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";
import 'animate.css';

const Hblog = () => {
  return (
    <>
      <section className='blog animate__animated animate__fadeIn'>
        <div className='container'>
          <Heading subtitle='OUR BLOG' title='Recent From Blog' />
          <div className='grid2'>
            {blog.slice(0, 3).map((val, index) => (
              <div key={index} className='items shadow animate__animated animate__fadeInUp hover:shadow-lg'>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <div className='admin flexSB'>
                    <span>
                      <i className='fa fa-user'></i>
                      <label htmlFor=''>{val.type}</label>
                    </span>
                    <span>
                      <i className='fa fa-calendar-alt'></i>
                      <label htmlFor=''>{val.date}</label>
                    </span>
                    <span>
                      <i className='fa fa-comments'></i>
                      <label htmlFor=''>{val.com}</label>
                    </span>
                  </div>
                  <h1>{val.title}</h1>
                  <p>{val.desc}</p>
                  <button className="border-gray-500 m-1 p-1 text-xl text-slate-300 bg-zinc-600 cursor-pointer hover:bg-gray-700">
                    Read More <i className='fa fa-long-arrow-alt-right'></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
