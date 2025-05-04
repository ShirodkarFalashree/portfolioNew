// import React from 'react'

// const Home = () => {
//   return (
//     <div className='h-screen font-mono items-center text-center flex flex-col justify-center'>
//     <h1 className='text-4xl text-white/20'>WELCOME</h1>
//     <br />
//     <h3 className='text-2xl text-white/20'>Let's merge logic with creativity for seamless experiences</h3>
//     <br />
//     <h2 className='text-2xl text-white/20'>with</h2>
//     <br />
// <h1 className='text-6xl text-white/20'>FALASHREE SHIRODKAR</h1>
//     </div>
//   )
// }

// export default Home


import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen font-mono flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-3xl sm:text-4xl text-white/20">WELCOME</h1>
      <p className="mt-4 text-lg sm:text-2xl text-white/20 max-w-xl">
        Let's merge logic with creativity for seamless experiences
      </p>
      <p className="mt-4 text-lg sm:text-2xl text-white/20">with</p>
      <h1 className="mt-6 text-3xl sm:text-6xl text-white/20 break-words">
        FALASHREE SHIRODKAR
      </h1>
    </div>
  );
};

export default Home;
