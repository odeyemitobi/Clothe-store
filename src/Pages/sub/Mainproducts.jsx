import React, { useState } from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import Chanel1 from "../../Assets/images/chanel1.jpg";
import Chanel2 from "../../Assets/images/chanel2.jpg";
import { ACTIVEIMG } from "./../../misc/activeimg";
import CartBtn from './../../components/button/CartBtn';

function Mainproducts() {
  const [slide, setSlide] = useState(ACTIVEIMG);
  const [quantity, setQuantity] = useState(1);

  const prevSlide = () => {
    const newSlide = [];
    for (let i = 0; i < slide.length; i++) {
      if (i !== 0) {
        newSlide.push(slide[i]);
      }
    }
    newSlide.push(slide[0]);
    setSlide(newSlide);
  };

  const nextSlide = () => {
    const newSlide = [];
    for (let i = 0; i < slide.length; i++) {
      if (i === 0) {
        newSlide.push(slide[slide.length - 1]);
      } else {
        newSlide.push(slide[i - 1]);
      }
    }
    setSlide(newSlide);
  };

  return (
    <Mainlayout>
      <div className="py-5 px-12 gap-12 flex">
        <div className=" flex-1 flex gap-5">
          <div className="flex-1">
            <img
              onClick={nextSlide}
              className="w-full h-[14rem] cursor-pointer object-cover mb-2"
              src={Chanel1}
              alt=""
            />
            <img
              onClick={prevSlide}
              className="w-full h-[13rem] cursor-pointer object-cover mb-2"
              src={Chanel2}
              alt=""
            />
          </div>
          <div className="flowkey">
            <img
              className="h-[50rem] w-full object-cover max-h-full"
              src={slide[Math.floor(slide.length / 2)].image}
              alt=""
            />
          </div>
        </div>
        <div className="flex-1">
          <h1 className="font-semibold text-2xl">Tittle</h1>
          <span className="text-blue-500 font-semibold">$100</span>
          <p>
            Channel perfume with very good frangrance that last long for more
            than 24hours and frangrance stays after washing
          </p>
          <div className="">
            <button
              className="bg-red-400 p-2"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button
              className="bg-green-400 p-2"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div>
            <CartBtn>Add to cart</CartBtn>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Mainproducts;
