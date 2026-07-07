import { useEffect } from "react";
import JobTable from "../../jobs/components/JobTable";
import DashboardCards from "../components/DashboardCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashboard } from "../slice/dashboardSlice";
import DashboardSkeleton from "../components/DashboardSkeleton";
import DashboardCharts from "../components/DashboardCharts";
import { fetchDuplicates } from "../../duplicates/slice/duplicateSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { stats, loading, error } = useSelector(
    (state) => state?.dashboard
  );
 const duplicates  = useSelector(
    (state) => state?.duplicates
  );

  console.log(duplicates ,"s");
  
// console.log(stats?.topLocations , "topLocations");
// console.log(stats?.employmentTypes , "employmentTypes");
// console.log(stats?.experienceLevels , "experienceLevels");

  useEffect(() => {
    dispatch(fetchDashboard());
    dispatch(fetchDuplicates())
  }, [dispatch]);
  if (loading) {
    <DashboardSkeleton />
  }
  //   console.log(stats)
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Monitor recruitment activities and analytics.
        </p>
      </div>

      <DashboardCards summary={stats?.summary} />

<DashboardCharts
  topCompanies={stats?.topCompanies}
  topLocations={stats?.topLocations}
  employmentTypes={stats?.employmentTypes}
  experienceLevels={stats?.experienceLevels}
/>
      {/* <Jobs/> */}
      {/* <JobTable /> */}

    </div>
  );
};

export default Dashboard;