import React from "react";
import { blog } from "../../dummydata";
import 'animate.css';
import './blog.css'; // Ensure you have your custom styles if needed

const BlogCard = () => {
  return (
    <>
      {blog.map((val, index) => (
        <div
          key={index}
          className='items shadow animate__animated animate__fadeIn transition-transform transform hover:scale-105 hover:shadow-lg'
        >
          <div className='img'>
            <img src={val.cover} alt='' className='w-full h-full object-cover' />
          </div>
          <div className='text p-4'>
            <div className='admin flex justify-between mb-2 text-sm text-gray-600'>
              <span className='flex items-center'>
                <i className='fa fa-user mr-1'></i>
                <label htmlFor='' className='cursor-pointer'>{val.type}</label>
              </span>
              <span className='flex items-center'>
                <i className='fa fa-calendar-alt mr-1'></i>
                <label htmlFor='' className='cursor-pointer'>{val.date}</label>
              </span>
              <span className='flex items-center'>
                <i className='fa fa-comments mr-1'></i>
                <label htmlFor='' className='cursor-pointer'>{val.com}</label>
              </span>
            </div>
            <h1 className='text-xl font-semibold mb-2'>{val.title}</h1>
            <p className='text-gray-700'>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default BlogCard;
