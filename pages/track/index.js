import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import MaterialTable from "../../components/Home/MaterialTable";
import Layout from "../../components/Layout";

const Track = ({}) => {
  const router = useRouter();
  const { track } = router.query;

  const [trackState, setTrackState] = useState(track);
  const trackInput = useRef();
  useEffect(() => {
    setTrackState(track);
  }, [track]);

  const handleTrack = (e) => {
    e.preventDefault();
    setTrackState(trackInput.current.value);
  };

  return (
    <div>
      <Head>
        <title>TCS</title>
        <meta name="description" content="TCS" />
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Layout>
        <img src="/image.jpg" alt="" className="w-full" />
        <form className="my-8 mb-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Track Your Shipment</h2>
            <p>
              Enter any combination of TCS tracking Reference number (one per
              line).
            </p>
          </div>
          <div className="mt-2">
            <div className="flex  justify-center items-center">
              <input
                type="text"
                placeholder="Enter your Tracking Number"
                ref={trackInput}
                className="p-3 md:w-[30rem] focus:outline-none opacity-75 rounded-l-sm border"
              />
              <button
                onClick={handleTrack}
                type="submit"
                className="bg-[#D40511] text-white p-3 w-full md:w-[10rem] rounded-r-sm transition-all duration-500 gradientbg"
              >
                Track Shipment
              </button>
            </div>
          </div>
        </form>
        {trackState !== "" && trackState !== undefined ? (
          <div className="flex justify-center items-center mb-[8rem]">
            <div className="w-[70rem]  shadow-card p-8">
              <div className="flex gap-4">
                {/* Card */}
                <div className="bg-[#f8f8f8] flex-1 p-[1rem]">
                  <h2 className="font-bold text-lg mb-2">Tracking Result</h2>
                  <p className="">
                    Tracking Number:{" "}
                    <span className="text-lg text-[#f0575d] font-bold">
                      779233982077
                    </span>
                  </p>
                  <div className="flex">
                    <p className="w-[10rem]">Agent Refrence Number:</p>
                    <p className="font-bold">NA</p>
                  </div>
                  <div className="flex">
                    <p className="w-[10rem]">Origin:</p>
                    <p className="font-bold">KARACHI</p>
                  </div>
                  <div className="flex">
                    <p className="w-[10rem]">Destination:</p>
                    <p className="font-bold">LAHORE</p>
                  </div>
                  <div className="flex">
                    <p className="w-[10rem]">Booking Date:</p>
                    <p className="font-bold">11 AUG 21 13:20</p>
                  </div>
                  <div className="flex">
                    <p className="w-[10rem]">Shipper:</p>
                    <p className="font-bold">JADE-E-SERVICES PAKISTAN</p>
                  </div>
                  <div className="flex">
                    <p className="w-[10rem]">Consignee:</p>
                    <p className="font-bold">Sufiyan Mughal</p>
                  </div>
                </div>
                <div className="bg-[#f8f8f8] flex-1 p-[1rem]">
                  <h2 className="font-bold text-lg mb-2">
                    Shipment Tracking Summary
                  </h2>
                  <p className="">
                    Current Status:{" "}
                    <span className="text-lg text-[#f0575d] font-bold">
                      DELIVERED
                    </span>
                  </p>
                  <div className="flex">
                    <p className="w-[6rem]">Delivered on:</p>
                    <p className="font-bold">3-AUG-21 13:20</p>
                  </div>
                  <div className="flex">
                    <p className="w-[6rem]">Signed by:</p>
                    <p className="font-bold">SUFYAN</p>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-semibold text-center my-[3rem]">
                Track History:
              </h2>
              <div className="flex-1">
                <div className="flex relative top-[0.6rem] pl-[2rem] pr-[2rem]">
                  <hr className="border-t-4 border-dotted w-[16rem] border-[#ec1c23be]" />
                  <hr className="border-t-4 border-dotted flex-1 border-[#ec1c23be]" />
                  <hr className="border-t-4 border-dotted flex-1 border-[#d8d8d8]" />
                  <hr className="border-t-4 border-dotted flex-1 border-[#d8d8d8]" />
                </div>
                <div className="flex justify-between relative z-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#db1a20] w-[1rem] h-[1rem] rounded-full"></div>
                    <p className="text-sm max-w-[7rem]">Booking</p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#db1a20] w-[1rem] h-[1rem] rounded-full"></div>
                    <p className="text-sm max-w-[7rem] text-center">
                      Arrived at TCS Facility
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#db1a20] w-[1rem] h-[1rem] rounded-full"></div>
                    <p className="text-sm max-w-[7rem] text-center">
                      Departed from Origin
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#d8d8d8] w-[1rem] h-[1rem] rounded-full"></div>
                    <p className="text-sm max-w-[6.7rem] text-center">
                      Out for Delivery
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="bg-[#d8d8d8] w-[1rem] h-[1rem] rounded-full"></div>
                    <p className="text-sm max-w-[7rem] text-center">
                      Delivered
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 my-16 mb-2">
                <table className="mt-6 w-full">
                  <thead>
                    <tr className="text-left bg-gray-100">
                      <th className="border p-2 w-[13rem]">Date Time</th>
                      <th className="border p-2">Status</th>
                      <th className="border p-2">Location</th>
                    </tr>
                  </thead>
                  <tbody className="text-xs">
                    <tr>
                      <td className="border p-2">13-AUG-21 16:10</td>
                      <td className="border p-2">
                        DELIVERED, Signed by JAMIL AHMED
                      </td>
                      <td className="border p-2">KHANPUR MAHER, PAK</td>
                    </tr>
                    <tr>
                      <td className="border p-2">13-AUG-21 16:10</td>
                      <td className="border p-2">Courier out for delivery</td>
                      <td className="border p-2">KHANPUR MAHER, PAK</td>
                    </tr>
                    <tr>
                      <td className="border p-2">13-AUG-21 16:10</td>
                      <td className="border p-2">Consignee not available</td>
                      <td className="border p-2">GHOTKI</td>
                    </tr>
                    <tr>
                      <td className="border p-2">13-AUG-21 16:10</td>
                      <td className="border p-2">Arrived at TCS Facility</td>
                      <td className="border p-2">GHOTKI</td>
                    </tr>
                    <tr>
                      <td className="border p-2">13-AUG-21 16:10</td>
                      <td className="border p-2">Departed from Origin</td>
                      <td className="border p-2">KARACHI</td>
                    </tr>
                    <tr>
                      <td className="border p-2">13-AUG-21 16:10</td>
                      <td className="border p-2">Arrived at TCS Facility</td>
                      <td className="border p-2">KARACHI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[15rem]"></div>
        )}
      </Layout>
    </div>
  );
};

export default Track;
