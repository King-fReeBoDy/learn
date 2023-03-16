import React from "react";
import { AiOutlineFacebook, AiOutlineTwitter } from "react-icons/ai";

const Iframe = () => {
  return (
    <section>
      <div className="w-[90%] lg:w-[800px] mx-auto border-t">
        <div className="flex flex-col  md:w-[600px] mx-auto my-10">
          <iframe
            src="https://www.youtube.com/embed/GfVd5x9W1Xc"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="aspect-video"
          ></iframe>
          <div>
            <p className="mt-3 font-semibold text-gray-400">Share this :</p>
            <div className="flex space-x-3 mt-3">
              <a href="https://twitter.com/intent/tweet?url=https%3A//youtu.be/YNuEpBYupos&text=Try%20Not%20Laugh%20Too%28funny%29%20%F0%9F%A4%A3%2377%20Ft%E2%80%A2//%20Sydney%20Talker%7CNasty%20Blaq%7CBrainJotter...&via=YouTube&related=YouTube,YouTubeTrends,YTCreators">
                <p className="flex border items-center px-3 py-1 font-semibold">
                  <AiOutlineTwitter />
                  <span className="ml-2">Twitter</span>
                </p>
              </a>

              <a href="">
                <p className="flex border items-center px-3 py-1 font-semibold">
                  <AiOutlineFacebook /> <span className="ml-2">Facebook</span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iframe;
