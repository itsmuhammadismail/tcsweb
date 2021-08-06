import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const TCSKardo = () => {
  const [customer, setCustomer] = useState("");
  const [shipping, setShipping] = useState("");

  const [productType, setProductType] = useState({
    "Courier Express": [
      "Overnight",
      "Economy 2nd Day Express – For more than 5 Kg parcels",
      "Overland Cargo For bulk parcels",
      "Int’l Courier",
      "Air Freight",
      "Air Cargo Airport To Airport",
    ],
    "E-Commerce Solutions": [
      "COD Express",
      "COD Overland",
      "Fulfillment Solution",
    ],
    "Sentiments Express": ["Gift Delivery"],
    "Supply Chain Solutions": [],
    "Warehousing & Transportation": ["Cold Chain", "Ambient"],
    "Digital Transactional Printing": [],
    "Bulk Distribution": [],
  });

  const [productDropdown, setProductDropdown] = useState(
    Object.keys(productType)
  );

  const [product2Dropdown, setProduct2Dropdown] = useState([]);

  const handleProduct = (e) => {
    e.target.value === "0"
      ? setProduct2Dropdown([])
      : setProduct2Dropdown(productType[e.target.value]);
  };

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
        <div className="my-[3rem]">
          <div className="flex flex-col justify-center items-center">
            <p>I am a</p>
            <div className="flex gap-4 my-4">
              <button
                onClick={() => setCustomer("new")}
                className="shadow-my-lg text-sm w-[22rem] h-[3rem] hover:bg-[#F21E26] hover:text-white rounded-md transition-all duration-500"
              >
                New Customer
              </button>
              <button
                onClick={() => setCustomer("existing")}
                className="shadow-my-lg text-sm w-[22rem] h-[3rem] hover:bg-[#F21E26] hover:text-white rounded-md transition-all duration-500"
              >
                Existing Customer
              </button>
            </div>
          </div>
          {customer == "new" && (
            <div className="flex flex-col justify-center items-center ">
              <p>Single Shipment or Regular Shipping?</p>
              <div className="flex gap-4 my-4">
                <div className="flex flex-col gap-1 p-4 shadow-my-lg text-sm w-[22rem] h-[7.5rem]  rounded-md transition-all duration-500">
                  <h2 className="font-bold text-[1.1rem]">Single Shipment</h2>
                  <p>One Origin & Destination</p>
                  <button
                    onClick={() => setShipping("single")}
                    className="text-[#F21E26] border border-[#F21E26] w-full rounded-sm mt-1 p-1 text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500"
                  >
                    Get a Quote
                  </button>
                </div>
                <div className="flex flex-col gap-1 p-4 shadow-my-lg text-sm w-[22rem] h-[7.5rem]  rounded-md transition-all duration-500">
                  <h2 className="font-bold text-[1.1rem]">Regular Shipping</h2>
                  <p>Including Multiple Origins & Destinations</p>
                  <button
                    onClick={() => setShipping("regular")}
                    className="text-white bg-[#D40511] border border-[#F21E26] w-full rounded-sm mt-1 p-1 text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500"
                  >
                    Open an Account
                  </button>
                </div>
              </div>
            </div>
          )}
          {shipping == "single" && (
            <div className="flex flex-col justify-center items-center mt-[1rem]">
              <div className="flex flex-col gap-1 p-4 shadow-my-lg text-sm w-[45rem] rounded-md transition-all duration-500">
                <h2 className="font-bold text-[1.1rem]">Get a Quote</h2>
                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="">Origin</label>
                    <select
                      name=""
                      id=""
                      className="border p-2 focus:outline-none"
                    >
                      <option value="">Adda Zakheera</option>
                      <option value="">Karachi</option>
                    </select>
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="">Destination</label>
                    <select
                      name=""
                      id=""
                      className="border p-2 focus:outline-none"
                    >
                      <option value="">Abbotabad</option>
                      <option value="">Karachi</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="">Weight</label>
                    <input
                      type="text"
                      className="border p-2 focus:outline-none"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <label htmlFor="">Date</label>
                    <input
                      type="date"
                      className="border p-2 focus:outline-none"
                    />
                  </div>
                </div>
                <Link href="/rates">
                  <a>
                    <button className="text-white bg-[#D40511] border border-[#F21E26] w-full rounded-sm mt-1 p-1 text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
                      Check Rates
                    </button>
                  </a>
                </Link>
              </div>
            </div>
          )}
          {shipping == "regular" && (
            <div className="flex flex-col justify-center items-center mt-[1rem] ">
              <div className="flex flex-col gap-3 p-4 shadow-my-lg text-sm w-[45rem] rounded-md transition-all duration-500">
                <h2 className="font-bold text-[1.1rem]">
                  Please Select a Product Type
                </h2>
                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col">
                    <select
                      name=""
                      id=""
                      className="border p-2 focus:outline-none"
                      onChange={handleProduct}
                    >
                      <option value="0">Select a Product</option>
                      {productDropdown.map((product, index) => (
                        <option key={index} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col">
                    {product2Dropdown.length !== 0 && (
                      <select
                        name=""
                        id=""
                        className="border p-2 focus:outline-none"
                      >
                        {product2Dropdown.map((product, index) => (
                          <option key={index} value={product}>
                            {product}
                          </option>
                        ))}
                      </select>
                    )}
                  </div>
                </div>

                <button className="text-white bg-[#D40511] border border-[#F21E26] w-full rounded-sm mt-1 p-1 text-sm hover:bg-[#F21E26] hover:text-white transition-all duration-500">
                  Open an Account
                </button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default TCSKardo;
