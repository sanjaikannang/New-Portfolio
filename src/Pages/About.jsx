import React from "react";
import { techStack, contactLinks } from "../constants";
import Navbar from "./Navbar";
import certificateImage from "../assets/stack overflow/GuviCertification - 3i2C6794399e8B315t (3).png";

const About = () => {
  return (
    <>
      <Navbar />
      <div
        id="about"
        className="bg-gradient-to-t from-blue-200 to-white min-h-screen py-12 flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-blue-600 text-center mb-8">
            About Me
          </h2>

          <div className="text-xl text-gray-700 mb-8">
            <h4 className="text-3xl font-semibold text-blue-600 mb-4">
              A bit about me
            </h4>
            <p>
              I am an enthusiastic Full Stack Developer with a strong foundation
              in web development and problem-solving. I am adept at learning new
              technologies quickly and committed to continuous self-improvement.
              I am eager to contribute my technical skills and passion for
              coding to a dynamic development team.
            </p>
          </div>

          <div className="mb-8">
            <h4 className="text-3xl font-semibold text-blue-600 mb-4">
              Education
            </h4>
            <p className="text-xl text-gray-700">
              Bachelor of Science - Information Technology
            </p>
            <h5 className="text-xl text-gray-800">
              PSG College Of Arts & Science, Bharathiar University
            </h5>
            <p className="text-xl text-gray-700">
              Passed Out Year: 2023 | CGPA: 7.4
            </p>
          </div>
          <br />
          <div className="mb-8">
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Frontend
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.FrontEnd.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Backend
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.BackEnd.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Database
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.Database.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
            <br />
            <div>
              <h4 className="text-3xl font-semibold text-black mb-4 flex flex-wrap justify-center">
                Tools
              </h4>
              <br />
              <div className="flex flex-wrap justify-center">
                {techStack.Tools.map((el, index) => (
                  <div
                    key={index}
                    className="py-2 px-4 bg-gray-50 m-2 rounded-lg flex items-center hover:scale-125 cursor-pointer w-28"
                  >
                    <img alt={el.name} src={el.link} className="w-8" />
                    <h4 className="text-xs ml-2">{el.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <br />
          <div className="mb-8">
            <h4 className="text-3xl font-semibold text-blue-600 mb-4">
              Certification
            </h4>
            <br />
            <p className="text-xl text-gray-700 mb-4">
              I have completed the "Zen Class Full Stack Developer Program" at
              GUVI Geek Networks, IITM Research Park.
            </p>
            <br />
            <img
              src={certificateImage}
              alt="Guvi Certification"
              className="mx-auto mb-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
