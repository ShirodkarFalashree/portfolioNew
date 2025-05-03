import React from 'react';
import { NavLink } from 'react-router-dom';

const Explorer = ({ onFileClick }) => {
  const files = ['About.jsx', 'Projects.jsx', 'Experience.jsx'];

  return (
    <div className="w-64 bg-[#252526] p-4 h-[663px] font-mono">
      <h2 className="text-gray-300 mb-2">EXPLORER</h2>
      <ul>
        {files.map((file) => (
          <li
            key={file}
            className="cursor-pointer text-sm hover:bg-[#3c3c3c] px-2 py-1 rounded"
            onClick={() => onFileClick(file)}
          >
            📄 {file}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Explorer;

