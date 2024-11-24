import Image from "next/image";
import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="min-w-full relative gap-8 p-8 flex flex-col justify-center items-start sm:px-16 md:flex-row md:px-32 xl:px-48 bg-google-black text-white capitalize">
      <div className="h-full flex items-center justify-center">
        <div className="relative">
        <Image src="/assets/GDG-logo.svg" alt="logo" width={200} height={100} layout="intrinsic" />
        <span className="text-google-lightGrey font-sora text-lg absolute -right-4 -top-2">
          &copy;
        </span>
        </div>
      </div>
      <div className="max-w-[400px] w-3/4 flex justify-between items-center md:justify-center md:gap-12">
        <div>
          <h1 className="text-xl font-light font-sora mb-4 uppercase">Socials</h1>
          <div className="flex items-center mb-2 font-noto-sans">
            <FaLinkedin className="mr-2" />
            <span>Linkedin</span>
          </div>
          <div className="flex items-center mb-2">
            <FaInstagram className="mr-2" />
            <span>Instagram</span>
          </div>
          <div className="flex items-center">
            <FaXTwitter className="mr-2" />
            <span>X (Twitter)</span>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-light uppercase mb-4 font-sora">Navigate</h1>
          <div className="flex flex-col space-y-2 font-noto-sans">
            <span>about us</span>
            <span>events</span>
            <span>Our Team</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
