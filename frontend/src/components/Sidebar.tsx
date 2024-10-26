export const Sidebar = () => {
  return (
    <aside className="w-1/3">
      <section className="mb-8">
        <h3 className="text-lg font-bold mb-4">Staff Picks</h3>
        {/* Staff picks content would go here */}
      </section>
      <section>
        <h3 className="text-lg font-bold mb-4">Recommended topics</h3>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
            Data Science
          </span>
          <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
            Self Improvement
          </span>
          <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
            Technology
          </span>
          <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
            Writing
          </span>
          <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
            Relationships
          </span>
          <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
            Politics
          </span>
        </div>
      </section>
    </aside>
  );
};
