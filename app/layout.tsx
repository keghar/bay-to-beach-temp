import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "./../public/baytobeach-logo.jpeg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bay To Beach Pools LLC",
  description: "Pool Cleaning and Maintenance in Gulf Shores, AL",
  icons: {
    icon: "/baytobeach-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
