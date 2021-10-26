import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import { useEffect, useState, useRef } from "react";
import MaterialTable from "../../components/Home/MaterialTable";
import Layout from "../../components/Layout";
import tracking from "../../apis/tracking";
import ReactLoading from "react-loading";

const Track = ({}) => {
  const router = useRouter();
  const { track } = router.query;
  const [trackRecord, setTrackRecord] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [trackState, setTrackState] = useState(track);
  const trackInput = useRef();

  const handleTrack = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await tracking(trackInput.current.value);
    setIsLoading(false);
    if (result["IsSuccess"] === true) {
      if (result["Data"] !== null) setTrackRecord(result["Data"]);
    }
    setTrackState(trackInput.current.value);
  };

  const trackEffect = async () => {
    setIsLoading(true);
    const result = await tracking(track);
    if (result["IsSuccess"] === true) {
      if (result["Data"] !== null) setTrackRecord(result["Data"]);
    }
    console.log("Record", trackRecord);
    setIsLoading(false);
    setTrackState(track);
  };

  useEffect(async () => {
    console.log(track);
    if (track !== undefined) await trackEffect();
  }, [track]);

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
                type="number"
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
        {isLoading && (
          <div className="h-[15rem] flex justify-center items-center">
            <ReactLoading
              type={"spin"}
              color={"#F21E26"}
              height={"5rem"}
              width={"5rem"}
            />
          </div>
        )}

        {isLoading === false &&
          trackRecord &&
          trackRecord !== null &&
          trackRecord[0] === null && (
            <div className="flex justify-center items-center mb-[8rem]">
              <div className="w-[70rem]  shadow-card p-8">
                <div className="flex gap-4 h-[10rem] justify-center items-center">
                  {/* Card */}
                  <h1 className="text-3xl font-semibold text-center my-[3rem]">
                    CN Number is mismatced
                  </h1>
                </div>
              </div>
            </div>
          )}

        {isLoading === false &&
          trackRecord &&
          trackRecord !== null &&
          trackRecord !== undefined &&
          trackRecord[0] !== null &&
          trackRecord[0] !== undefined &&
          trackRecord !== [null] && (
            <div className="flex justify-center items-center mb-[8rem]">
              <div className="w-[70rem]  shadow-card p-8">
                <div className="flex gap-4">
                  {/* Card */}
                  <div className="bg-[#f8f8f8] flex-1 p-[1rem]">
                    <h2 className="font-bold text-lg mb-2">Tracking Result</h2>
                    <p className="">
                      Tracking Number:{" "}
                      <span className="text-lg text-[#f0575d] font-bold">
                        {/* {console.log(
                        trackRecord[0]["TrackInfo"][0]["consignmentNo"]
                      )} */}
                        {trackRecord[0]["TrackInfo"][0]["consignmentNo"]}
                      </span>
                    </p>
                    <div className="flex">
                      <p className="w-[10rem]">Agent Refrence Number:</p>
                      <p className="font-bold">
                        {trackRecord[0]["TrackInfo"][0]["referenceNo"]}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="w-[10rem]">Origin:</p>
                      <p className="font-bold">
                        {trackRecord[0]["TrackInfo"][0]["origin"]}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="w-[10rem]">Destination:</p>
                      <p className="font-bold">
                        {trackRecord[0]["TrackInfo"][0]["destination"]}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="w-[10rem]">Booking Date:</p>
                      <p className="font-bold">
                        {trackRecord[0]["TrackInfo"][0]["bookingDate"]}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="w-[10rem]">Shipper:</p>
                      <p className="font-bold">
                        {trackRecord[0]["TrackInfo"][0]["shipper"]}
                      </p>
                    </div>
                    <div className="flex">
                      <p className="w-[10rem]">Consignee:</p>
                      <p className="font-bold">
                        {trackRecord[0]["TrackInfo"][0]["consignee"]}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#f8f8f8] flex-1 p-[1rem]">
                    <h2 className="font-bold text-lg mb-2">
                      Shipment Tracking Summary
                    </h2>
                    <p className="">
                      Current Status:{" "}
                      <span className="text-lg text-[#f0575d] font-bold">
                        {trackRecord[0]["DeliveryInfo"] &&
                          trackRecord[0]["DeliveryInfo"][0]["status"]}
                      </span>
                    </p>
                    {trackRecord[0]["DeliveryInfo"] &&
                      trackRecord[0]["DeliveryInfo"][0]["status"] ===
                        "DELIVERED" && (
                        <>
                          <div className="flex">
                            <p className="w-[6rem]">Delivered on:</p>
                            <p className="font-bold">
                              {trackRecord[0]["DeliveryInfo"][0]["dateTime"]}
                            </p>
                          </div>
                          <div className="flex">
                            <p className="w-[6rem]">Signed by:</p>
                            <p className="font-bold">
                              {trackRecord[0]["DeliveryInfo"][0]["recievedBy"]}
                            </p>
                          </div>
                        </>
                      )}
                  </div>
                </div>
                <h2 className="text-3xl font-semibold text-center my-[3rem]">
                  Track History:
                </h2>
                <div className="flex-1">
                  <div className="flex relative top-[0.6rem] pl-[1.1rem] pr-[2rem] gap-2">
                    <hr
                      className={`border-t-4 border-dotted flex-1  ${
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "DELIVERED" ||
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "OUT FOR DELIVERY" ||
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "DEPARTED FROM ORIGIN" ||
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "ARRIVED AT TCS FACILITY"
                          ? "border-[#ec1c23be]"
                          : "border-[#d8d8d8]"
                      }`}
                    />
                    <hr
                      className={`border-t-4 border-dotted flex-1  ${
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "DELIVERED" ||
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "OUT FOR DELIVERY" ||
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "DEPARTED FROM ORIGIN"
                          ? "border-[#ec1c23be]"
                          : "border-[#d8d8d8]"
                      }`}
                    />
                    <hr
                      className={`border-t-4 border-dotted flex-1  ${
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "DELIVERED" ||
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "OUT FOR DELIVERY"
                          ? "border-[#ec1c23be]"
                          : "border-[#d8d8d8]"
                      }`}
                    />
                    <hr
                      className={`border-t-4 border-dotted flex-1  ${
                        trackRecord[0]["DeliveryInfo"][0]["status"] ===
                        "DELIVERED"
                          ? "border-[#ec1c23be]"
                          : "border-[#d8d8d8]"
                      }`}
                    />
                  </div>
                  <div className="flex justify-between relative z-10">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`bg-[#db1a20] w-[1rem] h-[1rem] rounded-full ${
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "DELIVERED" ||
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "OUT FOR DELIVERY" ||
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "DEPARTED FROM ORIGIN" ||
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "ARRIVED AT TCS FACILITY"
                            ? "bg-[#db1a20]"
                            : "bg-[#d8d8d8]"
                        }`}
                      ></div>
                      <p className="text-sm max-w-[7rem]">Booking</p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`bg-[#db1a20] w-[1rem] h-[1rem] rounded-full ${
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "DELIVERED" ||
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "OUT FOR DELIVERY" ||
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "DEPARTED FROM ORIGIN"
                            ? "bg-[#db1a20]"
                            : "bg-[#d8d8d8]"
                        }`}
                      ></div>
                      <p className="text-sm max-w-[7rem] text-center">
                        Arrived at TCS Facility
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`bg-[#db1a20] w-[1rem] h-[1rem] rounded-full ${
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "DELIVERED" ||
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                            "OUT FOR DELIVERY"
                            ? "bg-[#db1a20]"
                            : "bg-[#d8d8d8]"
                        }`}
                      ></div>
                      <p className="text-sm max-w-[7rem] text-center">
                        Departed from Origin
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`bg-[#db1a20] w-[1rem] h-[1rem] rounded-full ${
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "DELIVERED"
                            ? "bg-[#db1a20]"
                            : "bg-[#d8d8d8]"
                        }`}
                      ></div>
                      <p className="text-sm max-w-[6.7rem] text-center">
                        Out for Delivery
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-[1rem] h-[1rem] rounded-full ${
                          trackRecord[0]["DeliveryInfo"][0]["status"] ===
                          "DELIVERED"
                            ? "bg-[#db1a20]"
                            : "bg-[#d8d8d8]"
                        }`}
                      ></div>
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
                      {trackRecord[0]["Checkpoints"].map((checkpoint) => (
                        <tr
                          key={
                            String(checkpoint.dateTime) +
                            String(checkpoint.recievedBy) +
                            String(checkpoint.status)
                          }
                        >
                          <td className="border p-2">{checkpoint.dateTime}</td>
                          <td className="border p-2">{checkpoint.status}</td>
                          <td className="border p-2">
                            {checkpoint.recievedBy}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        {trackRecord === null && <div className="h-[15rem]"></div>}
      </Layout>
    </div>
  );
};

export default Track;
