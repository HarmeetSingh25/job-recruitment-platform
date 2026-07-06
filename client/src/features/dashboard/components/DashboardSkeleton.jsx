const DashboardSkeleton = () => {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Heading */}
      <div className="space-y-3">
        <div className="h-8 w-64 rounded bg-gray-200" />
        <div className="h-4 w-96 rounded bg-gray-100" />
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 bg-white p-6"
          >
            <div className="mb-4 h-4 w-28 rounded bg-gray-200" />
            <div className="mb-6 h-8 w-20 rounded bg-gray-300" />

            <div className="flex justify-end">
              <div className="h-12 w-12 rounded-xl bg-gray-200" />
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-6 h-5 w-40 rounded bg-gray-200" />

          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="h-5 rounded bg-gray-100"
              />
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <div className="mb-6 h-5 w-40 rounded bg-gray-200" />

          <div className="flex h-64 items-center justify-center">
            <div className="h-44 w-44 rounded-full bg-gray-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSkeleton;