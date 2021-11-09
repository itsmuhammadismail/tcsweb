import Head from "next/head";
import { useState } from "react";
import Layout from "../../components/Layout";

const FinancialServices = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Financial Services</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto  p-[3rem]">
          <p>
            We continue to innovate and develop new ways to our customers, and
            one of the most common queries we receive repeatedly is the
            provision of financial services. Our reach includes people and
            businesses from all walks of life and at various points of using our
            services, they require assistance with varied economical solutions.
          </p>
          <p>
            Thus, TCS Financial Services Pvt. Ltd was born as an intermediary
            company to provide its customers with the right insurance solutions
            through strategic alliances with reputed insurance companies. The
            services we provide are as follows:
          </p>
          <p className="font-bold">
            TCS Care – in partnership with MicroEnsure
          </p>
          <p>
            MicroEnsure Pakistan Private Limited is a wholly owned subsidiary of
            MicroEnsure Holdings UK, which is a specialist provider of
            innovative mass market insurance solutions in Africa and Asia. TCS
            Care is a unique product that provides the subscriber with
            compensation based on pre-determined daily rates of hospitalization.
          </p>
          <p>
            Hospitalization, in this case, could be due to sickness or injuries.
          </p>
          <table className="mt-6">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Coverage</th>
                <th className="border p-2">Plan A</th>
                <th className="border p-2">Plan B</th>
                <th className="border p-2">Plan C</th>
                <th className="border p-2">Plan D</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={4} className="border p-2">
                  TCS Care
                </td>
                <td className="border p-2">AMR Annual Limit</td>
                <td className="border p-2">12,500</td>
                <td className="border p-2">25,000</td>
                <td className="border p-2">50,000</td>
                <td className="border p-2">75,000</td>
              </tr>
              <tr>
                <td className="border p-2">Daily Hospital Cash back Limit</td>
                <td className="border p-2">12,500</td>
                <td className="border p-2">25,000</td>
                <td className="border p-2">50,000</td>
                <td className="border p-2">75,000</td>
              </tr>
              <tr>
                <td className="border p-2">
                  Daily Hospital Cash back Limit for ICU
                </td>
                <td className="border p-2">12,500</td>
                <td className="border p-2">25,000</td>
                <td className="border p-2">50,000</td>
                <td className="border p-2">75,000</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="border p-2">Annual Premium</td>
                <td className="border p-2">300</td>
                <td className="border p-2">600</td>
                <td className="border p-2">1200</td>
                <td className="border p-2">1800</td>
              </tr>
            </tbody>
          </table>
          <p className="font-bold">
            TCS Safety First – in partnership with IGI Life
          </p>
          <p>
            In partnership with IGI Life Insurance, TCS Safety First is a
            product we developed to ensure that are customers and their families
            are as protected as is possible. This service offers coverage of up
            to PKR 500,000 in case of the unfortunate demise/disability of the
            subscriber due to an accident.{" "}
          </p>
          <p>
            The cost involved for our customers is very nominal and the final
            claim amount will be paid to the listed beneficiaries in a seamless
            and hassle-free manner.{" "}
          </p>
          <table className="mt-6">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="border p-2">Product Name</th>
                <th className="border p-2">Coverage</th>
                <th className="border p-2">Plan A</th>
                <th className="border p-2">Plan B</th>
                <th className="border p-2">Plan C</th>
                <th className="border p-2">Plan D</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={2} className="border p-2">
                  TCS Safety First
                </td>
                <td className="border p-2">Accidental Death & Dismemberment</td>
                <td className="border p-2">50,000</td>
                <td className="border p-2">100,000</td>
                <td className="border p-2">200,000</td>
                <td className="border p-2">500,000</td>
              </tr>

              <tr className="bg-gray-100">
                <td className="border p-2">Annual Premium</td>
                <td className="border p-2">60</td>
                <td className="border p-2">120</td>
                <td className="border p-2">240</td>
                <td className="border p-2">600</td>
              </tr>
            </tbody>
          </table>
          <p className="font-bold">
            Customer Volunteer Insurance (CVI) – in partnership with UBL
            Insurers
          </p>
          <p>
            As Pakistan’s largest mover of goods, we get asked all the time (and
            we mean all the time) about insurance for goods in transit. Well, we
            paid attention and in collaboration with UBL Insurers Limited,
            designed a product called Customer Volunteer Insurance (CVI).
          </p>
          <p>
            This product will help our customers breathe a sigh of relief when
            valuable goods need to be moved because it covers the transit risk
            of insured customer shipments against Damage, Theft/Hijacking, Fire
            and Accidents.
          </p>

          <p className="font-bold">
            Drive Secure – in partnership with Adamjee Insurance
          </p>
          <p>
            TCS, in collaboration with Adamjee Insurance, has created Drive
            Secure, a product that provides you with full insurance for your
            car, right at your workplace! It serves as an extremely
            comprehensive automotive policy which covers the insured persons
            damages in case of both self-inflicted damages and third party
            inflicted damages at an exclusive rate of 2.25%.
          </p>
          <p>Some examples are mentioned below:</p>
          <ul className="list-disc list-inside">
            <li>
              Self Inflicted Damages:
              <ul className="list-inside list-[circle]  ml-6">
                <li>Accidents</li>
                <li>Fires </li>
                <li>External Explosions</li>
                <li>Self – Ignition </li>
                <li>Lightning </li>
                <li>Flood</li>
                <li>Theft & Burglary </li>
              </ul>
            </li>
            <li className="mt-2">
              Third Party Damages
              <ul className="list-inside list-[circle]  ml-6">
                <li>Injuries</li>
                <li>Death </li>
                <li>Property Damage </li>
              </ul>
            </li>
          </ul>
          <p>For further details, please contact us at 111-123-456.</p>
        </div>
      </Layout>
    </div>
  );
};

export default FinancialServices;
