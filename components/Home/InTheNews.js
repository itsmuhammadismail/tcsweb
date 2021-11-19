import { useState } from "react";
import Fade from "react-reveal/Fade";

let delay = 500;
const InTheNews = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      heading: "TCS helps NED Student to complete their Degree",
      date: "Lahore: December 05,  2019",
      img: "/Home/news1.png",
    },
    {
      id: 2,
      heading: "HBL PSL 2019 go on Sale",
      date: "Lahore: December 25,  2020",
      img: "/Home/news2.png",
    },
    {
      id: 3,
      heading: "Are You A Wholesaler?",
      date: "Lahore: January 5,  2021",
      img: "/Home/news3.png",
    },
  ]);

  return (
    <div className="">
      <div className="max-w-[70rem] mx-auto flex justify-between  flex-col items-center py-[7rem] text-[#373737]">
        <Fade left>
          <h1 className="font-bold text-4xl max-w-[23rem] ">In The News</h1>
        </Fade>
        <Fade left delay={300}>
          <hr className="hr" />
        </Fade>
        <div className="flex flex-wrap gap-4 justify-center mt-[2rem]">
          {news.map((n) => (
            <Fade up key={n.id} delay={delay}>
              <div className="flex-1 w-full cursor-pointer news-card">
                <img src={n.img} alt="" />
                <h2 className="font-bold text-xl w-[15rem] my-2">
                  {n.heading}
                </h2>
                <p className="text-xs">{n.date}</p>
              </div>
              <div className="hidden">{(delay += 200)}</div>
            </Fade>
          ))}
          <div className="hidden">{(delay = 0)}</div>
        </div>
      </div>
    </div>
  );
};

export default InTheNews;
