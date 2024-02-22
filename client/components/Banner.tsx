import React from "react";
import styles from "./Banner.module.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
const Banner = () => {
  return (
    <div className="relative">
      <div className={`relative ${styles.background}`}>
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
        </div> */}
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#141414] to-transparent"></div>
      </div>
      <div className="relative z-10 bg-[#141414] pb-8 pt-2">
      <div className=" w-[80%] mx-auto overflow-hidden flex items-center justify-center flex-col gap-5 xl:gap-8">
        <h1 className="text-white mt-5  text-xl sm:text-xxl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">Best viewing experience with Utsav</h1>

        <p className=" text-gray-400   text-center ">
          Utsav is the best streaming experience for watching your favourite movies and shows on demand, anytime, anywhere.
        </p>

        <button className="flex items-center gap-1 bg-red-700 px-4 py-3 rounded-lg text-white mt-2">
            <PlayArrowIcon/>
            Start watching now
        </button>
      </div>
      </div>
    </div>
  );
};

export default Banner;
