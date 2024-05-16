// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-8 ">
      <div className="container mx-auto px-4 flex  justify-between items-center w-[80vw]">
        <div>
          <h1 className="text-3xl font-bold">
            <span className="text-[#60101F]">TEE</span>HAT
          </h1>
          <p className="mt-2 mb-6">
            © {currentYear} design and developed by faatihat.
          </p>
        </div>
        <div className="  w-1/2 text-center ">
          <p>Subscribe to our Newsletter... </p>
          <input
            type="text"
            placeholder="Enter your email..."
            className="w-full py-2 px-4 rounded-lg border-none bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#60101F] focus:border-transparent"
          />
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-xl text-teehat absolute right-4 top-3"
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
