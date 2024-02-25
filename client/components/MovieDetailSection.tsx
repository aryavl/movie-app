"use client";
import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import TranslateIcon from "@mui/icons-material/Translate";
import GradeIcon from "@mui/icons-material/Grade";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
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

const MovieDetailSection: React.FC<{ movie: MovieDetailProp | null }> = ({
  movie,
}) => {
  const year = movie?.release_date.substring(0, 4);

  // Function to generate star icons based on rating
  const renderStars = (rating: number): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating / 2) {
        stars.push(<GradeIcon key={i} className="text-red-700" />);
      } else {
        stars.push(<GradeIcon key={i} style={{ opacity: 0.3 }} />);
      }
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
              {renderStars(movie?.vote_average || 0)}
              <span>{movie?.vote_average || 0}</span>
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
        </div>
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative  col-span-1 md:col-span-2">
          <span>03</span>
        </div>
        <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative  col-span-1 md:col-span-2">
          <span>04</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailSection;
