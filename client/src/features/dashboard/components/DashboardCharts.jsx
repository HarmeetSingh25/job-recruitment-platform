import EmploymentTypeChart from "./EmploymentTypeChart";
import ExperienceLevelChart from "./ExperienceLevelChart";
import TopCompaniesChart from "./TopCompaniesChart";
import TopLocationsChart from "./TopLocationsChart";

const DashboardCharts = ({
  topCompanies,
  topLocations,
  employmentTypes,
  experienceLevels,
}) => {
    
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <TopCompaniesChart data={topCompanies} />
      <EmploymentTypeChart data={employmentTypes} />
      <TopLocationsChart data={topLocations} />
      <ExperienceLevelChart data={experienceLevels} />
    </div>
  );
};

export default DashboardCharts;