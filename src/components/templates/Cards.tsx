import React from "react";
import { Link } from "react-router-dom";
import { IMG_TMDB } from "../../utils/constants";

const Cards = ({ data, title }) => {
  return (
    <div className="flex flex-wrap w-full h-full  pl-30 bg-[#1F1E24] ">
      {data.map((c,id) => (
        <Link className="w-[25vh] mr-[5%] mb-[5%]" key={id}>
          <img
            className="shadow-[8px_17px_38px_2px_rgba(0,0,0.5)] h-[40vh] object-cover"
            src={IMG_TMDB + (c.backdrop_path || c.profile_path)}
            alt=""
          />
          <h1 className="text-2xl text-zinc-300 mt-3 font-semibold">
            {c.name || c.title || c.original_name || c.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
