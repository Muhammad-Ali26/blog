import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link className="space-y-3" to={props.link}>
      <div>
        {/* Images are not coming correctly from API response. So i added hard code Images */}
        <img
          src="/images/car.png"
          alt="card"
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="space-y-4">
        <div className="flex gap-x-5 justify-between w-full">
          <span className="font-semibold md:text-base text-sm text-[#939191]">
            Posted on October 6th 2021
          </span>
          <span className="font-semibold md:text-base text-sm text-[#939191] flex items-center gap-x-1">
            <AiOutlineEye size={16} />
            563 views
          </span>
        </div>
        <h3 className="font-semibold lg:text-3xl text-2xl">{props.title}</h3>
        <p className="font-semibold sm:text-base text-sm text-[#232536]">
          {props.desc}
        </p>
      </div>
    </Link>
  );
}
