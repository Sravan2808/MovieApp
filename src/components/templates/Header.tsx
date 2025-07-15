import React from "react";
import { IMG_TMDB } from "../../utils/constants";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  console.log(data);

  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.7), rgba(0,0,0,.8)), url(${
          IMG_TMDB + (data.backdrop_path || data.profile_path)
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full h-[50vh] flex flex-col justify-end items-start  p-[2%]"
    >
      <h1 className="w-[70%] text-5xl font-black text-white">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-5 mb-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link className="text-blue-400 ">more</Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500 ri-megaphone-fill"></i>
        {data.first_air_date || data.release_date || "No Information"}
        <i className="ml-5 text-yellow-500 ri-album-fill"></i>
        {data.media_type.toUpperCase()}
      </p>
      <Link className="mt-5 bg-[#6556CD] p-4 rounded-lg text-white font-semibold">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
