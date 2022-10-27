/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import { MdFilterFrames } from "@react-icons/all-files/md/MdFilterFrames";
import memesData from "../memesData";

const Meme = () => {
  // React useState
  // const [memes, setMemes] = React.useState(["Meme 1", "Meme 2"]);

  // const addItem = () => {
  //   const newMemeText = `Meme ${memes.length + 1}`;
  //   setMemes((prevState) => [...prevState, newMemeText]);
  // };

  // const memeElements = memes.map((meme) => <p key={meme}>{meme}</p>);

  // Refactor State
  // const [memeImage, setMemeImage] = React.useState("");

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3i7p.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  const getMemeImage =() => {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  // Counter - useState
  // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"]);

  // const addItem = () => {
  //   setThingsArray((prevThingsArray) => {
  //     return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`];
  //   });
  // };

  // const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <div className="flex flex-col items-center md:flex-row md:justify-center mt-10">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border-2 border-gray-200 text-memeDarkMagenta text-sm font-medium rounded-md focus:ring-memeDarkMagenta focus:border-memeDarkMagenta block w-80 p-3 md:w-64 md:mx-3"
          placeholder="Top Text"
          required
        ></input>

        <input
          type="text"
          id="first_name"
          className="bg-gray-50 border-2 border-gray-200 text-memeDarkMagenta text-sm font-medium rounded-md focus:ring-memeDarkMagenta focus:border-memeDarkMagenta block w-80 p-3 mt-5 md:mt-0 md:w-64 md:mx-3"
          placeholder="Bottom Text"
          required
        ></input>
      </div>


      <button
        className="flex mx-auto  bg-gradient-to-r from-memeYellow to-memeOrange text-memeViolet hover:from-memeOrange hover:to-memeYellow active:bg-violet-700 font-bold py-3 border-2 cursor-pointer border-gray-300 text-lg md:text-xl rounded-lg px-12 mt-6 md:px-36"
        onClick={getMemeImage}
      >
        Get a new meme image{" "}
        <MdFilterFrames className="mt-1 ml-1 align-middle" />
      </button>

      {/* <div className="text-center mt-12">{memeElements}</div> */}
      <div className="flex justify-center mx-auto mt-6 border-4 border-gray-200 sm:w-80 md:w-128 lg:h-128">
        <Image width={650} height={600} src={meme.randomImage} />
      </div>
    </div>
  );
};

export default Meme;
