import React, { useEffect, useState } from "react";
import Navbar from "../nav/Navbar";

export const Home = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    const response = await fetch("https://hoblist.com/api/?category=movies");
    const movies = await response.json();
    console.log(movies.data.result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  );
};
