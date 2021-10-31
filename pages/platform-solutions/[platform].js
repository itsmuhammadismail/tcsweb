import Head from "next/head";
import Layout from "../../components/Layout";
import PlatformSolution from "../../components/Home/PlatformSolution";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const PlatformSolutions = () => {
  const router = useRouter();
  const [name, setName] = useState(null);
  const { platform } = router.query;

  useEffect(() => {
    if (platform === "domestic") {
      setName("Domestic");
    } else if (platform === "international") {
      setName("International");
    } else if (platform === "supply") {
      setName("Supply Chain Solutions");
    } else if (platform === "value") {
      setName("Value Added Services");
    }
  }, [platform]);
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <img src="/platform.png" alt="" className="w-full" />
        <PlatformSolution name={name} />
      </Layout>
    </div>
  );
};

export default PlatformSolutions;
