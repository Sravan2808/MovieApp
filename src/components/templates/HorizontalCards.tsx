import React from "react";
import { Link } from "react-router-dom";
import { IMG_TMDB } from "../../utils/constants";
import DropDown from "./DropDown";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-[100%]  flex overflow-x-auto overflow-y-hidden mb-5 p-5 ">
      {data.map((item, i) => (
        <div key={item.id || i} className="min-w-[15%] bg-zinc-900 mr-5 mb-5">
          <img
            className="w-full h-[45%] object-cover"
            src={IMG_TMDB + (item.backdrop_path || item.poster_path)}
            alt=""
          />
          <div className="text-white p-2 h-[55%]">
            <h1 className=" text-xl font-semibold">
              {item.name ||
                item.title ||
                item.original_name ||
                item.original_title}
            </h1>
            <p className="">
              {item.overview.slice(0, 50)}...
              <Link className="text-zinc-500 ">more</Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
