export const Nav = () => {
  return (
    <div>
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
