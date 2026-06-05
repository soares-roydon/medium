import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import BlogsSkeleton from "../components/BlogsSkeleton";
import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();


  return (
    <>
      <AppBar />
      { loading ? <BlogsSkeleton /> : null}
      <div className="pb-5">
        {blogs.map((blog) => {
          return (
            <div className="flex justify-center mt-4" key={blog.id}>
              <BlogCard
                id={blog.id}
                authorName={blog.author.name}
                title={blog.title}
                content={blog.content}
                publishedDate="Dec 3, 2023"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Blogs;
