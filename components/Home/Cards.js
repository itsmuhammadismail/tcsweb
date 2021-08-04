import Card from "./Card";
import Link from "next/link";

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row px-[2rem] justify-center items-center mt-[-3rem] z-[100]">
      <Link href="/tcs-kardo">
        <a className="hover:z-50" data-aos="zoom-in" data-aos-delay="500">
          <Card
            title={"TCS Kardo"}
            img={"/Home/tcsKardo.png"}
            className="rounded-t-md md:rounded-none md:rounded-l-md"
          />
        </a>
      </Link>
      <Link href="/tcs-near-you">
        <a className="hover:z-50" data-aos="zoom-in" data-aos-delay="600">
          <Card title={"TCS Near You"} img={"/Home/tcsNearYou.png"} />
        </a>
      </Link>
      <Link href="/">
        <a className="hover:z-50" data-aos="zoom-in" data-aos-delay="700">
          <Card title={"Rate Calculator"} img={"/Home/RateCalculator.png"} />
        </a>
      </Link>
      <Link href="/">
        <a className="hover:z-50" data-aos="zoom-in" data-aos-delay="800">
          <Card
            title={"TCS for Bussiness"}
            img={"/Home/tcsForBussiness.png"}
            className="rounded-b-md md:rounded-none md:rounded-r-md"
          />
        </a>
      </Link>
    </div>
  );
};

export default Cards;
