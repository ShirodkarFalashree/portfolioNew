const Header = ({ openFiles, activeFile, onTabClick, onClose }) => {
  return (
    <div className="flex bg-[#1e1e1e] border-b border-gray-700 text-sm font-mono">
      {openFiles.map((file) => (
        <div
          key={file}
          className={`px-4 py-2 cursor-pointer border-r border-gray-600 ${
            activeFile === file ? 'bg-[#252526] text-white' : 'bg-[#2d2d2d] text-gray-400'
          }`}
          onClick={() => onTabClick(file)}
        >
          {file}
          <span
            className="ml-2 text-gray-400 hover:text-red-400"
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
