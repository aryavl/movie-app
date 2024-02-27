"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { imageUrl } from '@/helpers/constants';

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
const Section3: React.FC<{
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
  return (
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
            item?.profile_path ? (
                <Image
            key={item.id}
            src={`${imageUrl}/${item?.profile_path}`}
            alt="profile"
            width={65}
            height={50}
            className="rounded-lg"
            style={{ width: "auto", height: "auto" }}
          />
            ):("")
          
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  </div>
  )
}

export default Section3