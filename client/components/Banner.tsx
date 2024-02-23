import React from "react";
import styles from "./Banner.module.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Banner = () => {
  return (
    <div className="relative">
      <div className={`relative ${styles.background}`}>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#141414] to-transparent"></div>
      </div>
      <div className="relative  h-[20vh] sm:h-[30vh] md:h-[40vh] lg:h-[25vh]  bg-[#141414] pb-10 pt-2">
        <div className=" w-[80%] mx-auto overflow-hidden flex items-center justify-center flex-col gap-5 xl:gap-8"></div>
      </div>
      <div className="w-[80%] text-center flex flex-col items-center absolute top-[60%] sm:top-[50%]  md:top-[55%] lg:top-[60%] left-[10%] z-[10] justify-center mx-auto ">
        <h1 className="text-white mt-5  text-xl sm:text-xxl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          Best viewing experience with Utsav
        </h1>

        <p className=" text-gray-400 mt-5  text-center ">
          Utsav is the best streaming experience for watching your favourite
          movies and shows on demand, anytime, anywhere. With Utsav, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
        </p>

        <button className="flex items-center gap-1 mt-5  bg-red-700 px-4 py-3 rounded-lg text-white ">
          <PlayArrowIcon />
          Start watching now
        </button>
      </div>
    </div>
  );
};

export default Banner;
