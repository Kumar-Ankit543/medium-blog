import { BlogPost } from "../components/BlogPost";
import { useBlog } from "../hooks/useBlog";
import { useParams } from "react-router-dom";

export const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({
    id: id || "",
  });

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      {/* 
      // @ts-ignore */}
      <BlogPost blog={blog} />
    </div>
  );
};
