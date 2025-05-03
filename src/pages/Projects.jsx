import React from 'react';

const projects = [
  {
    title: 'eScout',
    description: 'eScout is a powerful search engine. It intelligently aggregates data from various sources to provide users with the most pertinent insights, all in one place.',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ShirodkarFalashree/eScout-web',
  },
  {
    title: 'Authentication System',
    description: 'Login using keystroke dynamics, voice recognition, gesture recognition for secure access.',
    tech: ['MERN', 'tailwindd css'],
    link: 'https://github.com/ShirodkarFalashree/authentication',
  },
  {
    title: 'Chess Web App',
    description: 'Real-time multiplayer chess with board customization.',
    tech: ['React', 'Socket.io', 'Node.js','tailwind css'],
    link: 'https://github.com/ShirodkarFalashree/Chessify',
  },
  {
    title: 'Two good Co. clone',
    description: 'A website clone with captivating cursor animations and smooth scroll-based interactions using Locomotive Scroll, featuring dynamic visual effects and responsive transitions for an immersive user experience.',
    tech: ['javascript', 'locomotive js', 'GSAP'],
    link: 'https://github.com/ShirodkarFalashree/two-good-clone',
  },
  {
    title: 'Here Fashion',
    description: 'A seamless e-commerce platform with intuitive navigation, secure checkout, optimized for both desktop and mobile.',
    tech: ['React', 'Redux','tailwind css '],
    link: 'https://github.com/ShirodkarFalashree/Redux-ecom',
  },
  {
    title: 'FAVJewels',
    description: 'A seamless e-commerce platform made for a jeweley brand.',
    tech: ['React', 'Nodejs','Mongodb','tailwind css'],
    link: 'https://github.com/Avishkar68/FAVjewels',
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen p-8 font-mono text-white">
      <h1 className="text-4xl font-bold mb-8 text-center text-white/80">Projects</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-white/5 rounded-2xl h-[330px]  p-6 shadow hover:shadow-lg shadow-white/20 transition-all relative">
            <h2 className="text-xl font-semibold text-white/90">{project.title}</h2>
            <p className="text-white/60 mt-2">{project.description}</p>
            <div className="mt-2 text-sm text-white/40 italic">Tech: {project.tech.join(', ')}</div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-white/10 hover:bg-white/20 text-sm rounded-lg text-white transition"
              >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
