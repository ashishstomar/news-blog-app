import { useEffect, useState } from "react";
import { POST_API } from "./constant";

const usePostData = (postId) => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    fetchPostData();
  }, []);

  const fetchPostData = async () => {
    const data = await fetch(
      "https://newsapi.org/v2/everything?q=popularity&apiKey=" +
        POST_API +
        postId
    );
    const json = await data.json();
    setNewsData(json?.articles);
  };
  return newsData;
};

export default usePostData;
