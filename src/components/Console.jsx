
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Console = ({ handleCloseConsole, consoleWidth }) => {
  const questions = ["What is your name?", "What is your email?", "What is your message?"];
  const keys = ["name", "email", "message"];

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({ name: "", email: "", message: "" });
  const [inputValue, setInputValue] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!inputValue.trim()) {
      toast.error("Please enter something!");
      return;
    }

    const key = keys[currentStep];
    const updatedAnswers = { ...answers, [key]: inputValue };
    setAnswers(updatedAnswers);
    setInputValue("");

    // If last step, send the email
    if (currentStep === questions.length - 1) {
      setIsSubmitting(true);
      const templateParams = {
        subject: "New Response from Portfolio Console",
        sendername: updatedAnswers.name || "Unknown",
        replyto: updatedAnswers.email || "unknown@gmail.com",
        to: "falashreeshirodkar07@gmail.com",
        question: "What is your message?",
        answer: updatedAnswers.message,
        submitted_at: new Date().toLocaleString(),
      };

      emailjs
        .send(
          "service_pdgv6zq",      // Your EmailJS service ID
          "template_ku75lho",     // Your EmailJS template ID
          templateParams,
          "JGnx-aH8FvN0QfhGM"     // Your EmailJS public key
        )
        .then(() => {
          toast.success("Response sent successfully! Will connect soon!");
          setTimeout(() => {
            handleCloseConsole();
            setIsSubmitting(false);
          }, 1000);
        })
        .catch(() => {
          toast.error("Failed to send. Please try again.");
          setIsSubmitting(false);
        });
    } else {
      // Move to next step
      setCurrentStep(currentStep + 1);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !isSubmitting) {
      handleSubmit();
    }
  };

  return (
    <div
      className="fixed bottom-0 h-[300px] right-0 bg-[#252526] text-white font-mono p-4 border-t border-[#3c3c3c] z-50"
      style={{ width: consoleWidth }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="text-sm">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400 ml-2">falashree@portfolio</span>
          <span className="text-white ml-2">:</span>
          <span className="text-yellow-400">~</span>
          <span className="ml-2 text-white">{questions[currentStep]}</span>
        </div>
        <button
          onClick={handleCloseConsole}
          className="text-white text-2xl pr-5 font-bold cursor-pointer"
        >
          ×
        </button>
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <span className="text-green-400">➜</span>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="bg-[#252526] text-white font-mono border-none border-b border-[#3c3c3c] focus:outline-none w-full"
          placeholder="Type your answer here..."
          autoFocus
        />
      </div>

      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Console;
