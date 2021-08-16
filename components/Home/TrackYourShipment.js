import Fade from "react-reveal/Fade";
const TrackYourShipment = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/Home/slider.png')",
        backgroundSize: "cover !important",
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
          <div
            className="text-sm flex flex-col md:flex-row"
            // data-aos="fade-right"
            // data-aos-delay="400"
          >
            <input
              type="text"
              placeholder="Enter your Tracking Number"
              className="p-3 md:w-[30rem] focus:outline-none opacity-75 rounded-l-sm"
            />
            <button className="bg-[#D40511] text-white p-3 w-full md:w-[10rem] rounded-r-sm transition-all duration-500 gradientbg">
              Track Shipment
            </button>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default TrackYourShipment;
