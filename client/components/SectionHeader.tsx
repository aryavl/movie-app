import React from 'react'
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface SectionHeaderProps{
    heading:string,
    page?:number,
    
}
const SectionHeader = ({heading,page}:SectionHeaderProps) => {
  return (
    <div className="w-full flex justify-between items-center">
    <h1 className="text-white font-semibold text-lg">{heading}</h1>
    <div className="bg-[#0e0d0d] text-white px-4 py-2  items-center justify-between gap-2 border border-[#262626] rounded-md shadow-lg hidden md:flex">
      <div className="bg-[#141414] px-1 py-1 rounded-md cursor-pointer">
        <ArrowBackIcon className="  " />
      </div>
      <div>-----</div>
      <div className="bg-[#141414] px-1 py-1 rounded-md cursor-pointer">
        <ArrowForwardIcon className="  " />
      </div>
    </div>
  </div>
  )
}

export default SectionHeader