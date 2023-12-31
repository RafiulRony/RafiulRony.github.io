import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect } from 'react';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Script from 'next/script';

const About = () => {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3H7JM8VK2E');
  }, []);
  return (
    <>
      <Head>
        <title>Rafiul | About Page</title>
      </Head>
      <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
        <AnimatedText text="Passion Fuels Purpose!" className='mb-16 sm:text-4xl md:text-5xl lg:text-8xl' />
        <div className='grid w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-2 lg:gap-16'>
            <div className='col-span-1 flex flex-col items-start justify-start'>
                <h2 className='mb-4 text-lg fond-bold uppercase text-dark/75'>Biography</h2>
                <p className='font-medium
                .'>Hello, I&apos;m Rafiul Islam, a dedicated web developer specializing in the MERN stack, 
                with a keen eye for crafting engaging and user-centric digital solutions. I believe that 
                design is about more than just making things look pretty – it&apos;s about solving problems 
                and creating intuitive, enjoyable experiences for users</p>
                <p className='my-4 font-medium'>Whether I&apos;m working on a website, mobile app, or other 
                digital product, I bring my commitment to design excellence and user-centered thinking 
                to every project I work on. With a year of hands-on experience, I&apos;m driven to fuse creativity 
                and functionality to actualize my clients&apos; visions in innovative ways.</p>
                <p className='font-medium'>I look forward to the opportunity to bring my skills and passion 
                to your next project. Let&apos;s collaborate to create something exceptional that not only looks 
                great but also enriches user experiences.</p>

            </div>
            <div className='lg:col-span-1 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light sm:m-10 p-4
            '>
                <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                <Image src={profilePic} alt="profile pic" className='w-full h-auto rounded-xl' />
            </div>
            <div className='lg:col-span-1 flex sm:flex-row lg:flex-col items-end justify-between ml-10 lg:pr-10'>
                <div className='flex flex-col lg:items-end justify-center'>
                    <span className='inline-block sm:text-5xl lg:text-7xl font-bold'>
                        5+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Satisfied clients</h2>
                </div>
                <div className='flex flex-col lg:items-end justify-center'>
                    <span className='inline-block sm:text-5xl lg:text-7xl font-bold'>
                        5+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Projects completed</h2>
                </div>
                <div className='flex flex-col lg:items-end justify-center'>
                    <span className='inline-block sm:text-5xl lg:text-7xl font-bold'>
                        1+
                    </span>
                    <h2 className='text-xl font-medium capitalize text-dark/75'>Years of experience</h2>
                </div>
            </div>
        </div>
        <Skills/>
        <Experience/>
        <Education/>
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

export default About;