export const parseDate = (date) => {
  if (!date) return null;

  const parsed = new Date(date);

  return isNaN(parsed.getTime()) ? null : parsed;
};