import DuplicateJob from "../models/duplicateJob.model.js";

export const getDuplicateJobs = async () => {
  return await DuplicateJob.find()
    .populate(
      "originalJob",
      "title company location employmentType remoteFlag"
    )
    .sort({ createdAt: -1 });
};

export const updateDuplicateStatus = async (id, status) => {
  return await DuplicateJob.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );
};