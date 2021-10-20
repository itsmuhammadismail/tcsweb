import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const DayInTheLifeOfTCS = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Day in the Life of TCS</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <p>
          At TCS, we don’t operate like your regulation workplace. This is a haven for likeminded individuals that are driven by their passion for the pursuit of excellence, both individual and collective. As one of the largest organizations in the country, our offices span the length and breadth of Pakistan but every single office, express center or warehouse has the same ethos; brilliance through innovation.
          </p>
          <p>
          The TCS Family provides and open, free space for you to explore new possibilities and create ideas from scratch, without limitations or fear of failure. It gives you freedom to express yourself creatively and to be part of teams that are fast paced, driven and always thinking outside the box. Truth be told, there is no one distinct day in the life of a TCS employee.
          </p>
          <p>
          Every day is a new experience!
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default DayInTheLifeOfTCS;
