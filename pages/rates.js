import Head from "next/head";
import { useEffect, useState } from "react";
import MaterialTable from "../components/Home/MaterialTable";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import getRateTeriff from "../apis/getRateTeriff";

const Rates = () => {
  const router = useRouter();
  const { origin, destination, weight, date, postalCode } = router.query;
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

  const [tariffs, setTariffs] = useState(null);
  const [transits, setTransits] = useState(null);

  useEffect(async () => {
    console.log("origin is ", origin);
    const res = await getRateTeriff(
      origin,
      destination,
      weight,
      date,
      postalCode
    );
    if (res["IsSuccess"] === true) {
      setTariffs(res["Data"][0]["tariffs"]);
      setTransits(res["Data"][0]["transits"]);
    }
    console.log(res);
  }, [origin, destination, weight, date, postalCode]);

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
                {tariffs &&
                  tariffs.map((tariff) => (
                    <tr key={tariff.serviceCode}>
                      <td className="border p-2">{tariff.title}</td>
                      <td className="border p-2">{tariff.serviceCharges}</td>
                      <td className="border p-2">{tariff.gstRate}</td>
                      <td className="border p-2">{tariff.totalAmount}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {transits && transits.length !== 0 && (
              <>
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
                    {transits.map((transit) => (
                      <tr key={transit.serviceCode}>
                        <td className="border p-2">{transit.title}</td>
                        <td className="border p-2">{transit.transitDays}</td>
                        <td className="border p-2">{date}</td>
                        <td className="border p-2">
                          {transit.originDeparture}
                        </td>
                        <td className="border p-2">{transit.deliveryDate}</td>
                        <td className="border p-2">{transit.deliveryTime}</td>
                        <td className="border p-2">
                          {transit.deliveryTimeFrame}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Rates;
