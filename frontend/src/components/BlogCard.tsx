const getInitials = (name: string) => {
  const names = name.split(" ");
  return names
    .map((n) => n[0])
    .join("")
    .toUpperCase();
};

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  published: string;
}
export const BlogCard = ({
  authorName,
  title,
  content,
  published,
}: BlogCardProps) => {
  return (
    <div className="container mx-auto px-4 py-8 flex cursor-pointer">
      <div className="w-2/3 pr-8">
        <article className="mb-8">
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-2">
              <span className="text-sm font-medium text-gray-700">
                {getInitials(authorName)}
              </span>
            </div>
            <span className="text-sm">{authorName}</span>
          </div>
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{content}</p>
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <span>{published}</span>
            {/* <span className="mx-1">·</span>
              <span>1.99K views</span>
              <span className="mx-1">·</span>
              <span>38 comments</span> */}
          </div>
          <hr className="border-gray-200" />
        </article>
      </div>
    </div>
  );
};
