import { useState } from "react";
import AppBar from "../components/AppBar";
import type { CreateBlogInput } from "@roydon-soares/medium-common";

function CreateBlog() {
  const [blog, setBlog] = useState<CreateBlogInput>({
    title: "",
    content: "",
    published: false,
  });
  return (
    <>
      <AppBar type={"create-blog"} blog={blog}/>
      <div className="text-zinc-600">
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Title"
            className="border border-zinc-200 rounded px-4 py-2 mx-4 lg:max-w-5xl w-full text-heading focus:outline-blue-200 text-zinc-700 font-bold"
            onChange={(e) => {
              setBlog((c) => ({
                ...c,
                title: e.target.value,
              }));
            }}
          />
        </div>
        <div className="flex justify-center mt-3">
          <textarea
            className="bg-neutral-secondary-medium border border-default-medium border-zinc-200 mx-4 lg:max-w-5xl w-full h-96 text-heading rounded-base focus:ring-brand focus:border-brand block focus:outline-blue-200 p-3.5 shadow-xs placeholder:text-body"
            placeholder="Write your thoughts here..."
            onChange={(e) => {
              setBlog((c) => ({
                ...c,
                content: e.target.value,
              }));
            }}
          ></textarea>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
