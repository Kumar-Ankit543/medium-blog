import { BellIcon, SquarePen } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <header className="border-b border-grey-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to={"/blogs"}>
              <h1 className="text-3xl font-serif font-bold cursor-pointer">
                Medium
              </h1>
            </Link>
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div className="flex items-center space-x-6">
            <Link to={"/new-story"}>
              <button className="flex text-gray-600 hover:text-gray-900">
                <SquarePen className="h-6 w-6 mx-1" />
                write
              </button>
            </Link>
            <button className="text-gray-600 hover:text-gray-900">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="bg-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              K
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};
