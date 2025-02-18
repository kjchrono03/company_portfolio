import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaPaperPlane, FaComments, FaCircle } from "react-icons/fa";
import "./chat.css";
import botAvatar from "../assets/img11.jpg";
import axios from "axios";

const Chat = () => {
  const [messages, setMessages] = useState([
    { user: "Rasheed", text: "How may we assist you today?", type: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const [isEmailRequested, setIsEmailRequested] = useState(false);
  const [email, setEmail] = useState("");

  const botResponses = {
    hello: "Hi there! How can I help you?",
    pricing: "Our pricing plans are flexible. Please visit our website for details.",
    services: "We offer Web Development, Mobile Development, and AI Solutions!",
    thanks: "You're welcome! Let me know if you need anything else.",
    invalidEmail: "Re-enter the email address.",
    validEmail: "We will assist you shortly through your email. Thank you",
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const getBotResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (isEmailRequested) {
      if (emailRegex.test(userMessage)) {
        setEmail(userMessage);
        setIsEmailRequested(false);
        saveEmailToDatabase(userMessage); // Save email to database
        return botResponses.validEmail;
      } else {
        return botResponses.invalidEmail;
      }
    }
    for (const key in botResponses) {
      if (lowerCaseMessage.includes(key)) {
        return botResponses[key];
      }
    }
    return "Can I get your Email address?";
  };

  const saveEmailToDatabase = async (email) => {
    try {
      await axios.post("/api/chat/submit-email", { email });
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  const handleSend = useCallback(() => {
    if (input.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "You", text: input, type: "user" },
      ]);
      setInput("");

      setTimeout(() => {
        const botMessage = { user: "Rasheed", text: getBotResponse(input), type: "bot" };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
        if (!isEmailRequested && botMessage.text === "Can I get your Email address?") {
          setIsEmailRequested(true);
        }
      }, 1000);
    }
  }, [input, isEmailRequested]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-widget">
      {/* Chat Toggle Button */}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaComments size={24} />
      </button>

      {/* Chat Box */}
      {isOpen && (
        <div className="chat-container">
          <div className="card shadow-lg rounded-lg">
            <div className="card-header chat-header">
              <div className="bot-info">
                <img src={botAvatar} alt="Bot" className="bot-avatar" />
                <div className="bot-text">
                  <h5 className="bot-name">Rasheed</h5>
                  <span className="bot-status">
                    <FaCircle className="status-icon" /> Online
                  </span>
                </div>
              </div>
              <button className="btn btn-sm btn-danger" onClick={() => setIsOpen(false)}>X</button>
            </div>
            <div className="card-body chat-messages p-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-bubble p-3 rounded-lg mb-2 ${
                    msg.type === "user" ? "user-message bg-primary text-white text-end" : "bot-message bg-success text-white"
                  }`}
                >
                  <strong>{msg.user}: </strong> {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="card-footer d-flex align-items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="form-control me-2"
              />
              <button onClick={handleSend} className="btn btn-warning">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
