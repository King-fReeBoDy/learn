import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="w-[90%] lg:w-[800px] mx-auto my-5">
        <div className="relative">
          <img
            src="https://misterwootube.files.wordpress.com/2020/03/cropped-cba_-927.jpg"
            alt=""
            className="shadow-lg"
          />
          <div className="hidden lg:block absolute inset-0 w-full h-full bg-black/70"></div>

          <div className=" my-5 mx-auto lg:absolute left-10 bottom-7">
            <p className="md:text-3xl lg:text-white mb-3 text-2xl font-semibold">
              Find joy in learning mathematics
            </p>
            <button className="bg-blue-700 text-white px-5 py-3 font-semibold">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
