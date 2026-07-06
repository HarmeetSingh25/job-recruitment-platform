import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../components/Pagination";
import { fetchJobs } from "../slice/jobslice";
import JobFilters from "../components/JobFilters";
import JobSort from "../components/JobSort";

import JobSearch from "../components/JobSearch";
import JobTable from "../components/JobTable";
import useDebounce from "../../../hooks/   useDebounce";

const Jobs = () => {
  const dispatch = useDispatch();
  const { jobs, loading, pagination } = useSelector((state) => state.jobs);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState({ sort: "datePosted", order: "desc", });
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
        page,
        limit: 10,
        search: debouncedSearch,

        ...filters,

        sort: sort.sort,
        order: sort.order,
      })
    );
  }, [
    dispatch,
    page,
    debouncedSearch,
    filters,
    sort
  ]);

  return (
    <div className="space-y-6">

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <JobSearch
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <JobSort
          sort={sort}
          setSort={setSort}
        />

      </div>

      <JobFilters
        filters={filters}
        setFilters={setFilters}
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