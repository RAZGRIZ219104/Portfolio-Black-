import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">EXPERIENCE</h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Solar Enterprises /</span> SENIOR FULL-STACK DEVELOPER
          </p>
          <p className="text-gray-300">02/2024 - Present, Sweden</p>
        </div>
        <p className="text-gray-300 pt-5">
          <li>
            Managed a team of three developers to create a multi-platform & multi-chain metaverse game launcher using Tauri, React, Typescript, and Rust,
            integrating with nine blockchain networks
          </li>
          <li>Developed the company website with Next and blog site with Ghost</li>
          <li>
            Designed a scalable backend architecture with Nest, SocketIO, and MongoDB, implementing robust RSA protocols and diverse authentication methods with
            Google, Discord, Facebook and Binance accounts
          </li>
          <li>Ensured high code quality with TDD, CI/CD pipelines, and D3 for data visualizations</li>
        </p>
        <div className="flex  flex-row justify-between pt-10">
          <p className="text-gray-300 ">
            <span className="font-semibold">SolidX /</span> BLOCKCHAIN DEVELOPER
          </p>
          <p className="text-gray-300">06/2022 - 03/2024, Estonia</p>
        </div>
        <p className="text-gray-300 pt-5">
          <li>Collaborated with the CTO to refine project specifications and resolve technical issues to build a DEX platform</li>
          <li>
            Developed the frontend using React and the backend with Hapi.js, PostgreSQL, integrating real-time chat via SocketIO and robust server-side logic
          </li>
          <li>Authored and deployed Solidity smart contracts on BSC using Hardhat, managing transactions and integrating SOLIDX BEP20 tokens</li>
          <li>Established a cross-chain bridge between Ethereum and BSC to enhance liquidity and implemented wallet connectivity using wagmi</li>
          <li>Successfully launched the project on March 4th, 2024, resulting in a 200% increase in SOLIDX token price and significant user adoption.</li>
        </p>
        <div className="flex  flex-row justify-between pt-10">
          <p className="text-gray-300 ">
            <span className="font-semibold">PayrLink /</span> BLOCKCHAIN DEVELOPER
          </p>
          <p className="text-gray-300">09/2020 - 03/2022, UAE</p>
        </div>
        <p className="text-gray-300 pt-5">
          <li>Collaborated with development teams to gather and understand the detailed specifications and requirements for dApps</li>
          <li>
            Developed and deployed smart contracts on the Ethereum blockchain using Solidity, ensuring seamless integration with frontend components via Web3.js
            and Ethers.js
          </li>
          <li>
            Implemented core functionalities for blockchain interactions, including transaction handling and contract execution, using OpenZeppelin, while
            continuously optimizing for performance and enhancing security protocols
          </li>
          <li>
            Set up comprehensive development environments using Truffle and Ganache for rigorous testing of smart contracts and dApps, ensuring reliability and
            robustness
          </li>
          <li>
            Created extensive documentation for the development processes using tools like Typedoc and JSDoc, and provided ongoing technical support to ensure
            smooth project execution and user satisfaction.
          </li>
        </p>
        <div className="flex-wrap flex sm:flex-row gap-1">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">DEX</div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">DeFi</div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">dApp</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Ethereum</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Solana</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Bitcoin</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Smart Contract</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Hardhat</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Truffle</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Ganache</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Solidity</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Rust</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Next</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">React</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Nest</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Hapi</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Tauri</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">D3</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">SocketIO</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Javascript</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Typescript</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">TDD</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">CI/CD</div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">Git</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
