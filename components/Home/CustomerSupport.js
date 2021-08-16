import Link from "next/link";
import Fade from "react-reveal/Fade";

const CustomerSupport = () => {
  return (
    <div className="flex px-[7rem] xl:h-[80vh]  text-[#373737] ">
      <div className="max-w-[70rem] mx-auto flex justify-between items-center">
        <div className="flex gap-6 flex-1 pr-[3rem]">
          <div className="flex flex-col gap-6 ">
            <Fade top>
              <img src="/Home/support1.png" alt="" className="max-w-[14rem]" />
            </Fade>
            <Fade top>
              <img src="/Home/support3.png" alt="" className="max-w-[14rem]" />
            </Fade>
          </div>
          <div className="flex flex-col gap-6 mt-[3rem]">
            <Fade top>
              <img src="/Home/support2.png" alt="" className="max-w-[14rem]" />
            </Fade>
            <Fade top>
              <img src="/Home/support4.png" alt="" className="max-w-[14rem]" />
            </Fade>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <Fade right>
            <h1 className="font-bold text-4xl max-w-[23rem] ">
              Customer Support
            </h1>
          </Fade>
          <Fade right>
            <hr className="hr" />
          </Fade>
          <Fade right delay={200}>
            <p className="my-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </p>
          </Fade>
          <Fade right delay={200}>
            <Link href="/customer-services">
            <a>
            <button className="moreBtn">More Details</button></a>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
