const ExpressCenter = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-[#f6f9fc]">
      <h1
        className="font-bold text-3xl pt-[4rem] text-[#373737]"
        data-aos="fade-left"
      >
        Express Center
      </h1>
      <hr className="hr" data-aos="fade-left" data-aos-delay="200" />
      <p
        className="text-sm text-center max-w-[40rem] mt-[1.5rem] mb-[3rem]"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehen
      </p>
      <div className="relative">
        <img src="/Home/ExpressCenter.png" alt="" />
      </div>
    </div>
  );
};

export default ExpressCenter;
