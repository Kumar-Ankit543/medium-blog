import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

export interface Blog {
  title: string;
  content: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  async function fetchBlog() {
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setBlog(response.data.blog);
    setLoading(false);
  }

  useEffect(() => {
    fetchBlog();
  }, [id]);

  return {
    loading,
    blog,
  };
};
