import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

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
          <h1 className="text-[40px] font-bold">
            E-Com Solutions
          </h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            In recent years, the Pakistani startup market has seen a surge and
            boom like never before, with over a $100 Million dollars raised in
            series A and B funding, just in 2021. It seems then, that the rest
            of the country is finally starting to catch up with us, eh? With
            over 20 Million Shipments delivered, 480+ locations reached and
            currently serving over 850 different clients/customers, TCS
            E-Commerce Solutions provides the perfect one stop shop for
            up-and-coming E-Retailers and businesses that require a quick,
            hassle free and secure flow of goods and information between
            themselves and their customers!
          </p>
          <p>Our complete range of products and services includes:</p>
          <ul className="list-disc list-inside">
            <li>Updated Shipment Tracking</li>
            <li>Seamless Last Mile Deliveries</li>
            <li>Prompt Email/SMS Alerts</li>
            <li>Easy Transfer of Funds</li>
            <li>Convenient Return Solutions</li>
          </ul>
          <p>
            If you want to create an account or require more information about
            the services we offer, please click on the links given below:
          </p>
          <ul className="list-disc list-inside">
            <li className="hover:text-[#F21E26]">
              <Link href="/ecom">
                <a>Create Account</a>
              </Link>
            </li>
            <li className="hover:text-[#F21E26]">
              <a href="/ECOM_Flyer_A4_New_KV.pdf" target="_blank">
                Download Brochure
              </a>
            </li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default Express;
