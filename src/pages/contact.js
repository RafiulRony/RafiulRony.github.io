import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import InputArea from "@/components/form/InputArea";

const contact = () => {
  return (
    <>
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
        <div className='grid grid-cols-2'>
            <div className='col-span-1 text-center m-auto'>
              google-map.
            </div>
            <div className='col-span-1 p-0 items-start w-1/2'>
              <form className="my-8">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="mb-2">
                  Name
                </label>
                <input
                  className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800'
                  type="text"
                  id="name"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <input
                  className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800'
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="flex flex-col mb-4">
                {/* <label htmlFor="subject" className="mb-2">
                  Subject
                </label>
                <input
                  className='rounded-lg bg-gray-200 mt-2 p-2  focus:outline-blue-800'
                  type="text"
                  id="subject"
                  required
                /> */}
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
