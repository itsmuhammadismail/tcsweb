const TrackYourShipment = () => {
  return (
    <div
      style={{ backgroundImage: "url('/Home/slider.png')" }}
      className="bg-center bg-no-repeat bg-cover h-[25rem] w-full flex justify-center items-center zoom"
    >
      <div className="mt-[-5rem] text-center md:text-left">
        <h2 className="text-white text-3xl font-semibold" data-aos="fade-right" data-aos-delay="200">
          Track Your Shipment
        </h2>
        <div className="text-sm flex flex-col md:flex-row" data-aos="fade-right" data-aos-delay="400">
          <input type="text" placeholder="Enter your Tracking Number" className="p-3 md:w-[30rem] focus:outline-none opacity-75 rounded-l-sm" />
          <button className="bg-[#D40511] text-white p-3 w-full md:w-[10rem] rounded-r-sm transition-all duration-500 gradientbg">Track Shipment</button>
        </div>
      </div>
    </div>
  );
};

export default TrackYourShipment;
