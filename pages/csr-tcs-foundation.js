import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const CSRTCSFoundation = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">CSR / TCS Foundation</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <p>
            As one of the largest organizations in the country, TCS is aware of
            the responsibility that rests on its shoulders when it comes to
            giving back to society. In fact, helping the less fortunate is one
            of the founding pillars of this organization. Over the years, we
            have worked on building systems and programs that allow us to do
            good in society and provide some assistance to the less fortunate.
          </p>
          
        </div>
      </Layout>
    </div>
  );
};

export default CSRTCSFoundation;
