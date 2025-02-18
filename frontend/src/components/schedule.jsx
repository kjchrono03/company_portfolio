import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import img1 from "../assets/img6.jpg";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from "./Navbar";


const Schedule = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeZone, setSelectedTimeZone] = useState("West African Time");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleSchedule = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    if (!name || !email) {
      setFeedback({ type: "error", message: "Name and Email are required!" });
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/schedule", {
        name,
        email,
        appointmentDateTime: selectedDate.toISOString(),
        timeZone: selectedTimeZone,
        message,
      });

      setFeedback({ type: "success", message: response.data.message });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setFeedback({ type: "error", message: "Failed to schedule meeting!" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-white font-[Roboto]">
      <div className="flex-grow flex flex-col items-center justify-center px-6 md:px-16 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center">
          <div className="flex justify-center">
            <img src={img1} alt="Illustration" className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg transform hover:scale-105 transition duration-300" />
          </div>
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start gap-2">
              <FontAwesomeIcon icon={faPhoneAlt} className="text-blue-600 text-3xl md:text-4xl" />
              <h3 className="text-3xl md:text-4xl font-bold underline decoration-blue-500">Book a call</h3>
            </div>
            <p className="text-lg md:text-xl mt-3">
              Select a suitable time slot and have a face-to-face video call with a project manager to discuss your needs.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row bg-white rounded-lg p-6 shadow-lg w-full max-w-6xl">
          <div className="bg-black text-white w-full lg:w-1/2 rounded-lg p-6 text-center">
            <h1 className="text-2xl font-bold">30 Minute Meeting</h1>
            <p className="mt-2">Web conferencing details provided upon confirmation.</p>
            <p className="mt-4">{selectedDate.toLocaleString()}</p>
            <p className="mt-1">{selectedTimeZone} GMT</p>
          </div>

          <div className="w-full lg:w-1/2 lg:ml-6 space-y-4">
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              dateFormat="MMMM d, yyyy h:mm aa"
              className="border-2 border-blue-400 rounded-lg p-2 w-full"
            />
            <select className="border-2 border-blue-700 rounded-lg p-2 w-full" value={selectedTimeZone} onChange={(e) => setSelectedTimeZone(e.target.value)}>
              {["West African Time", "Eastern Standard Time"].map(zone => <option key={zone} value={zone}>{zone}</option>)}
            </select>
            <input type="text" placeholder="Name" className="border-2 border-blue-400 rounded-lg p-2 w-full" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email Address" className="border-2 border-blue-400 rounded-lg p-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder="Please share the topics" className="border-2 border-blue-400 rounded-lg p-2 w-full h-24 resize-none" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button className="bg-blue-600 text-white font-bold py-2 rounded-lg w-full hover:bg-blue-700 transition duration-300" onClick={handleSchedule} disabled={loading}>
              {loading ? 'Scheduling...' : 'Schedule Meeting'}
            </button>
            {feedback && <p className={`text-center ${feedback.type === "error" ? "text-red-600" : "text-green-600"}`}>{feedback.message}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
