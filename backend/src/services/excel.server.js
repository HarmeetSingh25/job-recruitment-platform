import xlsx from "xlsx";
import { cleanHtml } from "../utils/cleanHtml.js";
import { parseDate } from "../utils/parseDate.js";

export const readExcelFile = (filePath) => {
  // Read workbook
  const workbook = xlsx.readFile(filePath);

  // Get first sheet
  const sheetName = workbook.SheetNames[0];

  const worksheet = workbook.Sheets[sheetName];

  // Convert sheet to JSON
  const rows = xlsx.utils.sheet_to_json(worksheet);

  // Clean every row
 const cleanValue = (value, fallback = "N/A") => {
  if (value === null || value === undefined) return fallback;

  const cleaned = String(value).trim();

  if (
    cleaned === "" ||
    cleaned.toLowerCase() === "null" ||
    cleaned.toLowerCase() === "undefined"
  ) {
    return fallback;
  }

  return cleaned;
};

const cleanedRows = rows.map((row) => ({
  title: cleanValue(row.title),
  company: cleanValue(row.company),
  location: cleanValue(row.location),
  url: cleanValue(row.url, ""),
  description: cleanHtml(row.description || ""),
  applyType: cleanValue(row.applyType),
  experienceLevel: cleanValue(row.experience_level),
  datePosted: parseDate(row.datePosted),
  salary: cleanValue(row.salary),
  currency: cleanValue(row.currency),
  employmentType: cleanValue(row.employment_type),
  department: cleanValue(row.department),
  remoteFlag: cleanValue(row.remote_flag),
}));

  return cleanedRows;
};