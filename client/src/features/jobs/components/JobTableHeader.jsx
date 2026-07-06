const JobTableHeader = () => {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="px-4 py-3 text-left">Title</th>
        <th className="px-4 py-3 text-left">Company</th>
        <th className="px-4 py-3 text-left">Location</th>
        <th className="px-4 py-3 text-left">Type</th>
        <th className="px-4 py-3 text-left">Posted</th>
      </tr>
    </thead>
  );
};

export default JobTableHeader;