import React from "react";
import Mainlayout from "../../Layouts/Mainlayout";
import Chanel1 from "../../Assets/images/chanel1.jpg";
import Chanel2 from "../../Assets/images/chanel2.jpg";

function Mainproducts() {

  return (
    <Mainlayout>
      <div>
        <div>
            <div className="">
              <div className="">
                <div>{Chanel1}</div>
                <div>{Chanel2}</div>
              </div>
              <div>{Chanel1}</div>
            </div>
        </div>
        <div></div>
      </div>
    </Mainlayout>
  );
}

export default Mainproducts;
