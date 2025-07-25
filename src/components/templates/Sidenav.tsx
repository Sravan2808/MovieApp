import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <div className="w-[15%] h-full  border-r-2 border-zinc-400 p-5">
        <h1 className="text-2xl text-white font-bold">
          <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
          <span className="movie">Movie.</span>
        </h1>
        <nav className="flex flex-col text-zinc-400 text-xl ">
          <h1 className="text-white font-semibold text-xl my-10 mb-5">
            New Feed
          </h1>
          <Link to="/trending" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 ">
            <i className="mr-2 ri-fire-fill"></i>Trending
          </Link>
          <Link to="/popular" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3">
            <i className="mr-2 ri-bard-fill"></i>Popular
          </Link>
          <Link to="/movie" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 ">
            <i className="mr-2 ri-movie-2-fill"></i>Movies
          </Link>
          <Link to="/tv" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3">
            <i className="mr-2 ri-tv-2-fill"></i>TV Show
          </Link>
          <Link to="/people" className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3">
            <i className="mr-2  ri-team-fill"></i>People
          </Link>
        </nav>

        <hr className="border-none h-[0.5px] mt-10 bg-zinc-400" />
        <nav className="flex flex-col text-zinc-400 text-xl">
          <h1 className="text-white font-semibold text-xl my-10 mb-5">
            Website Information
          </h1>
          <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3 ">
            <i className="mr-2 ri-information-fill"></i>About Movie
          </Link>
          <Link className="hover:bg-[#6556CD] hover:text-white rounded-lg duration-300 p-3">
            <i className="mr-2 ri-phone-fill"></i>Contact Us{" "}
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidenav;
