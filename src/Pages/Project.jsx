import React from "react";
import Navbar from "./Navbar";
import stackOverflowImage1 from "../assets/stack overflow/youtube1.png";
import stackOverflowImage2 from "../assets/stack overflow/youtube2.png";
import stackOverflowImage3 from "../assets/stack overflow/youtube3.png";
import Slider from "react-slick";

// Import slick carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";

const Project = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />
      <br />
      <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-blue-600 animate__animated animate__fadeIn">
        Projects
      </h2>
      <br />
      <br />
      <div className="container mx-auto p-4 lg:flex lg:gap-8">
        {/* Left side - Project Details */}
        <div className="lg:w-1/2 mt-4 lg:mt-0 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            YouTube Clone
          </h2>
          <br />
          <p className="text-gray-700 mb-4">
            I developed a YouTube Clone project using the MERN stack. The
            project replicates the core functionalities of YouTube, allowing
            users to view, upload, and interact with videos.
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>Secure user login and registration. JWT for authentication.</li>
            <li>
              Seamless video upload and playback. Responsive design for various
              devices.
            </li>
            <li>
              Comment system for user interaction. Like/dislike functionality.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Technologies Used:
            <br />
            Frontend: JavaScript, React.js, Tailwind CSS
            <br />
            Backend: Node.js, Express.js, MongoDB
            <br />
            Additional: Cloudinary for video storage
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href="https://beautiful-gumdrop-645ef4.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 border border-blue-600"
            >
              See Live
            </a>
            <a
              href="https://github.com/sanjaikannang/youtube-clone-FrontEnd.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2  transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 border border-gray-900"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Right side - Image Carousel */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 animate__animated animate__fadeInRight">
          <br />
          <br />
          <Slider {...carouselSettings}>
            <div>
              <img
                src={stackOverflowImage1}
                alt="Project Image 1"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={stackOverflowImage2}
                alt="Project Image 2"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={stackOverflowImage3}
                alt="Project Image 3"
                className="w-full h-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
      <br />
      <Project2 />
      <br />
      <Project3 />
      <br />
      <Project4 />
      <br />
      <h2 className="text-xl font-bold px-4 md:px-0 text-center text-blue-600 animate__animated animate__fadeIn">
        And Many more...
      </h2>
      <br />
      <br />
    </>
  );
};

export default Project;
