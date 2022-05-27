/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
// import Image from "next/image";
import HeroHeader from "../components/HeroHeader/HeroHeader.js";

export default function Home() {
  return (
    <section
      className="relative 
      px-[5%] lg:px-[7.3%]"
    >
      <span
        className="absolute h-f h-full top-0 border-l
    border-slate-900/40 z-10 
    left-[5%] lg:left-[7.3%]
    "
      ></span>
      <HeroHeader />
      <span
        className="absolute border-solid bottom-0 left-0 border-l-white border-t-[transparent] z-10
          border-t-[5vw] lg:border-t-[50px]
          border-l-[5vw] lg:border-l-[50px]"
      ></span>
      <h1 className="text-5xl font-bold">
        Hello World! Rhu's Valorant Portfolio Website is WORKING! Hello World!
        Rhu's Valorant Portfolio Website is WORKING! Hello World! Rhu's Valorant
        Portfolio Website is WORKING! Hello World! Rhu's Valorant Portfolio
        Website is WORKING! Hello World! Rhu's Valorant Portfolio Website is
        WORKING! Hello World! Rhu's Valorant Portfolio Website is WORKING! Hello
        World! Rhu's Valorant Portfolio Website is WORKING! Hello World! Rhu's
        Valorant Portfolio Website is WORKING! Hello World! Rhu's Valorant
        Portfolio Website is WORKING! Hello World! Rhu's Valorant Portfolio
        Website is WORKING! Hello World! Rhu's Valorant Portfolio Website is
        WORKING! Hello World! Rhu's Valorant Portfolio Website is WORKING!
      </h1>
    </section>
  );
}
