import Carousal from "./Carousal";
import BlogPostList from "./BlogPostList";
import { FaRegNewspaper } from "react-icons/fa";

const Body = () => {
  return (
    <section className="mx-4 my-4 sm:mx-6 sm:my-5 sm:px-4 md:mx-8 md:my-6 md:px-6 lg:mx-12 lg:my-8 lg:px-8">
      <div>
        <div className="flex flex-col justify-center items-center">
          <Carousal />
        </div>
        <h1 className="text-white text-2xl mt-7 mb-4 font-medium flex items-center gap-3 mx-12 ">
          <FaRegNewspaper />
          Top Headlines
        </h1>
        <BlogPostList category="popularity" />
      </div>
    </section>
  );
};

export default Body;
