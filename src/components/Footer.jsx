// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-6  md:gap-0  justify-between items-start md:items-center w-full md:w-[80vw]">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-[#60101F]">TEE</span>HAT
          </h1>
          <p className=" container text-sm  ">
            © {currentYear} design and developed by faatihat.
          </p>
        </div>
        <div className="  lg:w-1/2 text-center flex flex-col gap-3">
          <p>Subscribe to our Newsletter... </p>
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full py-2 px-4 rounded-lg border-2  text-[#60101F] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#60101F] focus:border-transparent"
          />
        </div>
        {/* Social icons */}
        <div className="flex space-x-4 text-[#60101F]">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teehat"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teehat"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teehat"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
