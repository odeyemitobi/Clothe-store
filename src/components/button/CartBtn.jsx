import React from "react";

function CartBtn(props) {
  return (
    <button className="bg-blue-700 text-white text-xl font-normal py-3 px-12 rounded-xl">
      {props.children}
    </button>
  );
}

export default CartBtn;