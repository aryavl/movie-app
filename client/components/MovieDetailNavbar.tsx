"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { AnimatePresence,motion } from 'framer-motion';
import { CloseOutlined } from "@mui/icons-material";
const MovieDetailNavbar = () => {
    const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="bg-transparent  fixed w-full z-20 top-0 start-0 ">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Link
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <button className="bg-[#f7e4f5] rounded-full py-[0.25rem] px-[0.5rem]">
          <Image
            src="/images/logo.jpg"
            className="h-8"
            alt="Flowbite Logo"
            width={80}
            height={5}
          />
        </button>
      </Link>
      <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button className="text-white mr-4 hover:text-gray-100 hover:scale-125">
          <SearchIcon />
        </button>
        <button className="text-white hover:text-gray-100 hover:scale-125">
          <NotificationsIcon />
        </button>
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center  rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => setOpen(true)}
        >
          {/* <span className="sr-only">Open main menu</span> */}

          <MenuOpenIcon
            aria-hidden="true"
            className="w-[2rem] h-[2rem] text-white"
          />
        </button>
      </div>

      
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={` fixed top-0 left-0 right-0 bottom-0 z-[1000000000] bg-[#0f0f0f]`}
          >
            <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center z-[1000000000]">
            <button className="text-white mr-4 hover:text-gray-100 hover:scale-125">
          <SearchIcon />
        </button>
        <button className="text-white hover:text-gray-100 hover:scale-125">
          <NotificationsIcon />
        </button>
            </div>
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="absolute cursor-pointer top-[1rem] right-[2rem] w-[2rem] h-[2rem] text-white z-[1000000]"
            >
              <CloseOutlined />
            </button>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  </nav>
  )
}

export default MovieDetailNavbar