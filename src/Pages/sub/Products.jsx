import React from "react";
import { useState } from "react";
import { useParams } from "react-router";
import Mainlayout from "../../Layouts/Mainlayout";
import Men from "../../Assets/pictures/mens.jpg";

function Products() {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  return (
    <Mainlayout>
      <div>
        <div>
          <div>
            <h1>Categories</h1>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="1"
                value={1}
              />
              <label htmlFor="1">Wine</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="2"
                value={2}
              />
              <label htmlFor="2">Utensils</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="3"
                value={3}
              />
              <label htmlFor="3">Baby food</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="4"
                value={4}
              />
              <label htmlFor="4">Clothes</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="5"
                value={5}
              />
              <label htmlFor="5">Women Accessories</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="checkbox"
                id="6"
                value={6}
              />
              <label htmlFor="6">Men Accessories</label>
            </div>
          </div>
          <div>
            <h1>Filter</h1>
            <div>
              <span>0</span>
              <input
                className="cursor-pointer"
                type="range"
                min={0}
                max={1000}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
              <span>{maxPrice}</span>
            </div>
          </div>
          <div>
            <h1>Sort by</h1>
            <div>
              <input
                className="cursor-pointer"
                type="radio"
                id="low"
                value="low"
                name="price"
                onChange={(e) => setSort("low")}
              />
              <label htmlFor="low">Price (Lowest first)</label>
            </div>
            <div>
              <input
                className="cursor-pointer"
                type="radio" 
                id="high"
                value="high"
                name="price"
                onChange={(e) => setSort("high")}
              />
              <label htmlFor="high">Price (Highest first)</label>
            </div>
          </div>
        </div>
        <div>
          <img src={Men} alt="" />
        </div>
      </div>
    </Mainlayout>
  );
}

export default Products;
