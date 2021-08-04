import Head from "next/head";
import Cards from "../components/Home/Cards";
import CustomerSupport from "../components/Home/CustomerSupport";
import ExpressCenter from "../components/Home/ExpressCenter";
import InTheNews from "../components/Home/InTheNews";
import PlatformSolution from "../components/Home/PlatformSolution";
import TCSRoleInCSR from "../components/Home/TCSRoleInCSR";
import TrackYourShipment from "../components/Home/TrackYourShipment";
import TrustALeader from "../components/Home/TrustALeader";
import Update from "../components/Home/Update";
import WorkingWithTCS from "../components/Home/WorkingWithTCS";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Update />
      <Layout>
        <TrackYourShipment />
        <Cards />
        <PlatformSolution />
        <ExpressCenter />
        <TrustALeader />
        <TCSRoleInCSR />
        <CustomerSupport />
        <InTheNews />
        <WorkingWithTCS />
      </Layout>
    </div>
  );
}
