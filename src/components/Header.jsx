// const Header = ({ openFiles, activeFile, onTabClick, onClose }) => {
//   return (
//     <div className="flex bg-[#1e1e1e]  text-sm font-mono">
//       {openFiles.map((file) => (
//         <div
//           key={file}
//           className={`px-4 py-2 cursor-pointer bg-[#1e1e1e]  border-r border-gray-600 ${
//             activeFile === file ? 'bg-[#252526] text-white border-t border-gray-600' : 'bg-[#2d2d2d] text-gray-400'
//           }`}
//           onClick={() => onTabClick(file)}
//         >
//           {file}
//           <span
//             className="ml-2 text-gray-400 hover:text-gray-200"
//             onClick={(e) => {
//               e.stopPropagation();
//               onClose(file);
//             }}
//           >
//             ×
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Header;




const Header = ({ openFiles, activeFile, onTabClick, onClose }) => {
  return (
    <div className="flex overflow-x-auto bg-[#1e1e1e] text-sm font-mono border-b border-gray-600 no-scrollbar">
      {openFiles.map((file) => (
        <div
          key={file}
          className={`flex items-center whitespace-nowrap px-3 py-2 cursor-pointer border-r border-gray-600 min-w-fit
            ${
              activeFile === file
                ? 'bg-[#252526] text-white border-t'
                : 'bg-[#2d2d2d] text-gray-400'
            }
          `}
          onClick={() => onTabClick(file)}
        >
          <span>{file}</span>
          <span
            className="ml-2 text-gray-400 hover:text-gray-200"
            onClick={(e) => {
              e.stopPropagation();
              onClose(file);
            }}
          >
            ×
          </span>
        </div>
      ))}
    </div>
  );
};

export default Header;
