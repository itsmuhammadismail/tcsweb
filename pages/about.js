import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const AboutTCS = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">About TCS</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <p>
          Founded in 1983 by Mr. Khalid Nawaz Awan, TCS is Pakistan’s largest logistics solutions expert. The ethos of this organization revolves around its customers and serving their needs to the best of its abilities through innovation, experience, and operational excellence.
          </p>
          <p>
          With approximately 1000 Express Centers in Pakistan and deliveries to almost 200 countries in the world, what started as a home-grown company built to serve the people of Pakistan has become a true global phenom. Our unrivalled reach, infrastructure and strategic partnerships with local and foreign stakeholders have allowed us to design solutions that specifically suit our customer’s needs.
          </p>
          <p>
          After years of research, growth, and expansion, TCS is fast becoming a one stop shop for a variety of solutions for all its customers, from corporations to individual consumers, E-Commerce to physical Express Centers, Logistics to Warehousing or gifting and travelling!
          </p>
          <p>It is our privilege to provide you with the level of service that has come to be associated with “TCS Kardo”.</p>
        </div>
      </Layout>
    </div>
  );
};

export default AboutTCS;
