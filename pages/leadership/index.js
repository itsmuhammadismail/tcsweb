import Head from "next/head";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useState } from "react";
import LeadershipModal from "../../components/LeadershipModal";
import { Modal } from "antd";

const Leadership = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

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
                <div className="flex flex-col justify-center items-center leadership-card">
                  <img
                    src="/leadership/Khalid Nawaz Awan.png"
                    alt=""
                    className="w-[17rem] "
                  />
                  <h2 className="font-bold text-lg">Khalid Nawaz Awan</h2>
                  <p className="text-sm">Founder and Chairman</p>
                </div>
              </a>
            </Link>

            <div
              className="flex flex-col justify-center items-center cursor-pointer leadership-card"
              onClick={showModal}
            >
              <img
                src="/leadership/Saira Awan Malik.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Saira Awan Malik</h2>
              <p className="text-sm">President</p>
            </div>
            <div className="flex flex-col justify-center items-center leadership-card">
              <img
                src="/leadership/Qasim Awan.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Qasim Awan</h2>
              <p className="text-sm">Executive Director</p>
            </div>
            <div className="flex flex-col justify-center items-center leadership-card">
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
            <div className="flex flex-col justify-center items-center leadership-card">
              <img
                src="/leadership/Muhammad Haris Jamali.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Muhammad Haris Jamali</h2>
              <p className="text-sm">Cheif Executive Officer</p>
            </div>
            <div className="flex flex-col justify-center items-center leadership-card">
              <img
                src="/leadership/Muneeba Kassim.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Muneeba Kassim</h2>
              <p className="text-sm">Cheif Financial Officer</p>
            </div>
            <div className="flex flex-col justify-center items-center leadership-card" >
              <img
                src="/leadership/Zarrar Nasir Khan.png"
                alt=""
                className="w-[17rem]"
              />
              <h2 className="font-bold text-lg">Zarrar Nasir Khan</h2>
              <p className="text-sm">Director Human Resources</p>
            </div>
            <div className="flex flex-col justify-center items-center leadership-card">
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
          <Modal
            title=""
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            width="40rem"
            // style={{ width: "50rem !important", maxWidth: "50rem" }}
          >
            <div className="flex items-start gap-4 mt-[2rem]">
              <div className="flex flex-col justify-center items-center w-[60rem] leadership-card">
                <img
                  src="/leadership/Saira Awan Malik.png"
                  alt=""
                  className="w-[17rem]"
                />
                <h2 className="font-bold text-lg">Saira Awan Malik</h2>
                <p className="text-sm">President</p>
                <img src="/social/linkedin.svg" alt="" className="h-[1rem]" />
              </div>
              <div className="flex flex-col text-sm gap-4">
                <p>
                  Saira Awan Malik is the President of TCS Pvt Ltd. Saira is a
                  corporate lawyer by training and from 2009-15, she worked at
                  the London office of international law firm Cleary Gottlieb
                  Steen & Hamilton LLP, focusing on corporate and financial
                  transactions, including cross-border mergers & acquisitions,
                  restructurings and capital market issuances. Saira joined TCS,
                  which is her family business, in January 2016.
                </p>
                <p>
                  Saira received an undergraduate degree in History from Yale
                  University in May 1999. She read Law at the University of
                  Cambridge (2001-3) and subsequently completed the Bar
                  Vocational Course at the Inns of Court School of Law in
                  London. She was called to the Bar of England and Wales in
                  October 2007.
                </p>
                <p>
                  Saira has served on the board of the British Pakistan
                  Foundation (BPF) since 2012. In April 2013, she launched the
                  BPF Women’s Network. She is also a founder member of the
                  British Pakistani Lawyers’ Association and the Pakistan
                  International Film Association.
                </p>
              </div>
            </div>
          </Modal>
        </div>
      </Layout>
    </div>
  );
};

export default Leadership;
