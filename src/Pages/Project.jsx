import React from "react";
import youtubeImage from "../assets/stack overflow/youtube1.png";
import stackoverflow from "../assets/stack overflow/stack1.png";
import goldengate from "../assets/stack overflow/golden1.png";
import notes from "../assets/stack overflow/note1.png";

const Project = () => {
  return (
    <>
      <div
        id="project"
        className="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white"
      >
        {/* Themes: blue, purple and teal */}
        <div data-theme="teal" className="mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold px-4 md:px-0 text-center text-blue-600 animate__animated animate__fadeIn">
            Projects
          </h2>
          <br />
          <br />
          {/* project 1 */}
          <section className="font-sans text-black">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={youtubeImage}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      YouTube Clone
                    </h2>
                    <br />
                    <p className="text-gray-700 mb-4">
                      I developed a YouTube Clone project using the MERN stack.
                      The project replicates the core functionalities of
                      YouTube, allowing users to view, upload, and interact with
                      videos.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Technologies Used :
                      <br />
                      Frontend : JavaScript, React.js, Tailwind CSS
                      <br />
                      Backend : Node.js, Express.js, MongoDB
                      <br />
                      Additional : Cloudinary for video storage
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/youtube-clone-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2"
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/YouTube-Clone-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://beautiful-gumdrop-645ef4.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          {/* project 2 */}
          <section className="font-sans text-black">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={stackoverflow}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      StackOverFlow Clone
                    </h2>
                    <br />
                    <p className="text-gray-700 mb-4">
                      Created a Stack Overflow Clone using the MERN stack,
                      providing a platform for users to ask, answer, and engage
                      in discussions around programming and technical topics.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Technologies Used:
                      <br />
                      Frontend: JavaScript, React.js, Tailwind CSS
                      <br />
                      Backend: Node.js, Express.js, MongoDB
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/StackOverFlow-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2"
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/StackOverFlow-Clone-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href=" https://tangerine-smakager-a47add.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          {/* project 3 */}
          <section className="font-sans text-black">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={goldengate}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      Golden Gate - Real Estate Application
                    </h2>
                    <br />
                    <p className="text-gray-700 mb-4">
                      Developed a comprehensive real estate application named
                      Golden Gate using the MERN stack. The application provides
                      users with a seamless experience for exploring, buying,
                      and selling properties in the real estate market.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Technologies Used :
                      <br />
                      Frontend : JavaScript, React.js, Tailwind CSS
                      <br />
                      Backend : Node.js, Express.js, MongoDB
                      <br />
                      Additional : Cloudinary for image storage
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/Golden-Gate-FrontEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2"
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/Golden-Gate-BackEnd.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://dapper-tartufo-1bfe71.netlify.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          {/* project 4 */}
          <section className="font-sans text-black">
            <div className="border border-blue-500 rounded-lg overflow-hidden">
              <div className="flex lg:flex-row flex-col lg:items-center">
                <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                  <div className="h-full">
                    <article className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <div
                          className="w-733 h-612"
                          style={{ maxWidth: "533px", maxHeight: "512px" }}
                        >
                          <img
                            className="h-full w-full object-cover"
                            src={notes}
                            alt=""
                          />
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="p-4 bg-gray-100 font-semibold">
                  <div className="leading-relaxed">
                    <h2 className="leading-tight text-3xl font-bold text-blue-700">
                      NoteWind - Note-Making Application
                    </h2>
                    <br />
                    <p className="text-gray-700 mb-4">
                      Designed and implemented NoteWind, a powerful Note-Making
                      application, utilizing the MERN stack. NoteWind provides
                      users with a streamlined platform for creating,
                      organizing, and managing their notes efficiently.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Technologies Used:
                      <br />
                      Frontend: JavaScript, React.js, Tailwind CSS
                      <br />
                      Backend: Node.js, Express.js, MongoDB
                    </p>
                    <br />
                    <div className="flex justify-between">
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/NoteWind-Frontend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/361181/github.svg"
                          alt="Frontend"
                          className="w-6 h-6 mr-2"
                        />
                        Frontend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://github.com/sanjaikannang/backend.git"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/600px-Octicons-mark-github.svg.png?20180806170715 "
                          alt="Backend"
                          className="w-6 h-6 mr-2"
                        />
                        Backend
                      </a>
                      <a
                        className="mt-4 button button--secondary text-gray-700 flex items-center px-4 py-2"
                        href="https://shimmering-cobbler-b07423.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src="https://www.svgrepo.com/show/457005/arrow-up-from-square.svg"
                          alt="View Project"
                          className="w-6 h-6 mr-2"
                        />
                        LiveSite
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <br />
        <br />
        <h2 className="text-2xl font-bold px-0 text-center text-blue-600 ">
          - Student Management System -
          <br /> - Note App with Email Remainder -
          <br /> - Cross Platform Application Launcher -
          <br />
          <br /> And Many More..
        </h2>
        <br />
      </div>
    </>
  );
};

export default Project;
