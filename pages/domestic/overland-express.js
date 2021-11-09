import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const OverlandExpress = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Overland Express</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            Not only do we provide everyday consumers with the best delivery
            solutions in the country, TCS also helps with the movement of
            heavy-weight or large-volume shipments for both individual customers
            and individual clients. Our expansive network allows us to provide
            highly economical and reliable road transportation to one and all.
            In fact, TCS is the number one choice for several private and public
            sector organizations including but not limited to the Pharmaceutical
            Sector, Banking Sector, Major Printing Houses, Automotive Sector and
            Telecom Sector. Our extensive list of products and services
            includes:
          </p>
          <ul className="list-disc list-inside">
            <li>LCL (Less Than Container Load)</li>
            <li>FCL (Full Container Load)</li>
            <li>Temperature Controlled Transportation</li>
            <li>Door to Door Delivery</li>
            <li>Hub to Door Delivery</li>
            <li>Customize Project</li>
            <li>Trade Express</li>
            <li>Telecom industry</li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default OverlandExpress;
