import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const ExpressCenter = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Sentiments Express</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            TCS Sentiments Express was founded in 1989 as a pioneer in the
            Pakistani gifting industry. Through years of hard work, innovation,
            and growth, we are now bringing people together not only across
            Pakistan but also internationally in the United Kingdom, United
            States of America, United Arab Emirates, Canada, Germany, China,
            Australia, Sweden and Denmark.
          </p>
          <p>
            Buying gifts for your loved ones, friends, family, or even
            customizable corporate gifts has never been easier. You can visit
            our TCS Express Centers to place orders or visit{" "}
            <a
              href="https://sentimentsexpress.com/"
              rel="noreferrer"
              target="_blank"
            >
              https://sentimentsexpress.com/
            </a>{" "}
            to make purchases online.
          </p>
          <p>
            Enhancing your gifting experience is our ultimate objective, which
            is why we keep bringing new offerings, product categories and deals
            all year round, be it a national holiday, a private birthday, or a
            corporate event. In short, at Sentiments we take care of all your
            gifting needs!
          </p>
          <p>All international customers can make payments in their local currencies.</p>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default ExpressCenter;
