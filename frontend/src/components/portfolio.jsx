import React from 'react';
import img1 from "../assets/img9.jpg";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bppic from "../mobile/bppic.png";
import esopos from "../mobicons/esop.png";
import stack from "../mobicons/stack.png";
import mycover from "../mobicons/mycover.png";
import oxford from "../mobicons/oxford.png";
import bpay from "../mobicons/bpay.png";
import bg from "../mobicons/bg2.png";
import bg2 from "../mobicons/bg.png";
import {Link} from "react-router-dom";

const applications = [
    { id: 1, icon: esopos, description: "Providing Point-of-Sale and inventory solutions to small and medium businesses.", phase: "Grow", services: "Sales & Inventory management", platforms: "Web, Mobile", image: bppic, bgColor: "bg-green-200" },
    { id: 2, icon: stack, description: "AI Powered Chatbot Builder that enables businesses to engage customers wherever they are.", phase: "Grow", services: "Chatbot builder", platforms: "Web", image: bg, bgColor: "bg-white" },
    { id: 3, icon: mycover, description: "Cross-platform Vehicle Inspection platform for Bolt drivers.", phase: "Grow", services: "Vehicle inspection", platforms: "Web, Mobile", image: bppic, bgColor: "bg-gray-700" },
    { id: 4, icon: oxford, description: "Real estate purchase and asset management for everyday people.", phase: "Grow", services: "Real Estate", platforms: "Web", image: bg2, bgColor: "bg-purple-500" },
    { id: 5, icon: bpay, description: "Making crypto trading easy and accessible to more people everywhere.", phase: "Grow", services: "Crypto trading", platforms: "Web, Mobile", image: bppic, bgColor: "bg-yellow-500" }
];
const NextLevelIdea = () => {
    return (
      <div className="p-10 flex flex -col items-start justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2 mr-60">Do you have a next level idea?</h1>
          <p className="text-gray-500 mb-4">Reach out and we can create magic together</p>
        </div>
        <Link to="/contact">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full shadow hover:bg-blue-600 transition duration-300 mt-4">
            Work with us
          </button>
        </Link>
      </div>
    );
  };
const Portfolio = () => {
    return (
        <div className="flex flex-col font-[Roboto]">
            <div className="flex flex-col-reverse md:flex-row-reverse bg-white p-6 md:p-10">
                <div className="flex-1 p-4 md:p-6">
                    <div className="flex justify-center md:justify-start gap-2 mt-6 md:mt-10">
                        <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl" />
                        <p className="text-slate-950 text-sm md:text-md font-bold underline decoration-yellow-300">OUR PORTFOLIO</p>
                    </div>
                    <h2 className="text-sky-700 mt-4 md:mt-6 text-3xl md:text-5xl font-bold">
                        A glimpse of some of our projects and people we've been fortunate to work with
                    </h2>
                </div>
                <div className="flex-1 flex justify-center items-center mt-10 md:mt-20">
                    <img src={img1} alt="Coding" className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
                </div>
            </div>
            
            <div className="bg-black text-white p-10">
                <h1 className="text-3xl font-bold mb-4">Mobile & Web Applications</h1>
                <p className="mb-10">
                    We help create solutions that optimize processes, improve accessibility to data, and increase successful outcomes by providing the necessary insights and tools to change physician and patient behavior.
                </p>
                <div className="space-y-6 text-black">
                    {applications.map(app => (
                        <div key={app.id} className={`p-6 rounded-lg shadow-lg ${app.bgColor} flex flex-col md:flex-row items-center md:justify-between`}>                            
                            <div className="md:w-2/3">
                                <img src={app.icon} alt="App Icon" className="w-20 h-20 md:w-32 md:h-32 mb-4" />
                                <p className="text-lg md:text-2xl font-semibold mb-2">{app.description}</p>
                                <div className="text-sm md:text-lg flex flex-col md:flex-row gap-4 whitespace-pre-line">
                                    <p><strong>PHASE</strong> {'\n'} {app.phase}</p>
                                    <p><strong>SERVICES</strong> {'\n'} {app.services}</p>
                                    <p><strong>PLATFORMS</strong> {'\n'} {app.platforms}</p>
                                </div>
                            </div>
                            <div className="md:w-1/3 flex justify-center md:justify-end">
                                <img src={app.image} alt="App Screenshot" className="rounded-lg w-full max-w-xs md:max-w-sm" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-white px-6 py-12 flex flex-col md:flex-row justify-between items-start">
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold mb-4">
                        Creating What You Need, <br />
                        The Way You Want Them
                    </h1>
                    <p className="text-lg mb-10">
                        Petrong developers have excelled in a number of fields due to their deep expertise in software development as a service.
                    </p>
                </div>
                <div className="md:w-1/2 flex flex-col-2 md:flex-row gap-4 md:justify-end">
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
                        <h2 className="text-xl font-semibold text-blue-600">Fast</h2>
                        <p className="text-gray-700">Delivery</p>
                    </div>
                    <div className="bg-blue-100 p-6 rounded-lg shadow-md w-full md:w-1/3 text-center">
                        <h2 className="text-xl font-semibold text-blue-600">Advance</h2>
                        <p className="text-gray-700">Rate</p>
                    </div>
                </div>
            </div>
            <div className="bg-sky-200 flex items-left justify-center font-[Roboto, sans-serif]">
                <NextLevelIdea />
            </div>
        </div>
    );
};

export default Portfolio;
