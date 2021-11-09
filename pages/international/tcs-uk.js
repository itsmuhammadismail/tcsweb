import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const TCSUK = () => {
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
            Much like TCS worldwide, TCS UK acts as a hub of excellence and
            reach, allowing us to cater in the best way possible to our valued
            customers around the world. Be it the collection of shipments,
            tracking of parcels or their delivery at your doorstep, TCS does it
            all from the UK to all corners of the world.
          </p>
          <p>
            TCS International offers the following services to its customer:Not
            only do we consolidate your shipments, bypass distribution centers,
            and streamline customs clearance processes, we offer all that and
            much more for some of the lowest shipping rates available! When it
            comes to reliability and quality service provision, TCS UK is at the
            forefront of giving our customers the best experience.
          </p>
          <p>
            With years of experience, millions of deliveries and thousands of
            miles covered across the world, you can rest assured; your valuables
            are in the best of hands!{" "}
          </p>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default TCSUK;
