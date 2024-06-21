import Image from "next/image";
import { Component, ComponentType, FC, ReactNode } from "react";
import toungeImage from "../../public/images/tounge.svg";
import { Header } from "../components/Header";
import { ImageAssets } from "@/index";
import { Circle } from "@/components/Circle";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandFirebase, TbBrandTypescript } from "react-icons/tb";
import { ReviewCardSection } from "@/components/home/ReviewCardSection/ReviewCardSection";

const Logo: FC = () => {
  return (
    <div>
      <Image src={toungeImage} alt="Example SVG" className="w-16 h-16" />
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <Image
        src={ImageAssets.henk}
        alt="henk"
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          borderColor: "white",
        }}
        className="mb-10 border"
      />
      <div className="flex-row flex text-3xl sm:text-4xl md:text-6xl lg:text-7xl ">
        <p className="pr-5 font-medium">HENK</p>

        <p className=" text-red-200 font-medium">VAN DER SLOOT</p>
      </div>
      <p className="text-2xl pt-5">Fullstack Developer</p>
      <div className="text-1xl sm:text-2xl flex items-center pt-5 space-x-2">
        <p className="gasoek-one-regulartext-center ">React</p>
        <FaReact size={30} />
        <p className="gasoek-one-regulartext-center "> | Node</p>
        <FaNodeJs size={30} />
        <p className="gasoek-one-regulartext-center "> | Firebase</p>
        <TbBrandFirebase size={30} />
      </div>
      <div className="text-1xl sm:text-2xl flex items-center pt-5 space-x-2  ">
        <p className="gasoek-one-regulartext-center ">Typescript</p>
        <TbBrandTypescript size={30} />
      </div>
      <div className="h-16 border-l-2 border-white my-8"></div>

      <h1 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4">
        Feedback from peers at past jobs:
      </h1>

      <ReviewCardSection />
      <div
        style={{ top: -150, position: "absolute", zIndex: -1 }}
        className="absolute right-4 transform ml-0"
      >
        <Circle size={500} />
      </div>
    </div>
  );
}
