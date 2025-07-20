import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./templates/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {
  const navigate = useNavigate(); 

  const [category, setcategory] = useState("now_playing");
  const [duration, setduration] = useState("day");
  const [movie, setMovie] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    document.title = "Movies | MovieApp " + category;
  }, [category]);

  const GetMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);
      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    setpage(1);
    setMovie([]);
    setHasMore(true);
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  useEffect(() => {
    GetMovie();
  }, [page]);

  return movie.length > 0 ? (
    <div className="w-screen h-screen">
      <div className="px-[5%] w-full h-[10vh] flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-s-fill"
          ></i>
          Movie<small className="ml-2 text-sm text-zinc-600">({category})</small>
        </h1>
        <div className="w-[80%]">
          <Topnav />
        </div>
        <DropDown
          title="category"
          options={["popular", "top_rated", "upcoming", "now_playing"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
        <DropDown
          title="Duration"
          options={["week", "day"]}
          func={(e) => setduration(e.target.value)}
        />
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={GetMovie}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={movie} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Movie;
