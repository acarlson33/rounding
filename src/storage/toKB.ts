/**
 * Converts bytes, megabytes, or gigabytes to kilobytes, rounded to two decimal places.
 * @param value The numeric value to convert.
 * @param unit The unit of the value: 'B', 'MB', or 'GB'.
 * @returns The value in kilobytes, rounded to two decimal digits.
 */
export function toKB(
  value: number,
  unit: "bytes" | "megabytes" | "gigabytes"
): number {
  let result: number;

  switch (unit) {
    case "bytes":
      result = value / 1024;
      break;
    case "megabytes":
      result = value * 1024;
      break;
    case "gigabytes":
      result = value * 1024 * 1024;
      break;
    default:
      throw new Error("Invalid unit");
  }

  return parseFloat(result.toFixed(2));
}
