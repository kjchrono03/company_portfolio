import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img12.jpg";
import img2 from "../assets/img13.jpg";
import img3 from "../assets/img14.jpg";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const Product = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-white font-[Roboto]">
      <div className="w-full bg-sky-300 text-center py-16 px-6 relative">
        <h2 className="text-2xl md:text-3xl font-semibold text-black mt-10">Dedicated Product for You</h2>
        <p className="mt-4 text-xl md:text-base text-black max-w-2xl mx-auto">
          Our product is crafted from looking at the problems people face each day and providing a solution to them.
        </p>
        <div className="absolute bottom-0 left-0 w-full h-12 md:h-20 bg-white transform origin-bottom-left rotate-3"></div>
      </div>

      <div className="w-full text-center py-12 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-black">Why You Should Choose Our Product</h2>
      </div>

      {[{ id: "01", title: "Pacioli", img: img1, text: "Pacioli is the flagship product at Petrong software solutions, a tailored digital lending tool that helps microfinance institutions efficiently onboard customers and perform account reconciliation with financial inclusion as the motivation. Pacioli improves female customers' comfort with the service by specifically designing for unique constraints." },
        { id: "02", title: "Kollegio", img: img2, text: "The software is a highly flexible and robust Learning Management System (LMS) that fits well for any kind of training, academic or professional. It enables live video classrooms, computer-based test systems, video lesson uploads, ebooks in PDF format, bulk emails, audit trails, and access control. The software is heavily loaded, making it rare to find its match in the EdTech ecosystem." },
        { id: "03", title: "StartupClerk", img: img3, text: "StartupClerk is an account management software designed to help small businesses evade financial crises, gain better credibility with investors, and ensure excellent cash flow management, all without the presence of an accountant. This allows businesses to focus on product development, marketing, and other profitable ventures." }
      ].map((feature, index) => (
        <div key={feature.id} className={`flex flex-col-reverse md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""} bg-white p-6 md:p-10 items-center`}>
          <div className="flex-1 p-4 md:p-6">
            <div className="flex items-center space-x-4">
              <p className="text-gray-600 font-bold text-2xl md:text-3xl">{feature.id}</p>
              <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl" />
              <h2 className="text-slate-950 text-2xl md:text-3xl font-bold">{feature.title}</h2>
            </div>
            <p className="text-lg md:text-xl mt-3">{feature.text}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm md:text-base font-medium rounded-md hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <img src={feature.img} alt={feature.title} className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition-transform hover:scale-105" />
          </div>
        </div>
      ))}

      <div className="bg-white w-full">
        <ContactSection />
      </div>
      <div className="bg-sky-200 w-full">
      <NextLevelIdea />
      </div>
    </div>
  );
};

export default Product;
