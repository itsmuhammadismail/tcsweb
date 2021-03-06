import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import PhoneIcon from "@material-ui/icons/Phone";
import SimpleAccordion from "../components/Home/Accordian";
import { TextField } from "@material-ui/core";

const CustomerServices = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex flex-col justify-center items-center min-h-[180px] py-[2rem]">
          <h1 className="text-[40px] font-bold">Customer Services</h1>
          <p className="text-[1.05rem] mt-[-5px] max-w-[45rem] text-center">
          As an organization that interacts with its esteemed customers directly and on a regular basis, TCS strives daily to better it’s services and to better understand your needs. Our extensive Call Centre network, highly motivated Social Media Teams and Whatsapp response systems have all been created to listen to your queries, inputs, and complaints so we can serve you better.
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
              <img src="/social/fb2.png" alt="" className="h-[1.2rem] social" />
              <img
                src="/social/twitter2.png"
                alt=""
                className="h-[1.2rem] social"
              />
              <img
                src="/social/insta2.png"
                alt=""
                className="h-[1.2rem] social"
              />
              <img
                src="/social/youtube.png"
                alt=""
                className="h-[1.2rem] social"
              />
              <img
                src="/social/linkedin2.png"
                alt=""
                className="h-[1.2rem] social"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-[3rem]">
          <h1 className="font-bold text-4xl mb-[3rem]">Contact Us</h1>
          <div className="flex gap-4 ">
            <div className="flex flex-col gap-4">
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                className="w-[25rem]"
              />
              <TextField
                required
                id="outlined-required"
                label="Your Email"
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                className="w-[25rem]"
              />
              <TextField
                required
                id="outlined-required"
                label="Your Contact Number"
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 14 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                className="w-[25rem]"
              />
            </div>
            <div className="flex flex-col gap-4">
              <TextField
                multiline
                id="outlined-required"
                label="Your Message"
                variant="outlined"
                size="small"
                inputProps={{ style: { fontSize: 14, height: "4.3rem" } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 14 } }} // font size of input label
                className="w-[25rem]"
              />
              <button className="text-white bg-[#D40511] h-[2.5rem] border border-[#F21E26] w-full rounded-md  p-1 text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-[6rem] bg-[#FAFBFC] py-[6rem]">
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
