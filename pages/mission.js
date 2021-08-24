import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const Mission = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Mission & Core Values</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <h1 className="text-[24px] font-bold">Mission Statement</h1>
          <p>
            Our most precious asset – the term ‘TCS KARDO’ has been gifted to us
            by the people of Pakistan as an expression of their affection and
            TRUST.
          </p>
          <p>
            It is by delivering on this trust every single day, come rain or
            shine, over the past four decades that we have become the country’s
            logistics backbone delivering an array of services to businesses and
            consumers alike.
          </p>
          <p>
            We now pledge to add greater value to our services through a blend
            of passion and new technologies aimed at enhancing productivity of
            our clients, whilst simplifying and enriching everyday lives of our
            consumers.
          </p>
          <p>
            Additionally, we will extend our Air and Ground Logistics Services
            beyond borders opening new trade routes shaped by the emerging
            regional opportunities, to the benefit of Pakistan.
          </p>
        </div>
        <div className="bg-[#f6f6f6] flex flex-col justify-center items-center p-[3rem]">
          <h1 className="text-[24px] font-bold">Our Core Values</h1>
          <div className="flex justify-center items-center gap-[2rem] mt-8">
            <img
              src="/core-values.png"
              alt=""
              className="object-contain h-[27rem]"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Mission;
