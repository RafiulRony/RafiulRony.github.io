import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import InputArea from "@/components/form/InputArea";
import MapLocation from "@/components/MapLocation";
import Head from "next/head";


const contact = () => {
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
              GoogleMap.
            </div>
            <div className='col-span-1 p-0 items-start lg:w-1/2'>
              <form className="my-8">
             
              <div className="flex flex-col mb-4">
              <InputArea 
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                label={"Name"}
                id={"name"}
                type="email"
                />

                <InputArea 
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                label={"Email"}
                id={"email"}
                type="email"
                />

                <InputArea 
                onChange={(e) => {
                  console.log(e.target.value);
                }}
                label={"Subject"}
                id={"subject"}
                type="text"
                />
                
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="body" className="mb-2">
                  Message
                </label>
                <textarea
                  className="rounded-md py-2 px-3 bg-gray-200 focus:outline-blue-800"
                  id="body"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
                >
                Send
              </button>
              </form>
            </div>
        </div>
        </div>  
      </Layout>
    </>
  );
};

export default contact;
