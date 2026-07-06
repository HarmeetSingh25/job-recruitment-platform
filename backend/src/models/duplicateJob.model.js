import mongoose from "mongoose";

const duplicateJobSchema = new mongoose.Schema(
  {
    originalJob: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    duplicateJob: {
      title: String,
      company: String,
      location: String,
      salary: String,
      description: String,
      department: String,
      remoteFlag: String,
      employmentType: String,
      experienceLevel: String,
      datePosted: Date,
      applyType: String,
      url: String,
    },

    reason: {
      type: String,
      default: "Duplicate Job",
    },

    status: {
      type: String,
      enum: ["pending", "approved", "ignored"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("DuplicateJob", duplicateJobSchema);