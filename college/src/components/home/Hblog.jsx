import React from "react";
import { blog } from "../../dummydata";
import Heading from "../common/heading/Heading";
import { useNavigate } from "react-router-dom";

const Hblog = () => {
  const navigate = useNavigate();

  const handleReadMore = (postId) => {
    // Navigate to the blog post page or implement your read more logic
    navigate(`/blog-post/${postId}`);
    console.log("Read more clicked for post ID:", postId);
  };

  return (
    <section className='hprice padding animate__animated animate__fadeIn'>
      <Heading subtitle='OUR BLOG' title='Recent From Blog' />
      <div className='blog container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {blog.slice(0, 3).map((val, index) => (
          <div key={index} className='items shadow animate__animated animate__fadeIn transition-transform transform hover:scale-105 hover:shadow-lg'>
            <div className='img'>
              <img src={val.cover} alt='' className='w-full' />
            </div>
            <div className='text p-4'>
              <div className='admin flex items-center space-x-4 text-gray-600'>
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
              <h1 className='text-xl font-semibold mt-2'>{val.title}</h1>
              <p className='text-gray-700'>{val.desc}</p>
              <button onClick={() => handleReadMore(val.id)} className="border-gray-500 mt-2 py-1 px-2 text-lg text-slate-300 bg-zinc-600 cursor-pointer hover:bg-gray-700">
                Read More <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hblog;
