import React, { useEffect } from 'react';
import Button from '../Button'; // Reusing the same button component

function Form() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-[var(--black)] py-16 px-8 sm:px-16">
      {/* Contact Information */}
     
      {/* Form Title */}
      <h1 className="text-5xl sm:text-6xl text-center tracking-tight text-white">Get in Touch</h1>
<br></br>
      {/* Form Fields */}
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        {/* First Name Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="firstName">First Name</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            placeholder="Enter your first name" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
        </div>
        
        {/* Last Name Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="lastName">Last Name</label>
          <input 
            type="text" 
            id="lastName" 
            name="lastName" 
            placeholder="Enter your last name" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
        </div>

        {/* Company Name Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="companyName">Company Name</label>
          <input 
            type="text" 
            id="companyName" 
            name="companyName" 
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
            placeholder="Enter your email address" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label className="block text-white text-lg mb-2" htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="Enter your phone number" 
            className="w-full h-[5.9vh] bg-[var(--light)] px-4 text-[2vh]"
          />
        </div>

        {/* Placeholder to maintain 2-column layout */}
        <div></div>

        {/* Message Field - Full Width */}
        <div className="sm:col-span-2">
          <label className="block text-white text-lg mb-2" htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Enter your message" 
            className="w-full h-[15vh] bg-[var(--light)] px-4 text-[2vh] resize-none"
          ></textarea>
        </div>

        {/* Submit Button - Full Width */}
        <br></br>
        <div className="sm:col-span-2 flex justify-center">
          <Button text="SUBMIT" bgColor="bg-[#f5f19c]" />
        </div>

      </form>
       {/*<div className="text-center mb-8">
        <p className="text-white text-lg sm:text-xl">
          Feel free to contact us: <a href="mailto:info@kmgtechnologies.com" className="text-[#f5f19c] underline">info@kmgtechnologies.com</a>
        </p>
      </div>*/}

    </div>
  );
}

export default Form;
