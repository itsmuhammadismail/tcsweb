import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const RegionalTrucking = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Regional Trucking (TIR)</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            The TIR (Transports Internationaux Routiers) is a Customs Convention
            that facilitates the international carriage of goods amongst
            contracting parties under an international guaranteeing chain
            managed by the IRU (International Road Union). The TIR Convention
            was signed in 1975 under the auspices of the United Nations Economic
            Commission for Europe (UNECE). Pakistan acceded to the TIR
            Convention on July 24, 2015 and was declared as a ‘TIR operational
            country’ by the IRU on April 19, 2018. It is widely used for the
            international transit of goods in Europe, Middle East, and Asia and
            is being rapidly adopted in Afghanistan and neighboring states,
            which are all contracting parties to the Convention.
          </p>
          <p>
            We only work with carefully selected carriers and operators, with
            schedules that provide access to almost all the world’s major
            routes, so you can plan with the utmost certainty and maximize
            efficiency.
          </p>
          <p>
            We offer a range of highly flexible services which allow you to
            choose the speed and manner of delivery that best suits your needs!
          </p>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default RegionalTrucking;
