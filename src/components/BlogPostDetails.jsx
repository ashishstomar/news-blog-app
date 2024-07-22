import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { POST_API } from "../utils/constant";

function ArticlePage() {
  const { url } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=popularity&apiKey=" + POST_API
      );
      const json = await response.json();
      const articles = json.articles;
      const matchedArticle = articles.find(
        (article) => article.url === decodeURIComponent(url)
      );
      setArticle(matchedArticle);
    };

    fetchArticle();
  }, [url]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} className="mb-4" />
      <div
        className="text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}

export default ArticlePage;
