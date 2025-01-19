import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6" id='footer'>
      <div className=" mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <p className="text-sm">
            © {new Date().getFullYear()} All rights reserved.
            <span className="font-semibold text-blue-400"> Harish K</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
