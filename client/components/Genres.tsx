"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import { getGenreList } from "@/helpers/fetcher";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Pagination from "./Pagination";
import { imageUrl } from "@/helpers/constants";

interface GenreProp {
  id: number;
  name: string;
  movies: Array<{
    poster_path: string;
    id: number;
    title: string;
  }>;
}

const Genres = () => {
  const calculateItemsPerPage = () => {
    const screenWidth = window.innerWidth;
    let itemsPerPage = 5;
    if (screenWidth >= 1024) {
      itemsPerPage = 5;
    } else if (screenWidth >= 768) {
      itemsPerPage = 4;
    } else if (screenWidth >= 640) {
      itemsPerPage = 3;
    } else {
      itemsPerPage = 2;
    }
    return itemsPerPage;
  };

  const [genreTitle, setGenreTitle] = useState<GenreProp[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    calculateItemsPerPage()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getGenreList();
        console.log(data);

        setGenreTitle(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching genre data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(genreTitle, "gene");

  // dynamically set the itemsPerPage according to the screen size
  useEffect(() => {
    function handleResize() {
      setItemsPerPage(calculateItemsPerPage());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Logic to get current items based on pagination
  const totalPage = Math.round((genreTitle.length - 1) / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = genreTitle.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage && currentPage > 1) {
      setCurrentPage(currentPage - 1); // Decrease page number
    }
  };

  const handleNextPage = () => {
    if (currentPage) {
      setCurrentPage(currentPage + 1); // Increase page number
    }
  };
  return (
    <div className="flex flex-col">
      <SectionHeader
        heading="Our Genres"
        page={currentPage}
        onPageChange={handlePageChange}
        totalPage={totalPage}
      />
      <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-white relative mt-10 gap-4 ">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          currentItems.map((item: GenreProp) => (
            <div
              key={item.id}
              className="bg-[#1A1A1A] border border-[#262626] rounded-lg items-center  py-2  relative"
            >
              <div className="mx-auto overflow-hidden relative">
                <div className="flex justify-center items-center pt-5 pb-10">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    {item.movies.map((movie) => (
                      <Image
                        key={movie.id}
                        className="w-full object-cover rounded-lg"
                        src={`${imageUrl}/${movie.poster_path}`}
                        width={150}
                        height={150}
                        alt={movie.title}
                      />
                    ))}
                  </div>
                </div>
                <div className="absolute top-[88%] z-10 px-2 w-full flex items-center justify-between">
                  <h1 className="text-white">{item.name}</h1>
                  <ArrowForwardIcon />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#0e0d0d] to-transparent pointer-events-none rounded-lg"></div>
            </div>
          ))
        )}
      </div>
      <div className="text-white flex items-center justify-center sm:hidden mt-2">
        <Pagination
          page={currentPage}
          totalPage={totalPage}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
        />
      </div>
    </div>
  );
};

export default Genres;
