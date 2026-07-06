import Job from "../models/job.model.js";

export const getalljobs = async (query) => {
  try {
    console.log(query, "query");

    const { search, page = 1, limit = 10 } = query;
    let filter = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { company: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ];
      console.log(filter, "filter");
    }

    const skip = (Number(page) - 1) * Number(limit);

    const jobs = await Job.find(filter)
      .sort({ datePosted: -1 })
      .skip(skip)
      .limit(limit);

    const totalJobs = await Job.countDocuments(filter);

    //   console.log(jobs.length, "jobs length");
    // console.log(totalJobs, "total jobs length");

    return {
      jobs,
      pagination: {
        totalJobs,
        currentPage: page,
        totalPages: Math.ceil(totalJobs / limit),
        limit,
      },
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
