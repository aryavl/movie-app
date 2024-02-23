"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { CloseOutlined } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navAnimation = open ? "translate-x-0" : "translate-x-[-100%]";

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
            <MenuOpenIcon
              aria-hidden="true"
              className="w-[2rem] h-[2rem] text-white"
            />
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{ x: open ? 0 : '-100%' }}
          exit={{ x: '-100%', transition: { duration: 1} }} 
          transition={{ duration: 0.3,ease:'easeOut'  }}
          className="items-center justify-between hidden w-full  md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul
            className="flex flex-col p-4 md:p-0 mt-4 font-medium border  rounded-lg bg-[#0f0f0f] md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0  py-4  "
            style={{ border: "3px solid #333333" }}
          >
            <li>
              <Link
                href="#"
                className="block py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 hover:px-5"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl  transition ease-out duration-100  hover:scale-110 "
              >
                Upcoming
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 "
              >
                Latest
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 "
              >
                Popular
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 "
              >
                Top Rated
              </Link>
            </li>
          </ul>
        </motion.div>
        <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%', transition: { duration: 1 } }} 
              transition={{ duration: 0.3,ease:'easeOut' }}
              className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#0f0f0f]`}
            >
              <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center ">
                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium    bg-[#0f0f0f] md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0  py-4  ">
                  <li>
                    <Link
                      href="#"
                      className="block w-[80vw] text-center py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 hover:px-5"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block w-[80vw] text-center py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl  transition ease-out duration-100  hover:scale-110 "
                    >
                      Upcoming
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block w-[80vw] text-center py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 "
                    >
                      Latest
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block w-[80vw] text-center py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 "
                    >
                      Popular
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="block w-[80vw] text-center py-2 px-4 mx-3 my-3 text-gray-300 bg-[#0f0f0f] hover:bg-[#1A1A1A] hover:text-white hover:rounded-xl transition ease-out duration-100  hover:scale-110 "
                    >
                      Top Rated
                    </Link>
                  </li>
                </ul>
              </div>

              <motion.button
                onClick={() => {
                  setOpen(false);
                }}
                whileTap={{ scale: 0.9 }}
                className="absolute cursor-pointer top-[1rem] right-[2rem] w-[2rem] h-[2rem] text-white z-[1000000]"
              >
                <CloseOutlined />
              </motion.button>
            </motion.div>
          </>
        )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
