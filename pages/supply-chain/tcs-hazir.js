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
            TCS Hazir is a time choice delivery service available only for cash
            paying customers in Ten Major Cities in Pakistan, with a money back
            guarantee in case of non-compliance! We provide our valued customers
            with this product 6 days a week, with the promise of delivery within
            your assigned time slot! For some additional charges, the delivery
            can also be made up to 60 Minutes ahead of schedule as per your
            instructions!
          </p>

          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Express;
