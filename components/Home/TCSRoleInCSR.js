import Slider from "./Slider";

const TCSRoleInCSR = () => {
  return (
    <div className="xl:container mx-auto flex flex-col justify-center py-[7rem] pl-[7rem] text-[#373737]">
      <h1 className="font-bold text-4xl max-w-[23rem] ">
        TCS's role in CSR activities in Pakistan
      </h1>
      <hr className="hr" />
      <div className="flex gap-[12rem] min-h-[21rem]">
        <div className="max-w-[19rem] mt-[2.5rem]">
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
  );
};

export default TCSRoleInCSR;
