import React from "react";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { LinkArrow } from "@/components/icons";
import Head from "next/head";
import Link from "next/link";
import HireMe from "@/components/HireMe";
import Image from "next/image";
// import profilePic from "../../public/images/profile/developer-pic-1.jpg"
// import ProfilePicture from "@/../public/images/profile/mypic.jpg"


// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout className="pt-0 flex items-center justify-center">
        <main className="grid sm:grid-cols-1 md:grid-cols-2 items-center text-dark w-full min-h-screen">
          <div className="lg:w-full sm:col-span-1">
          <div className='lg:col-span-1 relative lg:h-[50%] w-2/3  rounded-2xl border-2 border-solid border-dark
            bg-light sm:m-10 p-4
            '>
                <Image 
                src={"/images/profile/mypic.jpg"} 
                width={200}
                height={200}
                alt="profile pic" 
                className=' w-full h-full rounded-xl' />
            </div>
            <div>
              {/* pending. need to change svg */}
              {/* <HireMe/> */} 
            </div>
          </div>
          <div className="md:w-full  flex flex-col items-center self-center sm:mt-0">
            <AnimatedText
              text="Turning Vision Into Reality With Code And Design."
              className="lg:text-6xl text-left sm:text-2xl"
            />
            <p className="text-xl">
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in MERN stack and web development.
            </p>
            <div className="flex items-center self-start mt-2 sm:p-10">
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
