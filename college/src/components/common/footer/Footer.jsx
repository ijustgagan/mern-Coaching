import React, { useState } from "react";
import { blog } from "../../../dummydata"; // Replace with your actual data source
import "./footer.css";
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const Footer = () => {
  const [messages, setMessages] = useState([]);

  // Function to handle new user messages in the chatbot
  const handleNewUserMessage = (newMessage) => {
    addUserMessage(newMessage);

    // Define trigger points and responses
    const triggers = [
      { trigger: "hello", response: "Hello! How can I assist you today?" },
      { trigger: "latest post", response: getLatestPostResponse() }, // Dynamic response for latest post
      { trigger: "contact", response: "You can reach us at rathoregagan726@gmail.com or +91 9928144259." },
      // Add more triggers as needed
    ];

    // Check for triggers in user message
    const matchedTrigger = triggers.find(trigger => newMessage.toLowerCase().includes(trigger.trigger.toLowerCase()));

    // Respond based on matched trigger
    if (matchedTrigger) {
      addResponseMessage(matchedTrigger.response);
      setMessages([...messages, { type: 'user', message: newMessage }, { type: 'bot', message: matchedTrigger.response }]);
    } else {
      addResponseMessage("I'm sorry, I can't understand that question.");
      setMessages([...messages, { type: 'user', message: newMessage }, { type: 'bot', message: "I'm sorry, I can't understand that question." }]);
    }
  };

  // Function to generate response for latest post
  const getLatestPostResponse = () => {
    // Get the latest blog post from the dummy data (assuming 'blog' is an array of blog posts)
    const latestBlog = blog[0]; // Assuming latest blog post is the first in the array
    return `Latest blog post: ${latestBlog.title}. Published on ${latestBlog.date}.`;
  };

  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Far far away, behind the word mountains</span>
          </div>
          <div className='right row'>
            <input className=" text-black " type='text' placeholder='Enter email address' />
            <button className=" m-0"><i className='fa fa-paper-plane'></i></button>
            
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding'>
          <div className='box logo'>
            <h1>Learn-With-Gagan</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>

            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
            {blog.slice(0, 3).map((val) => (
              <div className='items flexSB' key={val.id}>
                <div className='img'>
                  <img src={val.cover} alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>{val.date}</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>{val.type}</label>
                  </span>
                  <h4>{val.title.slice(0, 40)}...</h4>
                </div>
              </div>
            ))}
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <p>
          Copyright ©2022 All rights reserved | This template is made with <i className='fa fa-heart'></i> by GorkhCoder
        </p>
      </div>
      {/* Chat Widget */}
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Chat with Us"
        subtitle="We're here to help!"
      />
    </>
  );
};

export default Footer;
