import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./templates/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
      // setTrending(data.results);
      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      setTrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%]w-full h-[10vh] flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-s-fill"
          ></i>
          Trending
        </h1>
        <div className=" w-[80%]">
          <Topnav />
        </div>
        <DropDown
          title="category"
          options={["movie", "tv", "all"]}
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
        dataLength={trending.length}
        next={GetTrending()}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;
