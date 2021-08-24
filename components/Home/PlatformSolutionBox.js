import { useEffect, useState } from "react";
import Link from "next/link";
import Zoom from "react-reveal/Zoom";

let delay = 300;
const PlatformSolutionBox = ({ items }) => {
  return (
    <div
      className={`flex justify-center items-center gap-[4rem] mt-10 flex-wrap pt-[2rem] cursor-pointer  ${
        items.length > 6
          ? "max-w-[70rem]"
          : items.length === 6
          ? "max-w-[50rem]"
          : "max-w-[40rem]"
      }`}
    >
      {items.map((item, index) => (
        <Zoom delay={delay} key={index}>
          <div>
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
        </Zoom>
      ))}
      <div className="hidden">{(delay = 0)}</div>
    </div>
  );
};

export default PlatformSolutionBox;
