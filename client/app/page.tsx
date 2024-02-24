import Banner from "@/components/Banner";
import Genres from "@/components/Genres";
import Navbar from "@/components/Navbar";
import Upcoming from "@/components/Upcoming";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="mt-32 text-white sm:mt-0 md:mt-5 lg:mt-10  w-[80%] mx-auto border border-[#262626] p-10 mb-5">
        <Genres />
        <Upcoming />
      </div>
    </>
  );
}
