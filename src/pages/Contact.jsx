import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white w-[80vw] mx-auto  rounded-lg shadow-lg p-8 md:flex md:space-x-10 items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">Lagos LA Nigeria.</p>
          <p className="mb-4">Phone: +2348145690268</p>
          <p className="mb-4">Email: mohammedfaatihat@gmail.com</p>
          <div className="flex items-center mb-4">
            <p>Follow us: 🔻</p>
          </div>
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

        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold">Drop Us a Message</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none "
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={handleMessageChange}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none "
                rows="3"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full  border   text-black font-semibold px-4 py-2 rounded   "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
