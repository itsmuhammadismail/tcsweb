import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const TravelAndTour = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Travel and Tour</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            Intiana Travel and Tours, a division of TCS (Pvt) Limited, commenced
            its operations in May 2004 along with TCS Visatronix. Together, they
            have allowed us to uplift Pakistan’s dormant travel and tour
            industry by providing our customers easy access and enhanced
            experiences! TCS Travel provides specialized services in:
          </p>
          <ul className="list-disc list-inside">
            <li>
              Online Travel Agency/ Air ticketing on all domestic and
              international carriers
            </li>
            <li>Hajj, Umrah & Ziarat Services</li>
            <li>Domestic and International packages </li>
            <li>Visa Facilitation</li>
            <li>Travel Insurance services</li>
            <li>Concierge services</li>
          </ul>
          <p>
            TCS Visatronix offers Visa Drop Box Services to travelers, students
            and non-immigrants while catering to diplomatic missions through 11
            dedicated visa centric offices in major cities of Pakistan. Years of
            expertise and the ability to process over 9,000 visa
            application/passports every month clearly speaks volumes of our
            ability to deliver quality and reliability to the following
            missions:
          </p>
          <ul className="list-disc list-inside">
            <li>Embassy of Spain (Short term with biometrics and long term)</li>
            <li>Malaysian Consulate – Karachi</li>
            <li>Embassy of Brazil </li>
            <li>Embassy of Egypt (Exclusive)</li>
            <li>Embassy of Tunisia</li>
            <li>Philippines Consulate – Karachi & Lahore</li>
            <li>High Commission of India</li>
            <li>Embassy of Indonesia</li>
            <li>Saudi Arabia - Special Visa services (Umrah only)</li>
            <li>Document attestation services for UAE</li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default TravelAndTour;
