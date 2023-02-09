export const formatDate = (dateStr: string, format = "dd/mm/yyyy"): string => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  switch (format) {
    case "dd/mm/yyyy":
      return `${day}/${month}/${year}`;
    case "mm/dd/yyyy":
      return `${month}/${day}/${year}`;
    case "yyyy/mm/dd":
      return `${year}/${month}/${day}`;
    default:
      throw new Error(`Invalid format: ${format}`);
  }
};

export const apiUrl = (path: string) => {
  if (/^\/([^/]|$)/.test(path)) {
    const apiRoute = process.env ? process.env.API : "";
    return `${apiRoute}${path}`;
  }
  return "invalid-path";
};
