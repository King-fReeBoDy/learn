import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

const Searchbar = () => {
  const [showInput, setShowInput] = useState(false);
  return (
    <div className="hidden md:block">
      <div className=" flex justify-end items-center">
        <motion.div className="flex items-center border-l py-3">
          <p onClick={() => setShowInput(!showInput)} className="p-3 text-lg">
            <AiOutlineSearch />
          </p>

          <AnimatePresence>
            {showInput && (
              <motion.input
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                exit={{ x: 100 }}
                transition={{ type: "tween", duration: 0.09 }}
                type="text"
                placeholder="SEARCH..."
                className="outline-0 w-[20rem] mx-2"
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Searchbar;
