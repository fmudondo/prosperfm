import React from 'react';
import Link from 'next/link';
import { MdExpandMore } from 'react-icons/md';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';

const HomePage = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
        <div className={darkMode ? 'dark' : ''}>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-2xl"
          />
        </div>

        <div className="w-64 h-64 mx-auto overflow-hidden rounded-full border-8">
          <img src={'/assets/me.jpg'} alt="" />
        </div>
        <h1 className="uppercase font-bold text-black text-6xl">
          full stack developer
        </h1>
        <p className="text-black max-w-sm mx-auto text-center text-lg">
          My name is Prosper Farai Mudondo, an undergraduate student at Harare
          Institute of Technology (HIT) persuing Honors Technology Degree in
          Electronic Commerce.
        </p>

        <Link href="/#About Me">
          <div className="group flex items-center justify-center my-8 bg-orange-800 text-black px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer shadow-md shadow-blue-500">
            Know More
            <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
              <MdExpandMore size={25} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
