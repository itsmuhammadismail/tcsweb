import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const Career = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Careers</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <h2 className="font-bold text-[1.5rem]">Why TCS</h2>
          <p>
            The TCS Family provides and open, free space for you to explore new
            possibilities and create ideas from scratch, without limitations or
            fear of failure. It gives you freedom to express yourself creatively
            and to be part of teams that are fast paced, driven and always
            thinking outside the box. So, if you’re looking for an environment
            that allows you to grow personally and professionally without the
            shackles of convention, pop over and see if you’re the right fit for
            us!
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Career;
