import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const TCSCoolCenter = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Express</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            TCS Cool Control is a truly unique temperature-controlled delivery
            service that allows for the transport of temperature sensitive
            products in a safe manner! Due to the complicated nature of these
            deliveries, we ensure that you stay worry free by providing you with
            around the clock satellite tracking! Customers can monitor their
            shipments through a tracking portal on the web or their mobile app.
          </p>
          <p>Key features include: </p>
          <ul className="list-disc list-inside">
            <li>Product Range</li>
            <li>Customer Care</li>
            <li>Full Spectrum Cold Chain Solution</li>
            <li>Emergency Preparedness</li>
            <li>Web Solutions</li>
            <li>Tracking</li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default TCSCoolCenter;
