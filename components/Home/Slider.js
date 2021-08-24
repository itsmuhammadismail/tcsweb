import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

const slides = [
  {
    id: 1,
    heading: "World Down Syndrome Day Compaign 2021",
    para: `This year for the World Down Syndrome Day Campaign 2021, KDSP
        distributed the, 'Carnival in a Box,' so the families could
        celebrate and enjoy the occasion safely.`,
    img1: "/Home/slider/img1.png",
    img2: "/Home/slider/img2.png",
    img3: "/Home/slider/img3.png",
  },
  {
    id: 2,
    heading: "International Women's Day",
    para: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat`,
    img1: "/Home/slider/img2.1.png",
    img2: "/Home/slider/img2.2.png",
    img3: "/Home/slider/img2.3.png",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState({
    id: slides[0].id,
    heading: slides[0].heading,
    para: slides[0].para,
    heading: slides[0].heading,
    img1: slides[0].img1,
    img2: slides[0].img2,
    img3: slides[0].img3,
  });

  // const [count, setCount] = useState(0);

  const next = () => {
    slide.id === slides.length
      ? setSlide(slides[0])
      : setSlide(slides[slide.id]);
  };

  const prev = () => {
    slide.id === 1
      ? setSlide(slides[slides.length - 1])
      : setSlide(slides[slide.id - 2]);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((c) => c + 1);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   next();
  // }, [count]);

  return (
    <Fade right>
      <div className="flex-1  self-end max-w-[45rem]">
        <div className="bg-[#ED1C24] text-white rounded-l-md px-[6rem] pb-[3rem] pt-[6rem] h-[15rem]">
          <div className="relative flex gap-1">
            <div className="absolute top-[-13rem] ">
              <img
                src={slide.img1}
                alt=""
                className="w-[10rem] object-contain"
              />
            </div>
            <div className="absolute top-[-16.7rem] left-[10.2rem]">
              <img
                src={slide.img2}
                alt=""
                className="w-[12rem] object-contain"
              />
            </div>
            <div className="absolute top-[-13rem] left-[22.4rem] ">
              <img
                src={slide.img3}
                alt=""
                className="w-[8rem] object-contain "
              />
            </div>
            <div className="absolute top-[-3rem] left-[26rem] cursor-pointer ">
              <KeyboardArrowLeftIcon style={{ fontSize: 40 }} onClick={prev} />
              <KeyboardArrowRightIcon style={{ fontSize: 40 }} onClick={next} />
            </div>
          </div>
          <div className="max-w-[31rem] ">
            <h2 className="font-bold text-xl mb-1 text-white">
              {slide.heading}
            </h2>
            <p className="text-sm">{slide.para}</p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Slider;
