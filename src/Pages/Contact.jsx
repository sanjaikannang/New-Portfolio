import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="p-8 sm:p-16 md:p-24 justify-center bg-gradient-to-t from-blue-200 to-white"
    >
      <div className="text-center text-xl font-semibold">
        <h1>
          A self-motivated, adaptable individual with a passion for continuous
          learning.
          <br /> I am eager to contribute my technical skills and passion for
          coding to a dynamic development team.
        </h1>
        <br />
      </div>
      <div className="text-center text-xl font-semibold">
        <h1>Connect Me Through....</h1>
        <br />
      </div>
      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <a
            href="mailto:sanjaikannang@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <img
              src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
              className="w-10 h-10"
              alt="Email Icon"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="tel:+91 9345725595"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"
              className="w-10 h-10"
              alt="Phone Icon"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/sanjai-kannan-g/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwUKrz0nwJyxtxVVu6w1Bq867Fv410FnzkAHS8r45ZTX-AaR5P5KjUgUpn6IL0uUpCUmg&usqp=CAU"
              className="w-10 h-10"
              alt="LinkedIn Icon"
            ></img>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sanjaikannang"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <img
              src="https://www.svgrepo.com/show/361181/github.svg"
              className="w-10 h-10"
              alt="GitHub Icon"
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
