import React from "react";
import img1 from "../assets/img9.jpg";
import img2 from "../assets/img9.png";
import img10 from "../assets/img11.jpg";
import { faMinus, faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link} from "react-router-dom";

const services = [
  { title: "Node.js", color: "bg-green-500" },
  { title: "Laravel", color: "bg-red-500" },
  { title: "Vue.js", color: "bg-blue-400" },
  { title: "React.js", color: "bg-orange-500" },
];
const teamMembers = [
    { name: 'Rasheed Ogunusi', title: 'CTO', imgSrc:img10 },
    { name: 'Debo Dunsin', title: 'Head of partnership', imgSrc:img10 },
    { name: 'Moses Leonard', title: 'Head of operations', imgSrc:img10 },
    { name: 'Damelin Duba', title: 'Country lead, Ghana', imgSrc:img10 },
  ];
const values = [
  {
    title: 'Integrity',
    description: 'We hold ourselves to a strong ethical and moral code.',
  },
  {
    title: 'Trust',
    description: 'We are dependable, loyal, and hardworking to achieve the same goal.',
  },
  {
    title: 'Excellence',
    description: 'We consistently strive to do high-quality work and give no room for error.',
  },
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
const About = () => {
  return (
    <div className="flex flex-col font-[Roboto]">
      <div className="flex flex-col-reverse md:flex-row-reverse bg-blue-500 p-6 md:p-10">
        <div className="flex-1 p-4 md:p-6">
          <div className="flex justify-center md:justify-start gap-2 mt-6 md:mt-10">
            <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl" />
            <p className="text-slate-950 text-sm md:text-md font-bold underline decoration-yellow-300">
              WHO WE ARE
            </p>
          </div>
          <h2 className="text-slate-950 mt-4 md:mt-6 text-3xl md:text-5xl font-bold">
            We combine our experience and passion to develop solutions that empower businesses.
          </h2>
          <p className="text-white mt-4 text-lg md:text-xl">
            Lorem Ipsum is simply dummy text of the printing and industry. Lorem Ipsum has been the
            industry's standard text ever since the 1500s, when an unknown printer took of type and
            scrambled it to make a type specimen book.
          </p>
          <div className="shadow-lg bg-stone-100/60 text-black p-4 rounded-lg mt-6 transition transform hover:scale-105">
            <p className="font-semibold">
              We want to build a world where great ideas, products, and companies come to fruition
              quickly whilst achieving the required impact. Our work is to facilitate the process.
            </p>
            <p className="mt-2 font-bold">Rasheed Ogunusi</p>
            <p className="font-medium">CTO</p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center mt-10 md:mt-20">
          <img
            src={img1}
            alt="Coding"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition transform hover:scale-105"
          />
        </div>
      </div>

      <div className="relative flex flex-col bg-white p-6 md:p-10 w-full">
        <div className="flex-1 p-4 md:p-6 text-left w-full">
          <div className="flex justify-start md:justify-left gap-2 mt-6 md:mt-10 w-full">
            <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl" />
            <p className="text-slate-950 text-sm md:text-md font-bold underline decoration-blue-700">
              OUR SERVICE
            </p>
          </div>
          <h2 className="text-slate-950 mt-2 md:mt-1 text-2xl md:text-3xl font-bold whitespace-pre-line">
            Methodologies & {"\n"}Technology we use.
          </h2>
          <p className="text-gray-600 whitespace-pre-line text-sm md:text-md">
            We build tour product from scratch with top most frontend and backend framework.{"\n"}
            We also focus on native end user experiences, providing full performance on {"\n"}
            both iOS and Android devices.{"\n"}
          </p>
        </div>
        <div className="relative flex justify-center mt-10">
          <div className="absolute top-8 w-164 h-66 md:w-250 md:h-69 bg-blue-950 transform rotate-0 opacity-100"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full sm:w-3/4 lg:w-1/2 mx-auto relative z-10 transition transform hover:scale-105">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 sm:p-10 rounded-lg text-black flex items-center justify-center ${service.color}`}
              >
                <div className="text-center">
                  <h4 className="text-lg font-semibold">{index + 1}</h4>
                  <h5 className="text-xl">{service.title}</h5>
                  <a href="#" className="mt-2 text-white underline"></a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white">
          <div className="flex-1 p-6">
            <div className="flex justify-start md:justify-left gap-2 mt-20 md:mt-30 w-full">
              <FontAwesomeIcon icon={faMinus} className="text-slate-950 text-2xl md:text-3xl" />
              <p className="text-slate-950 text-sm md:text-md font-bold underline decoration-blue-700">
                OUR VALUE
              </p>
            </div>
            <h2 className="text-slate-950 mt-2 md:mt-1 text-4xl md:text-5xl font-bold whitespace-pre-line">
              Melting Pots for the{'\n'}for the best idea
            </h2>
            <div className="flex flex-col-reverse md:flex-row mt-20 space-y-10 md:space-y-0">
              <div className="flex-1 mt-10">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start mb-6">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                      <span className="text-gray-600">
                        <FontAwesomeIcon icon={faSquare} className="text-slate text-2xl md:text-3xl" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{value.title}</h3>
                      <p className="text-gray-700">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 flex justify-center items-center mt-6 md:mt-1">
                <img
                  src={img2}
                  alt="Coding"
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md h-auto rounded-lg shadow-lg transition transform hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white p-8">
      <div className="flex-1 p-4 md:p-6 text-left w-full">
          <div className="flex justify-start md:justify-left gap-2 mt-6 md:mt-10 w-full">
            <FontAwesomeIcon icon={faMinus} className="text-white text-2xl md:text-3xl" />
            <p className="text-white text-sm md:text-md font-bold underline decoration-yellow-700">
              OUR TEAM
            </p>
          </div>
          <h2 className="text-white mt-2 md:mt-1 text-2xl md:text-6xl font-bold whitespace-pre-line">
            Collaborating & {"\n"}optimizing for growth
          </h2>
          <p className="text-white whitespace-pre-line text-xl mt-6 md:text-md mt-6">
          The team at petrong we are powering the growth{"\n"} of africar technolgy ecosystem
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white text-black p-4 rounded-lg text-center shadow-lg">
            <img
              src={member.imgSrc}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h4 className="font-semibold">{member.name}</h4>
            <p className="text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>
      </div>
      <div className="bg-sky-200 flex items-left justify-center font-[Roboto, sans-serif]">
            <NextLevelIdea />
     </div>
    </div>
  );
};

export default About;
