import React from "react";

const Console = ({
    question,
    answer,
    setAnswer,
    handleNextQuestion,
    handleKeyPress,
    isLast,
    handleCloseConsole,
    consoleWidth, // receive the width as a prop
  }) => {
    return (
      <div
        className="fixed bottom-0 h-[300px] right-0 bg-[#1e1e1e] text-white font-mono p-4 border-t border-[#3c3c3c] z-50"
        style={{ width: consoleWidth }} // Apply the dynamic width
      >
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm">
            <span className="text-green-400">➜</span>
            <span className="text-blue-400 ml-2"> falashree@portfolio</span>
            <span className="text-white ml-2">:</span>
            <span className="text-yellow-400">~</span>
            <span className="ml-2 text-white">{question}</span>
          </div>
          <button
            onClick={handleCloseConsole}
            className="text-white text-lg font-bold cursor-pointer"
          >
            X
          </button>
        </div>
  
        <div className="flex items-center space-x-2">
          <span className="text-green-400">➜</span>
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-[#1e1e1e] text-white font-mono border-none border-b border-[#3c3c3c] focus:outline-none w-full"
            placeholder="Type your answer here..."
            autoFocus
          />
         
        </div>
      </div>
    );
  };
  
export default Console;
