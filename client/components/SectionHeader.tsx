import React from "react";
import Pagination from "./Pagination";

interface SectionHeaderProps {
  heading: string;
  page?: number;
  onPageChange?: (page: number) => void;
  totalPage?: number;
}

const SectionHeader = ({
  heading,
  page,
  onPageChange,
  totalPage,
}: SectionHeaderProps) => {
  const handlePrevPage = () => {
    if (onPageChange && page && page > 1) {
      onPageChange(page - 1); // Decrease page number
    }
  };

  const handleNextPage = () => {
    if (onPageChange && page && totalPage && page < totalPage) {
      onPageChange(page + 1); // Increase page number
    }
  };

  return (
    <div className="w-full flex justify-between items-center">
      <h1 className="text-white font-semibold text-lg">{heading}</h1>
      <div className="bg-[#0e0d0d] text-white px-4 py-2  items-center justify-between gap-2 border border-[#262626] rounded-md shadow-lg hidden sm:flex">
        <Pagination
          page={page}
          totalPage={totalPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default SectionHeader;
