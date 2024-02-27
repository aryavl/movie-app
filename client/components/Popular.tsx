"use client";
import React, { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

import { getLatestMovies, getPopularMovies } from "@/helpers/fetcher";
import Card from "./Card";
import Pagination from "./Pagination";

interface PopularProps {
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

const Popular = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const calculateItemsPerPage = () => {
      const containerWidth = containerRef.current?.clientWidth || 0;
      let itemsPerPage = 5;
    
      if (containerWidth >= 1024) {
        itemsPerPage = 5;
      } else if (containerWidth >= 768 && containerWidth < 1024) {
        itemsPerPage = 5;
      } else if (containerWidth >= 640 && containerWidth < 768) {
        itemsPerPage = 4;
      } else if (containerWidth >= 420 && containerWidth < 640) {
        itemsPerPage = 3;
      } else {
        itemsPerPage = 2;
      }
    
      return itemsPerPage;
    };
    
  const [popularMovies, setPopularMovies] = useState<PopularProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPopularMovies();
        
        setPopularMovies(data);
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
  const totalPage = Math.round((popularMovies.length - 1) / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = popularMovies.slice(indexOfFirstItem, indexOfLastItem);

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
    <div id='popular-section' className="flex flex-col mt-10" ref={containerRef}>
      <SectionHeader
        heading="Popular "
        page={currentPage}
        onPageChange={handlePageChange}
        totalPage={totalPage}
      />
      <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 text-white relative mt-10 gap-4 ">
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          currentItems.map((item: PopularProps) => (
            <Card key={item.id} item={item} />
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

export default Popular;
