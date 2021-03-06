import Link from "next/link";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Dropdown from "./Dropdown";
import PlatformDropdown from "./PlatformDropdown";

const Nav = () => {
  return (
    <nav className="">
      <ul className="flex gap-4 items-center">
        <Link href="/track">
          <a>
            <li className="cursor-pointer relative nav">Track</li>
          </a>
        </Link>
        <li className="cursor-pointer relative nav ">
          <Link href="/tcs-kardo">
            <a>
              <div className="flex justify-center items-center">TCS Kardo</div>
            </a>
          </Link>
        </li>

        <li className="cursor-pointer nav ">
          <div className="flex justify-center items-center">
            Platform Solutions
            <KeyboardArrowDownIcon />
          </div>
          {/* <Dropdown
            items={{
              Domestic: [
                "Express",
                "Overlad Express",
                "Freight",
                "Sentiments Express",
                "Studio by TCS",
              ],
              International: [
                "Express",
                "Freight",
                "Cross Border E-commerce",
                "Regional Trucking (TIR)",
                "TCS UAE",
                "TCS United Kingdom",
                "Sentiments Express",
                "Studio by TCS",
              ],
              "Supply Chain Solutions": [
                "Warehousing & Distribution",
                "ECOM Solutions",
                "PackNGo",
                "TCS Cool Control",
                "TCS Hazir",
                "TCS Fresh",
                "TCS Cares",
                "TCS Fashion",
                "TCS Air",
                "Mail Management Solutions",
              ],
              "Value Added Services": [
                "Digital Printing",
                "Financial Services",
                "TCS Insights",
                "Travel & Tours",
                "TCS Developer Kit / APIs",
                "TCS for Business",
              ],
            }}
          /> */}

          <PlatformDropdown />
        </li>
        <div className="backdropdown absolute left-0 right-0 bottom-0 top-[20rem] bg-black z-10 opacity-50"></div>
        <Link href="/customer-services">
          <a>
            <li className="cursor-pointer">Customer Services</li>
          </a>
        </Link>
        <Link href="/login">
          <a>
            <button className="bg-[#CC1219] w-[8rem] h-7 rounded-sm cursor-pointer transition-all duration-500 gradientbg">
              Login
            </button>
          </a>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
