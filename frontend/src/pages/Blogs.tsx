import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <>
      {blogs.map((blog) => (
        <BlogCard
          authorName={blog.author.name}
          title={blog.title}
          content={blog.content}
          published={"2nd Feb"}
        />
      ))}
    </>
  );
};
