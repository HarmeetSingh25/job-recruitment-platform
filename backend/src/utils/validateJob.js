export const validateJob = (job) => {
  const errors = [];

  if (!job.title || job.title === "N/A") {
    errors.push("Missing title");
  }

  if (!job.company || job.company === "N/A") {
    errors.push("Missing company");
  }

  if (!job.url) {
    errors.push("Missing URL");
  }

  if (!job.description) {
    errors.push("Missing description");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};