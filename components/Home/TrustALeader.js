import { useState } from "react";
import { motion } from "framer-motion";

const TrustALeader = () => {
  const [map, setMap] = useState("map");
  const [scale, setScale] = useState(1);

  const handleMap = () => {
    setScale(0.8);
    setTimeout(() => {
      if (map == "map") {
        setMap("mapHover");
        setScale(1);
      } else {
        setMap("map");
        setScale(1);
      }
    }, 500);
  };

  return (
    <div
      className=" flex flex-col justify-center p-[7rem]"
      style={{ backgroundImage: "url(Home/TrustALeaderBG.png)" }}
    >
      <div className="mx-auto xl:width-[70rem !important]">
        <h1
          className="font-bold text-4xl text-[#373737]"
          // data-aos="fade-right"
        >
          Trust A Leader To Deliver
        </h1>
        <hr
          className="hr"
          // data-aos="fade-right" data-aos-delay="200"
        />
        <div className="flex justify-between items-center mt-[1rem] ">
          <div className="flex-1 flex justify-center flex-wrap max-w-[30rem]  ">
            <div
              className="flex-1 min-w-[10rem] h-[13rem] cursor-pointer"
              onClick={handleMap}
            >
              <img
                src="/Home/express.png"
                alt=""
                className="mb-2 h-[3rem] w-[3rem]  object-contain"
              />
              <div className="text-[#ED2C33] font-bold text-xl ">970+</div>
              <div className="font-semibold text-[#373737]">
                Express
                <br />
                Centers
              </div>
            </div>
            <div
              className="flex-1 min-w-[10rem] cursor-pointer"
              onClick={handleMap}
            >
              <img
                src="/Home/fleet.png"
                alt=""
                className="mb-2 h-[3rem] w-[4rem] object-contain"
              />
              <div className="text-[#ED2C33] font-bold text-xl ">4500+</div>
              <div className="font-semibold text-[#373737]">Fleet</div>
            </div>
            <div
              className="flex-1 min-w-[10rem] cursor-pointer"
              onClick={handleMap}
            >
              <img
                src="/Home/service.png"
                alt=""
                className="mb-2 h-[3rem] w-[3rem] object-contain"
              />
              <div className="text-[#ED2C33] font-bold text-xl ">2500+</div>
              <div className="font-semibold text-[#373737]">
                Service
                <br />
                Locations
              </div>
            </div>
            <div
              className="flex-1 min-w-[10rem] cursor-pointer"
              onClick={handleMap}
            >
              <img
                src="/Home/countries.png"
                alt=""
                className="mb-2 h-[3rem] w-[3rem] object-contain"
              />
              <div className="text-[#ED2C33] font-bold text-xl ">220+</div>
              <div className="font-semibold text-[#373737]">
                Countries
                <br />
                Worldwide
              </div>
            </div>
            <div
              className="flex-1 min-w-[10rem] cursor-pointer"
              onClick={handleMap}
            >
              <img
                src="/Home/deliveries.png"
                alt=""
                className="mb-2 h-[3rem] w-[3rem] object-contain"
              />
              <div className="text-[#ED2C33] font-bold text-xl ">
                150 Million+
              </div>
              <div className="font-semibold text-[#373737]">Deliveries</div>
            </div>
            <div
              className="flex-1 min-w-[10rem] cursor-pointer"
              onClick={handleMap}
            >
              <img
                src="/Home/consumer.png"
                alt=""
                className="mb-2 h-[3rem] w-[3rem] object-contain"
              />
              <div className="text-[#ED2C33] font-bold text-xl ">
                15 Million+
              </div>
              <div className="font-semibold text-[#373737]">
                Consumer
                <br />
                Touchpoints
              </div>
            </div>
          </div>
          <motion.div
            animate={{ scale: scale }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-[40rem] flex flex-row-reverse"
          >
            <img
              src={`/Home/${map}.png`}
              alt=""
              className="max-w-[30rem]  object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustALeader;
