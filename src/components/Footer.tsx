import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterLink: FC<PropsWithChildren & { href: string }> = (props) => {
  return (
    <Link href={props.href}>
      <h1 className="text-white text-2xl ">{props.children}</h1>
    </Link>
  );
};

export const Footer: FC = () => {
  return (
    <div className="flex flex-col my-16">
      <div className="justify-center space-x-4 flex mb-4">
        <FooterLink href="/about">About</FooterLink>
        <FooterLink href="/projects">Projects</FooterLink>
      </div>
      <div className="justify-center space-x-4 flex ">
        <Link href="https://github.com/h3nk42">
          <FaGithub size={25} />
        </Link>
        <Link href="https://www.linkedin.com/in/henk-van-der-sloot-7a06581b4/">
          <FaLinkedin size={25} />
        </Link>
      </div>
      <div className="h-8" />
      <h1 className=" text-gray-300 text-xs sm:text-base ">
        © Henk van der Sloot, Berlin, Germany - Made with React 💫
      </h1>
    </div>
  );
};
