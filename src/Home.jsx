import React from "react";
import { useQuery } from "react-query";
import FetchingData from "./FetchingData";

function Home() {
  const { data } = useQuery("mykey", () => FetchingData());
  const x = { ...data.data.products };
  console.log("fuck-2", x);

  return <div className="w-96 bg-zinc-400 h-72"></div>;
}

export default Home;
