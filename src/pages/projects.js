import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/icons';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Image from 'next/image';
import Script from 'next/script';

const Project = ({ feature = false, title, type, summary, img, link, github }) => {
  return (
    <article className={`w-full flex ${feature ? "flex-row": "flex-col p-6"} items-center justify-center rounded-2xl
        border border-solid border-dark bg-light  relative`}>
            <Link href={link} target="_blank"
            className='w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-full flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold'>{title}</h2>
                </Link>
                {summary ? <p className='my-2 font-medium text-dark'>{summary}</p> : null}
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
                    <Link href={link} target="_blank"
                    className='ml-4 rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold'
                    >Visit</Link>
                </div>
            </div>
        </article>
  );
};

const Projects = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-3H7JM8VK2E'); 
  }, []);
  return (
    <>
      <Head>
        <title>Rafiul | Projects Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col ">
        <Layout className="pt-16">
        <AnimatedText text="Imagination Trumps Knowledge" className='lg:text-5xl mb-16'/>
            <div className="grid grid-cols-12 gap-24">
                <div className="col-span-12">
                    <Project
                    feature={true}
                    title="Crypto Screener Application"
                    img={project1}
                    summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                    It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                    local currency."
                    link="/"
                    type="Feature Project"
                    github="https://github.com/RafiulRony"

                    />
                </div>
                <div className="col-span-6">
                <Project
                    title="Crypto Screener Application"
                    img={project1}
                    link="/"
                    type="Feature Project"
                    github="https://github.com/RafiulRony"

                    />
                </div>
                <div className="col-span-6">
                <Project
                    title="Crypto Screener Application"
                    img={project1}
                    link="/"
                    type="Feature Project"
                    github="https://github.com/RafiulRony"

                    />
                </div>

                <div className="col-span-12">
                    Feature Project
                </div>
                <div className="col-span-6">
                    Project 3
                </div>
                <div className="col-span-6">
                    project 4
                </div>
            </div>
        </Layout>
      </main>
      <Script
        src='https://www.googletagmanager.com/gtag/js?id=G-3H7JM8VK2E'
        strategy='afterInteractive'
      />
      <Script strategy='lazyOnload' id='google-analytics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3H7JM8VK2E');
        `}
      </Script>
    </>
  );
};

export default Projects;
