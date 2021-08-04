import Head from "next/head";
import { useState } from "react";
import PlatformSolutionBox from "../components/Home/PlatformSolutionBox";
import Layout from "../components/Layout";

const MailManagement = () => {
  const [supplyChain, setSupplyChain] = useState([
    {
      name: "Ware Housing & Distribution",
      img: "/Home/supplyChain/warehousing.svg",
      link: "",
    },
    { name: "Ecom Solutions", img: "/Home/supplyChain/ecom.svg", link: "" },
    { name: "PackNGo", img: "/Home/supplyChain/packNGo.svg", link: "" },
    {
      name: "TCS Cool Control",
      img: "/Home/supplyChain/tcsCoolControl.svg",
      link: "",
    },
    { name: "TCS Hazir", img: "/Home/supplyChain/tcsHazir.svg", link: "" },
    { name: "TCS Fresh", img: "/Home/supplyChain/tcsFresh.svg", link: "" },
    { name: "TCS Cares", img: "/Home/supplyChain/tcsCares.svg", link: "" },
    { name: "TCS Fashion", img: "/Home/supplyChain/tcsFashion.svg", link: "" },
    { name: "TCS Air", img: "/Home/supplyChain/tcsAir.svg", link: "" },
    {
      name: "Mail Management Solutions",
      img: "/Home/supplyChain/mail.svg",
      link: "/mail-management",
    },
  ]);

  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Mail Management Services</h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <p>
            TCS offers a complete printing solution from data receiving, to
            designing and formatting as per the customers’ requirement.
          </p>
          <p>
            TCS MMS business (Mail Management Solution) and MPS (Managed Print
            Solution) comprises of 2 main businesses: print and bulk
            distribution.
          </p>
          <p>
            TCS is proud to be Pakistan’s fastest digital transactional printing
            facility – having one facility in Karachi and the other in Lahore.
            Along with printing, TCS offers automated stuffing and insertion
            facility. Mail Management Solution is Pakistan’s fastest Digital
            Production Printing Facility in Karachi and Lahore with a capacity
            to print more than 2.0 million impressions and 600,000 stuffing of
            envelopes per day. The printing facility also allows duplex printing
            - enabling quick and effective printing on both sides of the paper,
            effectively reducing costs.
          </p>
          <p>
            With digitized optical mark readers, stuffing machines simplify the
            entire printing process, resulting in maximum efficiency and
            quantity. This technology enables TCS to print any sort of document,
            irrespective of the requirement. The TCS Printshop facility in
            Karachi is ISO 9001:2008 & ISO 27001:2005 certified and the TCS
            Printshop facility in Lahore is ISO 9001:2008 certified.
          </p>
        </div>
        <div className="bg-[#f6f6f6] flex flex-col justify-center items-center p-[3rem]">
          <h1 className="text-[24px] font-bold">
            The complete service portfolio includes:
          </h1>
          <div className="flex justify-center items-center gap-[2rem] mt-8">
            <img
              src="/portfolio.png"
              alt=""
              className="object-contain h-[16rem]"
            />
            <ul className="list-disc">
              <li>Digital Printing</li>
              <li>Normal Bulk Shipment Distribution Services</li>
              <li>Automatic Stuffing</li>
              <li>Mail Room Management</li>
              <li>Bulk Mail Project Management</li>
              <li>Delivery</li>
              <li>Customized Solutions</li>
              <li>Confirmation Circulars Delivery Service</li>
              <li>CNIC Expiry Info Circular</li>
              <li>Debit/Credit Card (CNIC) Delivery Service</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-[5rem] bg-[#fcfcfc]">
          <h1 className="text-[24px] font-bold">Supply Chain Solutions</h1>
          <PlatformSolutionBox items={supplyChain} />
        </div>
      </Layout>
    </div>
  );
};

export default MailManagement;
