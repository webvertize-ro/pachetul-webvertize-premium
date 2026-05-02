export default function formatDate(date) {
  const dateInitial = new Date(date);
  const preparedDate = dateInitial.toLocaleDateString("ro-RO", {
    hour12: true,
    timeZone: "Europe/Bucharest",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return preparedDate;
}
