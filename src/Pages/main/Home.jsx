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
import Wine from "../../Assets/pictures/wines.jpg";
import Women from "../../Assets/pictures/womens.jpg";
import Men from "../../Assets/pictures/mens.jpg";
import Ute from "../../Assets/pictures/utensils.jpg";
import Baby from "../../Assets/pictures/bbyfood.jpg";
import Cloth from "../../Assets/pictures/clothes.jpg";

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
                <div className="w-full overflow-hidden relative cursor-pointer joe">
                  <img className="w-full h-full" src={Chanel1} alt="chanel1" />
                  <div className="overlay">
                    <img
                      className="w-full h-full"
                      src={Chanel2}
                      alt="chanel2"
                    />
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

          <div className="flex h-[80vh] gap-3 m-3">
            <div className=" flex-1 flex flex-col gap-3">
              <div className="flex-1 flex gap-3 relative overflow-hidden">
                <img className="w-full h-full object-cover" src={Wine} alt="" />
              </div>
              <div className="flex-1 flex gap-3 relative overflow-hidden">
                <img className="w-full h-full object-cover" src={Ute} alt="" />
              </div>
            </div>
            <div className=" flex-1 flex flex-col gap-3">
              <div className="flex-1 flex gap-3 relative overflow-hidden">
                <img className="w-full h-full object-cover" src={Baby} alt="" />
              </div>
            </div>
            <div className="feye2 flex-1 flex flex-col gap-3">
              <div className="flex-1 flex gap-3 relative overflow-hidden">
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex-1 flex gap-3 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={Cloth}
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex-1 flex gap-3 relative overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={Women}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex gap-3 relative overflow-hidden">
                <img className="w-full h-full object-cover" src={Men} alt="" />
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
              <div className="w-[280px] flex flex-col gap-2">
                <div className="w-full overflow-hidden relative cursor-pointer joe">
                  <img className="w-full h-full" src={Chanel1} alt="chanel1" />
                  <div className="overlay">
                    <img
                      className="w-full h-full"
                      src={Chanel2}
                      alt="chanel2"
                    />
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
        </div>
      </div>
    </Mainlayout>
  );
}

export default Home;
