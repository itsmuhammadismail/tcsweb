import Head from "next/head";
import Layout from "../components/Layout";

const Rates = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex flex-col justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Customer Portals</h1>
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="flex justify-center items-center my-12">
          <div className="flex gap-6 justify-center items-center flex-wrap max-w-[60rem]">
            <div className="flex flex-col justify-center items-center w-[18rem] border rounded-sm">
              <img src="/mytcs.png" alt="" />
              <div className="flex flex-col justify-center items-center text-center p-4">
                <h2 className="font-bold text-xl pb-4">My TCS</h2>
                <p className="text-sm border-t py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[18rem] border rounded-sm">
              <img src="/envio.png" alt="" />
              <div className="flex flex-col justify-center items-center text-center p-4">
                <h2 className="font-bold text-xl pb-4">Envio</h2>
                <p className="text-sm border-t py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[18rem] border rounded-sm">
              <img src="/Ship4Me.png" alt="" />
              <div className="flex flex-col justify-center items-center text-center p-4">
                <h2 className="font-bold text-xl pb-4">Ship 4 Me</h2>
                <p className="text-sm border-t py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[18rem] border rounded-sm">
              <img src="/codportal.png" alt="" />
              <div className="flex flex-col justify-center items-center text-center p-4">
                <h2 className="font-bold text-xl pb-4">COD Portal</h2>
                <p className="text-sm border-t py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-[18rem] border rounded-sm">
              <img src="/gwms.png" alt="" />
              <div className="flex flex-col justify-center items-center text-center p-4">
                <h2 className="font-bold text-xl pb-4">GWMS</h2>
                <p className="text-sm border-t py-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Rates;
