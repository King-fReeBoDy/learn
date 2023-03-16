import React, { useState } from "react";
import { VscClose, VscMenu } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Contact",
    route: "/contact",
  },
];

const Navbar = () => {
  const [isbackrop, setIsdackdrop] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <nav className="sticky top-0 left-0 right-0 z-20 bg-white border-y py-5">
      <section className="sticky top-0 left-0 right-0 w-[90%] mx-auto lg:w-[800px]">
        <div className="flex justify-between items-center">
          <Link to="/">
            <h1 className="text-3xl font-semibold">CORNEY</h1>
          </Link>
          <ul className="hidden md:flex  space-x-4">
            {links.map((link, i) => {
              return (
                <Link to={`${link.route}`}>
                  <li className="">
                    <motion.p
                      onClick={() => setSelected(i)}
                      className={` ${
                        selected === i
                          ? "text-blue-700 font-semibold"
                          : "text-gray-500"
                      }`}
                    >
                      {link.title}
                    </motion.p>
                    <AnimatePresence>
                      {selected === i && (
                        <motion.p
                          layoutId="underline"
                          className="h-1 w-full bg-blue-700"
                        ></motion.p>
                      )}
                    </AnimatePresence>
                  </li>
                </Link>
              );
            })}
          </ul>

          <div
            onClick={() => setIsdackdrop(!isbackrop)}
            className="md:hidden flex bg-blue-700 px-3 py-1 justify-center items-center text-white font-semibold"
          >
            <p className="mr-2">
              <VscMenu />
            </p>
            <p>MENU</p>
          </div>
        </div>
      </section>

      {isbackrop && (
        <div className="md:hidden fixed inset-0 w-screen h-screen bg-black/75 z-10"></div>
      )}

      <div
        className={`md:hidden fixed inset-0 w-[90%] h-full bg-white transition-all duration-300 z-10 ${
          isbackrop ? " translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 h-full">
          <p
            onClick={() => setIsdackdrop(!isbackrop)}
            className="ml-auto max-w-max text-xl mt-4"
          >
            <VscClose className="text-3xl" />
          </p>
          <section className="flex justify-between flex-col h-[60%]">
            <div className="text-center text-4xl mt-10 mb-20">
              <Link to="/">
                <p className="mb-5" onClick={() => setIsdackdrop(!isbackrop)}>
                  Home
                </p>
              </Link>
              <Link to="/about">
                <p className="mb-5" onClick={() => setIsdackdrop(!isbackrop)}>
                  About
                </p>
              </Link>
              <Link to="/contact">
                <p className="mb-5" onClick={() => setIsdackdrop(!isbackrop)}>
                  Contact
                </p>
              </Link>
            </div>
            <section className="text-gray-400 border-t p-3">
              <p className="text-center mb-4">Visit our social meadia pages</p>
              <div className="flex justify-center items-center space-x-5 ">
                <p>
                  <AiOutlineTwitter className="hover:text-blue-700 text-3xl" />
                </p>
                <p>
                  <AiOutlineFacebook className="hover:text-blue-700 text-3xl" />
                </p>
                <p>
                  <AiOutlineInstagram className="hover:text-blue-700 text-3xl" />
                </p>
              </div>
            </section>
          </section>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
