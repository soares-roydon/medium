import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import AppBar from "../components/AppBar";
import Avatar from "../components/Avatar";
import BlogPageSkeleton from "../components/BlogPageSkeleton";

function Blog() {
  const { id } = useParams();
  const { loading, blog } = useBlog(id!);

  return (
    <>
      <AppBar />
      {loading ? <BlogPageSkeleton />: null}
      <div className="grid lg:grid-cols-12 min-h-screen">
        <div className="lg:col-span-8 ">
          <div className="mx-6 mt-4">
            <div className="font-bold text-3xl text-zinc-700 mb-4">
              {blog?.title}
            </div>
            <div className="text-xl text-zinc-700 ">{blog?.content}</div>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-4 border-l border-zinc-300">
          <div className="ml-6 mt-4">
            <div className="text-zinc-900 font-medium mb-3 text-xl">Author</div>
            <div className="flex gap-1.5">
              <Avatar name={blog?.author.name!} />
              <div className="text-zinc-800">{blog?.author.name}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
