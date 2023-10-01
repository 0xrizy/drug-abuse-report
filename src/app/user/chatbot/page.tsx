"use client"
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Dashboard() {
  const [messageHistory, setMessageHistory] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Added loading state

  const handleSubmit = async () => {
    try {
      setIsLoading(true); 
      const res = await axios.post("/api/user/chat", { userMessage });
      const responseMessage = res.data.data[0].message.content;

      setMessageHistory((prevHistory) => [
        ...prevHistory,
        { text: userMessage, sender: "You" },
        { text: responseMessage, sender: "AI" },
      ]);

    
      setUserMessage("");
    } catch (error) {
      console.error(error);
      
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-1 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Chat With Our AI Powered Chatbot
        </span>{" "}
      </h1>
      <p className="text-lg font-normal text-gray-500 lg:text-xl mb-5">
        Ask out chatbot about mental health issues and drug abuse preventions. It
        will provide you with the best possible solution.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
        <div className="message-container space-y-2">
          {messageHistory.map((message, index) => (
            <div
              key={`message-${index}`}
              className={`message ${
                message.sender === "You"
                  ? "bg-blue-500 text-white self-end"
                  : "bg-green-500 text-white self-start"
              } p-2 rounded-lg max-w-2/3 break-words`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="input-container flex items-center mt-4">
          <textarea
            className="message-input w-full p-2 rounded-lg border border-gray-300"
            rows={4}
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button
            className="send-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-2"
            onClick={handleSubmit}
            disabled={isLoading} // Disable the button when loading
          >
            {isLoading ? "Sending..." : "Send"} {/* Show "Sending..." while loading */}
          </button>
        </div>
      </div>
    </div>
  );
}
