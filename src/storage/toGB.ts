/**
 * Converts bytes, kilobytes, or megabytes to gigabytes, rounded to two decimal places.
 * @param value The numeric value to convert.
 * @param unit The unit of the value: 'B', 'KB', or 'MB'.
 * @returns The value in gigabytes, rounded to two decimal digits.
 */
export function toGB(value: number, unit: "B" | "KB" | "MB"): number {
  let gb: number;
  switch (unit) {
    case "B":
      gb = value / 1024 ** 3;
      break;
    case "KB":
      gb = value / 1024 ** 2;
      break;
    case "MB":
      gb = value / 1024;
      break;
    default:
      throw new Error("Invalid unit");
  }
  return Math.round(gb * 100) / 100;
}
