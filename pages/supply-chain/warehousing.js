import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const Warehousing = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Supply Chain Solutions</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
          TCS established its W&D segment in 2004 to expedite certain processes, undertake vertical integration and increase its range of services. Over the last decade and a half, we have accumulated a list of partners and customers that encompasses almost all business sectors. 
          </p>
          <p>
          With almost c.1,000,000 sq/ft of warehousing space across Pakistan, our W&D services go hand in hand with our already extensive delivery infrastructure which is why our clients have the distinct and unmistakable benefit of leveraging these facilities to meet their ever-changing needs including storage, short-haul, long-haul and multi-modal movements. Our extensive list of products and services includes: 
          </p>
          <ul className="list-disc list-inside">
              <li>Ambient & Temperature Sensitive Warehousing</li>
              <li>State of the Art Warehousing Management System (WMS)</li>
              <li>24/7 CCTV Surveillance </li>
              <li>Stock Management</li>
              <li>Inventory Track & Trace</li>
              <li>Reverse Logistics</li>
              <li>Last Mile Delivery</li>
              <li>Primary & Secondary Distribution</li>
              <li>Value-Added Services (Re-Packing & Other Facilities)</li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Warehousing;
