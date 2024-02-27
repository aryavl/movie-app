import React from 'react'
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
const Section1 : React.FC<{
    movie: MovieDetailProp | null;
    
  }> = ({ movie }) => {
  return (
    <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative col-span-1 md:col-span-2">
          <h1 className="text-gray-400 text-[18px]">Description</h1>
          <p className="mt-2 text-white text-[15px]">{movie?.overview}</p>
        </div>
  )
}

export default Section1