import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { POST_API } from "../utils/constant";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { FaArrowLeft } from "react-icons/fa";

const BlogPostDetails = () => {
  const { category, url } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      let baseUrl;
      if (category === "technology") {
        baseUrl = "https://newsapi.org/v2/everything?q=technology";
      } else if (category === "finance") {
        baseUrl = "https://newsapi.org/v2/everything?q=finance";
      } else if (category === "sports") {
        baseUrl = "https://newsapi.org/v2/everything?q=sports";
      } else if (category === "trending") {
        baseUrl = "https://newsapi.org/v2/everything?q=trending";
      } else if (category === "carousal") {
        baseUrl = "https://newsapi.org/v2/top-headlines?sources=cnn";
      } else {
        baseUrl = "https://newsapi.org/v2/everything?q=popularity";
      }

      const data = await fetch(`${baseUrl}&apiKey=` + POST_API);
      const json = await data.json();
      const articles = json.articles;
      const matchedArticle = articles.find(
        (article) => article.url === decodeURIComponent(url)
      );
      setArticle(matchedArticle);
    };

    fetchData();
  }, [url]);

  if (!article) {
    return <Shimmer />;
  }

  let paths = "/" + category;
  if (category === "carousal" || category === "popularity") {
    paths = "/";
  }
  console.log("path " + paths);

  return (
    <div className="text-white min-h-screen p-4 md:p-6 lg:p-8">
      <div className="container mx-auto">
        <Link to={`${paths}`}>
          <button className=" text-slate-100 font-bold bg-slate-500 px-6 py-2 rounded-full hover:bg-slate-600 mb-6 flex items-center gap-2">
            <FaArrowLeft /> Back
          </button>
        </Link>
        <div className="max-w-3xl mx-auto bg-gray-800 p-4 md:p-6 lg:p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="mb-4 text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString()}
          </div>

          <img
            src={
              article.urlToImage
                ? article.urlToImage
                : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*AC9frN1qFnn-I2JCycN8fw.png"
            }
            alt={article.title}
            className="mb-4 rounded-lg w-full object-cover"
          />

          <p className="text-base md:text-lg leading-relaxed">
            {article.content}
          </p>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-100 inline-block bg-slate-500 px-4 py-2 rounded-full hover:bg-slate-600 mt-6"
          >
            Continue on Source
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetails;
