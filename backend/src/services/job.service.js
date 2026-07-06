import Job from "../models/job.model.js";

export const getalljobs = async (query) => {
  try {
    const page = Number(query.page) || 1;
    const limit = Number(query.limit) || 10;
    const skip = (page - 1) * limit;
    const jobs = await Job.find(query).skip(skip).limit(limit);
    const totalJobs = await Job.countDocuments();
    return {
      jobs,
      pagisnation: {
      totalJobs,
      currentPage: page,
      totalPages: Math.ceil(totalJobs / limit),
      limit,
    }
};
  } catch (error) {
    throw new Error("Error fetching jobs");
  }
};
