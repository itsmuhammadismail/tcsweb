import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const PackNGo = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Pack N Go</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            Moving offices or shifting homes anywhere in Pakistan or anywhere
            around the world has always been a tiresome task! What we all need
            then, it seems like, is a reliable and end to end solution for all
            our moving needs! Well, wait no more! In keeping with its penchant
            for innovation and creating customized solutions for the people, TCS
            has now created PACK ‘n’ GO to cater to all your personal and
            professional moving needs!
          </p>
          <p>
            Customized solutions, high quality packaging materials and trained
            packaging, shifting and transportation professionals help us ensure
            your belongings have the safest journey from the point of origin to
            their destination!
          </p>
          <p>
            For further details regarding all our Pack’n’Go services, please
            click on the button below:
          </p>
          <ul className="list-disc list-inside">
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

export default PackNGo;
