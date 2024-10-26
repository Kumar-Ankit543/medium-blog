import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blogs {
  title: string;
  content: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blogs[]>([]);

  async function fetchBlogs() {
    const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    setBlogs(response.data.blogs);
    setLoading(false);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return {
    loading,
    blogs,
  };
};
