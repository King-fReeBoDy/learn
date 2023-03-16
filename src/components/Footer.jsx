import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="border-t p-5 text-gray-400">
      <p className="text-center mb-3 font-semibold ">
        Visit us on this social media platforms
      </p>
      <div className="w-[90%] lg:w-[800px] mx-auto flex justify-center items-center space-x-4 ">
        <p>
          <AiOutlineTwitter className="hover:text-blue-700 text-2xl" />
        </p>
        <p>
          <AiOutlineFacebook className="hover:text-blue-700 text-2xl" />
        </p>
        <p>
          <AiOutlineInstagram className="hover:text-blue-700 text-2xl" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
