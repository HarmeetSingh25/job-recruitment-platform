import Job from "../models/job.model.js";

export const getalljobs = async (query) => {
  console.log(query, "query");

  const {
    search,
    page = 1,
    limit ,
    department,
    remoteFlag,
    experienceLevel,
    employmentType,
    sort = "datePosted",
    order = "desc",
  } = query;
  const filter = {};

  const pageNumber = Math.max(Number(page), 1);
  const pageSize = Math.min(Math.max(Number(limit), 1), 100);

  const allowedSortFields = ["datePosted", "title", "company", "location"];
  const sortField = allowedSortFields.includes(sort) ? sort : "datePosted";

  const sortOption = {
    [sortField]: order === "asc" ? 1 : -1,
  };
  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ];
    //   console.log(filter, "filter");
  }

  if (department) {
    filter.department = department;
  }

  if (remoteFlag) {
    filter.remoteFlag = remoteFlag;
  }

  if (experienceLevel) {
    filter.experienceLevel = experienceLevel;
  }

  if (employmentType) {
    filter.employmentType = employmentType;
  }

  const skip = (Number(pageNumber) - 1) * Number(pageSize);

  const jobs = await Job.find(
    filter,
    "title company location salary department remoteFlag datePosted",
  )
    .sort(sortOption)
    .skip(skip)
    .limit(pageSize)
    .lean();

  const totalJobs = await Job.countDocuments(filter);

  //   console.log(jobs.length, "jobs length");
  // console.log(totalJobs, "total jobs length");

  return {
    jobs,
    pagination: {
      totalJobs,
      currentPage: pageNumber,
      totalPages: Math.ceil(totalJobs / pageSize),
      pageSize,
    },
  };
};
