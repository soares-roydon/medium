import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks";

function Blogs() {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading...</div>
  }

  return (
    <>
      <AppBar />
      {blogs.map((blog) => {
        return (
          <div className="flex justify-center" key={blog.id}>
            <BlogCard id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate="Dec 3, 2023"
            />
          </div>
        );
      })}
    </>
  );
}

export default Blogs;
