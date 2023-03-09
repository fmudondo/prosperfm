import Image from "next/image";
import React from "react";

import contactus from "../public/assets/contact-us.jpg";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaWhatsapp, FaTelegram } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-6xl tracking-wider uppercase text-black font-bold">
          contact
        </h2>

        <div className="flex flex-col md:flex-row gap-8 shadow-xl shadow-blue-300 rounded-md">
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <Image
              src={contactus}
              alt="man with laptop"
              className="rounded-xl shadow-md shadow-blue-500"
            />
            <p className="pt-2 pb-8">
              I am open to talk regarding freelancing or full-time
              opportunities. Feel free to contact me using your preferred
              medium.
            </p>

            <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
               
            <Link href="https://wa.me/qr/Y3V2XP2AMLZJB1">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-orange-800">
                Whatsapp
                <FaWhatsapp size={25} />
              </div>
              </Link>
              

               <Link href="https://www.facebook.com/prosper.mudondo.7">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-orange-800">
                Facebook
                <FaFacebook size={25} />
              </div>
              </Link>
                
              <Link href="https://www.twitter.com/@mudondoprosper">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-orange-800">
                Twitter
                <FaTwitter size={25} />
              </div>
              </Link>
              
              <Link href="https://www.linkedin.com/in/prosper-farai-mudondo-72026a241/">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-orange-800">
                LinkedIn
                <FaLinkedin size={25} />
              </div>
              </Link>

              <Link href="https://t.me/+263782231251">
              <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-orange-800">
                Telegram
                <FaTelegram size={25} />
                </div>
                </Link>
                 
                <Link href="https://github.com/fmudondo">
                <div className="flex items-center justify-center rounded-full shadow-md shadow-blue-500 hover:scale-105 duration-200 p-3 cursor-pointer bg-orange-800">
                Github
                <FaGithub size={25} />
                </div>
                </Link>

             
            </div>
          </div>

          {/* form stuff  */}
          <div className="w-full md:w-1/2 h-full rounded-xl p-4">
            <div className="p-4 text-left">
              <form
                action="https://getform.io/f/ec87693f-8e8a-44e2-87aa-177e7397604b"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-black font-light">
                      name
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="capitalize text-sm py-2 text-black font-light">
                      phone number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>

                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-black font-light">
                      email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label className="capitalize text-sm py-2 text-black font-light">
                      message
                    </label>
                    <textarea
                      name="message"
                      rows={10}
                      className="border-2 rounded-lg p-3 flex focus:outline-none border-blue-200"
                    ></textarea>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="my-8 bg-orange-800 text-black px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200 shadow-md shadow-blue-500">
                    send message
                  </button>
                </div>
                <div>
                    <p className="text-center bg-orange-800 rounded-md tracker-wider shadow-md shadow-blue-500">For calls & texts: +263 78 223 1251 | +263 71 342 4534</p>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-orange-300"> Created By Dr. F.P.Mudondo | All Rights Reserved @2023</div>
    </div>
  );
};

export default Contact;