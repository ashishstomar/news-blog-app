import BlogPostList from "./BlogPostList";

const Sports = () => {
  return (
    <section className="mx-4 my-4 sm:mx-6 sm:my-5 sm:px-4 md:mx-8 md:my-6 md:px-6 lg:mx-12 lg:my-8 lg:px-8">
      <div>
        <BlogPostList category="sports" />
      </div>
    </section>
  );
};

export default Sports;
