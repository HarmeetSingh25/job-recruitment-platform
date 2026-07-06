import Job from "../models/job.model.js";
import { getTopByField } from "../utils/aggregation.js";
export const getDashboarddata = async (req, res) => {
    const [
    totalJobs,
    remoteJobs,
    onsiteJobs,
    hybridJobs,
    companies,
    departments,
    topCompanies,
    topDepartments,
    employmentTypes,
    experienceLevels,
    topLocations,
  ] = await Promise.all([
    Job.countDocuments(),
    Job.countDocuments({ remoteFlag: "Remote" }),
    Job.countDocuments({ remoteFlag: "Onsite" }),
    Job.countDocuments({ remoteFlag: "Hybrid" }),
    Job.distinct("company"),
    Job.distinct("department"),
    getTopByField("company"),
    getTopByField("department"),
    getTopByField("employmentType", 10),
    getTopByField("experienceLevel", 10),
    getTopByField("location"),
  ]);


  return {
    summary: {
        totalJobs,
        remoteJobs,
        onsiteJobs,
        hybridJobs,
        companies: companies.length,
        departments: departments.length
    },
    topCompanies,
    topDepartments,
    employmentTypes,
    experienceLevels,
    topLocations
};
};


// Fetch dashboard data from the database or any other source
