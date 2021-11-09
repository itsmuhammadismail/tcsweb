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
            TCS International Express connects Pakistanis to businesses and
            individuals around the world! Delivering to over 220 destinations
            worldwide, we provide fast, secure, and reliable service to our
            valued customers, not just through our own extensive network but
            also by partnering with leading global express service providers.
            Our network, expertise, constant innovation, and strategic
            partnerships also allow us to give you the best rates as our top
            priority is to make your life easier!
          </p>
          <p>
            TCS International offers the following services to its customer:
          </p>
          <ul className="list-disc list-inside">
            <li>TCS Export service for document and parcel worldwide</li>
            <li>TCS Import service for document and parcel worldwide </li>
          </ul>
          <p>TCS International is also offering the following promotional services</p>
          <ul className="list-disc list-inside">
            <li>TCS Redbox with multiple weight breaks</li>
            <li>Student Express</li>
            <li>Mango Delivery Service</li>
            <li>Attestation service</li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Express;
