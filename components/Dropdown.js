const Dropdown = ({ items }) => {
  if (!Array.isArray(items)) {
    Object.keys(items).map((k, index) => {
      console.log(k);
    });
  }

  return Array.isArray(items) ? (
    <div className="absolute dropdown">
      <div
        className="absolute w-6 h-6 bg-white top-[0.1rem] left-3"
        style={{ clipPath: "polygon(50% 0%, 0 68%, 100% 68%)" }}
      ></div>
      <div className="w-[17rem] h-12 absolute"></div>
      <div className="py-3 shadow-md bg-white text-[#373737] text-xs w-[4.8rem] rounded-b-sm mt-1 relative z-10 top-[0.25rem]">
        <ul className="">
          {items.map((item, index) => (
            <li key={index} className="py-[0.3rem] px-3  hover:bg-[#e1e1e1]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div className="absolute dropdown w-[90vw] right-[4rem]">
      {/* <div
        className="absolute w-6 h-6 bg-white top-[0.25rem] right-[22rem]"
        style={{ clipPath: "polygon(50% 0%, 0 68%, 100% 68%)" }}
      ></div>
      <div className="w-[17rem] h-12 absolute"></div>
      <div className=" pb-3 px-3 shadow-md bg-white text-[#373737] text-xs w-full rounded-b-sm mt-1 absolute z-10 top-[0.9rem] left-[0px]">
        <ul>
          <div className="flex">
            {Object.keys(items).map((k, index) => (
              <div key={index} className="flex-1  ">
                <p className="p-3 font-bold cursor-default">{k}</p>
                {console.log(items[k])}
                {items[k].map((d, index) => (
                  <li
                    key={index}
                    className="py-[0.3rem] px-3  hover:bg-[#e1e1e1]"
                  >
                    {d}
                  </li>
                ))}
              </div>
            ))}
          </div>
        </ul>
      </div> */}

    </div>
  );
};

export default Dropdown;
