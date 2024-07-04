import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
import Select from 'react-select'; // Import react-select

const countryOptions = [
  { value: '+91', label: '+91 (India)' },
  { value: '+1', label: '+1 (United States)' },
  // Add more country codes as needed
];

const EnrollForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(null); // State for selected country code
  const [error, setError] = useState(''); // State for error messages

  const course = location.state?.course; // Retrieve course data from location state

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
      const phoneNumber = selectedCountry.value + formData.phone; // Combine country code with phone number
      const dataToSend = { ...formData, phone: phoneNumber, course: course.coursesName };
      await axios.post('http://localhost:5000/api/enroll', dataToSend);
      alert('Enrollment successful!');

      // Navigate to confirmation page
      setTimeout(() => {
        navigate("/confirmation"); // Example: Navigate to a confirmation page
      }, 1000); // Simulate a delay for demonstration
    } catch (error) {
      setError('Error enrolling: ' + error.message);
    }
  };

  // Render loading state if course data is not fetched yet
  if (!course) {
    return <div>Loading...</div>; // Adjust as per your UI/UX needs
  }

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-semibold mb-4">Enroll for {course.coursesName}</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="country" className="block text-gray-700">
            Country Code
          </label>
          <Select
            id="country"
            name="country"
            options={countryOptions}
            value={selectedCountry}
            onChange={setSelectedCountry}
            placeholder="Select country code"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-500"
        >
          Enroll
        </button>
      </form>
      {error && (
        <div className="mt-4 text-center text-red-600">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default EnrollForm;
