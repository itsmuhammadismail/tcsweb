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
            <h1 className="text-3xl font-bold mb-3 ">Rates</h1>
            <table className="mt-6">
              <thead>
                <tr className="text-left bg-gray-100">
                  <th className="border p-2">Service</th>
                  <th className="border p-2">Service Charges</th>
                  <th className="border p-2">GST Rate</th>
                  <th className="border p-2">Amount (Rs)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Red Box 2kg</td>
                  <td className="border p-2">440</td>
                  <td className="border p-2">70</td>
                  <td className="border p-2">510</td>
                </tr>
                <tr>
                  <td className="border p-2">Red Box 5kg</td>
                  <td className="border p-2">862</td>
                  <td className="border p-2">138</td>
                  <td className="border p-2">1000</td>
                </tr>
                <tr>
                  <td className="border p-2">Express Delivery</td>
                  <td className="border p-2">500</td>
                  <td className="border p-2">80</td>
                  <td className="border p-2">580</td>
                </tr>
                <tr>
                  <td className="border p-2">Economy 2kg</td>
                  <td className="border p-2">310</td>
                  <td className="border p-2">50</td>
                  <td className="border p-2">360</td>
                </tr>
                <tr>
                  <td className="border p-2">Economy 5kg</td>
                  <td className="border p-2">690</td>
                  <td className="border p-2">110</td>
                  <td className="border p-2">800</td>
                </tr>
              </tbody>
            </table>
            <h1 className="text-3xl font-bold mt-8 mb-3 ">Transit</h1>
            <table className="mt-6">
              <thead>
                <tr className="text-left bg-gray-100">
                  <th className="border p-2">Service</th>
                  <th className="border p-2">Transit Days</th>
                  <th className="border p-2">Pickup Date</th>
                  <th className="border p-2">Pickup Time</th>
                  <th className="border p-2">Arrival Date</th>
                  <th className="border p-2">Arrival Time</th>
                  <th className="border p-2">Delivery Time Frame</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Express Delivery</td>
                  <td className="border p-2">3</td>
                  <td className="border p-2">17/08/2021</td>
                  <td className="border p-2">08:55 PM</td>
                  <td className="border p-2">20/08/2021</td>
                  <td className="border p-2">11:20 AM</td>
                  <td className="border p-2">11:20:00 AM - 03:20:00 PM</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Rates;
