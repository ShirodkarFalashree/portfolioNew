// import React from "react";

// const About = () => {
//   return (
//     <div className="font-mono p-4">
//       <h1 className="text-4xl  items-center text-center flex flex-col justify-center">
//         About Me
//       </h1>
//       <br />
//       <div className="leading-10">
//         Hi, I'm Falashree Shirodkar — a passionate full-stack developer. <br />{" "}
//         I specialize in merging logic with creativity to craft seamless user
//         experiences. <br />
//         With a strong foundation in web technologies like MERN stack,
//         JavaScript, and Tailwind CSS, I build high-performance applications that
//         are not only functional but also visually compelling. <br />
//         Whether it's designing intuitive UIs, writing scalable backend code, or
//         managing entire projects — I bring a balance of technical depth and
//         artistic flair to the table.
//         <br />
//         I help brands grow through services like: <br />
//         <ul className="list-disc pl-7">
//           <li> Web Development </li>
//           <li> Video Editing </li>
//           <li> Content Writing </li>
//           <li> Graphic Design </li>
//         </ul>
//         When I’m not coding, you’ll find me sketching or exploring UI trends. My
//         goal is to build meaningful tech that solves problems and inspires
//         people — all while delivering top-notch quality. <br />
//         Let’s build something great together!
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";

const About = () => {
  return (
    <div className="font-mono px-4 sm:px-6 md:px-10 lg:px-16 py-6 max-w-screen-lg mx-auto w-full overflow-x-hidden">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-6 break-words">
        About Me
      </h1>

      <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 space-y-4 break-words">
        <p>
          Hi, I’m <strong>Falashree Shirodkar</strong>, a full-stack developer
          focused on building reliable, user-centric web applications.
        </p>

        <p>
          I work primarily with the <strong>MERN stack</strong>,{" "}
          <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>, and I’m
          comfortable handling both frontend and backend development.
        </p>

        <p>
          I enjoy translating requirements into clean, scalable solutions,
          paying close attention to performance, responsiveness, and overall
          user experience.
        </p>

        <p>
          I have experience taking projects from concept to deployment,
          collaborating across design and development, and maintaining clean,
          maintainable codebases.
        </p>

        <p>
          Alongside development, I bring a strong sense of visual design and
          content clarity, which helps me build products that align well with
          both user needs and business goals.
        </p>

        <p>
          I’m continuously learning, improving my engineering skills, and
          looking to contribute meaningfully to teams building impactful
          technology.
        </p>
      </div>
    </div>
  );
};

export default About;
