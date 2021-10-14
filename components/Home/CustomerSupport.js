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

            <hr className="hr" />

            <p className="my-8">
            As an organization that interacts with its esteemed customers directly and on a regular basis, TCS strives daily to better it’s services and to better understand your needs. Our extensive Call Centre network, highly motivated Social Media Teams and Whatsapp response systems have all been created to listen to your queries, inputs, and complaints so we can serve you better.
            </p>

            <Link href="/customer-services">
              <a>
                <button className="moreBtn">More Details</button>
              </a>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
