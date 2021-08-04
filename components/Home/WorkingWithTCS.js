import NewsSlider from "./NewsSlider";

const WorkingWithTCS = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="flex flex-col items-center py-[4rem] text-[#373737] ">
        <h1 className="font-bold text-4xl max-w-[23rem] ">Working with TCS</h1>
        <hr className="hr" />
        <div className="flex flex-wrap gap-4 justify-center mt-[2rem]"></div>
        <NewsSlider />
      </div>
    </div>
  );
};

export default WorkingWithTCS;
