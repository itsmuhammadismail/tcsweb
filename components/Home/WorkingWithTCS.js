import NewsSlider from "./NewsSlider";
import Fade from "react-reveal/Fade";

const WorkingWithTCS = () => {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="flex flex-col items-center py-[4rem] text-[#373737] ">
        <Fade left>
          <h1 className="font-bold text-4xl max-w-[23rem] ">
            Working with TCS
          </h1>
        </Fade>
        <Fade left delay={300}>
          <hr className="hr" />
        </Fade>
        <div className="flex flex-wrap gap-4 justify-center mt-[2rem]"></div>
        <NewsSlider />
      </div>
    </div>
  );
};

export default WorkingWithTCS;
