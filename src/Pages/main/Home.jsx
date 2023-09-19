import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import Slider from "../../components/Slider/Slider";
import Chanel1 from "../../Assets/images/chanel1.jpg";
import Chanel2 from "../../Assets/images/chanel2.jpg";
import Her1 from "../../Assets/images/her1.jpg";
import Her2 from "../../Assets/images/her2.jpg";
import Bent1 from "../../Assets/images/bent1.jpg";
import Bent2 from "../../Assets/images/bent2.jpg";
import Para1 from "../../Assets/images/paradise1.jpg";
import Para2 from "../../Assets/images/paradise2.jpg";

function Home() {
  return (
    <Mainlayout>
      <div>
        <div>
          <Slider />
        </div>
        <div>
          <div className="mx-[200px] my-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl flex-[2] cap">
                Featured Products
              </h1>
              <p className="flex-[3] text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolores beatae recusandae. Voluptatibus vel
                blanditiis officia reprehenderit, distinctio commodi magnam illo
                doloremque quaerat, harum similique obcaecati voluptate ipsa
                adipisci corrupti.
              </p>
            </div>
            <div className="flex justify-center gap-[50px] pt-12">
              <div className="w-[280px] flex flex-col gap-2">
                <div className="w-full h-[400px] overflow-hidden relative cursor-pointer joe">
                  <img
                    className="w-full h-full object-cover absolute mainImg"
                    src={Chanel1}
                    alt="chanel1"
                  />
                  <img
                    className="w-full h-full object-cover absolute secondImg"
                    src={Chanel2}
                    alt="chanel2"
                  />
                </div>
                <h2 className="font-bold">Chanel Perfume</h2>
                <div className="font-bold flex">
                  <h3>$7</h3>
                  <h3 className="pl-3">$5</h3>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2">
                <div className="w-full h-[400px] overflow-hidden relative cursor-pointer">
                  <img
                    className="w-full h-full object-cover absolute z-[1]"
                    src={Her1}
                    alt="her1"
                  />
                  <img
                    className="w-full h-full object-cover absolute hover:z-[2]"
                    src={Her2}
                    alt="her2"
                  />
                </div>
                <h2 className="font-bold">Her Body Spray</h2>
                <div className="font-bold flex">
                  <h3>$7</h3>
                  <h3 className="pl-3">$5</h3>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2">
                <div className="w-full h-[400px] overflow-hidden relative cursor-pointer">
                  <img
                    className="w-full h-full object-cover absolute z-[1]"
                    src={Bent1}
                    alt="bent1"
                  />
                  <img
                    className="w-full h-full object-cover absolute hover:z-[2]"
                    src={Bent2}
                    alt="bent2"
                  />
                </div>
                <h2 className="font-bold">Bentley Perfume</h2>
                <div className="font-bold flex">
                  <h3>$7</h3>
                  <h3 className="pl-3">$5</h3>
                </div>
              </div>

              <div className="w-[280px] flex flex-col gap-2">
                <div className="w-full h-[400px] overflow-hidden relative cursor-pointer">
                  <img
                    className="w-full h-full object-cover absolute z-[1]"
                    src={Para1}
                    alt="para1"
                  />
                  <img
                    className="w-full h-full object-cover absolute hover:z-[2]"
                    src={Para2}
                    alt="para2"
                  />
                </div>
                <h2 className="font-bold">Paradise Perfume</h2>
                <div className="font-bold flex">
                  <h3>$7</h3>
                  <h3 className="pl-3">$5</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-[200px] my-[100px]">
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-2xl flex-[2] cap">
                Trending Products
              </h1>
              <p className="flex-[3] text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptates dolores beatae recusandae. Voluptatibus vel
                blanditiis officia reprehenderit, distinctio commodi magnam illo
                doloremque quaerat, harum similique obcaecati voluptate ipsa
                adipisci corrupti.
              </p>
            </div>
            <div className="flex justify-center gap-[50px] pt-12">
              <div>Cards</div>
              <div>Cards</div>
              <div>Cards</div>
              <div>Cards</div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;
