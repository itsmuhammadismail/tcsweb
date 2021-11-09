import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const SupplyChain = () => {
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
            With Pakistan’s largest retail network, TCS Express Delivery offers
            a comprehensive list of services that caters to all your needs.
            Whatever your domestic delivery needs might be, the safest, farthest
            reaching, and most cost-effective solutions can all be found right
            here! Our extensive list of products and services includes:
          </p>
          <ul className="list-disc list-inside">
              <li>Time Choice Delivery</li>
              <li>Same Day Express</li>
              <li>Overnight Express</li>
              <li>Second Day Service</li>
              <li>Special Handling Flyer Express</li>
              <li>Cash on Delivery</li>
              <li>Red Box</li>
              <li>Special Projects Delivery</li>
              <li>Fragile Shipments</li>
              <li>Mehfooz</li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default SupplyChain;
