import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { blog } from '../dummydata';
import Heading from '../components/common/heading/Heading';
import 'animate.css';


const SingleBlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = () => {
      const foundPost = blog.find(post => post.id === parseInt(postId));
      if (foundPost) {
        setPost(foundPost);
      } else {
        console.log(`Post with id ${postId} not found`);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <section className='single-blog-post padding animate__animated animate__fadeIn'>
      <div className='flex'>
        <div className='w-1/2 pr-4'>
          <img src={post.cover} alt={post.title} className='w-full mb-4' />
        </div>
        <div className='w-1/2 pl-4'>
          <Heading subtitle={`By ${post.author} on ${post.date}`} title={post.title} />
          <div className='content'>
            <p className='text-gray-700'>{post.desc}</p>
            {/* Alternatively, if your blog content is stored separately */}
            <p className='text-gray-700'>{post.content}</p> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleBlogPost;
