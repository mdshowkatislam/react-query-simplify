import React from "react";
import { useQuery } from "react-query";
import FetchingData from "./FetchingData";

function Contact() {
  const { data } = useQuery("mykey", () => FetchingData());
  const x = { ...data.data.products };
  return <div className="w-96 bg-zinc-400 h-72"></div>;
}

export default Contact;
