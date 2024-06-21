"use client";

import { ImageAssets } from "@/index";
import Image from "next/image";
import { FC, useState, useEffect, PropsWithChildren } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const HeaderLink: FC<PropsWithChildren & { href: string }> = (props) => {
  return (
    <Link href={props.href}>
      <h1 className="text-white text-2xl">{props.children}</h1>
    </Link>
  );
};

const HamburgerMenu: FC<{ isVisible: boolean }> = (props) => {
  const { isVisible } = props;
  return (
    <div
      className={`fixed right-0 mt-28 z-50 bg-header-500 transition-all duration-500 bg-opacity-25 backdrop-blur-lg rounded-l-lg lg:hidden  ${
        isVisible ? "translate-x-0 scale-x-100" : "translate-x-full scale-x-0"
      } w-32 py-4 transform transition-transform duration-300 ease-in-out`}
    >
      <div className="mb-4 flex flex-col items-center space-y-2">
        <HeaderLink href="/about">About</HeaderLink>
        <HeaderLink href="/projects">Projects</HeaderLink>
      </div>
      <div className="justify-center space-x-4 flex ">
        <Link href="https://github.com/h3nk42">
          <FaGithub size={25} />
        </Link>
        <Link href="https://www.linkedin.com/in/henk-van-der-sloot-7a06581b4/">
          <FaLinkedin size={25} />
        </Link>
      </div>
    </div>
  );
};

export const Header: FC = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hamburgerMenuVisible, setHamburgerMenuVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <HamburgerMenu isVisible={hamburgerMenuVisible} />
      <div
        className={`fixed top-0 left-0 w-full h-24 backdrop-filter z-40 flex justify-between lg:grid lg:grid-cols-3 items-center  ${
          isScrolled
            ? "bg-header-500 transition-all duration-500 bg-opacity-25 backdrop-blur-lg"
            : "bg-transparent transition-all duration-500  bg-opacity-0"
        } px-2 sm:px-4 md:px-8 xl:px-52 `}
      >
        <Link href="/" className="">
          <div className="flex space-x-2 border-1 border-white  ">
            <Image
              src={ImageAssets.henk}
              alt="ed"
              style={{ width: 60, height: 60, borderColor: "white" }}
              className="border rounded-full"
            />
            <h1 className="text-white text-lg sm:font-normal sm:text-2xl self-center   ">
              Henk van der Sloot
            </h1>
          </div>
        </Link>

        <div className="justify-center space-x-8 hidden lg:flex ">
          <HeaderLink href="/about">About</HeaderLink>
          <HeaderLink href="/projects">Projects</HeaderLink>
        </div>

        <div className="h-10 space-x-2 justify-end hidden lg:flex items-center">
          <Link href="https://github.com/h3nk42">
            <FaGithub size={25} />
          </Link>
          <Link href="https://www.linkedin.com/in/henk-van-der-sloot-7a06581b4/">
            <FaLinkedin size={25} />
          </Link>
        </div>
        <div className="h-10 space-x-2 justify-end flex lg:hidden items-center ">
          {!hamburgerMenuVisible ? (
            <GiHamburgerMenu
              size={30}
              onClick={() => setHamburgerMenuVisible(!hamburgerMenuVisible)}
              className="cursor-pointer"
            />
          ) : (
            <IoMdClose
              size={30}
              onClick={() => setHamburgerMenuVisible(!hamburgerMenuVisible)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>
      <div className="h-24" />
    </div>
  );
};
