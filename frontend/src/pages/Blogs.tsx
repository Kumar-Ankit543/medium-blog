import { BlogCard } from "../components/BlogCard";
import { Navbar } from "../components/NavBar";
import { Sidebar } from "../components/Sidebar";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <Navbar />

      <div className="flex">
        <div className="ml-52">
          {blogs.map((blog) => (
            <BlogCard
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              published={"2nd Feb"}
            />
          ))}
        </div>
        <Sidebar />
      </div>
    </div>
  );
};
