"use client";
import "@/assets/styles/header.css";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import {
  MagnifyingGlassIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  VideoCameraIcon,
  UserGroupIcon,
  PhotoIcon,
  UserIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="bg-white py-5 px-4 flex justify-between sticky top-0 z-10">
      <div className="flex justify-evenly">
        <Image
          height={20}
          width={50}
          priority={true}
          src={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png"
          }
          alt={"Facebook Logo"}
          className="h-[50px] w-auto"
        />

        <div className="flex justify-center p-3 ml-3 rounded-full bg-slate-200">
          <MagnifyingGlassIcon className="size-6" />
          <input
            id="search-facebook"
            type="text"
            placeholder="Search Facebook"
            className="border-none bg-transparent outline-0 ml-3"
          />
        </div>
      </div>

      <div className="hidden lg:flex justify-center ">
        <div className="header-option border-b-4 border-b-blue-500">
          <HomeIcon className="size-6" />
        </div>
        <div className="header-option">
          <BuildingStorefrontIcon className="size-6" />
        </div>

        <div className="header-option">
          <VideoCameraIcon className="size-6" />
        </div>

        <div className="header-option">
          <UserGroupIcon className="size-6" />
        </div>

        <div className="header-option">
          <PhotoIcon className="size-6" />
        </div>
      </div>

      <div className="flex">
        <div className="header-icon-right mr-2 cursor-pointer">
          <BellIcon className="size-6" />
        </div>
        <div className="header-icon-right mr-2 cursor-pointer">
          <ChatBubbleOvalLeftIcon className="size-6" />
        </div>
        <div className="relative flex justify-center items-center">
          <div className="p-1 hover:bg-slate-200 hover:rounded-lg cursor-pointer flex items-center ">
            <UserIcon className="hidden lg:block size-6 mr-2" />
            <h4 className="hidden lg:block p-2 rounded-2xl">Shernille Licud</h4>
          </div>
          <div
            onClick={() => setProfileOpen(!isProfileOpen)}
            className="ml-2 p-2 rounded-full hover:bg-slate-200"
          >
            <ChevronDownIcon className="size-6 mx-auto cursor-pointer" />
          </div>

          {isProfileOpen && (
            <div
              id="user-menu"
              className="absolute top-full right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabIndex="-1"
            >
              <Link
                href="/"
                className="block px-4 py-2 text-sm text-gray-700 lg:hidden w-full text-left hover:bg-slate-200"
              >
                Shernille Licud
              </Link>
              <button
                onClick={() => {
                  setProfileOpen(false);
                }}
                className="block px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-slate-200"
                role="menuitem"
                tabIndex="-1"
                id="user-menu-item-2"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
