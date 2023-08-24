import React from "react";
import { useQuery } from "react-query";
import FetchingData from "./FetchingData";


function Home() {
  const { data } = useQuery("mykey", () => FetchingData());
  const x = data.data.products;

  return (
    <div className="w-full text-md bg-white">
      <div className="flex justify-around p-2 mx-2 my-1 bg-blue-400  text-3xl text-blue-900">
        <div className="w-1/4 p-2 border-2 rounded-md mx-2 text-center tracking-wide ">
          title
        </div>

        <div className="w-1/4 p-2 border-2 rounded-md mx-2 text-center tracking-wide ">
          description
        </div>
        <div className="w-1/4 p-2 border-2 rounded-md mx-2 text-centertracking-wide ">
          brand
        </div>
        <div className="w-1/4 p-2 border-2 rounded-md mx-2 text-center tracking-wide ">
          category
        </div>
      </div>
      {x &&
        x.map((item) => (
          <div className="flex justify-around p-2 mx-2 my-1 text-green-900 ">
            <div className="w-1/4 p-2 border-2 rounded-md mx-2 text-center tracking-wide ">
              {item.title}
            </div>

            <div className="w-1/4 p-2 border-2 rounded-md mx-2 text-center tracking-wide ">
              {item.description}
            </div>
            <div className="w-1/4 p-2  border-2 rounded-md mx-2 text-centertracking-wide ">
              {item.brand}
            </div>
            <div className="w-1/4 p-2  border-2 rounded-md mx-2 text-centertracking-wide ">
              {item.category}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home; 

