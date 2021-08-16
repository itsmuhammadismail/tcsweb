import Card from "./Card";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row px-[2rem] justify-center items-center mt-[-3rem] z-[100]">
      <Link href="/tcs-kardo">
        <a className="hover:z-50">
          <Zoom delay={500}>
            <Card
              title={"TCS Kardo"}
              img={"/Home/tcsKardo.png"}
              className="rounded-t-md md:rounded-none md:rounded-l-md"
            />
          </Zoom>
        </a>
      </Link>
      <Link href="/tcs-near-you">
        <a className="hover:z-50">
          <Zoom delay={600}>
            <Card title={"TCS Near You"} img={"/Home/tcsNearYou.png"} />
          </Zoom>
        </a>
      </Link>
      <Link href="/rate-calculator">
        <a className="hover:z-50">
          <Zoom delay={700}>
            <Card title={"Rate Calculator"} img={"/Home/RateCalculator.png"} />
          </Zoom>
        </a>
      </Link>
      <Link href="/">
        <a className="hover:z-50">
          <Zoom delay={800}>
            <Card
              title={"TCS for Bussiness"}
              img={"/Home/tcsForBussiness.png"}
              className="rounded-b-md md:rounded-none md:rounded-r-md"
            />
          </Zoom>
        </a>
      </Link>
    </div>
  );
};

export default Cards;
