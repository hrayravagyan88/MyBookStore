import React from "react";
import { assets } from "../assets/assets";

const OurStory = () => {
  return (
    <div className="mx-auto container mt-4">
    <div className="container mx-auto mb-6 flex justify-center text-xl">
      <div className="forImage ">
        <img className=" w-full " src={assets.WhereAreYou} />
        <p className="TextInpic">Հեքիաթ, որտեղ գլխավոր հերոսը դու ես</p>
      </div>
    </div>
     <div className="grid grid-cols-2 gap-2">
        <div className="picDiv"> 
            <img src={assets.TeamPic} />
        </div>
        <div className="textDiv"><p>Դառնալով հեքիաթի մի մասնիկը՝ գունեղ երևակայությունն ու պատկերազարդ արկածները երեխային տանում են իր հեքիաթների աշխարհ՝
             <br/>հաղթահարելու փորձություններ և ձևավորելու նոր արժեքներ:
             <br/>Մեր հեքիաթները նախատեսված են բոլոր տարիքի երեխաների համար։ 
             <br/> <br/>    <strong> Դարձի՜ր հերոս մեր հեքիաթում</strong>
             </p>
        </div>
     </div>
    </div>

  );
};

export default OurStory;
