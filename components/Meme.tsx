import React from "react";
import { MdFilterFrames } from "@react-icons/all-files/md/MdFilterFrames";
import memesData from "../pages/memesData";

const Meme = () => {

const getMemeImage = () => {
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    console.log(url)
}
  return (
    <div>
      <div className="flex flex-col items-center md:flex-row md:justify-center mt-12">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border-2 border-gray-200 text-memeDarkMagenta text-sm font-medium rounded-md focus:ring-memeDarkMagenta focus:border-memeDarkMagenta block w-72 p-3 md:w-80  md:mx-3"
          placeholder="Input Label"
          required
        ></input>

        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border-2 border-gray-200 text-memeDarkMagenta text-sm font-medium rounded-md focus:ring-memeDarkMagenta focus:border-memeDarkMagenta block w-72 p-3 mt-5 md:mt-0 md:w-80 md:mx-3"
          placeholder="Input Label"
          required
        ></input>
      </div>

      {/* Button */}
      <button
        className="flex mx-auto  bg-gradient-to-r from-memeYellow to-memeOrange text-memeViolet hover:from-memeOrange hover:to-memeYellow active:bg-violet-700 font-bold py-3 border-2 cursor-pointer border-gray-300 text-lg md:text-xl rounded-lg px-9 mt-6 md:px-52" onClick={getMemeImage}>
        Get a new meme image{" "}
        <MdFilterFrames className="mt-1 ml-1 align-middle" />
      </button>
    </div>
  );
};

export default Meme;
