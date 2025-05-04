import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaJs,
  FaFileCode,
  FaCss3Alt,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { CiFileOn } from "react-icons/ci";
import Explorer from "../pages/Explorer";
import Console from "../components/Console"; // ← import Console component

const Sidebar = ({ onFileIconClick, onFileClick }) => {
  const [showConsole, setShowConsole] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [isExplorerOpen, setIsExplorerOpen] = useState(false); // New state to track Explorer

  const questions = [
    "What is your name?",
    "What is your email address?",
    "What is your message?",
  ];

  const handleContactClick = () => {
    setShowConsole(!showConsole);
    setCurrentQuestionIndex(0);
    setAnswer("");
    setAnswers([]);
  };

  const handleNextQuestion = () => {
    setAnswers([...answers, answer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setAnswer("");
    } else {
      console.log("Contact Form Answers:", [...answers, answer]);
      setShowConsole(false);
      setCurrentQuestionIndex(0);
      setAnswer("");
      setAnswers([]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNextQuestion();
    }
  };

  const handleCloseConsole = () => {
    setShowConsole(false);
    setCurrentQuestionIndex(0);
    setAnswer("");
    setAnswers([]);
  };

  const toggleExplorer = () => {
    setIsExplorerOpen(!isExplorerOpen); // Toggle the Explorer state
  };

  return (
    <div className="flex flex-col h-[900px] sm:h-[663px] font-mono">
      <div className="flex flex-col items-center bg-[#2d2d2d] text-white py-4 w-12 space-y-6 justify-between flex-1">
        <button
          onClick={onFileIconClick}
          className="cursor-pointer hover:bg-[#3c3c3c] p-2 rounded-l"
        >
          <CiFileOn className="text-2xl" />
        </button>

        <div className="flex flex-col gap-6">
          <DiMongodb className="text-2xl" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express.js"
            className="w-6 h-6 invert"
          />
          <FaReact className="text-2xl" />
          <FaNodeJs className="text-2xl" />
          <FaHtml5 className="text-2xl" />
          <FaCss3Alt className="text-2xl" />
          <FaJs className="text-2xl" />
          <FaGithub className="text-2xl" />
          <FaGitAlt className="text-2xl" />
          <BsFiletypeSql className="text-2xl" />
        </div>
        <div className="hover:bg-[#3c3c3c] p-2 rounded-l">
          <GrContact
            className="text-2xl cursor-pointer"
            onClick={handleContactClick}
          />
        </div>
      </div>

     

      {showConsole && (
        <Console
          question={questions[currentQuestionIndex]}
          answer={answer}
          setAnswer={setAnswer}
          handleNextQuestion={handleNextQuestion}
          handleKeyPress={handleKeyPress}
          isLast={currentQuestionIndex === questions.length - 1}
          handleCloseConsole={handleCloseConsole}
          consoleWidth={"100%"}
        />
      )}
    </div>
  );
};

export default Sidebar;
