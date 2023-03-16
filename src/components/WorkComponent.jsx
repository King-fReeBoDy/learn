import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WorkComponent = ({ work }) => {
  const [overlay, setOverlay] = useState(false);
  return (
    <div
      onMouseEnter={() => setOverlay(true)}
      onMouseLeave={() => setOverlay(false)}
      className="relative flex justify-center items-center "
    >
      <img src={work.img} alt="" className="aspect-video object-cover" />
      <p
        className={`absolute text-xl transition-all duration-300 ${
          overlay ? "text-blue-700" : "text-white"
        } z-10`}
      >
        {work.title}
      </p>
      <AnimatePresence>
        {overlay && (
          <motion.p
            layout
            transition={{ duration: 1 }}
            className={`absolute inset-0 w-full h-full bg-black/75 transition-all duration-300`}
          ></motion.p>
        )}
      </AnimatePresence>
      <div className="absolute inset-0 w-full h-full bg-black/50"></div>
    </div>
  );
};

export default WorkComponent;
