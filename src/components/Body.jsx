import { useEffect, useState } from "react";
import { POST_API } from "../utils/constant";
import BlogPostItem from "./BlogPostItem";
import Carousal from "./Carousal";
import Pagination from "./Pagination";

const Body = () => {
  const [newsData, setNewsData] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    fetchData(pageNum);
  }, [pageNum]);

  const fetchData = async (pageNum) => {
    const baseUrl = "https://newsapi.org/v2/everything?";
    const category = "popularity";
    const pageSize = 8;

    const data = await fetch(
      `${baseUrl}q=${category}&page=${pageNum}&pageSize=${pageSize}&apiKey=` +
        POST_API
    );
    const json = await data.json();
    setNewsData(json?.articles);
  };
  console.log(pageNum);

  return (
    <section className="mx-4 my-4 sm:mx-6 sm:my-5 sm:px-4 md:mx-8 md:my-6 md:px-6 lg:mx-12 lg:my-8 lg:px-8">
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
      <Pagination pageNum={pageNum} setPageNum={setPageNum} />
    </section>
  );
};

export default Body;
