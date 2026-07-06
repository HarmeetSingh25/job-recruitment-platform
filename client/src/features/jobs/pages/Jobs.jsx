import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { fetchJobs } from "../slice/jobslice";
import JobFilters from "../components/JobFilters";


import JobSearch from "../components/JobSearch";
import JobTable from "../components/JobTable";
import useDebounce from "../../../hooks/   useDebounce";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, pagination } = useSelector((state) => state.jobs);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    department: "",
    remoteFlag: "",
    employmentType: "",
    experienceLevel: "",
  });

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    dispatch(
      fetchJobs({
        page: 1,
        limit: 10,
        search: debouncedSearch,
        ...filters,
      })
    );
  }, [
    dispatch,
    debouncedSearch,
    filters,
  ]);

  return (
    <div className="space-y-6">
      <JobSearch
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <JobFilters
        filters={filters}
        setFilters={setFilters}
      />

      <JobTable jobs={jobs} />

      <Pagination
        page={page}
        totalPages={pagination.totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};

export default Jobs;