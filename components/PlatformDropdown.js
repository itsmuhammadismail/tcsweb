import Link from "next/link";
import { useState } from "react";
import PlatformSolutionBox from "./Home/PlatformSolutionBox";
import Fade from "react-reveal/Fade";

let delay = 0;
let listDelay = 200;
const PlatformDropdown = () => {
  const [selected, setSelected] = useState("Domestic");

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
    {
      name: "Express",
      img: "/Home/domestic/express.svg",
      link: "/domestic/express",
    },
    {
      name: "Overland Express",
      img: "/Home/domestic/overlandExpress.svg",
      link: "/domestic/overland-express",
    },
    {
      name: "Frieght",
      img: "/Home/domestic/freight.svg",
      link: "",
    },
    {
      name: "Sentiments Express",
      img: "/Home/domestic/sentiments.svg",
      link: "/domestic/sentiments-express",
    },
    {
      name: "Studio by TCS",
      img: "/Home/domestic/studio.svg",
      link: "/domestic/studio-by-tcs",
    },
  ]);

  const [international, setInternational] = useState([
    {
      name: "Express",
      img: "/Home/domestic/express.svg",
      link: "/international/express",
    },
    {
      name: "Frieght",
      img: "/Home/international/freight.svg",
      link: "/international/freight",
    },
    {
      name: "Cross-Border E-commerce",
      img: "/Home/international/cross-border.svg",
      link: "",
    },
    {
      name: "Regional Trucking (TIR)",
      img: "/Home/international/regional.svg",
      link: "/international/regional-trucking",
    },
    {
      name: "TCS UAE",
      img: "/Home/international/uae.png",
      link: "/international/tcs-uae",
    },
    {
      name: "TCS United Kingdom",
      img: "/Home/international/uk.png",
      link: "/international/tcs-uk",
    },
    {
      name: "Sentiments Express",
      img: "/Home/international/sentiments.svg",
      link: "/international/sentiments-express",
    },
    {
      name: "Studio by TCS",
      img: "/Home/international/studio.png",
      link: "/international/studio-by-tcs",
    },
  ]);

  const [supplyChain, setSupplyChain] = useState([
    {
      name: "Ware Housing & Distribution",
      img: "/Home/supplyChain/warehousing.svg",
      link: "/supply-chain/warehousing",
    },
    { name: "Ecom Solutions", img: "/Home/supplyChain/ecom.svg", link: "/supply-chain/ecom-solutions" },
    { name: "PackNGo", img: "/Home/supplyChain/packNGo.svg", link: "/supply-chain/pack-n-go" },
    {
      name: "TCS Cool Control",
      img: "/Home/supplyChain/tcsCoolControl.svg",
      link: "/supply-chain/tcs-cool-control",
    },
    { name: "TCS Hazir", img: "/Home/supplyChain/tcsHazir.svg", link: "/supply-chain/tcs-hazir" },
    { name: "TCS Fresh", img: "/Home/supplyChain/tcsFresh.svg", link: "/supply-chain/tcs-fresh" },
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
      link: "/value-added-services/financial-services",
    },
    {
      name: "TCS Insights",
      img: "/Home/valueAddedServices/insights.svg",
      link: "",
    },
    {
      name: "Travel & Tours",
      img: "/Home/valueAddedServices/travelAndTour.svg",
      link: "/value-added-services/travel-and-tour",
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

  const [items, setItems] = useState("Domestic");

  const handleItem = (item) => {
    setItems(item);
  };

  return (
    <>
      <div className="absolute dropdown w-[100vw] left-0 mt-[-1rem] pt-[1rem]">
        <div className="relative w-full h-[4rem] max-w-[70rem] mx-auto ">
          <div className="absolute dropdown-inner h-[4rem] w-[9rem] right-[19rem]">
            <div
              className="absolute w-6 h-6 bg-white top-[0.4rem] right-[4.5rem]"
              style={{ clipPath: "polygon(50% 0%, 0 68%, 100% 68%)" }}
            ></div>
          </div>
        </div>

        <div className="w-[17rem] h-12 absolute"></div>
        <div className="pb-3 px-3 shadow-md graywhitegradient text-[#373737] text-xs w-full rounded-b-sm mt-[1.3rem] absolute z-10 top-[0.9rem] xl:top-[0.8rem] left-[0px] flex flex-col  items-center h-[21rem] height-animation">
          <ul className="flex flex-col md:flex-row text-sm text-center gap-4 md:gap-12 mt-4 pt-4">
            {list.map((item, index) => (
              <Fade up key={index} delay={listDelay}>
                <li
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
              </Fade>
            ))}
            <div className="hidden">{(listDelay = 0)}</div>
          </ul>
          <div>
            {items === "Domestic" && <PlatformSolutionBox items={domestic} />}
            {items === "International" && (
              <PlatformSolutionBox items={international} />
            )}
            {items === "Supply Chain Solutions" && (
              <PlatformSolutionBox items={supplyChain} />
            )}
            {items === "Value Added Services" && (
              <PlatformSolutionBox items={valueAddedServices} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformDropdown;
