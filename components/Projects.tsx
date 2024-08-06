import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">PROJECTS</h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link href="https://tymt.com/home/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="flex-row flex mb-5">
              <Image src="/tymt.png" height={150} width={150} alt="tymt" style={{ borderRadius: "8px" }} />
              <div className="p-3">
                <p className="text-white font-semibold text-xl w-[300px]">tymt</p>
                <p className="text-gray-500 text-[10px]">Multi-chain game launcher using Tauri</p>
              </div>
            </div>
          </Link>
          <Link href="https://solarenterprises.com/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="flex-row flex mb-5">
              <Image src="/solar.png" height={150} width={150} alt="Solar Enterprises" style={{ borderRadius: "8px" }} />
              <div className="p-3">
                <p className="text-white font-semibold text-xl w-[300px]">Solar Enterprises</p>
                <p className="text-gray-500 text-[10px]">Company website using Next</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link href="https://solarenterprises.com/blog/en/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="flex-row flex mb-5">
              <Image src="/blog.png" height={150} width={150} alt="Blog" style={{ borderRadius: "8px" }} />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl w-[300px]">Blog</p>
                <p className="text-gray-500 text-[10px]">Company blog site using Ghost</p>
              </div>
            </div>
          </Link>
          <Link href="https://app.solidx.tech/" rel="noopener noreferrer" target="_blank" className="z-[1]">
            <div className="flex-row flex mb-5">
              <Image src="/solidx.png" height={150} width={150} alt="SolidX" style={{ borderRadius: "8px" }} />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl w-[300px]">SolidX</p>
                <p className="text-gray-500 text-[10px]">DEX platform </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
