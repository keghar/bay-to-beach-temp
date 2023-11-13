"use client";
import Image from "next/image";
import logo from "./../public/baytobeach-logo.jpeg";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <Image className="pb-3" src={logo} alt="logo" height={300} />
        <h2 className="text-3xl">Bay To Beach Pools LLC</h2>
        <h1 className="text-2xl">
          Pool cleaning and maintenance in Gulf Shores, AL
        </h1>

        <h2 className="pt-3">Website comming soon</h2>
        <div className="flex flex-col justify-center items-center pt-3">
          <p className="text-xl">Contact us:</p> <p>251-233-5491</p>
          <p>baytobeachpoolsllc@gmail.com</p>
        </div>
      </main>
    </>
  );
}
