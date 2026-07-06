const JobSort = ({ sort, setSort }) => {
  return (
    <select
      value={`${sort.sort}-${sort.order}`}
      onChange={(e) => {
        const [sortField, order] = e.target.value.split("-");

        setSort({
          sort: sortField,
          order,
        });
      }}
      className="rounded border p-2"
    >
      <option value="datePosted-desc">Newest</option>
      <option value="datePosted-asc">Oldest</option>
      <option value="title-asc">Title (A-Z)</option>
      <option value="title-desc">Title (Z-A)</option>
      <option value="company-asc">Company (A-Z)</option>
      <option value="company-desc">Company (Z-A)</option>
      <option value="location-asc">Location (A-Z)</option>
      <option value="location-desc">Location (Z-A)</option>
    </select>
  );
};

export default JobSort;