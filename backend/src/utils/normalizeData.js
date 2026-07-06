export const normalizeText = (value = "") => {
  return value
    .toString()
    .trim()
    .replace(/\s+/g, " ");
};

export const normalizeTitle = (title = "") => {
  return normalizeText(title);
};

export const normalizeCompany = (company = "") => {
  return normalizeText(company);
};

export const normalizeLocation = (location = "") => {
  return normalizeText(location);
};

export const normalizeRemoteFlag = (value = "") => {
  const remote = normalizeText(value).toLowerCase();

  switch (remote) {
    case "remote":
      return "Remote";

    case "onsite":
      return "Onsite";

    case "hybrid":
      return "Hybrid";

    default:
      return "Unknown";
  }
};

export const normalizeEmploymentType = (value = "") => {
  const employment = normalizeText(value).toLowerCase();

  switch (employment) {
    case "full-time":
        return "Full-time";

    case "part-time":
        return "Part-time";

    case "contract":
        return "Contract";

    case "internship":
        return "Internship";

    default:
        return "Other";
  }
};

export const normalizeExperienceLevel = (value = "") => {
  const level = normalizeText(value);

  if (!level || level === "NULL")
      return "Not Specified";

  return level;
};

export const normalizeSalary = (salary) => {

    if (!salary)
        return "Not Specified";

    return salary.toString().trim();
};

 export const cleanValue = (value, fallback = "N/A") => {
  if (value === null || value === undefined) return fallback;

  const cleaned = String(value).trim();

  const invalidValues = [
    "",
    "null",
    "undefined",
    "n/a",
    "na",
    "-",
    "--",
    "none",
  ];

  if (invalidValues.includes(cleaned.toLowerCase())) {
    return fallback;
  }

  return cleaned.replace(/\s+/g, " ");
};