import { useState } from "react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const TrustALeader = () => {
  const [map, setMap] = useState("Map");
  const [scale, setScale] = useState(1);

  const handleMap = (name) => {
    setScale(0.8);
    setTimeout(() => {
      if (name === "express") setMap("Hover-map");
      else if (name === "fleet") setMap("Fleet");
      else if (name === "service") setMap("Service-location");
      else if (name === "deliveries") setMap("Deiveries");
      else if (name === "countries") setMap("Worldwide");
      else if (name === "consumer") setMap("Touch-points");
      else setMap("Hover-map");

      setScale(1);
    }, 500);
  };

  return (
    <div
      className=" flex flex-col justify-center px-[2rem] py-[5rem] md:p-[7rem]"
      style={{ backgroundImage: "url(Home/TrustALeaderBG.png)" }}
    >
      <div className="mx-auto xl:width-[70rem !important]">
        <Fade left>
          <h1 className="font-bold text-4xl text-[#373737]">
            Trust A Leader To Deliver
          </h1>
        </Fade>
        <Fade left delay={300}>
          <hr className="hr" />
        </Fade>
        <div className="flex flex-col lg:flex-row justify-between items-center mt-[1rem] ">
          <div className="flex-1 flex justify-center flex-wrap max-w-[30rem]  ">
            <Zoom delay={500}>
              <div
                className="flex-1 min-w-[10rem] h-[13rem] cursor-pointer "
                onClick={() => handleMap("express")}
              >
                <div className="transition-all duration-500 zoom-out">
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
              </div>
            </Zoom>
            <Zoom delay={700}>
              <div
                className="flex-1 min-w-[10rem] cursor-pointer "
                onClick={() => handleMap("fleet")}
              >
                <div className="transition-all duration-500 zoom-out">
                  <img
                    src="/Home/fleet.png"
                    alt=""
                    className="mb-2 h-[3rem] w-[4rem] object-contain"
                  />
                  <div className="text-[#ED2C33] font-bold text-xl ">4500+</div>
                  <div className="font-semibold text-[#373737]">Fleet</div>
                </div>
              </div>
            </Zoom>
            <Zoom delay={900}>
              <div
                className="flex-1 min-w-[10rem] cursor-pointer"
                onClick={() => handleMap("service")}
              >
                <div className="transition-all duration-500 zoom-out">
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
              </div>
            </Zoom>
            <Zoom delay={1100}>
              <div
                className="flex-1 min-w-[10rem] cursor-pointer"
                onClick={() => handleMap("countries")}
              >
                <div className="transition-all duration-500 zoom-out">
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
              </div>
            </Zoom>
            <Zoom delay={1300}>
              <div
                className="flex-1 min-w-[10rem] cursor-pointer"
                onClick={() => handleMap("deliveries")}
              >
                <div className="transition-all duration-500 zoom-out">
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
              </div>
            </Zoom>
            <Zoom delay={1500}>
              <div
                className="flex-1 min-w-[10rem] cursor-pointer"
                onClick={() => handleMap("consumer")}
              >
                <div className="transition-all duration-500 zoom-out">
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
            </Zoom>
          </div>
          <motion.div
            animate={{ scale: scale }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-[40rem] flex flex-row-reverse"
          >
            <img
              src={`/deliver/${map}.png`}
              alt=""
              className="max-w-[20rem] md:max-w-[30rem] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TrustALeader;
