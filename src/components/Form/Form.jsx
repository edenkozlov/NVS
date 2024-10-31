import React, { useState, useEffect } from 'react';
import Button from '../Button'; // Reusing the same button component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form() {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    message: ''
  });

  // State to manage form errors
  const [errors, setErrors] = useState({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('Form component mounted'); // Debug log
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Debug log
    setFormData({ ...formData, [name]: value });
  };

  // Validate form fields
  const validate = () => {
    console.log('Validating form'); // Debug log
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Validation passed'); // Debug log
      return true;
    } else {
      console.log('Validation failed:', newErrors); // Debug log
      return false;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission triggered'); // Debug log
  
    if (validate()) {
      console.log('Making fetch request'); // Debug log
      try {
        const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

        const response = await fetch(`${apiUrl}/api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
          
  
        console.log('Fetch request completed'); // Debug log
        if (response.ok) {
          console.log('Response OK'); // Debug log
          toast.success('Form submitted successfully!');
          setFormData({
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            phone: '',
            message: ''
          });
        } else {
          console.log('Failed response from server'); // Debug log
          toast.error('Failed to submit the form.');
        }
      } catch (error) {
        console.error('Error submitting form:', error); // Debug log
        toast.error('Error submitting the form. Please try again.');
      }
    } else {
      toast.error('Please fix the errors before submitting.');
    }
  };
  

  return (
    <div className="w-full bg-[var(--black)] py-16 px-8 sm:px-16">
      <h1 className="text-5xl sm:text-6xl text-center tracking-tight text-white">Get in Touch</h1>
      <br />

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* First Name Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter your first name" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        
        {/* Last Name Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter your last name" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>

        {/* Company Name Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="companyName">Company Name</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
            value={formData.companyName}
            onChange={handleChange}
            placeholder="Enter your company name" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
        </div>

        {/* Message Field - Full Width */}
        <div className="sm:col-span-2">
          <label className="block text-white text-lg mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message" 
            className="w-full h-[15vh] bg-[var(--light)] px-4 text-[2vh] resize-none"
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        {/* Submit Button - Full Width */}
        <div className="sm:col-span-2 flex justify-center mt-4">
          {/* Updated Submit Button with type */}
          <button type="submit" className="bg-[#f5f19c] py-2 px-4 text-black">
            SUBMIT
          </button>
        </div>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Form;
