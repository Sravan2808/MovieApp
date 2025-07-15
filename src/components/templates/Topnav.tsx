import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";
import {IMG_TMDB,NO_IMG} from "../../utils/constants"

const Topnav = () => {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setsearches(data.results);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);
  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-zinc-400 text-xl ri-search-line"></i>
      <input
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className="text-zinc-200 w-[50%] mx-10 border-none bg-transparent rounded outline-none p-2 text-xl"
        type="text"
        placeholder="Search Anything"
      />
      {query.length > 0 && (
        <i
          onClick={() => setquery("")}
          className="text-zinc-400 text-2xl ri-close-fill"
        ></i>
      )}

      <div className="w-[50%]  max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded">
        {searches?.map((s, i) => (
          <Link
            key={s.id || i}
            className="font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100"
          >
            <img
              className="w-[10vh] h-[10vh] object-cover rounded mr-5 shadow-lg"
              src={
                s.backdrop_path
                  ? IMG_TMDB + s.backdrop_path
                  : s.poster_path
                  ? IMG_TMDB + s.poster_path
                  : s.profile_path
                  ? IMG_TMDB + s.profile_path
                  : NO_IMG
              }
              alt=""
            />
            <span>
              {s.name || s.title || s.original_name || s.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topnav;
