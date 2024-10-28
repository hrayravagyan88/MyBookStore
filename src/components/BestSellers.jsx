import React, { useState, useContext, useEffect } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import ProductItem from "./productItem";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestSeller);
    setBestSeller(bestProduct);
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"Best "} text2={"Sellers"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm text-gray-600 md:text-base">
          es amis vacharvac top grqer
        </p>
      </div>
      <div className="grid grid-cols-2 sm: grid-cols-3 md: grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
              <Link key= {index} className="text-gray-700 cursor-pointer" to={`/product/${2}`}>
              <div>  
                <img src={assets.Lion} className="cartImage"></img>
                <h5
                  className="Card__title"
                  data-uw-rm-heading="level"
                  role="heading"
                  aria-level="3"
                >
                  When You Were Born
                </h5>
                <div className="Card__body">Over 30 classic rhymes… personalized!</div>
              </div>
              <div className="Card_button">
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center Card_button">
                <span>Personalize</span>
              </button>
              </div>
              </Link>
        ))}
      </div>
 
    </div>
  );
};

export default BestSellers;
