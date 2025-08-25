import { useEffect, useState, useRef } from "react";
import Img1 from "@/assets/slider1.jpg";
import Img2 from "@/assets/slider2.jpg";
import Img3 from "@/assets/slider3.jpg";
import Carousel from "@/components/Carousel";

const LeftSlider = () => {
  return (
    <Carousel
      showDot={true}
      autoPlaySpeed={3000}
      itemClass=""
      containerClass="max-h-[350px]"
      infinite={true}
    >
      <img src={Img1} alt="" className="w-full h-full object-cover" />
      <img src={Img2} alt="" className="w-full h-full object-cover" />
      <img src={Img3} alt="" className="w-full h-full object-cover" />
    </Carousel>
  );
};

export default LeftSlider;
