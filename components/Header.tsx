import React from "react";
import Image from "next/image";
import MemeIcon3 from "../public/images/memeIcon3.png";

const Header = () => {
  return (
    <div className="bg-gradient-to-r from-memeYellow to-memeOrange font-Poppins">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://memes.com/"
                aria-current="page"
              >
                <div className="mr-3 mt-1">
                  <Image
                    height={35}
                    width={35}
                    src={MemeIcon3}
                    alt="meme-icon"
                  />
                </div>
              </a>
              <h1 className="text-memeViolet font-semibold text-2xl">
                Meme Generator
              </h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <h2 className=" text-memeDarkMagenta font-medium hidden md:block">
              React Course - Project 3
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
