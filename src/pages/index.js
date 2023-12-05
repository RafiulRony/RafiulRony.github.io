import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { LinkArrow } from "@/components/icons";
import Head from "next/head";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import Image from "next/image";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout className="pt-0 flex items-center justify-center">
        <main className="flex items-center text-dark w-full min-h-screen">
          <div className="w-1/2">
            <Image
              src={"/images/profile/mypic.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-[65%] h-auto ml-28"
            />
            <div>
              <HireMe/>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="text-6xl text-left "
            />
            <p>
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <a
                href="https://drive.google.com/file/d/159WGUMnoje0DvelUfB5710yKU3xGRoqn/view"
                target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6
            rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
            border-2 border-solid border-transparent hover:border-dark
            "
                download={true}
              >
                Resume
                <LinkArrow className={"w-6 ml-1"} />
              </a>
              <Link
                href="mailto:rafiulrony.cse001@gmail.com"
                target={"_blank"}
                className="ml-4 text-lg font-medium capitalize text-dark underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
