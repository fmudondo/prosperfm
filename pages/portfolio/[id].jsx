import React from 'react';
import cv from '../../public/assets/portfolio/cv.png';
import vaka from '../../public/assets/portfolio/vaka.png';
import bus from '../../public/assets/portfolio/bus.png';
import flyer1 from '../../public/assets/portfolio/flyer1.jpg';
import flyer2 from '../../public/assets/portfolio/flyer2.jpg';
import logo1 from '../../public/assets/portfolio/logo1.jpg';
import logo2 from '../../public/assets/portfolio/logo2.jpg';

import { FaGithub } from 'react-icons/fa';
import { AiOutlineCaretRight } from 'react-icons/ai';
import { BiChevronLeft } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import portfolio from 'public/assets/portfolio/portfolio.png';

const portfolios = [
  {
    id: 1,
    title: 'Bus Ranking System',
    imageSrc: bus,
    url: 'bus',
  },
  {
    id: 2,
    title: 'Prosper Mudondo Portfolio',
    imageSrc: portfolio,
    url: 'portfolio',
  },
  {
    id: 3,
    title: 'Vaka Responsive Website',
    imageSrc: vaka,
    url: 'vaka',
  },
  {
    id: 4,
    title: 'Resume Using Tailwindcss',
    imageSrc: cv,
    url: 'cv',
  },
  {
    id: 5,
    title: 'Cement Flyer',
    imageSrc: flyer1,
    url: 'flyer1',
  },
  {
    id: 6,
    title: 'RedWood Kitchen Logo',
    imageSrc: logo1,
    url: 'logo1',
  },
  {
    id: 5,
    title: 'Holiday Flyer',
    imageSrc: flyer2,
    url: 'flyer2',
  },
  {
    id: 5,
    title: 'PFM Logo',
    imageSrc: logo2,
    url: 'logo2',
  },
];

const getPortfolioFrom = (url) => portfolios.filter((p) => p.url === url)[0];

export async function getStaticPaths() {
  const paths = portfolios.map((p) => ({
    params: { id: p.url },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const portfolio = getPortfolioFrom(params.id);

  return {
    props: { portfolio },
  };
}

const OnePortfolio = ({ portfolio: { title, imageSrc } }) => {
  return (
    <div className="h-fit w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-black font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-black tracking-wider">
          {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
          <Image src={imageSrc} alt="bla" layout="fill" objectFit="cover" />
        </div>

        <h2 className="text-center md:text-center my-4 text-2xl font-bold">
          Description
        </h2>

        <p>Click on any of the buttons below for more information.</p>

        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-orange-800 text-black px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer shadow-md shadow-blue-500">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/fmudondo">
            <div className="group flex items-center justify-center my-8 bg-orange-800 text-black px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer shadow-md shadow-blue-500">
              Github
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OnePortfolio;
