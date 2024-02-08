import React from "react";
import { techStack, contactLinks } from "../constants";
import certificateImage from "../assets/stack overflow/GuviCertification - 3i2C6794399e8B315t (3).png";

const About = () => {
  return (
    <>
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
              A self-motivated, adaptable individual with a passion for
              continuous learning. I am eager to contribute my technical skills
              and passion for coding to a dynamic development team.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
            <div className="mb-8 md:mr-8">
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

            <div className="mb-8">
              <div className="md:ml-8">
                <h4 className="text-3xl font-semibold text-blue-600 mb-4">
                  Certification
                </h4>
                <p className="text-xl text-gray-700">
                  Full Stack Developer - MERN
                </p>
                <h5 className="text-xl text-gray-800">Guvi, IITM - Chennai</h5>
                <p className="text-xl text-gray-700">June 2023 – August 2023</p>
              </div>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default About;
