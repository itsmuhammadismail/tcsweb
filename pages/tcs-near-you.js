import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import Map from "../components/Map";

const TCSNearYou = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex flex-col justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">TCS Near You</h1>
          <p className="text-[1.05rem] mt-[-5px]">
            Find Your Nearest Express Center
          </p>
        </div>
        <Map />
        <div className="lg:container mx-auto flex flex-col justify-center items-center py-[5rem]">
          <h1 className="font-bold text-3xl text-[#373737]">
            Find us in these cities
          </h1>
          <hr className="hr" />

          <div className="mt-4 flex flex-wrap justify-center items-center gap-4">
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Karachi.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Karachi
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Lahore.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Lahore
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Islamabad.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Islamabad
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Faisalabad.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Faisalabad
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Rawalpindi.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Rawalpindi
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Multan.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Multan
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Peshawar.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Peshawar
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Quetta.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Quetta
              </p>
            </div>
            <div className="relative flex justify-center items-center max-w-[20rem]">
              <img src="/cities/Gujranwala.png" alt="" />
              <p className="absolute bottom-4 text-white font-semibold text-xl">
                Gujranwala
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default TCSNearYou;
