import {
  Heart,
  MessageCircle,
  Bookmark,
  Play,
  Share2,
  MoreHorizontal,
} from "lucide-react";
import { Blog } from "../hooks/useBlog";
import { Navbar } from "./Navbar";

const getInitials = (name: string) => {
  const names = name.split(" ");
  return names
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

export const BlogPost = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Navbar />
      <article className="max-w-2xl mx-auto p-4 font-sans mt-8">
        <h1 className="text-4xl font-bold mb-2 text-center">{blog.title}</h1>
        <div className="flex items-center mb-4 mt-8">
          <div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
                <span className="text-sm font-medium text-gray-700">
                  {getInitials(blog.author.name)}
                </span>
              </div>
              <span className="font-semibold mr-2">{blog.author.name}</span>
              <span className="text-blue-600 text-sm">Follow</span>
            </div>
            <div className="text-sm text-gray-500">
              {"5 min"} read · {"2nd Feb"}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Heart className="w-5 h-5 mr-1" />
              {"2.8k"}
            </span>
            <span className="flex items-center">
              <MessageCircle className="w-5 h-5 mr-1" />
              {"57"}
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Bookmark className="w-5 h-5" />
            <Play className="w-5 h-5" />
            <Share2 className="w-5 h-5" />
            <MoreHorizontal className="w-5 h-5" />
          </div>
        </div>
        <hr className="border-gray-200" />
        <div className="prose max-w-none mt-8">{blog.content}</div>
      </article>
    </div>
  );
};
