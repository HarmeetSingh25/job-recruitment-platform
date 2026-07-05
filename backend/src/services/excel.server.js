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
  const cleanedRows = rows.map((row) => ({
    title: row.title?.trim() || "",
    company: row.company?.trim() || "",
    location: row.location?.trim() || "",
    url: row.url?.trim() || "",
    description: cleanHtml(row.description),
    applyType: row.applyType?.trim() || "",
    experienceLevel: row.experience_level?.trim() || "",
    datePosted: parseDate(row.datePosted),
    salary: row.salary?.toString().trim() || "",
    currency: row.currency?.trim() || "",
    employmentType: row.employment_type?.trim() || "",
    department: row.department?.trim() || "",
    remoteFlag: row.remote_flag?.trim() || "",
  }));

  return cleanedRows;
};