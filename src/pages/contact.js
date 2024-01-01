import Layout from "@/components/Layout";
import React, { useEffect } from "react";
import Link from "next/link";
import InputArea from "@/components/form/InputArea";
import MapLocation from "@/components/MapLocation";
import Head from "next/head";
import useContact from "@/hooks/useContact";
import InputTextArea from "@/components/form/inputTextArea";
import emailjs from '@emailjs/browser';
import Script from 'next/script';

const Contact = () => {
  const { register, handleSubmit, onsubmit, errors} = useContact();
  console.log(errors);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-3H7JM8VK2E');
  }, []);

  return (
    <>
      <Head>
        <title>Rafiul | Contact Page</title>
      </Head>
      <Layout>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-3xl font-bold'>Contact with Me</h2>
          <div className="border-b-2 border-black w-80"></div>
          <p className="my-4 text-lg mt-0">
            If you have any queries, feel free to reach me at &nbsp; 
            <a
                href="mailto:rafiulrony.cse001@gmail.com"
                target={"_blank"}
                className='text-blue-700'
            >
              rafiulrony.cse001@gmail.com
            </a>
          </p>
        </div>
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
            <div className='col-span-1 text-center m-auto'>
              <MapLocation/>
            </div>
            <div className='col-span-1 p-0 items-start lg:w-1/2'>
              <form className="my-8" onSubmit={handleSubmit(onsubmit)}>
             
              <div className="flex flex-col mb-4">

              <InputArea
                label={"Name"}
                id={"name"}
                type="text" 
                register={register("name", { required: 'Name is required' })}
              />
              <InputArea
                label={"Email Address"}
                id={"email"}
                type="email" 
                register={register("email", { required: 'email is required' })}
              />
              <InputArea
                label={"Phone"}
                id={"phone"}
                type="text" 
                register={register("phone", { required: 'phone is required' })}
              />

              <InputTextArea
                label = {"Message"}
                id = {"message"}
                register={register("message", {required: 'message is required'})}
              />
              <input type="submit"
              value='send'
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              />

              </div>
              </form>
            </div>
        </div>
        </div>      </Layout>
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

export default Contact;
