import React from "react";

const DeliveryInfo = () => {
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

  const handleChange = (e, name) => {
    setDetails({
      ...details,
      [name]: e.target.value,
    });
  };

  return (
    <div className="container relative mx-auto w-full  ">
      <div className="titleDelivery text-center mx-auto mt-8 mb-4">
        {" "}
        <h1>Delivery Information</h1>
      </div>
      <div>
        <span>
          <strong>How long will it take to get my order?</strong>
          <br />
          Our delivery times differ depending where in the world we're sending
          your order. To see the delivery times for your location, select your
          country from the destination options below.
          <br />
          <br />
          Remember, each book is specially printed for someone you love – and
          wonderful things take more time. The delivery times shown here are
          ESTIMATED times only, and your actual delivery estimate will be
          calculated during checkout.
        </span>
      </div>
      <div className="DeliveryInfoContainer grid grid-cols-3 gap-3 mt-8 text-center ">
        <div className="firstContainer border-r-2  flex items-center justify-center">
          Արագ առաքումներ Երևանում և մարզերում
        </div>
        <div className="secondContainer border-r-2 flex items-center">
          <div className="center">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Choose your city
              </label>
              <select
                onChange={(e) => handleChange(e, "address")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Select Your City From The List </option>
                {cities.map((city, index) => (
                  <option key={index} value={city.name}>
                    {city.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="lastContainer border-r-2 flex items-center justify-center">Estimated Date and Price </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
