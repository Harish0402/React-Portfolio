import React from 'react';

const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive and user-friendly interfaces using modern frameworks.',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919827.png', 
  },
  {
    title: 'Backend Development',
    description: 'Developing robust and scalable server-side logic and APIs.',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', 
  },
  {
    title: 'Full Stack Development',
    description: 'Combining both frontend and backend to deliver complete web solutions.',
    logo: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', 
  },

];

const Service = () => {
  return (
    <div className=" bg-gray-900 text-white py-20 font-display" id='service'>
      <h1 className="text-4xl font-bold text-center mb-12">Our Full-Stack Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 text-center">
            <img src={service.logo} alt={`${service.title} logo`} className="h-20 mx-auto mb-6" />
            <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;