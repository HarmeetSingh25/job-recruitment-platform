import Job from "../models/job.model.js";

export const getTopByField = async (field, limit = 5) => {
  return Job.aggregate([
    {
      $match: {
        [field]: { $nin: ["", null] },
      },
    },
    {
      $group: {
        _id: `$${field}`,
        count: { $sum: 1 },
      },
    },
    {
      $sort: {
        count: -1,
      },
    },
    {
      $limit: limit,
    },
    {
      $project: {
        _id: 0,
        [field]: "$_id",
        count: 1,
      },
    },
  ]);
};

