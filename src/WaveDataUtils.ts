export const formatDate = (DateTime: string) => {
  const date = new Date(DateTime);
  const hours = String(date.getHours()).padStart(2, "0"); // 24-hour format with leading zero
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Minutes with leading zero
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
  const year = date.getFullYear();

  return `${hours}:${minutes} ${day}/${month}/${year}`;
}