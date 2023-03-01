import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaWhatsapp, 
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "design",
    },
    {
      id: 5,
      link: "about",
    },
    {
      id: 6,
      link: "contact",
    },
   
  ];

  return (
    <div
      className={`w-full h-20 z-10 fixed bg-orange-200 text-black duration-300 ease-in ${
        pageScroll && "bg-black text-[#fff]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h1 className="h-32 w-32 mt-14 ml-12">
          <img src={'/assets/pfm.png'} alt="" />
          </h1>
        </Link>

        <div>
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
          </ul>

          {!navigation && (
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setNavigation(true)}
            >
              <FaBars size={30} />
            </div>
          )}
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-bl from-orange-600 to-gray-400 text-black p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase underline-offset-2 tracking-wider cursor-pointer rounded bg-orange-800 shadow-md shadow-blue-500"
                >
                  prosper f.m.
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-8">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-2xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-5">

                 <Link href="https://wa.me/qr/Y3V2XP2AMLZJB1">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 bg-orange-800 p-3 cursor-pointer">
                  <FaWhatsapp size={25} />
                </div>
                </Link>
                 
                <Link href="https://www.facebook.com/prosper.mudondo.7">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 bg-orange-800 p-3 cursor-pointer">
                  <FaFacebook size={25} />
                </div>
                </Link>
                
                 <Link href="https://www.twitter.com/@mudondoprosper">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 bg-orange-800 p-3 cursor-pointer">
                  <FaTwitter size={25} />
                </div>
                </Link>

                 <Link href="https://github.com/fmudondo">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 bg-orange-800 p-3 cursor-pointer">
                  <FaGithub size={25} />
                </div>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;