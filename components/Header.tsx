import React from "react";
import Image from "next/image";
import MemeIcon from "../public/images/memeIcon.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-memeYellow to-memeOrange font-Poppins">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <div className="mr-3">
                <Image height={35} width={40} src={MemeIcon} alt="meme-icon" />
              </div>
              <h1 className="text-memeViolet font-semibold text-2xl">
                Meme Generator
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <h2 className="text-memeViolet font-medium hidden md:block">
              React Course - Project 3
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
