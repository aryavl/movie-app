"use client";
import React, { useEffect, useRef } from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TranslateIcon from "@mui/icons-material/Translate";
import GradeIcon from "@mui/icons-material/Grade";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import Image from "next/image";
import { imageUrl } from "@/helpers/constants";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface MovieDetailProp {
  id: string;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  spoken_languages: { english_name: string }[];
  vote_average: number;
  genres: { id: number; name: string }[];
}
interface CreditProps {
  cast: {
    adult: boolean;
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    order: number;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
  crew: {
    adult: boolean;
    credit_id: string;
    department: string;
    gender: number;
    id: number;
    job: string;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
  id: number;
}
const MovieDetailSection: React.FC<{
  movie: MovieDetailProp | null;
  credits: CreditProps | null;
}> = ({ movie, credits }) => {

    const castContainerRef = useRef(null);

  useEffect(() => {
    const castContainer:any = castContainerRef.current;
    const scrollForward = document.getElementById('scrollForward');
    const scrollBackward = document.getElementById('scrollBackward');

    if (scrollForward && scrollBackward) {
      const forwardClickHandler = () => {
        castContainer?.scrollBy({
          left: 200, // Adjust this value to control the scroll distance
          behavior: 'smooth',
    
        });
      };

      const backwardClickHandler = () => {
        castContainer?.scrollBy({
          left: -200, // Adjust this value to control the scroll distance
          behavior: 'smooth',
        });
      };

      scrollForward.addEventListener('click', forwardClickHandler);
      scrollBackward.addEventListener('click', backwardClickHandler);

      return () => {
        scrollForward.removeEventListener('click', forwardClickHandler);
        scrollBackward.removeEventListener('click', backwardClickHandler);
      };
    }
  }, []);
  



  const year = movie?.release_date.substring(0, 4);
  const formatedVoteRate = Math.ceil((movie?.vote_average || 0) * 10) / 10;
  console.log(credits, "creditsssssssssssssss");

  // Function to generate star icons based on rating
  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const starRatingToFiveStarRating = rating / 2;
    const fullStars = Math.floor(starRatingToFiveStarRating);
    const hasHalfStar = starRatingToFiveStarRating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<GradeIcon key={`star-full-${i}`} className="text-red-700" />);
    }

    if (hasHalfStar) {
      stars.push(<GradeIcon key="star-half" className="text-red-700" />);
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<GradeIcon key={`star-empty-${i}`} className="opacity-30" />);
    }

    return stars;
  };


 
  return (
    <div className="w-[80%] mx-auto pt-10 mt-40 sm:mt-20">
      <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4">
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative col-span-1 md:col-span-2">
          <h1 className="text-gray-400 text-[18px]">Description</h1>
          <p className="mt-2 text-white text-[15px]">{movie?.overview}</p>
        </div>
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative col-span-1 md:col-span-2 row-span-1 md:row-span-2">
          <div className="flex items-center gap-1 text-gray-400 text-[18px]">
            <CalendarTodayIcon />
            <h1>Released Year</h1>
          </div>
          <h1 className="text-white mt-2">{year}</h1>
          <div className="flex items-center gap-1 mt-2 text-gray-400 text-[18px]">
            <TranslateIcon />
            <h1>Available Languages</h1>
          </div>
          <div className="flex items-center gap-5 mt-2">
            {movie?.spoken_languages.map((item, index) => (
              <button
                key={index}
                className="rounded-md bg-[#0e0d0d] text-[14px] border border-[#262626] px-2 py-1 text-white"
              >
                {item.english_name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 mt-2 text-gray-400 text-[18px]">
            <GradeIcon />
            <h1 className="">Rating</h1>
          </div>
          <div className="bg-[#0e0d0d] w-[60%] py-3 mt-2 rounded-lg border border-[#262626] text-white px-2">
            <h1 className="">IMDB</h1>
            <div className="flex items-center  gap-3 mt-2   ">
              {renderStars(formatedVoteRate)}
              <span>{formatedVoteRate}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 mt-2 text-gray-400 text-[18px]">
            <GridViewOutlinedIcon />
            <h1 className="">Genres</h1>
          </div>
          <div className="flex items-center gap-5 mt-2">
            {movie?.genres.map((item, index) => (
              <button
                key={index}
                className="rounded-md bg-[#0e0d0d] text-[14px] border border-[#262626] px-2 py-1 text-white"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-1 mt-2 text-gray-400 text-[18px]">
            <h1 className="">Director</h1>
          </div>
          <div className="flex items-center gap-5 mt-2">
            <div className="flex items-center gap-2 bg-[#0e0d0d] border border-[#262626] py-2 px-2 rounded-lg w-full">
              {credits ? (
                <Image
                  src={`${imageUrl}/${credits?.crew[0].profile_path}
                    `}
                  alt="profile"
                  width={40}
                  height={30}
                  className="rounded-lg w-[50px] h-[50px]"
                />
              ) : (
                <h1 className="text-white">Loading ...</h1>
              )}

              <div className="flex flex-col  text-[14px]   px-2 py-1 text-white">
                <p>{credits?.crew[0].name}</p>
                <p>From</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative col-span-1 md:col-span-2 text-white">
      <div className="flex items-center justify-between w-full text-gray-400 text-[18px] mb-5">
        <h1>Cast</h1>
        <div className="flex items-center gap-3">
          <button  id="scrollBackward"
           
            >
            <ArrowBackIcon />
          </button>
          <button id="scrollForward"
            
          >
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
      <div
        ref={castContainerRef}
        className="flex overflow-x-auto gap-2"
        style={{ scrollBehavior: 'smooth', overflowX: 'hidden' }}
      >
        {credits ? (
          credits.cast.map((item) => (
            <img
              key={item.id}
              src={`${imageUrl}/${item.profile_path}`}
              alt="profile"
              width={65}
              height={50}
              className="rounded-lg"
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative  col-span-1 md:col-span-2">
          <span>04</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSection;
