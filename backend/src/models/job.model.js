import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      index: true,
    },
    company: {
      type: String,
      trim: true,
      index: true,
    },
    location: {
      type: String,
      trim: true,
      index: true,
    },
    url: {
      type: String,
      unique: true,
        index: true,
    },
    description: {
      type: String,
      trim: true,
    },
    appplyType: {
      type: String,
    },
    expirenceLevel: {
      type: String,
      index: true,
    },
    datePosted: {
      type: Date,
      index: true,
    },
    currency: {
      type: String,
    },
    salary: {
      type: String,
    },
    employmentType: {
      type: String,
      index: true,
    },
    department: {
      type: String,
      index: true,
    },
    remoteFlag: {
      type: String,
      enum: ["Hybrid", "Remote", "Onsite", null],
      default: null,
      index: true,
    },
  },
  {
    timestamps: true,
  },
);

const JobModel = mongoose.model("Job", jobSchema);

export default JobModel;
