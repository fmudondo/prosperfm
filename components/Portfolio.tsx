import React from 'react';
import { MdExpandMore } from 'react-icons/md';
import bus from 'public/assets/portfolio/bus.png'
import cv from 'public/assets/portfolio/cv.png'
import vaka from 'public/assets/portfolio/vaka.png'
import Link from 'next/link';
import Image from "next/image";
import portfolio from 'public/assets/portfolio/portfolio.png';



const Portfolio = () => {
    
    const portfolios = [
        {
            id: 1,
            title: "Bus Ranking System",
            imageSrc: bus,
            url: "bus",
        },
        {
          id: 2,
          title: "Prosper Mudondo Portfolio",
          imageSrc: portfolio,
          url: "portfolio",
        },
        {
          id: 3,
          title: "Vaka Responsive Website",
          imageSrc: vaka,
          url: "vaka",
        },
        {
          id: 4,
          title: "Resume Using Tailwindcss",
          imageSrc: cv,
          url: "cv",
        },
       
      ];

    return <div id="portfolio" className='w-full bg-gradient-to-r from-orange-600 to-gray-400'>
    <div className='max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left'>
        <h2 className='text-5xl md:text-6xl tracking-wider uppercase text-black font-bold'>Portfolio</h2>
        <p className='py-4 max-w-lg'>Below is a summary of some of my work.
        </p>
        
        <div className='max-w-5xl mx-auto grid md:grid-cols-2 gap-8'>
        {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
                  hover:scale-110"
                />
                <h2 className='text-center text-base capitalize my-4 font-light duration-200 
                group-hover:underline underline-offset-4'>{title}</h2>
                </div>
                </Link>
        ))}
        </div>
        <div className='flex items-center justify-center'>
        <Link href='/portfolio'>
          <div className='group flex items-center justify-center my-8 bg-orange-800 text-black px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer shadow-md shadow-blue-500'>
           all projects
           <span className='-rotate-90 duration-100 ease-in group-hover:translate-x-5'>
            <MdExpandMore size={25}/>
           </span>
          </div>
        </Link>

        </div>
        </div>    
    </div>
    
};

export default Portfolio



