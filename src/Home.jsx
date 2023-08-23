import React from "react";
import { useQuery } from "react-query";
import FetchingData from "./FetchingData";


function Home() {
  const { data } = useQuery("mykey", () => FetchingData());
  const x = data.data.products;

  return (
    <div className="w-full">
      <div className="flex justify-around p-2 mx-2 my-1 bg-white">
        <div className="w-1/4 p-2 text-sm tracking-wide text-left"> title </div>

        <div className="w-1/4 p-2 text-sm tracking-wide text-left">
          description
        </div>
        <div className="w-1/4 p-2 text-sm tracking-wide text-left">brand</div>
        <div className="w-1/4 p-2 text-sm tracking-wide text-left">
          category
        </div>
      </div>
      {x && x.map((item) => (
        <div className="flex justify-around p-2 mx-2 my-1 ">
          <div className="w-1/4 p-2 text-sm tracking-wide text-left">
            {" "}
            {item.title}
          </div>

          <div className="w-1/4 p-2 text-sm tracking-wide text-left">
            {item.description}
          </div>
          <div className="w-1/4 p-2 text-sm tracking-wide text-left">
            {item.brand}
          </div>
          <div className="w-1/4 p-2 text-sm tracking-wide text-left">
            {item.category}
          </div>
        </div>
      )
      )
    }
    </div>
  );
}

export default Home; 

// Object.keys(x).map((itemkey) => (
//   <li>
//     {itemkey}:{x[itemkey]["brand"]}
//   </li>
// ))