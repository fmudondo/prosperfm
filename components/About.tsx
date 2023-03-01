import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const About = () => {
  return (
    <div id="about" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-black font-bold">
          about me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8 rounded-md bg-orange-800">
          <p className="py-4 max-w-2xl mx-auto">
          My name is Prosper Farai Mudondo. I am an undergraduate student at Harare Institute of Technology (HIT University) 
          and I am currently in my third year, pursuing a Bachelor’s Technology Honors Degree in Electronic Commerce. 
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            I studied my primary at Daramombe Primary School from grade 1-4. I studied my grade 5 at Thornicroft Park Primary. 
            I finished my primary level at Pakistan International School, Tehran, Iran. I did my high school at Howard High from 
            form 1 to 6.
          </p>
          <p className="py-4 max-w-2xl mx-auto">
            I like music and I am a lead guitarist.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-orange-800 text-black px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer shadow-md shadow-blue-500">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-8 bg-orange-800 text-black px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer shadow-md shadow-blue-500">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;