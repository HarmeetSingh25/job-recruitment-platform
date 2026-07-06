import Job from "../models/job.model.js";
import { getTopByField } from "../utils/aggregation.js";
export const getDashboarddata = async (req, res) => {
  // read the total number of jobs, remote jobs, onsite jobs, hybrid jobs, companies, and departments from the database

  const totalJobs = await Job.countDocuments();
  const remoteJobs = await Job.countDocuments({ remoteFlag: "Remote" });
  const onsiteJobs = await Job.countDocuments({ remoteFlag: "Onsite" });
  const hybridJobs = await Job.countDocuments({ remoteFlag: "Hybrid" });
  const companies = await Job.distinct("company");
  const departments = await Job.distinct("department");

  //   get top companies, departments, employment types, experience levels, and locations data from the database using the getTopByField function

  const topCompanies = await getTopByField("company");

  const topDepartments = await getTopByField("department");

  const employmentTypes = await getTopByField("employmentType", 10);

  const experienceLevels = await getTopByField("experienceLevel", 10);

  const topLocations = await getTopByField("location");

  // return the data as an object

  return {
    summary: {
      totalJobs,
      remoteJobs,
      onsiteJobs,
      hybridJobs,
      companies: companies.length,
      departments: departments.length,
    },
    topCompanies,
    topDepartments,
    employmentTypes,
    experienceLevels,
    topLocations,
  };
};

