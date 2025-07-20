import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./templates/Topnav";
import DropDown from "./templates/DropDown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import Loading from "./templates/Loading";
import InfiniteScroll from "react-infinite-scroll-component";

const Popular = () => {
  const navigate = useNavigate();
  const [category, setcategory] = useState("movie");
  const [duration, setduration] = useState("day");
  const [popular, setpopular] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  document.title = "Popular | MovieApp " + category;
  const GetPopular = async () => {
    try {
      const { data } = await axios.get(`${category}/popular?page=${page}`);
      // setpopular(data.results);
      if (data.results.length > 0) {
        setpopular((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refreshHandler = () => {
    if (popular.length === 0) {
      GetPopular();
    } else {
      setpage(1);
      setpopular([]);
      GetPopular();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return popular.length > 0 ? (
    <div className=" w-screen h-screen ">
      <div className="px-[5%]w-full h-[10vh] flex items-center">
        <h1 className="text-2xl text-zinc-400 font-semibold">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-s-fill"
          ></i>
          Popular
        </h1>
        <div className=" w-[80%]">
          <Topnav />
        </div>
        <DropDown
          title="category"
          options={["tv", "movie"]}
          func={(e) => setcategory(e.target.value)}
        />
        <div className="w-[2%]"></div>
      </div>

      <InfiniteScroll
        dataLength={popular.length}
        next={GetPopular()}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={popular} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <Loading />
  );
};

export default Popular;
