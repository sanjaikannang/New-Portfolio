import React, { useEffect, useRef, useState } from "react";
import { contactLinks } from "../constants";
import programmingGif from "../assets/Programming.gif";
import Navbar from "./Navbar";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const Home = () => {
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    // Animation logic to run once when the component mounts
    setAnimateLeft(true);
    setAnimateRight(true);
  }, []);

  const leftAnimationStyle = {
    opacity: animateLeft ? 1 : 0,
    transform: animateLeft ? "translateX(0)" : "translateX(-50px)",
    transition: "opacity 1s, transform 1s",
  };

  const rightAnimationStyle = {
    opacity: animateRight ? 1 : 0,
    transform: animateRight ? "translateX(0)" : "translateX(50px)",
    transition: "opacity 1s, transform 1s",
  };

  return (
    <>
      <Navbar />
      <div
        id="home"
        className="bg-white bg-center min-h-screen flex items-center justify-center"
      >
        <main className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen">
          <div
            className="sm:text-center lg:text-left md:w-1/2"
            style={leftAnimationStyle}
            ref={leftRef}
          >
            <h1 className="text-3xl tracking-tight font-bold text-grey sm:text-5xl md:text-5xl">
              <span style={{ whiteSpace: "nowrap" }}>
                Hi, I am Sanjai Kannan G
              </span>
              <span className="block text-blue-600" id="typing-text">
                Full Stack Developer
              </span>
            </h1>
            <p className="mt-3 text-base text-grey sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              I am an enthusiastic Full Stack Developer with a strong foundation
              in web development and problem-solving.
            </p>
            <div className="flex mt-5 md:mt-8 md:justify-start">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-5 cursor-pointer mt-2 md:mt-0 hover:scale-125"
                >
                  <img alt={el.name} src={el.url} />
                </a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="mt-3 sm:mt-0 cursor-pointer w-full md:w-auto">
                <a
                  href="https://drive.google.com/file/d/1IfaT27rfB3DYVBfIBQ3jqjTa3HyWXKfv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 md:py-4 md:text-lg md:px-10"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>
          <img
            src={programmingGif}
            alt="Programming GIF"
            className="w-full md:w-1/2 mt-8 md:mt-0"
            style={rightAnimationStyle}
            ref={rightRef}
          />
        </main>
      </div>
      <About />
      <Project />
      <Contact />
    </>
  );
};

export default Home;
