import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container mx-auto p-10">
      <div className="bg-white w-[80vw] mx-auto rounded-lg shadow-lg p-8 md:flex md:space-x-10 items-center">
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
            <FormInput
              label="Name"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <FormInput
              label="Email"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <FormTextArea
              label="Message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#60101F] text-white font-semibold px-4 py-2 rounded hover:bg-red-700 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const FormInput = ({ label, id, type, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-[#60101F] focus:border-[#60101F]"
      required={required}
    />
  </div>
);

const FormTextArea = ({ label, id, value, onChange, required }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-semibold mb-2">
      {label}
    </label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-[#60101F] focus:border-[#60101F]"
      rows="3"
      required={required}
    />
  </div>
);

export default ContactUs;
