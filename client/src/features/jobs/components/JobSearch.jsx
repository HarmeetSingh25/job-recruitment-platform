import { Search } from "lucide-react";

const JobSearch = ({ value, onChange }) => {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        autoFocus
        placeholder="Search by title, company, location..."
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
    </div>
  );
};

export default JobSearch;