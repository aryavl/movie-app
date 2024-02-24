import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface PageinationProps{
    page?:number;
    totalPage?:number;
    handleNextPage?:()=>void;
    handlePrevPage?:()=>void;
}

const Pagination = ({page,totalPage,handleNextPage,handlePrevPage}:PageinationProps) => {
     // Create a dash string based on the totalPage
  const dashString = "-".repeat(totalPage || 0);

  // Get the index of the current page dash
  const currentIndex = page ? page - 1 : 0;

  return (
    <>
        <div className="bg-[#141414] px-1 py-1 rounded-md cursor-pointer" onClick={handlePrevPage}>
          <ArrowBackIcon className="  " />
        </div>
        <div>
          {dashString.split('').map((dash, index) => (
            <span
              key={index}
              className={`mr-1 text-2xl ${index === currentIndex ? 'text-red-500' : ''}`} // Change text color for the current dash
            >
              {dash}
            </span>
          ))}
        </div>
        <div className={`bg-[#141414] px-1 py-1 rounded-md cursor-pointer ${currentIndex === dashString.length - 1 ? 'pointer-events-none' : ''}`} onClick={handleNextPage}>
          <ArrowForwardIcon className="  " />
        </div>
    
      </>
  )
}

export default Pagination