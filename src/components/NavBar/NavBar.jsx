import React from "react";
import flag from "../../Assets/pic/fgn.png";
import { useNavigate } from "react-router";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import { PersonOutlineOutlined } from "@mui/icons-material";

function NavBar() {
  const navigate = useNavigate();

  return (
    <div className=" bg-black">
      <div className="h-[80px] text-white">
        <div className="flex justify-between py-[10px] px-[30px]">
          <div className="flex items-center cursor-pointer gap-6">
            <div className="flex items-center">
              <img className="h-4" src={flag} alt="flag" />
              <FiChevronDown />
            </div>
            <div className="flex items-center">
              <h1>USD</h1>
              <FiChevronDown />
            </div>
            <div onClick={() => navigate("/cosmetics")}>
              <h1>Perfumes</h1>
            </div>
            <div onClick={() => navigate("/wine")}>
              <h1>Wine</h1>
            </div>
            <div onClick={() => navigate("/children")}>
              <h1>Children</h1>
            </div>
            <div onClick={() => navigate("/accessories")}>
              <h1>Accessories</h1>
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="first text-[30px] font-bold cursor-pointer tracking-[2px]">
              TESTIMONYSTORE
            </h1>
          </div>
          <div className="flex items-center gap-6">
            <div
              onClick={() => navigate("/homepage")}
              className="cursor-pointer"
            >
              Homepage
            </div>
            <div onClick={() => navigate("/about")} className="cursor-pointer">
              About
            </div>
            <div
              onClick={() => navigate("/contact")}
              className="cursor-pointer"
            >
              Contact
            </div>
            <div onClick={() => navigate("/stores")} className="cursor-pointer">
              Stores
            </div>
            <div className="flex items-center gap-4 text-[#777]">
              <AiOutlineSearch size={20} />
              <PersonOutlineOutlined />
              <MdOutlineFavoriteBorder size={20} />
              <div className="flex items-center relative">
                <MdOutlineShoppingCart size={20} />
                <span className="w-5 absolute text-[12px] h-5 rounded-[50%] bg-[#2879fe] text-white right-[-10px] top-[-10px] justify-center items-center flex">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
