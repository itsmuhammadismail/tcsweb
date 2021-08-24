import Fade from "react-reveal/Fade";

const ExpressCenter = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-[#f6f9fc]">
      <Fade left>
        <h1 className="font-bold text-4xl pt-[4rem] text-[#373737]">
          Express Center
        </h1>
      </Fade>
      <Fade left delay={300}>
        <hr className="hr" />
      </Fade>
      <Fade left delay={600}>
        <p className="text-sm text-center max-w-[40rem] mt-[1.5rem] mb-[3rem]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in reprehen
        </p>
      </Fade>
      <div className="relative">
        <img src="/Home/ExpressCenter.png" alt="" />
      </div>
    </div>
  );
};

export default ExpressCenter;
