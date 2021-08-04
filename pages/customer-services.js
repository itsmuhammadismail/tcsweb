import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import PhoneIcon from "@material-ui/icons/Phone";
import SimpleAccordion from "../components/Home/Accordian";

const CustomerServices = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex flex-col justify-center items-center h-[180px]">
          <h1 className="text-[40px] font-bold">Customer Services</h1>
          <p className="text-[1.05rem] mt-[-5px] max-w-[35rem] text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            excepturi minima et inventore necessitatibus veritatis.
          </p>
        </div>
        <div className="my-[3rem] flex gap-4 items-center justify-center text-center">
          <div className="bg-[#fbfbfb] flex flex-col gap-2 justify-center items-center w-[25rem] h-[15rem] p-4">
            <img src="/social/whatsappGreen.png" alt="" className="w-[5rem]" />
            <h2 className="font-bold text-xl">Chat with us on WhatsApp</h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <p className="font-semibold text-[#F21E26]">+92 21 111 123 456</p>
          </div>
          <div className="bg-[#fbfbfb] flex flex-col gap-2 justify-center items-center w-[25rem] h-[15rem] p-4">
            <img src="/social/socialMix.png" alt="" className="w-[5rem]" />
            <h2 className="font-bold text-xl">Social Media</h2>
            <p className="text-xs">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="flex gap-6">
              <img src="/social/fb2.png" alt="" className="h-[1.2rem]" />
              <img src="/social/twitter2.png" alt="" className="h-[1.2rem]" />
              <img src="/social/insta2.png" alt="" className="h-[1.2rem]" />
              <img src="/social/youtube.png" alt="" className="h-[1.2rem]" />
              <img src="/social/linkedin2.png" alt="" className="h-[1.2rem]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-[3rem]">
          <h1 className="font-bold text-4xl mb-[3rem]">Contact Us</h1>
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="border p-2 text-sm w-[25rem] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="border p-2 text-sm w-[25rem] focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Contact Number"
                className="border p-2 text-sm w-[25rem] focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-7">
              <textarea
                name=""
                id=""
                className="border p-2 text-sm w-[25rem] h-[7rem] focus:outline-none resize-none"
                placeholder="Your Message"
              ></textarea>
              <button className="text-sm bg-[#D40511] hover:bg-[#F21E26] text-white p-2 w-full md:w-[10rem] rounded-r-sm transition-all duration-500">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-[3rem] bg-[#FAFBFC] py-[4rem]">
          <h1 className="font-bold text-4xl mb-[3rem]">
            Frequently Asked Questions
          </h1>
          <div>
            <SimpleAccordion
              heading="What are the range of services and solutions provided by TCS"
              text="To view our range of services, click the Services and Solutions tab
            on top of the TCS homepage"
            />
            <SimpleAccordion
              heading="What are the range of services and solutions provided by TCS"
              text="To view our range of services, click the Services and Solutions tab
            on top of the TCS homepage"
            />
            <SimpleAccordion
              heading="What are the range of services and solutions provided by TCS"
              text="To view our range of services, click the Services and Solutions tab
            on top of the TCS homepage"
            />
          </div>
          <button className="text-sm bg-[#D40511] hover:bg-[#F21E26] text-white p-2 w-full md:w-[10rem] rounded-r-sm transition-all duration-500 mt-8">
            More FAQs
          </button>
        </div>
      </Layout>
    </div>
  );
};

export default CustomerServices;
