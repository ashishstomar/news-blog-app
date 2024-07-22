import { Link } from "react-router-dom";

const BlogPostItem = ({ data }) => {
  const { urlToImage, title, description } = data;
  return (
    <div className="w-80 bg-neutral-600 rounded-xl">
      <img src={urlToImage} className="rounded-xl h-32 w-full object-cover " />
      <div className="p-3 flex flex-col justify-between">
        <div>
          <h5 className="font-semibold mb-2 text-slate-200">{title}</h5>
          <p className="text-sm mb-3 text-white">{description}</p>
        </div>
        <Link to={`/article/${encodeURIComponent(data.url)}`}>
          <button className="text-white self-start bg-indigo-500 rounded-xl px-5 py-1">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostItem;
