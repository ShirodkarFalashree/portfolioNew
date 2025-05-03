import React from "react";

const About = () => {
  return (
    <div className="font-mono p-4">
      <h1 className="text-4xl  items-center text-center flex flex-col justify-center">
        About Me
      </h1>
      <br />
      <div className="leading-10">
        Hi, I'm Falashree Shirodkar — a passionate full-stack developer. <br />{" "}
        I specialize in merging logic with creativity to craft seamless user
        experiences. <br />
        With a strong foundation in web technologies like MERN stack,
        JavaScript, and Tailwind CSS, I build high-performance applications that
        are not only functional but also visually compelling. <br />
        Whether it's designing intuitive UIs, writing scalable backend code, or
        managing entire projects — I bring a balance of technical depth and
        artistic flair to the table.
        <br />
        I help brands grow through services like: <br />
        <ul className="list-disc pl-7">
          <li> Web Development </li>
          <li> Video Editing </li>
          <li> Content Writing </li>
          <li> Graphic Design </li>
        </ul>
        When I’m not coding, you’ll find me sketching or exploring UI trends. My
        goal is to build meaningful tech that solves problems and inspires
        people — all while delivering top-notch quality. <br />
        Let’s build something great together!
      </div>
    </div>
  );
};

export default About;
