import { useState } from "react";
import PlatformSolutionBox from "./PlatformSolutionBox";
import Fade from "react-reveal/Fade";

let listDelay = 200;
const PlatformSolution = () => {
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
    { name: "Express", img: "/Home/domestic/express.svg", link: "" },
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

  const [items, setItems] = useState("Domestic");

  const handleItem = (item) => {
    setItems(item);
  };

  return (
    <div className="lg:container mx-auto grid justify-items-center content-start my-[5rem] mt-[7rem] xl:h-[50vh] ">
      <Fade left>
        <h1 className="font-bold text-4xl text-[#373737]">Platform Solution</h1>
      </Fade>
      <Fade left delay={300}>
        <hr className="hr" />
      </Fade>
      <ul className="flex flex-col md:flex-row text-sm text-center gap-4 md:gap-12 mt-4">
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
            <div className="hidden">{(listDelay += 200)}</div>
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
  );
};

export default PlatformSolution;
