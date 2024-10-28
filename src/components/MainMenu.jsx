import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import Title from "./Title";
import FirstSvg from './ICONSVG/FirstSvg';
import SecondSvg from "./ICONSVG/SecondSvg";
import ThirsSvg from "./ICONSVG/ThirsSvg";
import FourthSvg from "./ICONSVG/FourthSvg";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const LatestCollections = () => {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 4));
  }, []);

  return (
    <div className="my-10">
      <div className="text-3xl">
        <Title text1={"Who do you want to make a book for today"} text2={"?"} />
      </div>

    

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols:5 gap 4 gap-y-6 mt-7">
        {latestProduct.map((item, index) => (
               <Link key= {index} className="text-gray-700 cursor-pointer" to={`/product/${2}`}>
               <div>  
                 <img src={assets.Lion} className="cartImage"></img>
               </div>
               </Link>
        ))}
      </div>
      <div className="SectionHeading">
        <div className="container-guttered">
          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <FirstSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <SecondSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <ThirsSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

          <div className="value-prop-ii">
            <div className="value-prop-ii-shape">
              <FourthSvg />
            </div>
            <div className="value-prop-ii-content" >
              <h4 className= 'font-medium'>Find a book they’ll love</h4>
              <div className="rich-text ">
                <span>
                  <p>Browse the bookshop for the perfect story</p>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LatestCollections;
