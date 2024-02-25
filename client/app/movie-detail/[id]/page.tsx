"use client"
import MovieDetailHero from '@/components/MovieDetailHero';
import { getSingleMovieDetails } from '@/helpers/fetcher';
import React, { useEffect, useState } from 'react';

interface ParamsType {
  id: string;
}

interface MovieDetailProp {
  id: string;
  title: string;
  poster_path:string;
}

const MovieDetail: React.FC<{ params: ParamsType }> = ({ params }) => {
  const { id } = params;
  const [movieDetail, setMovieDetail] = useState<MovieDetailProp | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSingleMovieDetails(id);
        console.log(data, "movie");
        setMovieDetail(data);
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
      <MovieDetailHero movie={movieDetail} />
    </div>
  );
};

export default MovieDetail;
