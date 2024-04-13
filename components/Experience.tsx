import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">DTX /</span> FRONT-END DEVELOPER
          </p>
          <p className="text-gray-300">
            04/2017 - 07/2022, New York, United States
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          I optimized website loading speed by 7% through performance
          enhancements and code optimization. Additionally, I developed and
          maintained front-end features for the company's web applications. I
          also conducted regular code reviews and provided feedback to improve
          code quality. <br />
          <br />
          Furthermore, I tested and debugged code to ensure optimal performance
          and functionality. In collaboration with the UX/UI team, I redesigned
          key user interfaces, leading to a 13% improvement in user
          satisfaction. Lastly, I contributed to a major website redesign
          project, resulting in an 11% increase in overall site traffic and
          engagement.
        </p>
        <div className="flex  flex-row justify-between pt-10">
          <p className="text-gray-300 ">
            <span className="font-semibold">Peiko /</span> SENIOR FRONT-END
            DEVELOPER
          </p>
          <p className="text-gray-300">
            08/2022 - 01/2024, New York, United States
          </p>
        </div>
        <p className="text-gray-300 pt-5">
          I spearheaded a front-end architecture overhaul, which resulted in a
          12% boost in website performance. Additionally, I elevated team
          productivity by XX% through mentoring junior developers. Furthermore,
          I drove a 21% increase in user engagement by collaborating closely
          with the design team. I also slashed bugs by 8% with a rigorous
          testing strategy, ensuring top-notch code quality. In addition, I
          revolutionized platform functionality and user satisfaction by
          seamlessly integrating third-party APIs. Lastly, I pioneered a
          responsive design framework to ensure a flawless user experience
          across all devices.
        </p>
        <div className="flex-wrap flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            React
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            NextJS
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            JavaScript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Typescript
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Vue.js
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Responsive Design
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Communication&Teamwork
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Continuous Learning
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Web Performance Optimization
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            AWS
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
