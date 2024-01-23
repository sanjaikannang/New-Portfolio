import React, { useEffect, useRef, useState } from "react";
import GoldenGateImage1 from "../assets/stack overflow/golden1.png";
import GoldenGateImage2 from "../assets/stack overflow/golden2.png";
import GoldenGateImage3 from "../assets/stack overflow/golden3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css/animate.min.css";

const Project3 = () => {
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
        {/* Left side - Project Details */}
        <div
          className={`lg:w-1/2 mt-4 lg:mt-0 animate__animated ${
            animateDetails ? "animate__fadeInUp" : ""
          }`}
          ref={detailsRef}
        >
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            Golden Gate
          </h2>
          <br />
          <p className="text-gray-700 mb-4">
            Developed a comprehensive real estate application named Golden Gate
            using the MERN stack. The application provides users with a seamless
            experience for exploring, buying, and selling properties in the real
            estate market.
          </p>
          <ul className="text-gray-700 mb-4 list-disc pl-6">
            <li>
              Detailed property information such as price, location, and
              specifications.
            </li>
            <li>Secure user authentication for personalized experiences.</li>
            <li>
              Developed a powerful search functionality with filters for
              location, price range, and property type.
            </li>
            <li>
              Integrated a contact Details for users to Enquire about specific
              properties.
            </li>
          </ul>
          <p className="text-gray-700 mb-4">
            Technologies Used:
            <br />
            Frontend: JavaScript, React.js, Tailwind CSS
            <br />
            Backend: Node.js, Express.js, MongoDB
            <br />
            Additional: Cloudinary for image storage
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <a
              href="https://dapper-tartufo-1bfe71.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 border border-blue-600"
            >
              See Live
            </a>
            <a
              href="https://github.com/sanjaikannang/Golden-Gate-FrontEnd.git"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-4 py-2  transition duration-300 ease-in-out hover:bg-white hover:text-gray-900 border border-gray-900"
            >
              Source Code
            </a>
          </div>
        </div>

        {/* Right side - Image Carousel */}
        <div
          className={`lg:w-1/2 mt-8 lg:mt-0 animate__animated ${
            animateDetails ? "animate__fadeInLeft" : ""
          }`}
        >
          <br />
          <br />
          <Slider {...carouselSettings}>
            <div>
              <img
                src={GoldenGateImage1}
                alt="Project Image 1"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={GoldenGateImage2}
                alt="Project Image 2"
                className="w-full h-auto"
              />
            </div>
            <div>
              <img
                src={GoldenGateImage3}
                alt="Project Image 3"
                className="w-full h-auto"
              />
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Project3;
