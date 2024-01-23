import React from "react";
import Navbar from "./Navbar";
import { contactLinks } from "../constants";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-t from-blue-200 to-white min-h-screen py-12 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-blue-600 text-center mb-8">
            Contact
          </h2>
          <br />
          <div className="text-xl text-gray-700 mb-8">
            <p className="mt-8">
              I'm passionate about building innovative solutions and am open to
              new opportunities. Feel free to reach out to me; I'm always
              excited to connect with fellow developers, businesses, and anyone
              with interesting ideas.
            </p>
            <br />
            <br />
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              {/* Add your contact information here */}
              <div className="mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold mb-2">Email</h4>
                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/doodle/40/000000/gmail.png"
                    alt="Gmail Icon"
                    className="w-8 h-8 mr-2"
                  />
                  <a
                    href="mailto:sanjaikannang@gmail.com"
                    className="text-blue-600 hover:underline"
                  >
                    sanjaikannang@gmail.com
                  </a>
                </div>
              </div>

              <div className="mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold mb-2">LinkedIn</h4>
                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
                    alt="LinkedIn Icon"
                    className="w-8 h-8 mr-2"
                  />
                  <a
                    href="https://www.linkedin.com/in/sanjai-kannan-g/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn.com/SanjaikannanG
                  </a>
                </div>
              </div>

              <div className="mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold mb-2">GitHub</h4>
                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/doodle/40/000000/github--v1.png"
                    alt="GitHub Icon"
                    className="w-8 h-8 mr-2"
                  />
                  <a
                    href="https://github.com/sanjaikannang"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub.com/SanjaikannanG
                  </a>
                </div>
              </div>

              {/* Adding contact number with an image */}
              <div className="mb-4 md:mb-0">
                <h4 className="text-2xl font-semibold mb-2">Contact No.</h4>
                <div className="flex items-center">
                  <img
                    src="https://img.icons8.com/doodle/40/000000/phone--v1.png"
                    alt="Phone Icon"
                    className="w-8 h-8 mr-2"
                  />
                  <span className="text-blue-600">9345725595</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
