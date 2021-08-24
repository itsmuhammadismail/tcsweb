import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import SimpleAccordion from "../components/Home/Accordian";

const FAQs = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold ">Frequently Asked Questions</h1>
        </div>
        <div className="flex flex-col justify-center  gap-8 max-w-[50rem] mx-auto text-center p-[3rem]">
          <h1 className="text-[24px] font-bold">Pick-up Information</h1>
          <div>
            <SimpleAccordion
              heading="What is TCS On-Call Pick-up for corporate customers?"
              text="On-Call Pick-up is a TCS pick-up service for corporate customers. It is available Monday through Saturday for regular TCS services, from 11am to 5pm. TCS On-Call Pick-up service gives you the convenience of having your shipment picked up from your home or office. You can schedule a pick-up by calling 111-123-456."
            />
          </div>
          <h1 className="text-[24px] font-bold">
            Policy and Procedure Information
          </h1>
          <div>
            <SimpleAccordion
              heading="What happens if the consignee is not available at home/delivery address?"
              text="If the consignee is not available at the given address, our courier will deliver the shipment to a person who is available and will take down the signatures and relation of that person to the consignee. In case no one is available at the given address or if the address is closed, our courier would leave a message card for the consignee. After coordinating with the consignee, our courier will make a second attempt the following day. However, certain sensitive shipments governed by shipper regulations can only be received either by consignee or his/her blood relative at given address."
            />
            <SimpleAccordion
              heading="Does TCS offer Holiday Service?"
              text="Yes, TCS does deliver on holidays in the following cities: Karachi, Hyderabad, Sukkur, Quetta, Multan, Faisalabad, Lahore, Sialkot, Gujranwala, Islamabad, Rawalpindi, and Peshawar. For further details, chat with a live agent via our ‘Talk to Us’ tool or please call us at 111-123-456."
            />
            <SimpleAccordion
              heading="Does TCS also offer Holiday Service for international shipments?"
              text="TCS does not offer holiday service for international shipments."
            />
            <SimpleAccordion
              heading="In case a shipment is lost, will TCS be liable to give us the market value of the good that has been lost?"
              text="If the shipment is insured then yes, TCS is liable to pay the market value of the lost shipment. If the shipment is not insured, then the liability of TCS is limited as mentioned in the terms & conditions of carriage."
            />
            <SimpleAccordion
              heading="How much does TCS charge as insurance for high value goods?"
              text="Commodity-wide insurance rates vary, ranging from 0.5% to 2% of declared value of goods."
            />
            <SimpleAccordion
              heading="How does shipper know if his shipment is dutiable?"
              text="Each country establishes its own standards as to which goods are considered dutiable. For further details, please call us at 111-123-456."
            />
            <SimpleAccordion
              heading="What happens if an international shipment is pending and no new details are provided?"
              text="On all such pending shipments, the shipper will have to send new details within 5 working days from the date informed. If not, then shipper will have to abandon the shipment and it will be destroyed or disposed off. However, shipper still remains liable for all additional costs (including duty and taxes)."
            />
            <SimpleAccordion
              heading="If an international shipment is dutiable, how does it affect delivery times?"
              text="All shipments must go through a customs clearance procedure, which can affect transit times. Normally it takes 1 to 5 business days to clear shipments through customs. However, some items particularly unusual or high-value items are detained by customs for a longer period of time."
            />
            <SimpleAccordion
              heading="What happens in case a shipper wants to return an undelivered international shipment to the origin?"
              text="For all such shipments, a Return to Origin (RTO) request will be notified in writing by the shipper and all return or redirection duties, taxes billed at destination & RTO charges will be payable by the shipper."
            />
            <SimpleAccordion
              heading="How can I claim for my shipment?"
              text="All claims for international/domestic shipments must be submitted in writing to TCS within thirty (30) days from the date that TCS accepted the shipment, failing which TCS shall have no liability whatsoever."
            />
            <SimpleAccordion
              heading="In case an international shipment is not delivered on the first attempt will TCS make another attempt?"
              text="Yes, the courier will automatically attempt delivery to the address the next business day before 5:00 PM. After two attempts, the package will be held at the local agent office until disposal arrangements are made."
            />
            <SimpleAccordion
              heading="Who pays duty on goods?"
              text="The consignee typically pays the duty charges. However, shipper may also choose to pay them, which means he is requesting Delivery Duty Paid Service."
            />
            <SimpleAccordion
              heading="Does TCS consider all shipments as liability?"
              text="Every international shipment is transported on a limited liability basis as provided on the airway bill. TCS liability is strictly limited to direct loss. TCS maximum liability in the event of loss or damage to a shipment is US$100 or the value on the airway bill whichever is lesser."
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default FAQs;
