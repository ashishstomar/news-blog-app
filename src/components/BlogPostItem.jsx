import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

const BlogPostItem = ({ data, category }) => {
  const { urlToImage, title, description, url, publishedAt } = data;
  const limDescription = description || "";
  const truncated = limDescription.split(/\s+/).slice(0, 30).join(" ") + "...";
  return (
    <div className="w-80 h-96 bg-neutral-700 rounded-xl">
      <img
        src={
          urlToImage
            ? urlToImage
            : "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*AC9frN1qFnn-I2JCycN8fw.png"
        }
        alt={title}
        className="rounded-xl h-32 w-full object-cover "
      />
      <div className="p-3 pb-3 h-64 flex flex-col justify-between">
        <div>
          <h5 className="font-semibold mb-2 text-slate-200">{title}</h5>
          <p className="text-sm mb-3 text-white overflow-hidden">{truncated}</p>
        </div>
        <Link to={`/article/${category}/${encodeURIComponent(url)}`}>
          <div className="flex justify-between items-center mr-1">
            <button className="text-white self-start bg-indigo-500 rounded-lg px-5 py-1 mb-0.8">
              Read More
            </button>
            <div className="mb-4 text-gray-400 date flex items-center">
              <MdDateRange className="mr-2" />
              <span>{new Date(publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogPostItem;
