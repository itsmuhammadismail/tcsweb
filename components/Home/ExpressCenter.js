import Fade from "react-reveal/Fade";
import Link from "next/link";

const ExpressCenter = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-[#f6f9fc]">
      <div className="px-10 flex flex-col justify-center items-center">
        <Fade left>
          <h1 className="font-bold text-4xl pt-[4rem] text-[#373737]">
            Express Center
          </h1>
        </Fade>
        <Fade left delay={300}>
          <hr className="hr" />
        </Fade>
        <Fade left delay={600}>
          <p className="text-sm text-center max-w-[55rem] mt-[1.5rem] mb-[1.5rem]">
            TCS boasts of the largest network of Express Centers in the country,
            with over 970 locations spread to all corners. An unparalleled
            domestic grid of infrastructure and penetration in even the remotest
            locations has made us the undisputed logistics backbone of Pakistan.
            This in turn, allows us to provide all our customers with the
            highest possible quality and efficiency of services that they
            deserve, across the board.
          </p>
        </Fade>
      </div>
      <Fade left delay={900}>
        <Link href="/customer-services">
          <a>
            <button className="moreBtn mb-[3rem]">Join the TCS Family</button>
          </a>
        </Link>
      </Fade>
      <div className="relative">
        <img src="/Home/ExpressCenter.png" alt="" />
      </div>
    </div>
  );
};

export default ExpressCenter;
