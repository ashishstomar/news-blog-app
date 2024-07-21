import { useEffect, useState } from "react";
import { API_KEY } from "../utils/common";
import BlogPostItem from "./BlogPostItem";
import Carousal from "./Carousal";

const Body = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch();
    "https://newsapi.org/v2/everything?q=popularity&apiKey=" + API_KEY;
    const json = await data.json();
    setNewsData(json?.articles);
  };

  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <Carousal />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-3 my-2 sm:mx-5 sm:px-3 md:mx-9 md:px-20 lg:mx-20 lg:px-20  gap-10 justify-items-center">
        {newsData.map((card) => (
          <BlogPostItem data={card} />
        ))}
      </div>
    </section>
  );
};

export default Body;
