import Link from "next/link";
import { useState } from "react";
import PlatformSolutionBox from "./Home/PlatformSolutionBox";

let delay = 0;
const PlatformDropdown = () => {
  const [selected, setSelected] = useState("Domestic");
  const [duration, setDuration] = useState(0);
  const [scale, setScale] = useState(1);

  const handleSelected = (newSelection) => {
    setSelected(newSelection);
  };

  const list = [
    "Domestic",
    "International",
    "Supply Chain Solutions",
    "Value Added Services",
  ];

  const [domestic, setDomestic] = useState([
    { name: "Express", img: "/Home/domestic/express.svg", link: "" },
    {
      name: "Overland Express",
      img: "/Home/domestic/overlandExpress.svg",
      link: "",
    },
    {
      name: "Frieght",
      img: "/Home/domestic/freight.svg",
      link: "",
    },
    {
      name: "Sentiments Express",
      img: "/Home/domestic/sentiments.svg",
      link: "",
    },
    {
      name: "Studio by TCS",
      img: "/Home/domestic/studio.svg",
      link: "",
    },
  ]);

  const [international, setInternational] = useState([
    { name: "Express", img: "/Home/international/express.svg", link: "" },
    {
      name: "Frieght",
      img: "/Home/international/freight.svg",
      link: "",
    },
    {
      name: "Cross-Border E-commerce",
      img: "/Home/international/cross-border.svg",
      link: "",
    },
    {
      name: "Regional Trucking (TIR)",
      img: "/Home/international/regional.svg",
      link: "",
    },
    {
      name: "TCS UAE",
      img: "/Home/international/uae.png",
      link: "",
    },
    {
      name: "TCS United Kingdom",
      img: "/Home/international/uk.png",
      link: "",
    },
    {
      name: "Sentiments Express",
      img: "/Home/international/sentiments.svg",
      link: "",
    },
    {
      name: "Studio by TCS",
      img: "/Home/international/studio.png",
      link: "",
    },
  ]);

  const [supplyChain, setSupplyChain] = useState([
    {
      name: "Ware Housing & Distribution",
      img: "/Home/supplyChain/warehousing.svg",
      link: "",
    },
    { name: "Ecom Solutions", img: "/Home/supplyChain/ecom.svg", link: "" },
    { name: "PackNGo", img: "/Home/supplyChain/packNGo.svg", link: "" },
    {
      name: "TCS Cool Control",
      img: "/Home/supplyChain/tcsCoolControl.svg",
      link: "",
    },
    { name: "TCS Hazir", img: "/Home/supplyChain/tcsHazir.svg", link: "" },
    { name: "TCS Fresh", img: "/Home/supplyChain/tcsFresh.svg", link: "" },
    { name: "TCS Cares", img: "/Home/supplyChain/tcsCares.svg", link: "" },
    { name: "TCS Fashion", img: "/Home/supplyChain/tcsFashion.svg", link: "" },
    { name: "TCS Air", img: "/Home/supplyChain/tcsAir.svg", link: "" },
    {
      name: "Mail Management Solutions",
      img: "/Home/supplyChain/mail.svg",
      link: "/mail-management",
    },
  ]);

  const [valueAddedServices, setValueAddedServices] = useState([
    {
      name: "Digital Printing",
      img: "/Home/valueAddedServices/digital.svg",
      link: "",
    },
    {
      name: "Financial Services",
      img: "/Home/valueAddedServices/financial.svg",
      link: "",
    },
    {
      name: "TCS Insights",
      img: "/Home/valueAddedServices/insights.svg",
      link: "",
    },
    {
      name: "Travel & Tours",
      img: "/Home/valueAddedServices/travelAndTour.svg",
      link: "",
    },
    {
      name: "TCS Developer Kit / APIs",
      img: "/Home/valueAddedServices/developerKit.svg",
      link: "",
    },
    {
      name: "TCS for Bussiness",
      img: "/Home/valueAddedServices/business.svg",
      link: "",
    },
  ]);

  const [items, setItems] = useState(domestic);

  const handleItem = (item) => {
    setDuration(0);
    setScale(0.8);
    if (item === "Domestic") setItems(domestic);
    else if (item === "Supply Chain Solutions") setItems(supplyChain);
    else if (item === "International") setItems(international);
    else if (item === "Value Added Services") setItems(valueAddedServices);
    else setItems([]);
    setTimeout(() => {
      setDuration(0.5);
      setScale(1);
    }, 100);
  };
  return (
    <>
      
      <div className="absolute dropdown w-[100vw] left-0 ">
        <div
          className="absolute w-6 h-6 bg-white top-[0.4rem] right-[28%]"
          style={{ clipPath: "polygon(50% 0%, 0 68%, 100% 68%)" }}
        ></div>
        <div className="w-[17rem] h-12 absolute"></div>
        <div className=" pb-3 px-3 shadow-md graywhitegradient text-[#373737] text-xs w-full rounded-b-sm mt-1 absolute z-10 top-[0.9rem] xl:top-[0.8rem] left-[0px] flex flex-col  items-center h-[21rem]">
          <ul className="flex flex-col md:flex-row text-sm text-center gap-4 md:gap-12 mt-4 pt-4">
            {list.map((item, index) => (
              <li
                key={index}
                className={
                  selected === item
                    ? "font-semibold text-[#ED1C24] cursor-pointer"
                    : "cursor-pointer "
                }
                onClick={() => {
                  handleSelected(item);
                  handleItem(item);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
          <div>
            <div
              className={`flex justify-center items-center gap-[4rem] mt-10 flex-wrap  cursor-pointer pt-[1rem]  ${
                items.length !== 6 ? "max-w-[70rem]" : "max-w-[50rem]"
              }`}
            >
              {items.map((item, index) => (
                <div
                  key={index}

                  // data-aos="zoom-in" data-aos-delay={delay}
                >
                  <div className="hidden">{(delay += 200)}</div>
                  <Link href={item.link}>
                    <a>
                      <div className="flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-75 mt-[-2rem]">
                        <img
                          src={item.img}
                          alt=""
                          className="h-[3rem] max-w-[4rem] object-contain"
                        />
                        <p className="text-sm w-[9rem] mt-1 ">{item.name}</p>
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformDropdown;
