"use client";
import React, { useEffect, useRef } from "react";

import GradeIcon from "@mui/icons-material/Grade";
import Image from "next/image";
import { imageUrl } from "@/helpers/constants";
import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined";

import Section1 from "./movieDetail/Section1";
import Section2 from "./movieDetail/Section2";
import Section3 from "./movieDetail/Section3";
import Section4 from "./movieDetail/Section4";

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
interface ReviewProps {
  author: string;
  author_details: {
    name: string;
    username: string;
    avatar_path: string;
    rating: number;
  };
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
}
const MovieDetailSection: React.FC<{
  movie: MovieDetailProp | null;
  credits: CreditProps | null;
  reviews: ReviewProps[] | null;
}> = ({ movie, credits, reviews }) => {
  console.log(reviews, "revieww");

  return (
    <div className="w-[80%] mx-auto pt-10 mt-40 sm:mt-20">
      <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-4 md:grid-cols-4 gap-2 md:gap-4">
        <Section1 movie={movie} />
        <Section2 movie={movie} credits={credits} />
        <Section3 movie={movie} credits={credits} />
        <Section4 movie={movie} credits={credits} reviews={reviews} />
      </div>
    </div>
  );
};

export default MovieDetailSection;
