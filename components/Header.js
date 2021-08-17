import Nav from "./Nav";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import Link from "next/link";
import Dropdown from "./Dropdown";
import { useState } from "react";

const Header = () => {
  const [searched, setSearched] = useState(false);
  const handleSearch = () => {
    setSearched(true);
  };
  return (
    <header className="bg-[#F21E26] pt-4 pb-4">
      <div className="lg:container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <a>
            <img src="/TCS.svg" alt="" className="w-[9rem]" />
          </a>
        </Link>
        <div className="text-white text-sm font-light flex-col hidden lg:flex">
          <div className="flex gap-6 mb-2 self-end">
            <div className="nav cursor-pointer">
              Pakistan <KeyboardArrowDownIcon />
              <Dropdown items={["UAE", "UK"]} />
            </div>

            {searched ? (
              <div className="flex  items-center">
                <SearchIcon fontSize="small" className="relative left-7" />
                <input
                  type="text"
                  placeholder={`Search text here`}
                  className="bg-[#e2141b] text-white text-xs px-2 py-[0.25rem] pl-8 placeholder focus:outline-none"
                />
              </div>
            ) : (
              <SearchIcon onClick={handleSearch} />
            )}
          </div>
          <Nav />
        </div>
        <div className="lg:hidden">
          <MenuIcon className="text-white" fontSize="large" />
        </div>
      </div>
    </header>
  );
};

export default Header;
