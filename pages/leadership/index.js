import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";

const Leadership = () => {
  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <div className="bg-[#efefef] flex justify-center items-center h-[150px]">
          <h1 className="text-[40px] font-bold">Leadership</h1>
        </div>
        <div className="max-w-[70rem] mx-auto px-6 pt-8 flex flex-col gap-6 mb-[6rem]">
          <div className="flex gap-2 justify-center">
            <Link href="/leadership/khalid-awan">
              <a>
                <div className="flex flex-col justify-center items-center">
                  <img
                    src="/leadership/Khalid Nawaz Awan.png"
                    alt=""
                    className="w-[17rem]"
                  />
                  <h2 className="font-bold text-lg">Khalid Nawaz Awan</h2>
                  <p className="text-sm">Founder and Chairman</p>
                </div>
              </a>
            </Link>

            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Saira Awan Malik.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Saira Awan Malik</h2>
              <p className="text-sm">President</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Qasim Awan.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Qasim Awan</h2>
              <p className="text-sm">Executive Director</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Saadia Awan.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Saadia Awan</h2>
              <p className="text-sm">Director</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Faizan Ali Siddiqi.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Faizan Ali Siddiqi</h2>
              <p className="text-sm">COO & Head of Digital Transformation</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Muhammad Haris Jamali.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Muhammad Haris Jamali</h2>
              <p className="text-sm">Cheif Executive Officer</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Muneeba Kassim.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Muneeba Kassim</h2>
              <p className="text-sm">Cheif Financial Officer</p>
            </div>
          </div>
          <div className="flex gap-2 justify-center ">
            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Zarrar Nasir Khan.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Zarrar Nasir Khan</h2>
              <p className="text-sm">Director Human Resources</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/leadership/Nasir Nasrullah.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">
                Brig (retd.) Nasir Nasrullah
              </h2>
              <p className="text-sm">Director Risk & Security</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Leadership;
