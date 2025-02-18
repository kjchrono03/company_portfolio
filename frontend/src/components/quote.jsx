import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenFancy, faMinus, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import img1 from "../assets/img8.jpg";

const NextLevelIdea = () => (
  <div className="p-10 flex flex-col items-start justify-between">
    <div>
      <h1 className="text-4xl font-bold mb-2">Do you have a next-level idea?</h1>
      <p className="text-gray-500 mb-4">Reach out and we can create magic together.</p>
    </div>
    <Link to="/contact">
      <button className="bg-blue-500 text-white py-2 px-6 rounded-full shadow hover:bg-blue-600 transition duration-300 mt-4">
        Work with us
      </button>
    </Link>
  </div>
);

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projects: "",
    time: "",
    instructions: ""
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseMessage("");

    try {
      const res = await axios.post("http://localhost:5000/api/quote", formData);
      setResponseMessage(res.data.message);
      setFormData({ name: "", email: "", projects: "", time: "", instructions: "" });
    } catch (error) {
      setResponseMessage("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-[Roboto] relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-[-50px] left-[-70px] w-64 h-64 bg-blue-300 rounded-full opacity-30"></div>
      <div className="absolute bottom-[-70px] right-[-50px] w-64 h-64 bg-green-300 rounded-full opacity-20"></div>

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center">
          <div className="flex justify-center">
            <img
              src={img1}
              alt="Illustration"
              className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faMinus} className="text-blue-600 text-3xl" />
              <p className="text-md font-semibold">NEED A PRODUCT QUOTE</p>
            </div>
            <div className="flex justify-center md:justify-start gap-2 mt-4">
              <FontAwesomeIcon icon={faPenFancy} className="text-blue-600 text-4xl" />
              <h3 className="text-3xl font-bold">Quote Request</h3>
            </div>
            <p className="text-lg mt-3">
              Get your free quote request! Fill in all required fields. Call us for more details.
            </p>
          </div>
        </div>

        {/* Quote Form */}
        <div className="mt-20 w-full max-w-6xl px-4 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4 text-center underline decoration-blue-500">
            Request a Quote
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-gray-700 font-bold">Name</span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-100 bg-sky-200 rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-100 bg-sky-200 rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold">Project Type</span>
                <input
                  type="text"
                  name="projects"
                  value={formData.projects}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-100 bg-sky-200 rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold">Deadline</span>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-100 bg-sky-200 rounded-md focus:ring focus:ring-blue-300"
                  required
                />
              </label>
              <label className="block">
                <span className="text-gray-700 font-bold">Instructions</span>
                <textarea
                  name="instructions"
                  value={formData.instructions}
                  onChange={handleChange}
                  className="mt-1 block w-full p-2 bg-gray-100 bg-sky-200 rounded-md focus:ring focus:ring-blue-300"
                  rows="4"
                  required
                ></textarea>
              </label>
              <button
                type="submit"
                className="w-40 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Request"}
              </button>
              {responseMessage && <p className="mt-2 text-green-600">{responseMessage}</p>}
            </form>

            {/* Contact Information */}
            <div className="mt-6 text-center md:text-left">
              <h3 className="text-lg font-semibold mt-10">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Pay us a visit
              </h3>
              <p>471, Alagbado, Lagos, Nigeria</p>

              <h3 className="text-lg font-semibold mt-60">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                Or drop us a line
              </h3>
              <p>partnerships@petronogsolutions.com</p>
              <p>+234 810 7595 941</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-sky-200 flex items-center justify-center">
        <NextLevelIdea />
      </div>
    </div>
  );
};

export default Quote;
