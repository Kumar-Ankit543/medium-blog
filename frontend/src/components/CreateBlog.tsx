import { useState } from "react";
import { PlusCircle, MoreHorizontal, Bell, Bold, Italic } from "lucide-react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Type your story here...</p>",
    editorProps: {
      attributes: {
        class: "focus:outline-none text-xl text-gray-600 placeholder-red-300",
      },
    },
    onUpdate: ({ editor }) => {
      const htmlContent = editor.getHTML();
      setContent(htmlContent);
    },
  });

  async function sendBlog() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/blog/new`,
      {
        title,
        content,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    navigate(`/blog/${response.data.id}`);
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 border-b mx-36">
        <div className="flex items-center space-x-4">
          <Link to={"/blogs"}>
            <h1 className="text-3xl font-serif font-bold">Medium</h1>
          </Link>
          <span className="text-sm text-gray-500">Draft in Kumarankit</span>
          <span className="text-sm text-gray-500">Saved</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={sendBlog}
            className="px-4 py-1 text-sm text-white bg-green-600 rounded-full hover:bg-green-700"
          >
            Publish
          </button>
          <MoreHorizontal className="w-6 h-6 text-gray-500" />
          <Bell className="w-6 h-6 text-gray-500" />
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white">
            K
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-3xl mx-auto mt-8 px-4">
        <div className="flex items-start">
          <PlusCircle className="w-8 h-8 text-gray-300 mr-4 mt-2" />
          <div className="flex-grow relative">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full text-4xl font-bold text-gray-700 placeholder-gray-300 focus:outline-none mb-4"
            />
            <StyleButtons editor={editor} />
            <EditorContent editor={editor} />
          </div>
        </div>
      </main>
    </div>
  );
};

const StyleButtons = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex mx-80 space-x-2 absolute top-2 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-4 py-2">
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1 rounded-full ${
          editor.isActive("bold") ? "bg-gray-200" : ""
        }`}
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-1 rounded-full ${
          editor.isActive("italic") ? "bg-gray-200" : ""
        }`}
      >
        <Italic className="w-4 h-4" />
      </button>
    </div>
  );
};
