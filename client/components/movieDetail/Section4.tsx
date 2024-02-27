import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
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
const Section4: React.FC<{
    movie: MovieDetailProp | null;
    credits: CreditProps | null;
    reviews: ReviewProps[] | null;
  }> = ({ movie, credits,reviews }) => {
  return (
    <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center py-6 px-6 relative  col-span-1 md:col-span-2">
    {
        reviews ?(
            <>
            <div className='flex items-center justify-between w-full text-gray-400 text-[18px] mb-5'>
                <h1>Reviews</h1>
                <button className='flex items-center gap-2 bg-[#0e0d0d] border border-[#262626] py-2 px-2 rounded-lg text-[18px] '>
                    <AddOutlinedIcon/>
                    Add Your Review
                </button>
            </div >
            <div className='flex items-center'>

            </div>
            </>
        ):(<h1>Loading ...</h1>)
    }
  </div>
  )
}

export default Section4