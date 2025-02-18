import { Link, useNavigate } from "react-router-dom";
import React, {useState} from 'react';
import img1 from "../assets/img1.jpg";
import icon1 from "../assets/icon1.jpeg";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.jpg";
import "../App.jsx";

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const testimonials = [
    {
      image: img4,
      name: "John Doe",
      role: "CEO",
      company: "Leonard Technologies",
      feedback: "Working with the PETRONG team has been a huge success! They’re good people who care deeply about our business!",
    },
    {
      image: img3,
      name: "Jane Smith",
      role: "CTO",
      company: "Tech Innovations",
      feedback: "PETRONG has transformed the way we approach technology. Their dedication to quality is unmatched.",
    },
  ];

  const handleNextTestimonial = () => {
    setFade(true); // Trigger fade-out
    setTimeout(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setFade(false); 
    }, 500); 
  };

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-xl mx-auto relative">
      <div className={`flex items-center mb-4 transition-opacity ${fade ? 'opacity-0' : 'opacity-100'}`}>
        <img 
          src={currentTestimonial.image} 
          alt="Client" 
          className="rounded-full w-16 h-16 border-2 border-gray-300" 
        />
        <div className="ml-4">
          <h3 className="font-semibold text-lg">{currentTestimonial.name}</h3>
          <p className="text-sm text-gray-600">{currentTestimonial.role}</p>
          <p className="text-sm text-gray-600">{currentTestimonial.company}</p>
        </div>
      </div>
      <p className={`text-gray-700 text-base transition-opacity ${fade ? 'opacity-0' : 'opacity-100'}`}>
        {currentTestimonial.feedback}
      </p>
      {/* Arrow Icon */}
      <div className="absolute right-0 top-0 mt-6 mr-4 cursor-pointer" onClick={handleNextTestimonial}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="text-blue-500 w-6 h-6">
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
        </svg>
      </div>
    </div>
  );
};
const PromiseSection = () => {
  const promises = [
    {
      title: 'Top Code Quality',
      description: 'What we promise is not simply code but rather a solution. You get a W3C fully compliant markup with no compromise on quality.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 512" className="text-blue-500 w-9 h-9 mx-auto">
          <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
        </svg>
      ),
    },
    {
      title: 'Responsive',
      description: 'We know you look for positive attitude, timely reactions, and flexibility. We are here to listen and give the utmost of our capabilities.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-9 mx-auto"><path d="M128 32C92.7 32 64 60.7 64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384z"/></svg>
      ),
    },
    {
      title: 'Rockstar Team',
      description: 'Expertise is our USP. You get an all-star squad of experienced geeks, fully at your service and armed with coding skills to die for.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"  className="w-9 mx-auto">\<path d="M72 88a56 56 0 1 1 112 0A56 56 0 1 1 72 88zM64 245.7C54 256.9 48 271.8 48 288s6 31.1 16 42.3l0-84.7zm144.4-49.3C178.7 222.7 160 261.2 160 304c0 34.3 12 65.8 32 90.5l0 21.5c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-26.8C26.2 371.2 0 332.7 0 288c0-61.9 50.1-112 112-112l32 0c24 0 46.2 7.5 64.4 20.3zM448 416l0-21.5c20-24.7 32-56.2 32-90.5c0-42.8-18.7-81.3-48.4-107.7C449.8 183.5 472 176 496 176l32 0c61.9 0 112 50.1 112 112c0 44.7-26.2 83.2-64 101.2l0 26.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm8-328a56 56 0 1 1 112 0A56 56 0 1 1 456 88zM576 245.7l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM320 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM240 304c0 16.2 6 31 16 42.3l0-84.7c-10 11.3-16 26.1-16 42.3zm144-42.3l0 84.7c10-11.3 16-26.1 16-42.3s-6-31.1-16-42.3zM448 304c0 44.7-26.2 83.2-64 101.2l0 42.8c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-42.8c-37.8-18-64-56.5-64-101.2c0-61.9 50.1-112 112-112l32 0c61.9 0 112 50.1 112 112z"/></svg>
      ),
    },
    {
      title: 'Fast Turn-arounds',
      description: 'Speed matters no less than quality. We are fast, agile and capable of delivering top notch quality code in a timeframe chosen by you.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"className="w-9 mx-auto"><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96c0-26.9-16.5-49.9-40-59.3L280 88c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 204.7c-23.5 9.5-40 32.5-40 59.3c0 35.3 28.7 64 64 64s64-28.7 64-64zM144 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-16 80a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM400 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>
      ),
    },
    {
      title: 'Life-time support',
      description: 'The ultimate proof of our code quality: you get our non-expiring support. If any bugs happen to appear in the future, just write us a line.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-9 mx-auto"><path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"/></svg>
      ),
    },
    {
      title: 'Secured Agreement',
      description: 'Your artwork is fully yours and we would never claim otherwise. You get our word and our full willingness to sign an NDA.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="text-blue-500 w-8 h-8 mx-auto">
          <path d="M432 64h-352c-35.3 0-64 28.7-64 64v320c0 35.3 28.7 64 64 64h352c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM256 384h-96V128h96v256zm128-256v256h-96V128h96z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Promise</h2>
        <p className="text-lg text-gray mb-12">As part of our high-quality service, we’d like to offer something extra too.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {promises.map((promise, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
              <div className="text-4xl mb-4">{promise.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{promise.title}</h3>
              <p className="text-gray-600">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
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
const home = () => {
  const navigate = useNavigate();
  return (
    <div className="scroll-smooth">
      <div className="relative min-h-screen bg-black font-[Roboto,sans-serif] px-4 md:px-16 flex flex-col md:flex-row items-center bg-fixed">
        {/* First Section */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-sky-400 transform rotate-45 opacity-50 animate-spin-slow"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-sky-400 transform rotate-45 opacity-50 animate-spin-slow"></div>
        </div>
        <div className="w-full md:w-1/2 text-white relative z-10 mt-16 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Get the next level developments.</h1>
          <p className="text-base md:text-lg mt-4 px-4 md:px-0">Every line of code we deliver is carefully crafted by our in-house team of professional developers.</p>
          <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4 items-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105" onClick={() => navigate("/quote")}>Get a Quote</button>
            <button className="bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105" onClick={() => navigate("/schedule")}>Schedule a Call</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img src={img1} alt="Illustration" className="w-2/4 md:w-4/5 h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
        </div>
      </div>
      
      {/* Second Section */}
      <div className="bg-white w-full min-h-screen py-16 px-4 md:px-16 font-[Roboto]">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={img2} alt="Illustration" className="w-1/3 md:w-2/3 h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-10 px-4 md:px-0">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 font-[Roboto]">Our Core Services</h2>
            <p className="mt-4 text-lg text-gray-600">Our technology solutions are designed to meet your needs.</p>
            <div className="mt-6 space-y-6">
              {[{icon: icon1, title: "Web Development", desc: "We convert any design file into pixel-perfect HTML/CSS templates."},
                {icon: icon4, title: "Mobile Applications", desc: "We create highly customizable, easy-to-manage mobile solutions."},
                {icon: icon3, title: "Shopify & Woo Commerce", desc: "We help you get your eCommerce site running quickly."},
                {icon: icon2, title: "Vue - React Development", desc: "We build scalable web apps and high-quality email templates."}].map((service, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <img src={service.icon} alt={`${service.title} Icon`} className="w-12 h-12 rounded-full border-2 border-gray-300 shadow-md" />
                    <div className="ml-2">
                      <p className="font-bold">{service.title}</p>
                      <p className="text-gray-600">{service.desc}</p>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="relative min-h-screen flex flex-col md:flex-row font-[Roboto]">
        <div className="w-full md:w-1/2 bg-black flex justify-center items-center text-white py-16 px-4">
          <div className="flex justify-center w-full max-w-lg">
            <img src={img3} alt="Illustration" className="w-full h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-indigo-400 flex justify-center items-center text-white py-16 px-4">
          <div className="text-center md:text-left w-full max-w-lg">
            <h2 className="text-3xl md:text-5xl font-bold"> Partnership for agencies</h2>
            <p className="text-lg md:text-xl mt-6">A reliable coding partner that delivers solutions to your business challenges and stays by your side in the long term. With the whole spectrum of web development expertise, we are here to take care of your projects while making it possible for you to focus on growing your own business.</p>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105 mt-9">Partnership Details</button>
          </div>
        </div>
      </div>

      {/* Fourth Section: Testimonials */}
      <div className="bg-gray-100 py-20 w-full font-[Roboto]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-xl text-blue-600 font-semibold uppercase">Testimonials</h2>
              <p className="text-gray-800 mt-2">See how our clients feel about us.</p>
            </div>
            <Testimonials />
          </div>
        </div>
        {/*fifth section*/}
        <div className="relative min-h-screen flex flex-col md:flex-row font-[Roboto]">
        <div className="w-full md:w-1/2 bg-black flex justify-center items-center text-white py-16 px-4">
          <div className="flex justify-center w-full max-w-lg">
            <img src={img3} alt="Illustration" className="w-full h-auto rounded-lg shadow-lg transition transform hover:scale-105" />
          </div>
        </div>
        <div className="w-full md:w-1/2 bg-white flex justify-center items-center text-black py-16 px-4">
          <div className="text-center md:text-left w-full max-w-lg">
          <h2 className="text-2xl text-black-600 font-[Roboto] font-bold uppercase mb-30 text-center md:text-left underline decoration-blue-500">About Pacioli</h2>
            <h2 className="text-3xl md:text-5xl font-bold"> Petrong & Pacioli</h2>
            <p className="text-lg md:text-xl mt-6">Pacioli is the flagship product at petrong software solutions, a tailored digital lending tool that helps microfinance institutions to efficiently and quickly onboard customers and to account reconciliation with financial inclusion as the motivation.</p>

              <p className="text-lg md:text-xl mt-6">Pacioli improves female customers' comfort with the service by specifically designing for unique constraint.</p>
            <div className="flex flex-col md:flex-row mt-6 space-y-4 md:space-y-0 md:space-x-4 items-center">
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105">Pacioli</button>
            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition transform hover:scale-105">Demo Video</button>
          </div>
          </div>
        </div>
      </div>
      {/*sixth section*/}
      <div className="font-[Roboto] ">
      <PromiseSection />
      </div>
      {/*seventh section*/}
      <div className="bg-sky-200 flex items-left justify-center font-[Roboto, sans-serif]">
      <NextLevelIdea />
      </div>
    </div>
  );
};

export default home;