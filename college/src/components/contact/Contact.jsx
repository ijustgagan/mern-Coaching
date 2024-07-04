import React, { useState } from "react";
import Back from "../common/back/Back";
import axios from 'axios';
import 'animate.css';
import "./contact.css";

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45368.01882546253!2d75.80215195!3d26.9124336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1652535615693!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ';
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      setSuccess('Message sent successfully!');
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setError('Error sending message: ' + error.message);
    }
  };

  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB animate__animated animate__fadeIn'>
          <div className='left row animate__animated animate__slideInLeft'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row animate__animated animate__slideInRight'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>12/190, kaveri path , mansarovar , jaipur</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p>ijustgagan6103@gmail.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p>+91 9928144259</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="animate__animated animate__fadeInUp">
              <div className='flexSB'>
                <input 
                  type='text' 
                  name="name"
                  placeholder='Name' 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
                <input 
                  type='email' 
                  name="email"
                  placeholder='Email' 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-field"
                />
              </div>
              <input 
                type='text' 
                name="subject"
                placeholder='Subject' 
                value={formData.subject}
                onChange={handleChange}
                required
                className="input-field"
              />
              <textarea 
                name="message"
                cols='30' 
                rows='10'
                placeholder="Create a message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className="textarea-field"
              ></textarea>
              <button type='submit' className='primary-btn p-4 hover:bg-emerald-700'>SEND MESSAGE</button>
            </form>

            {error && <div className="mt-4 text-center text-red-600"><p>{error}</p></div>}
            {success && <div className="mt-4 text-center text-green-600"><p>{success}</p></div>}

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
