import dotenv from "dotenv";
import { validateJob } from "../utils/validateJob.js";
import Job from "../models/job.model.js";
import { readExcelFile } from "../services/excel.server.js";
import connectDB from "../config/db.js";
import { createDuplicateKey } from "../utils/duplicateJob.js";
import DuplicateJob from "../models/duplicateJob.model.js";
dotenv.config();

export const importJobs = async () => {
  await connectDB();
  await DuplicateJob.deleteMany({});
  try {
    let imported = 0;
    let skipped = 0;
    let invalid = 0;

    //   Read the Excel file and get the jobs
    const jobs = readExcelFile("./uploads/Jobs Dataset.xlsx");

    for (const job of jobs) {
      const validation = validateJob(job);

      if (!validation.isValid) {
        invalid++;
        continue;
      }

      // duplicate check

      // insert
    }

    console.log(`Found ${jobs.length} jobs`);

    // Fetch all existing URLs in one query
    const existingJobs = await Job.find({}, "_id url title company location");
    // console.log(existingJobs);

    const seenUrls = new Set();
    const seenKeys = new Set();
    const existingUrls = new Set();
    const existingKeys = new Set();

    for (const job of existingJobs) {
      existingUrls.add(job.url);
      existingKeys.add(createDuplicateKey(job));
    }

    const newJobs = [];

    for (const job of jobs) {
      // Exact duplicate
      if (existingUrls.has(job.url) || seenUrls.has(job.url)) {
        continue;
      }

      const key = createDuplicateKey(job);

      // Near duplicate
      if (seenKeys.has(key) || existingKeys.has(key)) {
        const originalJob = existingJobs.find(
          (item) => createDuplicateKey(item) === key,
        );

        if (originalJob) {
          await DuplicateJob.create({
            originalJob: originalJob._id,
            duplicateJob: job,
            reason: "Same title and company",
            status: "pending",
          });
        }

        continue;
      }

      seenUrls.add(job.url);
      seenKeys.add(key);

      newJobs.push(job);
    }

    // Insert after filtering
    if (newJobs.length > 0) {
      await Job.insertMany(newJobs, { ordered: false });
    }

    process.exit(0);
  } catch (error) {
    console.error(error);
  }
};

importJobs();
