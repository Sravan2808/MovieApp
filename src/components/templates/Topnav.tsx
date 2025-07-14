import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {
    const[query,setquery] = useState("");
  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i class="text-zinc-400 text-xl ri-search-line"></i>
      <input onChange={(e)=>setquery(e.target.value)} value={query} className="text-zinc-200 w-[50%] mx-10 border-none bg-transparent rounded outline-none p-2 text-xl" type="text" placeholder="Search Anything" />
       {query.length > 0 &&  <i onClick={()=>setquery("")} class="text-zinc-400 text-2xl ri-close-fill"></i> }
     

      <div className="w-[50%]  max-h-[50vh] absolute bg-zinc-200 top-[90%] overflow-auto rounded">
        {/* <Link className="font-semibold hover:text-black hover:bg-zinc-300 duration-300 text-zinc-600 w-[100%] p-5 flex justify-start items-center border-b-2 border-zinc-100">
        <img src="" alt="" />
        <span>Hello Everyone</span>
        </Link> */}
      </div>
    </div>
  );
};

export default Topnav;
