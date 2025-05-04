// import React from 'react';
// import { FaArrowLeft, FaArrowRight, FaSearch, FaWindowMinimize, FaWindowMaximize, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   return (
//     <div className="flex items-center justify-center sm:justify-start gap-10 bg-[#2d2d2d] text-gray-300 text-sm h-8 px-2">
//       {/* Left: Menu Items */}
//       <div className="hidden md:flex space-x-4 ">
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">File</span>
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Edit</span>
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Selection</span>
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">View</span>
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Go</span>
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Run</span>
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Terminal</span>
//         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Help</span>
//       </div>

//       {/* Center: Navigation Arrows and Search Bar */}
//       <div className="flex items-center space-x-2 ">
//         <FaArrowLeft className="text-gray-400 hover:text-white cursor-pointer" />
//         <FaArrowRight className="text-gray-400 hover:text-white cursor-pointer" />
//         <div className="flex items-center bg-[#3c3c3c] rounded  px-28 md:px-64 py-0.5">
//         <FaSearch className="text-gray-400 mr-2 sm:text-lg" />
//           <div className='bg-transparent font-mono'>Falashree Shirodkar</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { FaArrowLeft, FaArrowRight, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  return (
<div className="flex items-center sm:justify-start justify-center bg-[#2d2d2d] text-gray-300 text-sm h-8 px-2 w-full">
  
  {/* Menu items — hidden on small screens */}
  <div className="hidden md:flex space-x-4">
  <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">File</span>
         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Edit</span>
         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Selection</span>
         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">View</span>
         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Go</span>
         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Run</span>
         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Terminal</span>
         <span className="hover:bg-[#3c3c3c] px-2 py-1 rounded cursor-pointer">Help</span>
  </div>

  {/* Search + Name Box — always visible and centered on mobile */}
  <div className="flex items-center justify-center space-x-2 sm:ml-4">
    <FaArrowLeft className="text-gray-400 hover:text-white cursor-pointer hidden sm:inline" />
    <FaArrowRight className="text-gray-400 hover:text-white cursor-pointer hidden sm:inline" />

    <div className="flex items-center bg-[#3c3c3c] rounded px-4 sm:px-10 md:px-20 lg:px-32 py-0.5">
      <FaSearch className="text-gray-400 mr-2 text-sm sm:text-base" />
      <div className="bg-transparent font-mono text-xs sm:text-sm">Falashree Shirodkar</div>
    </div>
  </div>

</div>

  );
};

export default Navbar;
