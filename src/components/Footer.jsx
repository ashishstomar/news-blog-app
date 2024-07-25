import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-6 mt-auto w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h1 className="font-mono font-extrabold text-red-500 text-4xl">
            NewsBlog
            <span className="text-blue-700 text-6xl">.</span>
          </h1>
          <p className="text-sm text-gray-400">Your daily dose of articles</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a
            href="https://github.com/ashishstomar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <FaGithub size="24" />
          </a>
          <a
            href="https://linkedin.com/in/asto"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white mx-2"
          >
            <FaLinkedin size="24" />
          </a>
          <a
            href="mailto:placeholdermail.com"
            className="text-gray-400 hover:text-white mx-2"
          >
            <FaEnvelope size="24" />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} NewsBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
