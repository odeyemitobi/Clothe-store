import React from "react";
import Chanel1 from "../../Assets/images/chanel1.jpg";
import Chanel2 from "../../Assets/images/chanel2.jpg";
import Her1 from "../../Assets/images/her1.jpg";
import Her2 from "../../Assets/images/her2.jpg";
import Bent1 from "../../Assets/images/bent1.jpg";
import Bent2 from "../../Assets/images/bent2.jpg";
import Para1 from "../../Assets/images/paradise1.jpg";
import Para2 from "../../Assets/images/paradise2.jpg";

function List() {
  return (
    <div className="">
      <div className="flex justify-between flex-wrap">
        <div className="w-[280px] flex flex-col gap-2">
          <div className="w-full overflow-hidden relative cursor-pointer joe">
            <img className="w-full h-full" src={Chanel1} alt="chanel1" />
            <div className="overlay">
              <img className="w-full h-full" src={Chanel2} alt="chanel2" />
            </div>
          </div>
          <h2 className="font-bold">Chanel Perfume</h2>
          <div className="font-bold flex gap-5">
            <h3 className="text-gray-500 line-through">$7</h3>
            <h3>$5</h3>
          </div>
        </div>

        <div className="w-[280px] flex flex-col gap-2">
          <div className="w-full overflow-hidden relative cursor-pointer joe">
            <img className="w-full h-full" src={Her1} alt="Her1" />
            <div className="overlay">
              <img className="w-full h-full" src={Her2} alt="Her2" />
            </div>
          </div>
          <h2 className="font-bold">Chanel Perfume</h2>
          <div className="font-bold flex gap-5">
            <h3 className="text-gray-500 line-through">$7</h3>
            <h3>$5</h3>
          </div>
        </div>

        <div className="w-[280px] flex flex-col gap-2">
          <div className="w-full overflow-hidden relative cursor-pointer joe">
            <img className="w-full h-full" src={Bent1} alt="Bent1" />
            <div className="overlay">
              <img className="w-full h-full" src={Bent2} alt="Bent2" />
            </div>
          </div>
          <h2 className="font-bold">Chanel Perfume</h2>
          <div className="font-bold flex gap-5">
            <h3 className="text-gray-500 line-through">$7</h3>
            <h3>$5</h3>
          </div>
        </div>

        <div className="w-[280px] flex flex-col gap-2">
          <div className="w-full overflow-hidden relative cursor-pointer joe">
            <img className="w-full h-full" src={Para1} alt="Para1" />
            <div className="overlay">
              <img className="w-full h-full" src={Para2} alt="Para2" />
            </div>
          </div>
          <h2 className="font-bold">Chanel Perfume</h2>
          <div className="font-bold flex gap-5">
            <h3 className="text-gray-500 line-through">$7</h3>
            <h3>$5</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
