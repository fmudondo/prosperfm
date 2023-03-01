import React from "react";

import cv from "../../public/assets/portfolio/cv.png";
import vaka from "../../public/assets/portfolio/vaka.png";
import bus from "../../public/assets/portfolio/bus.png";
import flyer1 from "../../public/assets/portfolio/flyer1.jpg";
import flyer2 from "../../public/assets/portfolio/flyer2.jpg";
import logo1 from "../../public/assets/portfolio/logo1.jpg";
import logo2 from "../../public/assets/portfolio/logo2.jpg";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import portfolio from 'public/assets/portfolio/portfolio.png';


export const getStaticProps = async () => {

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
    {
      id: 5,
      title: "Cement Flyer",
      imageSrc: flyer1,
      url: "flyer1",
    },
    {
      id: 6,
      title: "RedWood Kitchen Logo",
      imageSrc: logo1,
      url: "logo1",
    },
    {
      id: 5,
      title: "Holiday Flyer",
      imageSrc: flyer2,
      url: "flyer2",
    },
    {
      id: 5,
      title: "PFM Logo",
      imageSrc: logo2,
      url: "logo2",
    },
  ];

  return {
    props: { portfolios },
  };
};

const PortfoliosRoute = ({ portfolios }) => {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfoliosRoute;