import { useEffect, useState } from "react";
import { POST_API } from "../utils/constant";
import BlogPostItem from "./BlogPostItem";
import Pagination from "./Pagination";

import Shimmer from "./Shimmer";

const BlogPostList = ({ category }) => {
  const [newsData, setNewsData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [isLastPage, setIsLastPage] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData(pageNum);
  }, [pageNum]);

  const fetchData = async (pageNum) => {
    const baseUrl = "https://newsapi.org/v2/everything?";
    const pageSize = 8;

    const data = await fetch(
      `${baseUrl}q=${category}&page=${pageNum}&pageSize=${pageSize}&apiKey=` +
        POST_API
    );
    const json = await data.json();
    setNewsData(json?.articles);
    setIsLastPage(json.articles.length < pageSize);
    setLoading(false);
  };
  console.log(pageNum);

  return (
    <section className="mx-4 my-4 sm:mx-6 sm:my-5 sm:px-4 md:mx-8 md:my-6 md:px-6 lg:mx-12 lg:my-8 lg:px-8">
      {loading ? (
        <Shimmer />
      ) : (
        <div>
          <div className="mx-12 mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 gap-x-36 justify-items-center">
            {newsData.map((card) => (
              <BlogPostItem key={card.url} data={card} category={category} />
            ))}
          </div>

          <Pagination
            pageNum={pageNum}
            setPageNum={setPageNum}
            isLastPage={isLastPage}
          />
        </div>
      )}
    </section>
  );
};

export default BlogPostList;
