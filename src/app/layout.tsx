import type { Metadata } from "next";
import { Noto_Sans, Roboto, Roboto_Slab } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useRouter } from "next/router";

const noto_sans = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Henk the Fullstack dev!",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gasoek+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={noto_sans.variable} style={{ scrollBehavior: "smooth" }}>
        {
          <main className="flex min-h-screen flex-col items-center font-noto text-white">
            <div className=" fixed inset-0 bg-background-500 -z-50"></div>
            <Header />
            {children}
            <Footer />
          </main>
        }
      </body>
    </html>
  );
}
