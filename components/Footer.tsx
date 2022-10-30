import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="fixed inset-x-0 bottom-0 font-Poppins bg-gradient-to-r from-memeYellow to-memeOrange text-center lg:text-left shadow-2xl">
        <div className=" text-memeViolet text-center p-3">
          © 2022 Copyright:
          <a
            className="  text-memeViolet ml-1 font-semibold"
            target="_blank"
            href="https://www.linkedin.com/in/johncanero/"
            rel="noopener noreferrer"
          >
            John Cañero
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;