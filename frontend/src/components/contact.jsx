import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faMinus, faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/img7.jpg";
import axios from "axios";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
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
            const res = await axios.post("http://localhost:5000/api/contact", formData);
            setResponseMessage(res.data.message);
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setResponseMessage("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-sky-200 font-[Roboto] relative overflow-hidden">
            <div className="absolute top-[-50px] left-[-70px] w-64 h-64 bg-blue-300 rounded-full opacity-100"></div>
            <div className="absolute bottom-[-70px] right-[-50px] w-64 h-64 bg-green-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-[-130px] left-[-150px] w-64 h-64 bg-red-300 rounded-full opacity-20"></div>
            <div className="absolute top-[-110px] right-[-120px] w-64 h-64 bg-yellow-300 rounded-full opacity-50"></div>
            <div className="absolute top-[500px] md:top-[400px] left-[700px] md:left-[700px] w-64 h-64 bg-purple-300 rounded-full opacity-30"></div>
            <div className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 pt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center">
                    <div className="flex justify-center">
                        <img src={img1} alt="Illustration" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
                    </div>
                    <div className="text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-2">
                            <FontAwesomeIcon icon={faMinus} className="text-blue-600 text-3xl md:text-4xl" />
                            <p className="text-s md:text-s mb-14">DO YOU HAVE ANY QUESTIONS</p>
                        </div>
                        <div className="flex justify-center md:justify-start gap-2">
                            <FontAwesomeIcon icon={faHeadset} className="text-blue-600 text-3xl md:text-4xl" />
                            <h3 className="text-3xl md:text-4xl font-bold">Contact Us</h3>
                        </div>
                        <p className="text-lg md:text-xl mt-3">
                            We are located in Nigeria and we operate internationally, with clients from the US, UK, Canada, Australia, and many other countries.
                        </p>
                    </div>
                </div>
                <div className="mt-20 w-full max-w-6xl px-4 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold mb-4 text-center underline decoration-blue-500">Let’s build something awesome together</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Form Section */}
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 mb-4">
                                <label className="block">
                                    <span className="text-gray-700">Name</span>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full p-2 border-2 border-blue-500 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-300" placeholder="Your Name" required />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Email Address</span>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full p-2 border-2 border-blue-500 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-300" placeholder="Your Email" required />
                                </label>
                                <label className="block">
                                    <span className="text-gray-700">Your Message</span>
                                    <textarea name="message" value={formData.message} onChange={handleChange} className="mt-1 block w-full p-2 border-2 border-blue-500 rounded-md shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-300" rows="4" placeholder="Your Message" required></textarea>
                                </label>
                            </div>
                            <button type="submit" className="w-40 py-3 bg-blue-600 text-white rounded-full" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Submit"}
                            </button>
                            {responseMessage && <p className="mt-2 text-green-600">{responseMessage}</p>}
                        </form>

                        {/* Contact Information */}
                        <div className="mt-6 text-center md:text-left">
                            <h3 className="text-lg font-semibold">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                                Pay us a visit
                            </h3>
                            <p>471, Alagbado off ijaye ojokoro, Inner Street Long Road, Lagos Nigeria</p>
                            <h3 className="text-lg font-semibold mt-35">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                Or drop us a line
                            </h3>
                            <p>partnerships@petronogsolutions.com</p>
                            <p>+234 810 7595 941</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
