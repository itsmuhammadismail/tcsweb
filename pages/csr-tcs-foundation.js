import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";

const CSRTCSFoundation = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">CSR / TCS Foundation</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            unde maxime reprehenderit, provident, aut sint fuga nisi aliquam
            nesciunt, facere repellat natus officiis mollitia laboriosam amet
            perspiciatis iste alias! Vel reiciendis quasi quisquam similique
            minus impedit, eum non pariatur, incidunt earum quos laborum
            aspernatur minima illum. Deleniti delectus iure esse.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            unde maxime reprehenderit, provident, aut sint fuga nisi aliquam
            nesciunt, facere repellat natus officiis mollitia laboriosam amet
            perspiciatis iste alias! Vel reiciendis quasi
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            unde maxime reprehenderit, provident, aut sint fuga nisi aliquam
            nesciunt, facere repellat natus officiis mollitia laboriosam amet
            perspiciatis iste alias! Vel reiciendis quasi quisquam similique
            minus impedit, eum non pariatur, incidunt earum quos laborum
            aspernatur minima illum. Deleniti delectus iure esse. Vel reiciendis
            quasi quisquam similique minus impedit, eum non pariatur, incidunt
            earum quos laborum aspernatur minima illum. Deleniti delectus iure
            esse.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default CSRTCSFoundation;
