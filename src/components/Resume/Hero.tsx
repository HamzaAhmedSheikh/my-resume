import Image from "next/image";
import React from "react";
import hero from "../../../public/images/hero.png";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center "
    >
      <div className="flex-1 flex items-center justify-center">
        <Image
          src={hero}
          alt="hero section"
          className="md:w-11/12 h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl"> Hello! </span>
            <br />
            My name is <span> Hamza </span>
          </h1>

          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <button className="btn-primary mt-8"> Contact me </button>

          <div className="flex items-center md:justify-start justify-center gap-5">
            <div className="mt-8 text-3xl  text-gray-600 hover:text-white cursor-pointer">
              <Link href="https://github.com/HamzaAhmedSheikh" target="_blank">
                <FaGithub />
              </Link>
            </div>
            <div className="mt-8 text-3xl  text-gray-600 hover:text-white cursor-pointer">
              <Link href="https://www.linkedin.com/login" target="_blank">
                <BsLinkedin />
              </Link>
            </div>
            <div className="mt-8 text-3xl  text-gray-600 hover:text-white cursor-pointer">
              <Link href="https://twitter.com/hamza_hamna_az" target="_blank">
                <FaTwitter />
              </Link>
            </div>
            <div className="mt-8 text-3xl  text-gray-600 hover:text-white cursor-pointer">
              <Link
                href="https://www.facebook.com/hamzaahmed.sheikh.56829"
                target="_blank"
              >
                <BsFacebook />
              </Link>
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
