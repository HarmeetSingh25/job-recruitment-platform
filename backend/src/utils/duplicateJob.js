export const normalizeText = (text = "") => {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
};

export const createDuplicateKey = (job) => {
  return [
    normalizeText(job.title),
    normalizeText(job.company),
    normalizeText(job.location),
  ].join("|");
};