import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const Freight = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Freight</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            As one of the largest and fastest growing supply chain organizations
            in Pakistan, TCS has worked extremely hard to develop the
            capabilities that would allow us to take care of your international
            air freight across the world! This process involved developing
            significant relationships with airline partners around the globe to
            ensure you, our valued customers, get the best air freight
            transportation solutions possible.
          </p>
          <p>
            We only work with carefully selected carriers and operators, with
            schedules that provide access to almost all the world’s major
            routes, so you can plan with the utmost certainty and maximize
            efficiency.
          </p>
          <p>
            We offer a range of highly flexible services which allow you to
            choose the speed and manner of delivery that best suits your needs!
          </p>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Freight;
