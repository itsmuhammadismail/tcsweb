import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react";
import Fade from "react-reveal/Fade";

const TrackYourShipment = () => {
  const trackInput = useRef();
  const route = useRouter();
  const [trackState, setTrackState] = useState("");
  const handleTrack = (e) => {
    e.preventDefault();
    if (trackInput.current.value !== "") {
      setTrackState(trackInput.current.value);
      route.push("/track/" + trackInput.current.value);
    }
  };
  return (
    <div
      style={{
        backgroundImage: "url('/Home/slider.png')",
      }}
      className="bg-center bg-no-repeat  h-[20rem] xl:h-[57vh]  w-full flex justify-center items-center zoom"
    >
      <div className="mt-[-5rem] text-center md:text-left">
        <Fade left delay={200}>
          <h2 className="text-white text-3xl font-semibold">
            Track Your Shipment
          </h2>
        </Fade>
        <Fade left delay={400}>
          <form className="text-sm flex flex-col md:flex-row">
            <input
              type="text"
              ref={trackInput}
              placeholder="Enter your Tracking Number"
              className="p-3 md:w-[30rem] focus:outline-none opacity-75 rounded-l-sm"
            />
            <button
              onClick={handleTrack}
              type="submit"
              className="bg-[#D40511] text-white p-3 w-full md:w-[10rem] rounded-r-sm transition-all duration-500 gradientbg"
            >
              Track Shipment
            </button>
          </form>
        </Fade>
      </div>
    </div>
  );
};

export default TrackYourShipment;
