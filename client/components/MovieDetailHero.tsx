import { imageUrl } from '@/helpers/constants';
import React from 'react';
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from '@mui/icons-material/Add';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

interface MovieDetailProp {
  id: string;
  title: string;
  poster_path: string;
  overview:string;
}

const MovieDetailHero: React.FC<{ movie: MovieDetailProp | null }> = ({ movie }) => {
  console.log(movie, "heroo");

  // Style for the background div
  const backgroundStyle: React.CSSProperties = {
    backgroundImage: movie ? `url(${imageUrl}/${movie.poster_path})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat:'no-repeat',
    position: 'relative',
    width: '100vw',
    height: '100%',
  };

  return (
    <div className="h-screen flex items-center justify-center mt-0 mb-4">
      {/* Background div with the image */}
      <div style={backgroundStyle}>
      <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#141414] to-transparent"></div>
      </div>
      <div className="relative  h-[50vh] sm:h-[30vh] md:h-[40vh] lg:h-[25vh]  bg-[#141414] pb-10 pt-2">
        <div className=" w-[80%] mx-auto overflow-hidden flex items-center justify-center flex-col gap-5 xl:gap-8"></div>
      </div>
      <div className="w-[80%] text-center flex flex-col items-center absolute top-[60%] sm:top-[50%]  md:top-[55%] lg:top-[60%] left-[10%] z-[10] justify-center mx-auto ">
        <h1 className="text-white mt-5  text-xl sm:text-xxl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
         {movie?.title}
        </h1>

        <p className=" text-gray-400 mt-5  text-center ">
          {movie?.overview}
        </p>
        <div className='flex flex-col sm:flex-row items-center gap-6'>
            
        <button className="block items-center gap-3 mt-5 sm:flex w-full  bg-red-700 px-24 sm:px-6 py-3 rounded-lg text-white ">
          <PlayArrowIcon />
          Play now
        </button>
        <div className='flex items-center gap-4 text-white'>
        <button className='mt-5 bg-[#1b1b1b] py-3 rounded-lg px-3'><AddIcon/></button>
        <button className='mt-5 bg-[#1b1b1b] py-3 rounded-lg px-3'><ThumbUpIcon/></button>
        <button className='mt-5 bg-[#1b1b1b] py-3 rounded-lg px-3'><VolumeUpIcon/></button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailHero;
