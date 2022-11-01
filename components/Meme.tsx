/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MdFilterFrames } from "@react-icons/all-files/md/MdFilterFrames";

const Meme = () => {
  // useState Hook
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3i7p.jpg",
  });

  // useState Hook
  const [allMemes, setAllMemes] = useState([] as any[]);

  // useEffect Hook
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);


  // Function Button = memesData
  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  };

  // handleChange (Forms)
  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="flex flex-col items-center md:flex-row md:justify-center mt-10">
        <input
          type="text"
          placeholder="Top text"
          className="bg-gray-50 border-2 border-gray-200 text-memeDarkMagenta text-sm font-medium rounded-md focus:ring-memeDarkMagenta focus:border-memeDarkMagenta block w-80 p-3 md:w-64 md:mx-3"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        ></input>

        <input
          type="text"
          placeholder="Bottom text"
          className="bg-gray-50 border-2 border-gray-200 text-memeDarkMagenta text-sm font-medium rounded-md focus:ring-memeDarkMagenta focus:border-memeDarkMagenta block w-80 p-3 mt-5 md:mt-0 md:w-64 md:mx-3"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        ></input>
      </div>

      <button
        className="flex mx-auto  bg-gradient-to-r from-memeYellow to-memeOrange text-memeViolet hover:from-memeOrange hover:to-memeYellow active:bg-violet-700 font-bold py-3 border cursor-pointer border-gray-200 text-lg md:text-xl rounded-lg px-12 mt-6 md:px-36"
        onClick={getMemeImage}
      >
        Get a new meme image{" "}
        <MdFilterFrames className="mt-1 ml-1 align-middle" />
      </button>

      {/* Image */}
      <div className="flex justify-center mx-auto mt-6 relative md:mt-9 md:mb-28 sm:w-80 md:w-128 lg:h-120">
        <Image
          width={600}
          height={500}
          className="rounded-3xl"
          src={meme.randomImage}
        />
        <h2 className="absolute flex justify-center p-4 font-Anton uppercase text-2xl meme--text text-white top-0 md:text-5xl md:p-7 ">
          {meme.topText}
        </h2>
        <h2 className="absolute flex justify-center items-center mx-auto p-4 font-Anton uppercase text-2xl meme--text text-white bottom-0 md:text-5xl md:p-7">
          {meme.bottomText}
        </h2>
      </div>
    </div>
  );
};

export default Meme;
