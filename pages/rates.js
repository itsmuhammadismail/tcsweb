import Head from "next/head";
import { useState } from "react";
import MaterialTable from "../components/Home/MaterialTable";
import Layout from "../components/Layout";

const Rates = () => {
  const [ratesTop, setRatesTop] = useState([
    "Service",
    "Service Charges",
    "GST Rate",
    "Amount (Rs)",
  ]);
  const [rates, setRates] = useState([
    ["Red Box 2kg", "440", "70", "510"],
    ["Red Box 2kg", "440", "70", "510"],
    ["Red Box 2kg", "440", "70", "510"],
    ["Red Box 2kg", "440", "70", "510"],
    ["Red Box 2kg", "440", "70", "510"],
  ]);

  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex flex-col justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">TCS Kardo</h1>
          <p className="text-[1.05rem] mt-[-5px]">
            Please tell us more about yourself
          </p>
        </div>
        <div className=" flex justify-center items-center my-[3rem]">
          <div className="w-[60rem] flex flex-col justify-center  ">
            <h1 className="text-3xl font-bold mb-3 ml-4">Rates</h1>
            <MaterialTable top={ratesTop} data={rates} />
            <h1 className="text-3xl font-bold mt-8 mb-3 ml-4">Transit</h1>
            <MaterialTable top={ratesTop} data={rates} />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Rates;
