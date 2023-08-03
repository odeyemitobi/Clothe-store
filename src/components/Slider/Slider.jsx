import React from "react";
import NATH from "../../Assets/img/nath.jpg";
import BBY from "../../Assets/img/bbyfood.jpg";
import JUICE from "../../Assets/img/juice.jpg";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { useState } from "react";

function Slider() {
  const [activeSlide, setActiveSlide] = useState(0)

  const prevSlide = () => {
    setActiveSlide(activeSlide === NATH ? JUICE : (prev) => prev - BBY);
  }

  const nextSlide = () => {
    setActiveSlide(activeSlide === JUICE ? NATH : (prev) => prev + BBY);
  }

  return (
    <div className="w-[100vw] relative sly">
      <div
        className="w-[300vw] h-full flex"
        style={{ transform: `translateX(-${activeSlide * 100}vw)` }}
      >
        <img className="w-[100vw] h-full object-cover" src={NATH} alt="" />
        <img className="w-[100vw] h-full object-cover" src={BBY} alt="" />
        <img className="w-[100vw] h-full object-cover" src={JUICE} alt="" />
      </div>
      <div className="w-fit flex absolute left-0 right-0 gap-[10px] m-auto bottom-[100px]">
        <div
          onClick={prevSlide}
          className="w-[50px] h-[50px] cursor-pointer border-[1px] border-solid border-[#999] flex items-center justify-center"
        >
          <GoArrowLeft size={30} />
        </div>
        <div
          onClick={nextSlide}
          className="w-[50px] h-[50px] cursor-pointer border-[1px] border-solid border-[#999] flex items-center justify-center"
        >
          <GoArrowRight size={30} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
