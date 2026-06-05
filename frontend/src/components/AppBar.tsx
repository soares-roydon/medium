import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import type { CreateBlogInput } from "@roydon-soares/medium-common";

function AppBar({ type, blog  }: { type?: "create-blog", blog?: CreateBlogInput}) {
  const navigate = useNavigate()
  
  async function publishPost() {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        title: blog?.title,
        content: blog?.content,
        published: true
      })
    })

    if(!response.ok) {
      alert("Something went wrong!")
      return
    }

    const data = await response.json()

    alert("Post published successfully")
    navigate(`/blog/${data.id}`)
  }

  return (
    <>
      {type === "create-blog" ? (
        <div>
          <div className="flex justify-between px-6 py-2 border-b border-zinc-300 text-lg font-bold">
            <div className="flex items-center text-indigo-700">Medium</div>
            <div className="flex items-center gap-4">
                <button
                  className="flex justify-center items-center bg-green-500 text-sm px-2 py-1 border border-zinc-500 rounded text-white cursor-pointer hover:bg-green-600"
                  onClick={publishPost}
                >
                  Publish
                </button>
              <Avatar name={"Roy"} size={"large"} />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-between px-6 py-2 border-b border-zinc-300 text-lg font-bold">
            <div className="flex items-center text-indigo-700">Medium</div>
            <div className="flex items-center gap-4">
              <Link to={"/create-blog/"}>
                <button
                  className="flex justify-center items-center bg-indigo-500 text-sm px-2 py-1 border border-zinc-500 rounded text-white cursor-pointer hover:bg-indigo-600"
                >
                  Create Blog
                </button>
              </Link>
              <Avatar name={"Roy"} size={"large"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AppBar;
