"use client";
import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import { calculateItemsPerPage, formatDateFunction } from "@/helpers/helper";
import { getUpcomingMovies } from "@/helpers/fetcher";
import Pagination from "./Pagination";
import Card from "./Card";
import ImageSuspense from "./ImageSuspense";
import Link from "next/link";

interface UpcomingProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_languages: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

const Upcoming: React.FC = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(
    calculateItemsPerPage()
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUpcomingMovies();
        setUpcomingMovies(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching upcoming movie data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
  const totalPage = Math.ceil(upcomingMovies.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = upcomingMovies.slice(indexOfFirstItem, indexOfLastItem);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col mt-10">
      <SectionHeader
        heading="Upcoming Bangers"
        page={currentPage}
        onPageChange={handlePageChange}
        totalPage={totalPage}
      />
      <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-white relative mt-10 gap-4 ">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          currentItems.map((item: UpcomingProps) => {
            const formattedDate = formatDateFunction(item.release_date);
            return (
              <div
                key={item.id}
                className="bg-[#1A1A1A] border border-[#262626] rounded-lg relative"
              >
                <div className="overflow-hidden relative">
                  <div className="flex justify-center items-center pt-5 pb-10">
                    <div className="p-2">
                      <Link href="/">
                        <ImageSuspense
                          src={item.poster_path}
                          alt={item.title}
                          width={300}
                          height={450}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#0e0d0d] to-transparent pointer-events-none rounded-lg"></div>
                </div>

                <div className="absolute top-[88%] z-10 px-2 w-full flex items-center justify-center">
                  <button className="rounded-full bg-[#0e0d0d] text-[10px] border border-[#262626] px-2 py-1">
                    Release on {formattedDate}
                  </button>
                </div>
              </div>
            );
          })
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

export default Upcoming;
