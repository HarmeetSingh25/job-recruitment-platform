const JobTableSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      {/* Table Header */}
      <div className="grid grid-cols-6 gap-4 border-b p-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-4 animate-pulse rounded bg-gray-200"
          />
        ))}
      </div>

      {/* Table Rows */}
      {Array.from({ length: 10 }).map((_, row) => (
        <div
          key={row}
          className="grid grid-cols-6 gap-4 border-b p-4"
        >
          {Array.from({ length: 6 }).map((_, col) => (
            <div
              key={col}
              className="h-5 animate-pulse rounded bg-gray-100"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default JobTableSkeleton;