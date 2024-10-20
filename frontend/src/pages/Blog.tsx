export const Blog = () => {
  return (
    <form className="space-y-6" action="#" method="POST">
      <div className="mx-5">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 sm:text-base"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none w-1/4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>
      </div>
    </form>
  );
};
