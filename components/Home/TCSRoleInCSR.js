import Slider from "./Slider";

const TCSRoleInCSR = () => {
  return (
    <div className="relative">
      <div className="max-w-[70rem] mx-auto flex flex-col justify-center  py-[7rem] text-[#373737]">
        <div className="flex justify-center gap-[8rem] min-h-[28.55rem]">
          <div className="max-w-[19rem] mt-[2.5rem]">
            <div className="mb-[4rem]">
              <h1 className="font-bold text-4xl max-w-[23rem] mr-[-5rem]">
                TCS's role in CSR activities in Pakistan
              </h1>
              <hr className="hr " />
            </div>
            <h2 className="font-bold text-2xl">Heading Goes Here</h2>
            <p className="my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
            <button className="moreBtn">More Details</button>
          </div>
          <Slider />
        </div>
      </div>
      <div className="bg-[#ED1C24] absolute right-0 top-[20.54rem] w-[50vw] h-[15rem] z-[-10]"></div>
    </div>
  );
};

export default TCSRoleInCSR;
