import Banner from "@/components/Banner";
import Genres from "@/components/Genres";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
   <Banner/>
   <div className="mt-32  sm:mt-0 md:mt-5 lg:mt-10  w-[80%] mx-auto border border-[#262626] p-10 mb-5">

   <Genres/>
   </div>
    </>

  );
}
