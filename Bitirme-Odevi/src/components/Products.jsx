import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full "
      id="home"
    >
    <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
{heroData &&
  heroData.map((n) => (
    <div
      key={n.id}
      className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
    >
      <img
        src={n.imageSrc}
        className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
        alt="I1"
      />
      <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
        {n.name}
      </p>

      <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
        {n.decp}
      </p>

      <p className="text-sm font-semibold text-headingColor">
        <span className="text-xs text-red-600">$</span> {n.price}
      </p>
    </div>
  ))}
</div>

</section>
);
};

export default Products;