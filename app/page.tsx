import Image from "next/image";
import logo from "./../public/baytobeach-logo.jpeg";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center bg-white">
        <Image src={logo} alt="logo" height={300} />
        <h1>Pool cleaning and maintenance in Gulf Shores, AL</h1>
        <h2>Bay To Beach Pools LLC</h2>
        <h2>Website comming soon</h2>
        <p>Contact us at 251-233-5491 or baytobeachpoolsllc@gmail.com</p>
        <p></p>
      </main>
    </>
  );
}
