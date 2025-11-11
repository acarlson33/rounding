/**
 * Converts bytes, megabytes, or gigabytes to kilobytes, rounded to two decimal places.
 * @param value The numeric value to convert.
 * @param unit The unit of the value: 'B', 'MB', or 'GB'.
 * @returns The value in kilobytes, rounded to two decimal digits.
 */
export function toKB(
  value: number,
  unit: "B" | "MB" | "GB"
): number {
  let result: number;

  switch (unit) {
    case "B":
      result = value / 1024;
      break;
    case "MB":
      result = value * 1024;
      break;
    case "GB":
      result = value * 1024 * 1024;
      break;
    default:
      throw new Error("Invalid unit");
  }

  return parseFloat(result.toFixed(2));
}
