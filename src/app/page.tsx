"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Navbar } from "./components/Homepage/Navbar";

import InfoDump from "./components/Homepage/InfoDump";
import Pricing from "./components/Homepage/Pricing";
import Link from "next/link";
import Commendations from "./components/Homepage/Commendations";
import { Portfolio } from "./components/Homepage/Portfolio";

const texts = [
  "Startups",
  "Ecommerce",
  "Restaurants",
  "Small Businesses",
  "Artists",
  "Nonprofits",
];

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((currentText) =>
        currentText === texts.length - 1 ? 0 : currentText + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="flex flex-col items-center justify-start overflow-hidden bg-[#160032] ">
      <Navbar />
      {/* Blobs */}
      {/* <div className="top-1/5 right-[30%] relative  blur-2xl opacity-80 ">
        <div className="shape-blob"></div>
        <div className="shape-blob one"></div>
        <div className="shape-blob two"></div>
        <div className="shape-blob three"></div>
        <div className="shape-blob four"></div>
        <div className="shape-blob five"></div>
        <div className="shape-blob six"></div>
      </div> */}

      {/* Hero */}
      <div className=" flex flex-col justify-start items-center max-w-screen  max-w-[1536px]">
        <div className="absolute z-[0]  max-w-[1536px] h-[640px] overflow-hidden px-4 ">
          {/* <div className="circle-gradient max-h-[640px] z-[0] absolute  w-full h-full "></div> */}
          <div className="img-gradient max-h-[640px] z-[0] absolute  w-full h-full "></div>
          <div className="horizontal-gradient max-h-[640px] z-[0] absolute  w-full h-full "></div>
          <img
            src="/hero.jpg"
            alt="hero"
            className=" relative  z-[-1]   h-full  w-full object-cover pointer-events-none"
          />
        </div>
        <div className="text-center flex flex-col items-center justify-start z-[1] px-24">
          <div className="w-full animate-fadeIn p-4 flex justify-center items-center flex-col  h-[640px] ">
            <h1 className="text-4xl md:text-7xl font  text-white w-full leading-relaxed flex flex-col justify-center items-center  ">
              Building websites is hard. <br />
              <span className="text-3xl md:text-5xl font-bold text-primary mt-5">
                We make it simple.
              </span>
            </h1>
            <p className="py-6 text-lg md:text-xl text-neutral-content">
              Our specialized solutions are designed to address the unique needs
              of your business, so you can focus on what you do best.
            </p>
            <div className="flex justify-center items-center ">
              <Link
                href="#pricing"
                className="btn btn-outline hover:bg-white text-white text-xl m-2"
              >
                View Services
              </Link>
              <button className="btn btn-ghost text-xl m-2">
                More Info -&gt;
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full max-w-[1536px] animate-fadeIn">
        <Commendations />
        {/* <InfoDump /> */}
        {/* <Portfolio /> */}
        {/* <Timeline /> */}
        <Pricing />
      </div>
    </main>
  );
}
