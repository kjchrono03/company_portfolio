import React from 'react';
import img1 from "../assets/img3.png";
import img2 from "../assets/img15.jpg";
import img3 from "../assets/img16.jpg";
import img4 from "../assets/img17.jpeg";
import { faMinus, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

const NextLevelIdea = () => {
  return (
    <div className="p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      <div className="mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Do You Have a Next-Level Idea?</h1>
        <p className="text-gray-500">Reach out and we can create magic together.</p>
      </div>
      <Link to="/contact">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow hover:bg-blue-600 transition duration-300">
          Work with Us
        </button>
      </Link>
    </div>
  );
};
const ContactSection = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white text-center px-4 py-12">
      <h2 className="text-xl md:text-2xl font-semibold text-black">
        Let’s Build Great Things Together!
      </h2>
      <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl">
        Fill out this form and one of our client success managers will contact you within 24 hours.
      </p>
      <Link to="/contact">
        <button className="mt-6 px-6 py-2 bg-black text-white text-sm md:text-base font-medium rounded-md hover:bg-gray-800 transition duration-300">
          Contact
        </button>
       </Link>
    </div>
  );
};
const Expertise = () => {
  return (
     <div className="flex flex-col font-[Roboto]">
        <div className="flex flex-col-reverse md:flex-row-reverse bg-sky-200 p-6 md:p-10">
          <div className="flex-1 p-4 md:p-6">
             <div className="flex justify-center md:justify-start mt-10 md:mt-30">
                 <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl mt-7" />
                 <h2 className="text-slate-950 mt-4 md:mt-6 text-3xl md:text-3xl font-bold">
                  Expertise
                </h2> 
             </div>
               <p className="text-lg md:text-xl mt-3">
                We are located in Nigeria and we operate internationally, with clients from the US, UK, Canada, Australia, and many other countries.
                </p>
                </div>
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-20">
              <img src={img1} alt="Coding" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row bg-white p-6 md:p-10">
        <div className="flex-1 p-4 md:p-6">
            <div className="flex justify-center md:justify-start mt-10 md:mt-30">
            <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl mt-7" />
            <h2 className="text-slate-950 mt-4 md:mt-6 text-3xl md:text-3xl font-bold">Digital Product Design</h2>
            </div>
            <div className="mt-8">
            <p className="text-slate-950 text-md font-medium">
                The best software has both a strong back-end and a good front-end. We’ve got the tools and expertise to assist you in creating an intuitive and engaging user experience that your customers will love and your rivals will envy.
            </p>
            <p className="text-slate-950 text-md font-bold mt-4">Our UX/UI Design services include:</p>
            <ul className="font-bold list-inside mt-4 space-y-2">
                <li className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-300 mr-3"></span>
                <span className="text-slate-950 text-md">Design Workshops</span>
                </li>
                <li className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-green-300 mr-3"></span>
                <span className="text-slate-950 text-md">UX & UI Consulting</span>
                </li>
                <li className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-300 mr-3"></span>
                <span className="text-slate-950 text-md">Creative Direction</span>
                </li>
                <li className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-red-300 mr-3"></span>
                <span className="text-slate-950 text-md">Prototyping</span>
                </li>
                <li className="flex items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-300 mr-3"></span>
                <span className="text-slate-950 text-md">Usability Testing</span>
                </li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-yellow-600 transition">Read More</button>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-20">
            <img src={img2} alt="Coding" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
        </div>
     </div>
    <div className="flex flex-col-reverse md:flex-row-reverse bg-white p-6 md:p-10">
          <div className="flex-1 p-4 md:p-6">
             <div className="flex justify-center md:justify-start mt-10 md:mt-30">
                 <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl mt-7" />
                 <h2 className="text-slate-950 mt-4 md:mt-6 text-3xl md:text-3xl font-bold">
                 Web & Mobile Development
                </h2> 
             </div>
             <p className="text-center md:text-start text-slate-950 text-xl md:text-md mt-6">We build custom applications to help companies save smarter, grow faster, serve better; through automation, business process management, to create unique advantages for the business. We have been trusted by many businesses to build their entire technology from the ground up. With a highly-qualified, committed, and results-driven team, we can provide modern, scalable, and easily maintainable software solutions.</p>
             <div className="flex justify-center md:justify-start mt-9">
             <button className="flex item-center mt-9 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-yellow-600 transition">Read More</button>
             </div>
            </div>
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-20">
              <img src={img3} alt="Coding" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
          </div>
        </div>
        <div className="flex flex-col-reverse md:flex-row bg-white p-6 md:p-10">
          <div className="flex-1 p-4 md:p-6">
             <div className="flex justify-center md:justify-start mt-10 md:mt-30">
                 <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl mt-7" />
                 <h2 className="text-slate-950 mt-4 md:mt-6 text-3xl md:text-3xl font-bold">
                 Cloud, DevOps & Deployment
                </h2> 
             </div>
             <p className="text-center md:text-start text-slate-950 text-xl md:text-md mt-6 whitespace-pre-line">We assist clients in leveraging cloud technologies while avoiding any of the IT pain points. We create public cloud applications to allow agile, future-ready business models, and we use automation to speed up and reduce costs in your infrastructure.{'\n'}
             Our DevOps consulting services will support you with each of the three main elements of your DevOps transition, from deployment to optimization. Our DevOps services will assist you in selecting best-in-class resources, equipping your team with necessary skills, and fine-tuning your processes to break down silos, collaborate more effectively, and achieve a cultural shift that supports DevOps thinking.</p>
             <div className="flex justify-center md:justify-start mt-9">
             <button className="flex item-center mt-9 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-yellow-600 transition">Read More</button>
             </div>
            </div>
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-20">
              <img src={img4} alt="Coding" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
          </div>
        </div>
        <div>
          <ContactSection />
       </div>
       <div className='bg-sky-200'>
          <NextLevelIdea />
       </div>
    </div>
  );
};

export default Expertise;
