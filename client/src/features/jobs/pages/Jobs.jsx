import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import JobTableSkeleton from "../components/JobTableSkeleton";
import { fetchJobs } from "../slice/jobslice";
import JobTable from "../components/JobTable";

const Jobs = () => {
  const dispatch = useDispatch();

  const { jobs, loading, error , pagination } = useSelector(
    (state) => state.jobs
  );

  const handlePageChange = (page) => {
    dispatch(
        fetchJobs({
            page,
            limit: pagination.limit,
        })
    );
};

  useEffect(() => {
    dispatch(fetchJobs({
        page: 1,
        limit: 10
    }));
}, [dispatch]);


if (loading) {
  return <JobTableSkeleton />;
}

  if (error) return <h1>{error}</h1>;

  return <JobTable jobs={jobs} />;
};

export default Jobs;