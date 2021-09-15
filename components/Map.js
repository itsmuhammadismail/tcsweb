import { useState } from "react";
import MapPopup from "./MapPopup";


const Map = () => {
  const [mapHover, setMapHover] = useState(false);
  return (
    <div className=" mx-auto flex justify-center items-center mt-12 shadow-my w-[62rem]">
      <div className=" w-[20rem]">
        <div className="bg-[#f7f7f7] p-4 m-3 rounded-sm relative">
          <h2 className="font-semibold text-xl pb-3">Search</h2>
          <input
            type="text"
            placeholder="Enter Your Address"
            className="bg-transparent text-sm border-b focus:outline-none pb-3 w-full mb-5"
          />
          <div className="absolute bottom-[-1rem] right-3 flex gap-3">
            <div className="bg-[#dadada] rounded-full w-10 h-10 p-2 flex justify-center items-center">
              <img src="/location.svg" alt="" />
            </div>
            <div className="bg-[#f21e26] rounded-full w-10 h-10 p-3 flex justify-center items-center">
              <img src="/search.svg" alt="" />
            </div>
          </div>
        </div>

        <h2 className="text-[#f21e26] font-semibold text-lg p-4">
          Search Result
        </h2>

        <div
          className="border-t px-4 py-4 flex flex-col gap-1 cursor-pointer"
          onClick={() => setMapHover(true)}
        >
          <h2 className="font-semibold text-sm">
            Johar Chorangi Express Center
          </h2>
          <p className="text-xs">City: Karachi</p>
          <p className="text-xs">
            Address: Shop no. W5 Eastern Pride Block 15 Gulistan-e-Johar
          </p>
        </div>
        <div
          className="border-t px-4 py-4 flex flex-col gap-1 cursor-pointer"
          onClick={() => setMapHover(true)}
        >
          <h2 className="font-semibold text-sm">
            Johar Chorangi Express Center
          </h2>
          <p className="text-xs">City: Karachi</p>
          <p className="text-xs">
            Address: Shop no. W5 Eastern Pride Block 15 Gulistan-e-Johar
          </p>
        </div>
        <div
          className="border-t px-4 py-4 flex flex-col gap-1 cursor-pointer"
          onClick={() => setMapHover(true)}
        >
          <h2 className="font-semibold text-sm">
            Johar Chorangi Express Center
          </h2>
          <p className="text-xs">City: Karachi</p>
          <p className="text-xs">
            Address: Shop no. W5 Eastern Pride Block 15 Gulistan-e-Johar
          </p>
        </div>
       
        {/* <div className="border-t px-4 py-6 flex flex-col gap-1">
          <h2 className="font-semibold text-sm">
            Johar Chorangi Express Center
          </h2>
          <p className="text-xs">City: Karachi</p>
          <p className="text-xs">
            Address: Shop no. W5 Eastern Pride Block 15 Gulistan-e-Johar
          </p>
        </div> */}
      </div>
      <div className="relative">
        <img src="/map.png" alt="" className="h-[34rem]" />
        {mapHover && (
          <>
            <div className="absolute top-0 w-full h-full bg-black opacity-30"></div>
            <MapPopup onClose={() => setMapHover(false)} />
          </>
        )}
      </div>
    </div>
  );
};

export default Map;
