import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NoteWindImage1 from "../assets/stack overflow/note1.png";
import NoteWindImage2 from "../assets/stack overflow/note2.png";
import NoteWindImage3 from "../assets/stack overflow/note3.png";
import "animate.css/animate.min.css";

const Project4 = () => {
  const [animateDetails, setAnimateDetails] = useState(false);
  const detailsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const detailsPosition = detailsRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Adjust this threshold as needed
      const threshold = windowHeight * 0.8;

      if (detailsPosition < threshold) {
        setAnimateDetails(true);
        // Remove the event listener after animation triggers to improve performance
        window.removeEventListener("scroll", handleScroll);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <br />
      <br />
      <div className="container mx-auto p-4 lg:flex lg:gap-8">
        {/* Left side - Image Carousel */}
        <div
          className={`lg:w-1/2 mt-8 lg:mt-0 animate__animated ${
            animateDetails ? "animate__fadeInDown" : ""
          }`}
          ref={detailsRef}
        >
          <br />
          <br />
          <Slider {...carouselSettings}>
            <div className="animate__animated animate__fadeInDown">
              <img
                src={NoteWindImage1}
                alt="Project Image 1"
                className="w-full h-auto"
              />
            </div>
            <div className="animate__animated animate__fadeInDown">
              <img
                src={NoteWindImage2}
                alt="Project Image 2"
                className="w-full h-auto"
              />
            </div>
            <div className="animate__animated animate__fadeInDown">
              <img
                src={NoteWindImage3}
                alt="Project Image 3"
                className="w-full h-auto"
              />
            </div>
          </Slider>
        </div>

        {/* Right side - Project Details */}
        <div
          className={`lg:w-1/2 mt-4 lg:mt-0 animate__animated ${
            animateDetails ? "animate__fadeInDown" : ""
          }`}
        >
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            NoteWind - Note-Making Application
          </h2>
          <br />
          <p className="text-gray-700 mb-4">
            Designed and implemented NoteWind, a powerful note-making
            application, utilizing the MERN stack. NoteWind provides users with
            a streamlined platform for creating, organizing, and managing their
            notes efficiently.
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>
              Secure user authentication for personalized note management.
            </li>
            <li>
              Implemented a user-friendly note editor for creating and editing
              notes.
            </li>
            <li>Responsive layout for seamless use on various devices.</li>
            <li>Users can categorize notes into different categories.</li>
            <li>Implemented a tagging system for quick note retrieval.</li>
          </ul>
          <p className="text-gray-700 mb-4">
            Technologies Used:
            <br />
            Frontend: JavaScript, React.js, Tailwind CSS
            <br />
            Backend: Node.js, Express.js, MongoDB
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href=" https://shimmering-cobbler-b07423.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 border border-blue-600"
            >
              See Live
            </a>
            <a
              href="https://github.com/sanjaikannang/NoteWind-Frontend.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2  transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 border border-gray-900"
            >
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project4;
