import { BellIcon, PencilIcon } from "lucide-react";

export const Navbar = () => {
  return (
    <div>
      <header className="border-b border-grey-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Medium</h1>
            <input
              type="search"
              placeholder="Search"
              className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-900">
              <PencilIcon className="h-6 w-6" />
            </button>
            <button className="text-gray-600 hover:text-gray-900">
              <BellIcon className="h-6 w-6" />
            </button>
            <button className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              K
            </button>
          </div>
        </div>
      </header>
      <div></div>
      <nav className="border-b border-gray-200 ml-52">
        <div className="container mx-auto px-4 py-3 flex space-x-6">
          <a href="#" className="text-gray-900 font-medium">
            For you
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Following
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            React
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            JavaScript
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            Programming
          </a>
        </div>
      </nav>
    </div>
  );
};
