import { useEffect, useState } from "react";
import { POST_API } from "../utils/constant";
import BlogPostItem from "./BlogPostItem";
import Carousal from "./Carousal";

const Body = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/everything?q=popularity&apiKey=" + POST_API
    );
    const json = await data.json();
    setNewsData(json?.articles);
  };

  return (
    <section className="mx-3 my-2 sm:mx-5 sm:px-3 md:mx-9 md:px-20 lg:mx-20 lg:px-20">
      <div className="flex flex-col justify-center items-center">
        <Carousal />
      </div>

      <h1 className="text-white text-2xl mt-7 mb-4 font-medium">
        Trending News Articles
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center">
        {newsData.map((card) => (
          <BlogPostItem key={card.url} data={card} />
        ))}
      </div>
    </section>
  );
};

export default Body;
