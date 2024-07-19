const BlogPostItem = ({ data }) => {
  return (
    <div className="w-80 bg-neutral-600 rounded-xl">
      <img
        src={data.urlToImage}
        className="rounded-xl h-32 w-full object-cover "
      />
      <div className="p-3 flex flex-col justify-between">
        <div>
          <h5 className="font-semibold mb-2 text-slate-200">{data.title}</h5>
          <p className="text-sm mb-3 text-white">{data.description}</p>
        </div>
        <a
          href="#"
          className="text-white self-start bg-indigo-500 rounded-xl px-5 py-1"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogPostItem;
