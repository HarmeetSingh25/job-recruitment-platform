import Job from "../models/job.model.js";
import { getTopByField } from "../utils/aggregation.js";
export const getDashboarddata = async (req, res) => {
  const totalJobs = await Job.countDocuments();
  const remoteJobs = await Job.countDocuments({ remoteFlag: "Remote" });
  const onsiteJobs = await Job.countDocuments({ remoteFlag: "Onsite" });
  const hybridJobs = await Job.countDocuments({ remoteFlag: "Hybrid" });
  const companies = await Job.distinct("company");
  const departments = await Job.distinct("department");

// // const topCompanies = await Job.aggregate([
// //     {
// //         $group: {
// //             _id: "$company",
// //             count: { $sum: 1 }
// //         }
// //     },
// //     {
// //         $sort: {
// //             count: -1
// //         }
// //     },
// //     {
// //         $limit: 5
// //     },
// //     {
// //         $project: {
// //             _id: 0,
// //             company: "$_id",
// //             count: 1
// //         }
// //     }
// // ]);

// // const topDepartments = await Job.aggregate([
// //     {
// //         $match: {
// //             department: {
// //                 $nin: ["", null]
// //             }
// //         }
// //     },
// //     {
// //         $group: {
// //             _id: "$department",
// //             count: { $sum: 1 }
// //         }
// //     },
// //     {
// //         $sort: {
// //             count: -1
// //         }
// //     },
// //     {
// //         $limit: 5
// //     },
// //     {
// //         $project: {
// //             _id: 0,
// //             department: "$_id",
// //             count: 1
// //         }
// //     }
// // ]);

// // const employmentTypes = await Job.aggregate([
// //     {
// //         $match: {
// //             employmentType: {
// //                 $nin: ["", null]
// //             }
// //         }
// //     },
// //     {
// //         $group: {
// //             _id: "$employmentType",
// //             count: { $sum: 1 }
// //         }
// //     },
// //     {
// //         $sort: {
// //             count: -1
// //         }
// //     },
// //     {
// //         $project: {
// //             _id: 0,
// //             employmentType: "$_id",
// //             count: 1
// //         }
// //     }
// // ]);

// const experienceLevels = await Job.aggregate([
//     {
//         $match: {
//             experienceLevel: {
//                 $nin: ["", null]
//             }
//         }
//     },
//     {
//         $group: {
//             _id: "$experienceLevel",
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $sort: {
//             count: -1
//         }
//     },
//     {
//         $project: {
//             _id: 0,
//             experienceLevel: "$_id",
//             count: 1
//         }
//     }
// ]);

// const getTopByField = async (field, limit = 5) => {
//     return Job.aggregate([
//         {
//             $match: {
//                 [field]: { $nin: ["", null] }
//             }
//         },
//         {
//             $group: {
//                 _id: `$${field}`,
//                 count: { $sum: 1 }
//             }
//         },
//         {
//             $sort: { count: -1 }
//         },
//         {
//             $limit: limit
//         },
//         {
//             $project: {
//                 _id: 0,
//                 [field]: "$_id",
//                 count: 1
//             }
//         }
//     ]);
// };
//   const topLocations = await Job.distinct("location");
//   console.log(
//     "Dashboard data fetched successfully",
//     totalJobs,
//     remoteJobs,
//     Onsite,
//     Hybrid,
//     companies.length,
//     departments.length,
//   );

const topCompanies = await getTopByField("company");

const topDepartments = await getTopByField("department");

const employmentTypes = await getTopByField("employmentType", 10);

const experienceLevels = await getTopByField("experienceLevel", 10);

const topLocations = await getTopByField("location");

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
