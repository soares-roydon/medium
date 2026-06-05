import { useEffect, useState } from "react";

interface Blog {
  id: string;
  title: string;
  content: string;
  published: boolean;
  author: {
    name: string;
  };
}

function useBlogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }).then(async (response) => {
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setBlogs(data.blogs);
      setLoading(false);
    });
  }, []);

  return { blogs, loading };
}

function useBlog(id: string) {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    }).then(async (response) => {
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      setBlog(data.blog);
      setLoading(false);
    });
  }, []);

  return { loading, blog };
}

export { useBlogs, useBlog };
