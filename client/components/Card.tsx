import { imageUrl } from "@/helpers/constants";
import Image from "next/image";
import React from "react";
import ImageSuspense from "./ImageSuspense";
import Link from "next/link";
import { formatDateFunction } from "@/helpers/helper";

interface CommonProps {
  id: number;
  poster_path: string;
  title: string;
  release_date: string;
}

interface CardProps<T> {
  item: T;
}

function Card<T extends CommonProps>({ item }: CardProps<T>) {
  const formattedDate = formatDateFunction(item.release_date)

  return (
    <div className="bg-[#1A1A1A] border border-[#262626] rounded-lg relative">
      <div className="overflow-hidden relative">
        <div className="flex justify-center items-center pt-5 pb-10">
          <div className="p-2">
            <Link href={`/movie-detail/${item.id}`}>
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
          Released on {formattedDate}
        </button>
      </div>
    </div>
  );
}

export default Card;
