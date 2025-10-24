// import React from 'react'

// const Experience = () => {
//   return (
//     <div className=' font-mono p-4'>
//      <h1 className="text-4xl  items-center text-center flex flex-col justify-center"> Experience </h1> <br />
//      <div className='leading-9'>
//      <h2 className="text-2xl font-semibold text-white/90">
//              Website Developer Intern — <span className="italic">EduSwitch</span>
//           </h2>
//           <p className="text-white/60">January 2025 – July 2025</p>
//           <ul className="list-disc ml-6 mt-2 ">
//             <li>Working on websites using <strong>ASP.NET</strong>, <strong>JavaScript</strong>, and <strong>Azure</strong>.</li>
//             <li>Building responsive, secure, and performance-optimized frontends.</li>
//           </ul>
// <br /><br />
//           <h2 className="text-2xl font-semibold text-white/90">
//              Hackathon Experience
//           </h2>
//           <ul className="list-disc ml-6 mt-2 ">
//             <li><strong>Hackathon 3.0</strong> – Participated in a student-driven innovation event hosted by <em>GITS, DMCE Airoli</em>. Built a creative solution with a strong emphasis on collaboration, teamwork, and impactful problem-solving. Received a Certificate of Participation for enthusiastic involvement.</li>
//             <li><strong>ScrollHacks by Scroll</strong> – Competed in a national-level hackathon from <em>September 27–29</em>. Developed a tech-forward prototype in a high-pressure, fast-paced environment, applying real-world development principles to address critical challenges.</li>
//           </ul>
//           </div>
//     </div>
//   )
// }

// export default Experience;

import React from "react";

const Experience = () => {
  return (
    <div className="font-mono px-4 sm:px-6 md:px-10 lg:px-16 py-6 max-w-screen-lg mx-auto w-full overflow-x-hidden">
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-6 break-words">
        Experience
      </h1>

      <div className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 space-y-6 break-words">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90">
            Website Developer Intern — <span className="italic">EduSwitch</span>
          </h2>
          <p className="text-white/60">January 2025 – July 2025</p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>
              Working on websites using <strong>ASP.NET</strong>,{" "}
              <strong>JavaScript</strong>, and <strong>Azure</strong>.
            </li>
            <li>
              Building responsive, secure, and performance-optimized frontends.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white/90">
            Hackathon Experience
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>3rd Runner up in MINITHON hackathon</strong> – Conducted
              by TADOMAL SHAHANI ENGINEERING COLLEGE, GradNest addresses the
              common challenge students face when searching for clear,
              comparable, and comprehensive information about on- or off-campus
              accommodations. The problem is that critical details like pricing,
              capacity, specific amenities (like AC or attached bathrooms), and
              resident feedback are often scattered across multiple sources or
              outdated PDF documents, making it impossible to confidently
              compare options. This application solves that by creating a
              single, centralized, and visually appealing hub that clearly
              presents every piece of relevant data—from an overview on the main
              page to detailed galleries, testimonials, and FAQs on the room's
              dedicated page—allowing students to make fast, informed decisions
              about where they will live.
            </li>
<br />
            <li>
              <strong>Hackathon 3.0</strong> – Participated in a student-driven
              innovation event hosted by <em>GITS, DMCE Airoli</em>. Built a
              creative solution with a strong emphasis on collaboration,
              teamwork, and impactful problem-solving. Received a Certificate of
              Participation for enthusiastic involvement.
            </li> <br />
            <li>
              <strong>ScrollHacks by Scroll</strong> – Competed in a
              national-level hackathon from <em>September 27–29</em>. Developed
              a tech-forward prototype in a high-pressure, fast-paced
              environment, applying real-world development principles to address
              critical challenges.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
