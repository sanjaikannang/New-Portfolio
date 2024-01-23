import React, { useEffect, useRef, useState } from "react";
import stackOverflowImage1 from "../assets/stack overflow/stack1.png";
import stackOverflowImage2 from "../assets/stack overflow/stack2.png";
import stackOverflowImage3 from "../assets/stack overflow/stack3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";

const Project2 = () => {
  const [animateImages, setAnimateImages] = useState(false);
  const imagesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const imagesPosition = imagesRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Adjust this threshold as needed
      const threshold = windowHeight * 0.8;

      if (imagesPosition < threshold) {
        setAnimateImages(true);
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
      <div
        className={`container mx-auto p-4 lg:flex lg:gap-8 ${
          animateImages ? "animate__animated animate__fadeInLeft" : ""
        }`}
        ref={imagesRef}
      >
        {/* Left side - Image Carousel */}
        <div className="lg:w-1/2 mt-8 lg:mt-0">
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

        {/* Right side - Project Details */}
        <div className="lg:w-1/2 mt-4 lg:mt-0 animate__animated animate__fadeInUp">
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            StackOverFlow Clone
          </h2>
          <br />
          <p className="text-gray-700 mb-4">
            Created a Stack Overflow Clone using the MERN stack, providing a
            platform for users to ask, answer, and engage in discussions around
            programming and technical topics.
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>
              Implemented a robust system for users to post questions and
              receive answers.
            </li>
            <li>Secure user authentication. JWT for authentication.</li>
            <li>
              Implemented upvoting and downvoting for questions and answers.
            </li>
            <li>Tagging system for easy categorization of topics.</li>
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
              href="https://tangerine-smakager-a47add.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 border border-blue-600"
            >
              See Live
            </a>
            <a
              href="https://github.com/sanjaikannang/StackOverFlow-FrontEnd.git"
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

export default Project2;
