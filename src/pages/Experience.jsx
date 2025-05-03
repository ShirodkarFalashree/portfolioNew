import React from 'react'

const Experience = () => {
  return (
    <div className=' font-mono p-4'>
     <h1 className="text-4xl  items-center text-center flex flex-col justify-center"> Experience </h1> <br />
     <div className='leading-9'>
     <h2 className="text-2xl font-semibold text-white/90">
             Website Developer Intern — <span className="italic">EduSwitch</span> 
          </h2>
          <p className="text-white/60">January 2025 – July 2025</p>
          <ul className="list-disc ml-6 mt-2 ">
            <li>Working on websites using <strong>ASP.NET</strong>, <strong>JavaScript</strong>, and <strong>Azure</strong>.</li>
            <li>Building responsive, secure, and performance-optimized frontends.</li>
          </ul>
<br /><br />
          <h2 className="text-2xl font-semibold text-white/90">
             Hackathon Experience
          </h2>
          <ul className="list-disc ml-6 mt-2 ">
            <li><strong>Hackathon 3.0</strong> – Participated in a student-driven innovation event hosted by <em>GITS, DMCE Airoli</em>. Built a creative solution with a strong emphasis on collaboration, teamwork, and impactful problem-solving. Received a Certificate of Participation for enthusiastic involvement.</li>
            <li><strong>ScrollHacks by Scroll</strong> – Competed in a national-level hackathon from <em>September 27–29</em>. Developed a tech-forward prototype in a high-pressure, fast-paced environment, applying real-world development principles to address critical challenges.</li>
          </ul>
          </div>
    </div>
  )
}

export default Experience;