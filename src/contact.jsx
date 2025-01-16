import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    purpose: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:your_email@gmail.com?subject=${encodeURIComponent(formData.purpose)}&body=Email: ${encodeURIComponent(formData.email)}%0D%0A%0D%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className='flex flex-col text-center px-3 py-20  bg-contact'>
        <h1 className='text-white text-3xl font-bold font-display'>Contact Form</h1><br /><br />
    <form onSubmit={handleSubmit} className="w-96 mx-auto p-6 bg-gray-900 text-white rounded-lg">
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2 font-display" htmlFor="email">
          Email ID
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 text-black rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold font-display mb-2" htmlFor="purpose">
          Purpose
        </label>
        <input
          type="text"
          id="purpose"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="w-full p-2 text-black rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2 font-display" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 text-black rounded-md"
          rows="4"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded font-display">
        Submit
      </button>
    </form>
    </div>
  );
};

export default ContactForm;
