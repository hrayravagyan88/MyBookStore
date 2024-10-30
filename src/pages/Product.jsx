import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { firestore } from "../../firebase";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import Globus from "../components/ICONSVG/Globus";
import GiftSvg from "../components/ICONSVG/Gift";
import Books from "../components/ICONSVG/BookSvg";
import { NavLink } from "react-router-dom";
import { MdArrowDownward } from "react-icons/md";
import { MdArrowUpward } from "react-icons/md";

const Product = () => {
  const { productId } = useParams();
  const { products, currency } = useContext(ShopContext);
  const [productData, setProductdata] = useState(false);
  const [fullImage, setFullImage] = useState("");
  const [expand, setExpand] = useState(true);

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductdata(item);
        setFullImage(item.images[0]);
        return null;
      }
    });
  };
  const buttonHandler = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="container mx-auto pt-10 trasition-opacity ease-in duration-500 opacity-100"
      style={{ marginRight: "135px", marginLeft: "135px" }}
    >
      <div className="flex gap-12 flex-col sm:flex-row">
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col flex-[0_0_20%] ">
            {productData.images.map((item, index) => (
              <img
                key={index}
                src={item}
                className="w-full h-[90px] object-cover flex-shrink-0 cursor-pointer mb-2"
                onClick={() => setFullImage(item)}
              />
            ))}
          </div>
          <div className="flex-[0_0_80%]">
            <img src={fullImage} className="w-full" />
          </div>
        </div>

        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.title}</h1>
          <br />
          <p
            className="Price-product text-lg"
            data-size="large"
            data-uw-rm-sr=""
          >
            $39.99 USD
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.longDescription}
          </p>
          <div className="container_box">
            <div className="flex mt-2">
              <Globus />
              <p className="ml-4 "> Best for ages 2 to 5</p>
            </div>

            <div className="flex mt-2">
              <GiftSvg />
              <p className="ml-4"> Best for ages 2 to 5</p>
            </div>
            <div className="flex mt-2">
              <Books />
              <p className="ml-4"> Best for ages 2 to 5</p>
            </div>
          </div>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <NavLink to="Contacting">
              {" "}
              <span>Personalize my Book</span>
            </NavLink>
          </button>
          <div className="mt-4 flex">
            <div className="Margin4">
              <button onClick={buttonHandler}>
                {expand ? <MdArrowUpward /> : <MdArrowDownward />}
              </button>
            </div>
            <div className="font-bold">Size and Quility</div>
          </div>
          {!expand ? (
            <div className="Margin4">
              <div className="text-gray-500">
                Every book is printed as a unique, one-off edition.We use thick,{" "}
                <br />
                high-quality paper sourced from sustainable forests
                (FSC-certified)
                <br />
                so it's good for our wonderful planet, too.
                <br />
                Available in softcover, super-sturdy hardcover, or luxurious
                layflat.
              </div>
              <ul className="a">
                <li>10+ Pages long</li>
                <li>Size : 9x9 *</li>
                <li>Made in Armenia</li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 mt-6">
        <div>
          <img
            className="Picture-img-aW1nU"
            src={assets.Mommy}
            width="625"
            height="491"
            alt="A page inside the personalised book"
            loading="lazy"
            data-uw-rm-alt-original="A page inside the personalised book"
            data-uw-rm-alt="ALT"
          />
        </div>
        <div className="InfoSection-content">
          {" "}
          <div className="InfoSection-text">
            {" "}
            <h3 className="InfoHead">When is a book not just a book?</h3>{" "}
            <p>
              When it includes a message of love to transform it into a
              treasured keepsake. Add your own dedication for free and we’ll
              print it on the first page, so every time they open their book,
              they remember just how loved they are.
            </p>{" "}
          </div>{" "}
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
