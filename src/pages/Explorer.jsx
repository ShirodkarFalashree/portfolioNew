import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaReact} from "react-icons/fa";
const Explorer = ({ onFileClick }) => {
  const files = ['About.jsx', 'Projects.jsx', 'Experience.jsx'];

  return (
    <div className="w-64 bg-[#252526] pt-2  h-[663px] font-mono">
      <h2 className="text-gray-300 mb-2 pl-2">EXPLORER</h2>
      <ul>
        {files.map((file) => (
          <li
            key={file}
            className="cursor-pointer text-sm flex items-center gap-1 pl-9 hover:bg-[#3c3c3c] px-2 py-1 "
            onClick={() => onFileClick(file)}
          >
            <FaReact/> {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explorer;

