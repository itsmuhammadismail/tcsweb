import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const StudioByTCS = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Studio By TCS</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            Founded in 2017, Studio by TCS is the go-to destination for every
            fashion-forward South-Asian across the world. Studio by TCS
            showcases carefully curated collections from leading Pakistani
            designers featuring but not limited to:
          </p>
          <ul className="list-disc list-inside">
            <li>Casual Pret</li>
            <li>Luxury Pret</li>
            <li>Wedding Wear </li>
            <li>Men’s Wear</li>
            <li>Kid’s Wear </li>
            <li>Footwear </li>
            <li>Accessories. </li>
            
          </ul>
          <p>
            Easily one of the finest platforms available for home grown
            Pakistani designers, we use our Domestic and International reach to
            bring the world to you. Along with fast delivery options, Studio by
            TCS also offers extremely easy return and exchange policies to its
            discerning customers, who can also opt for Cash on Delivery (COD) in
            addition to multiple payment gateways, all designed to make your
            life much easier, and fashionable! For further details, please visit{" "}
            <a
              href="https://pk.studiobytcs.com/"
              rel="noreferrer"
              target="_blank"
            >
              https://pk.studiobytcs.com/
            </a>
          </p>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default StudioByTCS;
