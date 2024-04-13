import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] "
      style={{ transform: "scale(0.9" }}
    >
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">
          EXPLORE NOW
        </p>
        <p className="text-gray-300 text-center ">
          Frontend developer passionate about creating seamless user experiences
          with HTML, CSS, JavaScript, React, and Next. Proficient in responsive
          design, web performance optimization, translating design concepts into
          functional, visually appealing websites and applications.
          <br />
          <br />
          Collaborates effectively with cross-functional teams to deliver
          innovative solutions and drive user engagement. Committed to
          continuous learning and staying updated on industry trends for
          cutting-edge frontend solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
