/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
// import Image from "next/image";
import HeroHeader from "../components/HeroHeader/HeroHeader.js";
import LatestDevlogs from "../components/LatestDevlogs.js";

export default function Home() {
  return (
    <div>
      <HeroHeader />
      <LatestDevlogs />
    </div>
  );
}
