import Link from "next/link";
import React from "react";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="flex justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <span className="w-full h-full pb-6 dark:border-t dark:border-gray-700"></span>
      </div>
      <div className="px-4 pb-12 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap justify-center -mx-5 -my-2"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <Link
              href="/"
              className="text-base text-gray-400 hover:text-gray-100"
            >
              Home
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/#projects"
              className="text-base text-gray-400 hover:text-gray-100"
            >
              Portfolio
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/#about"
              className="text-base text-gray-400 hover:text-gray-100"
            >
              About
            </Link>
          </div>
          <div className="px-5 py-2">
            <Link
              href="/#contact"
              className="text-base text-gray-400 hover:text-gray-100"
            >
              Contact
            </Link>
          </div>
          {/* <div className='px-5 py-2'>
              <Link href='/blog'>
                <a className='text-base text-gray-500 hover:text-gray-900'>
                  Blog
                </a>
              </Link>
            </div> */}
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <Link
            href="https://github.com/HamzaAhmedSheikh"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only"> GitHub </span>
            <FiGithub className="text-xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/login"
            target="_blank"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">LinkedIn</span>
            <FiLinkedin className="text-xl" />
          </Link>
          <Link
            href="https://twitter.com/hamza_hamna_az"
            target="_blank"
            rel="noopener"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">Twitter</span>
            <FiTwitter className="text-xl" />
          </Link>
          <Link
            href="https://www.facebook.com/hamzaahmed.sheikh.56829"
            target="_blank"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">Facebook</span>
            <FiFacebook className="text-xl" />
          </Link>
          <Link
            href="https://www.instagram.com/accounts/login/"
            target="_blank"
            className="text-gray-400 hover:text-gray-100"
          >
            <span className="sr-only">Instagram</span>
            <FiInstagram className="text-xl" />
          </Link>
        </div>
        <Link
          href="/"
          className="block mt-8 text-base text-center text-gray-400 hover:text-gray-100"
        >
          © {new Date().getFullYear()} Hamza Ahmed Sheikh
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
