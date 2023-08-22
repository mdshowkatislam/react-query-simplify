import React from "react";
import axios from "axios";
const url = "https://dummyjson.com/products";

const FetchingData = async () => {
  const x = await axios.get(url);

  console.log("Fetching data--", x);
  return x;
};

export default FetchingData;
