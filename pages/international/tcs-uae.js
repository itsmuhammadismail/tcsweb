import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const TCSUAE = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">TCS UAE</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            As is the case in Pakistan, TCS UAE is one of the most trusted and
            high-quality service providers in the UAE and it’s adjoining states,
            with an extensive network and almost four decades of experience! Our
            extensive list of products and services include:
          </p>

          <ul className="list-disc list-inside">
            <li>Overnight Delivery</li>
            <li>Same Day Delivery</li>
            <li>Cheque Collection Services (for businesses)</li>
            <li>E-Commerce and Cash On Delivery services.</li>
            <li>Non-Resident Pakistani/UAE Based Pakistani Facilitation at the Pakistani Consulate & Embassy</li>
            <li>International Express Worldwide</li>
            <li>Express Road GCC (Swift Trucking Services)</li>
            <li>Air & Sea Freight</li>
            <li>Customs Brokerage Services </li>
            <li>Warehousing</li>
            <li>Sentiments Express</li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default TCSUAE;
