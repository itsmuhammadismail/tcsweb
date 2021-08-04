import { useEffect, useState } from "react";
import Link from "next/link";

let delay = 0;
const PlatformSolutionBox = ({ items }) => {
  return (
    <div className="flex justify-center items-center gap-[4rem] mt-10 flex-wrap max-w-[70rem] cursor-pointer ">
      {items.map((item, index) => (
        <div key={index} data-aos="zoom-in" data-aos-delay={delay}>
          <div className="hidden">{(delay += 200)}</div>
          <Link href={item.link}>
            <a>
              <div className="flex flex-col justify-center items-center text-center transition-all duration-500 hover:scale-75">
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
  );
};

export default PlatformSolutionBox;
