import dotenv from "dotenv";
import Job from "../models/job.model.js";
import { readExcelFile } from "../services/excel.server.js";
import connectDB from "../config/db.js";
dotenv.config();

export const importJobs = async () => {
  try {
    //   Read the Excel file and get the jobs
    const jobs = readExcelFile("./uploads/Jobs Dataset.xlsx");

    console.log(`Found ${jobs.length} jobs`);

    // Fetch all existing URLs in one query
    const existingJobs = await Job.find({}, "url");
    // console.log(existingJobs);

    const existingUrls = new Set(existingJobs.map((job) => job.url));

    const seenUrls = new Set();

    const newJobs = jobs.filter((job) => {
      if (!job.url) return false;

      if (existingUrls.has(job.url)) return false;

      if (seenUrls.has(job.url)) return false;

      seenUrls.add(job.url);

      return true;
    });

    // Insert after filtering
    if (newJobs.length > 0) {
      await Job.insertMany(newJobs, { ordered: false });
    }

    console.log("Import Complete");
    console.log(`Imported: ${newJobs.length}`);
    console.log(`Skipped: ${jobs.length - newJobs.length}`);

    process.exit(0);
  } catch (error) {
    console.error(error);
  }
};

importJobs();
