import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { FloatLabel } from "primereact/floatlabel";
import SumbmissionModal from "./SumbmissionModal";

export default function FloatLabelDemo() {
  const [details, setDetails] = useState({
    address: "",
    phone: "",
    delivery:true
  });
  const cities = [
    { name: "Yerevan " },
    { name: "Gyumri", code: "RM" },
    { name: "Kapan", code: "LDN" },
    { name: "Vanadzor", code: "IST" },
    { name: "Abovyan (", code: "PRS" },
    { name: "Vagharshapat", code: "PRS" },
    { name: "Hrazdan", code: "PRS" },
    { name: "Armavir ", code: "PRS" },
    { name: "Ijevan  ", code: "PRS" },
  ];
  const [showModal,setShowModal] = useState(false)
  const handleChange = (e, name) => {
    setDetails({
      ...details,
      [name]: e.target.value,
    });
  };
  const changeModal =()=>{
    setShowModal(false)
  }

  return (
    <div className="container mx-auto">
    <div className="border-t-2 pt-10 " style= {{'margin':'0 auto', 'width':'1500px'}}></div>
    <div className= "flex justify-center text-xl mb-6" >
        <h1>Address and Payment</h1>
      </div>
    <div className="flex flex-col address">
   
      <div className="mb-6">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Choose your city
          </label>
          <select
            onChange={(e) => handleChange(e, "address")}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Select Your City From The List </option>
            {cities.map((city,index) => (
              <option  key ={index} value={city.name}>{city.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Address
        </label>
        <input
          onChange={(e) => handleChange(e, "phone")}
          type="text"
          id="phone"
          style = {{'minWidth':'725px'}}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="street/appartement"
          required
        />
      </div>
      <div className="mb-6 flex items-center mb-4">
      <input id="disabled-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
        <label
          style = {{'minWidth':'500px' ,'fontSize':'medium'}}
          htmlFor="email"
          className="block ml-2  text-sm font-medium text-gray-900 dark:text-white"
        >
         Books will be available within 10 working days
        </label>
        
      </div>
      <button
            style = {{'width':'140px'}}
            type="submit"
            onClick = {()=> setShowModal(true)}
            className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
           Pay Button
          </button>
  { showModal &&<SumbmissionModal changeModal={changeModal}/>}
    </div>
    </div>
  );
}
