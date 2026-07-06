import Job from "../models/job.model.js";
import mongoose from "mongoose";

export const getalljobs = async (query) => {
  console.log(query, "query");

  const {
    search,
    page,
    limit,
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
    "title company location salary department remoteFlag datePosted employmentType  experienceLevel description url applyType currency",
  )
    .sort(sortOption)
    .skip(skip)
    .limit(pageSize)
    .lean();

  const totalJobs = await Job.countDocuments(filter);
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

export const getJobById = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("Invalid Job ID");
  }
  const job = await Job.findById(id).lean();
  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};
