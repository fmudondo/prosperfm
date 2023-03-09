import React from 'react';

import illustrator from '../public/assets/design/illustrator.png';
import photoshop from '../public/assets/design/photoshop.png';
import canva from '../public/assets/design/cavna.png';
import corel from '../public/assets/design/corel.png';
import Link from 'next/link';

import Image from 'next/image';

const Design = () => {
  const designs = [
    {
      id: 1,
      title: 'ILLUSTRATOR',
      src: illustrator,
    },
    {
      id: 2,
      title: 'PHOTOSHOP',
      src: photoshop,
    },
    {
      id: 3,
      title: 'CANVA',
      src: canva,
    },
    {
      id: 4,
      title: 'COREL DRAW',
      src: corel,
    },
  ];

  return (
    <div id="design" className="w-full bg-orange-300">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-black font-bold">
          Designing Tools
        </h2>
        <p className="py-4 max-w-lg">
          I have experience in using the following designing tools.
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
          {designs.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300
                  odd:shadow-rose-400 even:shadow-blue-400"
            >
              <Image src={src} width="64" height="64" alt={title} />
              <h3 className="font-light">{title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Design;
