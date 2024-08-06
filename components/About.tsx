import React from "react";

const About: React.FC<{}> = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center h-full relative overflow-hidden pt-[35px] " style={{ transform: "scale(0.9" }}>
      <div className="flex flex-col  justify-around flex-wrap items-center   max-w-[900px]">
        <h1 className="text-white font-semibold text-6xl">ABOUT ME</h1>
        <p className=" tracking-[0.5em] text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl">EXPLORE NOW</p>
        <p className="text-gray-300 text-center ">
          Accomplished Full-Stack Developer with 5+ year track record of delivering high-performance, scalable, user-centric dApps.
          <br />
          <br />
          Demonstrated expertise in elevating Web3 project metrics by 25%, deploying cutting-edge data systems, and timely, cost-effective project delivery.
        </p>
      </div>
    </section>
  );
};

export default About;
