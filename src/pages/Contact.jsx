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
    // Handle form submission, e.g., send data to server
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container flex items-center justify-between">
      <div className="container w-[80vw]   mx-auto flex   items-center ">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">
            128 Melbourne Australia
            <br />
            2nd Floor, New Town Australia.
          </p>
          <p className="mb-4">Phone: +2348145690268</p>
          <p className="mb-4">Email: mohammedfaatihat@gmail.com</p>
          <div className="flex items-center mb-4">
            <p>Follow us: 🔻</p>
          </div>
          <div className="flex space-x-4"></div>
        </div>

        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-4">Drop Us a Message</h1>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="mb-4">
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
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
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
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
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
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                rows="5"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded focus:outline-none focus:bg-blue-600"
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
