import { Link } from "react-router-dom";
import Avatar from "./Avatar";

interface BlogCardProps {
  id: string;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

function BlogCard({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) {
  return (
    <>
      <Link to={`/blog/${id}`} className="block w-5/6 xl:w-1/2">
        <div className="border rounded-md border-zinc-200 cursor-pointer pb-4 pt-3 px-3">
          <div className="flex items-center gap-1 text-xs text-zinc-800 mb-2">
            <Avatar name={authorName} />
            <div className="text-zinc-600">{authorName}</div>
            <div className="w-1 h-1 rounded-full bg-zinc-400 ml-1 mt-0.5"></div>
            <div className="text-zinc-400">{publishedDate}</div>
          </div>
          <div className="font-bold text-xl text-zinc-700">{title}</div>
          <div className="text-zinc-500 mb-3 mt-0.5 text-sm">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="text-zinc-400 text-xs">
            {content.length / 100 + " min read"}
          </div>
        </div>
      </Link>
    </>
  );
}

export default BlogCard;
