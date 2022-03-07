import Slider from "./Slider";
import Fade from "react-reveal/Fade";

const TCSRoleInCSR = () => {
  return (
    <div className="relative">
      <div className="max-w-[70rem] mx-auto flex flex-col justify-center px-[2rem] py-[7rem] text-[#373737]">
        <div className="flex flex-col lg:flex-row justify-center gap-[8rem] min-h-[28.55rem]">
          <div className="max-w-[19rem] mt-[2.5rem]">
            <div className="mb-[2rem]">
              <Fade left>
                <h1 className="font-bold text-4xl max-w-[23rem] mr-[-5rem]">
                  TCS's role in CSR activities in Pakistan
                </h1>
              </Fade>
              <Fade left delay={300}>
                <hr className="hr " />
              </Fade>
            </div>
            <Fade left delay={500}>
              <p className="my-4">
                As one of the largest organizations in the country, TCS is aware
                of the responsibility that rests on its shoulders when it comes
                to giving back to society. In fact, helping the less fortunate
                is one of the founding pillars of this organization. Over the
                years, we have worked on building systems and programs that
                allow us to do good in society and provide some assistance to
                the less fortunate
              </p>
              <button className="moreBtn">More Details</button>
            </Fade>
          </div>
          <Slider />
        </div>
      </div>
      <Fade right>
        <div className="bg-[#ED1C24] absolute right-0 bottom-[7rem] lg:top-[20.54rem] w-[50vw] h-[18rem] md:h-[15rem] z-[-10]"></div>
      </Fade>
    </div>
  );
};

export default TCSRoleInCSR;
