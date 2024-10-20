import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import { FaStackOverflow } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { AiOutlineHtml5 } from "react-icons/ai";

function Home() {
  let iconStyles = { background: "black", color: "white" };
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-2/3 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I&apos;m a </h1>
              <ReactTyped
                strings={["Developer", "Programmer", "Coder"]}
                className="text-red-700 font-bold"
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hello! I am Rishabh Bhatnagar, a recent B.Tech graduate in
              Information Technology from Bharati Vidyapeeth’s College of
              Engineering, Delhi.
              <br />
              I am eager to apply my technical skills and project experience to
              contribute to innovative software development projects.
              <br />
              My passion for continuous learning drives me to stay updated with
              the latest industry trends and technologies, and I am enthusiastic
              about leveraging my abilities to create impactful solutions.
              <br />
              Feel free to connect with me to discuss potential opportunities or
              collaborations in software development.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-center">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/rishabh-bhatnagar-2b3824207/"
                      target="_blank"
                    >
                      <FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Rishabh01505" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer hover:scale-110 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/u/Rishabh_Bhatnagar01/"
                      target="_blank"
                    >
                      <SiLeetcode
                        className="text-2xl cursor-pointer hover:scale-110 duration-200"
                        style={iconStyles}
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stackoverflow.com/users/25972795/rishabh-bhatnagar"
                      target="_blank"
                    >
                      <FaStackOverflow
                        className="text-2xl cursor-pointer hover:scale-110 duration-200"
                        style={iconStyles}
                      />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <AiOutlineHtml5 className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiTailwindcss className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <IoLogoJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaJava className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  {/* </div>
                <div className="flex space-x-5"> */}
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="\Rishabh_Photo.jpeg"
              className="rounded-full md:w-[450px] md:h-[450px] order-2"
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
