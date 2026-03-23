export function formatMinutes(minutes: number) {
  if (minutes < 60) {
    return `${minutes} mins`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = hours * 60 - minutes;
  return `${hours} hrs` + (mins > 0 ? `${mins} mins` : "");
}
