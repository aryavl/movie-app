"use client";

import React, { useEffect, useState } from "react";
import { getSingleMovieDetails } from "../../../helpers/fetcher";
import MovieDetailNavbar from "../../../components/MovieDetailNavbar";
import MovieDetailHero from "../../../components/MovieDetailHero";
import MovieDetailSection from "../../../components/MovieDetailSection";
import Footer from "../../../components/Footer";

interface ParamsType {
  id: string;
}

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
  author:string;
author_details: {name: string, username: string, avatar_path:string, rating: number}
content:string;
created_at: string;
id:string;
updated_at:string;
url:string
}
const MovieDetail: React.FC<{ params: ParamsType }> = ({ params }) => {
  const { id } = params;
  const [movieDetail, setMovieDetail] = useState<MovieDetailProp | null>(null);
  const [creditsData, setCredits] = useState<CreditProps | null>(null);
  const [reviewData, setReviewData] = useState<ReviewProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, credits, reviews } = await getSingleMovieDetails(id);
        // console.log(data, "movie");
        // console.log(credits, "credit");
        console.log(reviews, "reviewsssssssssssssssss");

        setMovieDetail(data);
        setCredits(credits);
        setReviewData(reviews);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching upcoming movie data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <MovieDetailNavbar />
          <MovieDetailHero movie={movieDetail} />
          <MovieDetailSection movie={movieDetail} credits={creditsData} reviews={reviewData} />
        </>
      )}

      <Footer />
    </div>
  );
};

export default MovieDetail;
