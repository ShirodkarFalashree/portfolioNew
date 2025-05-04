import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Explorer from './pages/Explorer';
import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const fileMap = {
  'About.jsx': <About />,
  'Projects.jsx': <Projects />,
  'Experience.jsx': <Experience />,
  // 'Contact.jsx': <Contact />,
};

function App() {
  const [openFiles, setOpenFiles] = useState([]);
  const [activeFile, setActiveFile] = useState(null);
  const [showExplorer, setShowExplorer] = useState(false);

  const openFile = (fileName) => {
    if (!openFiles.includes(fileName)) {
      setOpenFiles([...openFiles, fileName]);
    }
    setActiveFile(fileName);
  };

  const closeFile = (fileName) => {
    const updated = openFiles.filter(f => f !== fileName);
    setOpenFiles(updated);
    if (activeFile === fileName) {
      setActiveFile(updated[updated.length - 1] || null);
    }
  };

  return (

    <div>
      <Navbar/>
    <div className="flex h-screen  bg-[#1e1e1e] text-white overflow-hidden">
      <Sidebar
        onFileIconClick={() => setShowExplorer(prev => !prev)}
        onFileClick={openFile}
      />
      {/* {showExplorer && (
        <div className="w-64">
          <Explorer onFileClick={openFile} />
        </div>
      )} */}
      <div className="flex flex-col flex-1">
        <Header
          openFiles={openFiles}
          activeFile={activeFile}
          onTabClick={setActiveFile}
          onClose={closeFile}
        />
        <div className="flex-1 overflow-y-auto p-4">
          {activeFile ? fileMap[activeFile] : <Home />}
        </div>

      </div>
    </div>
    </div>
  );
}

export default App;