import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const Express = () => {
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
          Courier services across the globe are continuously innovating in terms of their offerings to provide their customers with brand new solutions to constantly evolving problems. With the passage of time, TCS has come to being recognized as a pioneering organization, one that develops new and effective ways to serve its ever-growing customer base!
          </p>
          <p>TCS Fresh is one of our latest creations, an initiative borne out of necessity and our valued customers’ demands. Gone are the days when you would have to stop at multiple fruit vendors and haggle for price and wonder about the quality and sourcing of your produce! You can now get high quality and competitively priced fresh produce at your doorstep.</p>
          <p>Our longstanding presence in the logistics industry and penetration in all four corners of Pakistan has enabled us to put our expertise and infrastructure to good use by cutting out all the middlemen and ensuring you get what you deserve, when you deserve it and, how you deserve it! </p>

          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Express;
