"use client";
import Image from "next/image";
import logo from "./../public/baytobeach-logo.jpeg";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-white">
        <Image className="pb-3" src={logo} alt="logo" height={300} />
        <h2 className="text-center text-xl md:text-3xl">
          Bay To Beach Pools LLC
        </h2>
        <h1 className="text-lg md:text-2xl text-center">
          Pool cleaning and maintenance in <br />
          Gulf Shores, AL
        </h1>

        <h2 className="text-center pt-3">Website coming soon</h2>
        <div className="flex flex-col justify-center items-center pt-3">
          <p className="text-lg text-center md:text-xl">Contact us:</p>{" "}
          <p className="text-center">251-233-5491</p>
          <p className="text-center">baytobeachpoolsllc@gmail.com</p>
        </div>
      </main>
    </>
  );
}
