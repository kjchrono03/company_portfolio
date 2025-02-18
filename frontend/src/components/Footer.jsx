import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img5 from '../assets/img56.jpg';
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FaLinkedin, FaInstagram, FaFacebookF, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

const Footer = () => {
  return (
    <div 
      className="bg-gray-800 text-white py-8 bg-cover bg-center contrast-200"
      style={{ 
        backgroundImage: `url(${img5})`, 
      }}
    >
      <div className="container mx-auto md:mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4 py-8 font-[Roboto]"> 
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-400">QUICK LINKS</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-300 transition">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-300 transition">About</Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-300 transition">Blog</Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-blue-300 transition">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-300 transition">Contact</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-400">OUR SERVICES</h2>
          <ul className="space-y-2">
            {["Web Development", "Digital Product Design", "Cloud/DevOps", "Mobile Applications", "Dedicated Development Team"].map(service => (
              <li key={service}>
                <a href="#" className="hover:text-blue-300 transition">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4 text-blue-400">OUR TECHNOLOGIES</h2>
          <ul className="space-y-2">
            {["Laravel Development", "React JS App Development", "Vue JS App Development"].map(tech => (
              <li key={tech}>
                <a href="#" className="hover:text-blue-300 transition">{tech}</a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h2 className="text-lg font-bold mb-4 text-blue-400">CONTACT & FOLLOW US</h2>
          <ul className="space-y-3">
            <li className="flex items-center justify-start md:justify-start">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-blue-400" />
              <span>Phone: (234) 0800-000-0000</span>
            </li>
            <li className="text-left md:text-left">
              Email: <a href="mailto:info@petrongsolutions.com" className="hover:text-blue-300 transition"><FaEnvelope className="inline mr-1" />info@petrongsolutions.com</a>
            </li>
            <li className="flex justify-start md:justify-start space-x-4 mt-2">
              <a href="#" className="hover:text-blue-300 transition">
                <FaLinkedin className="inline text-blue-400 text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <FaInstagram className="inline text-blue-400 text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                <FaFacebookF className="inline text-blue-400 text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <p className="text-sm">Petrong Software Solution Copyright 2022 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
