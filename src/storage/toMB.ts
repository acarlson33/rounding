/**
 * Converts bytes, kilobytes, or gigabytes to megabytes, rounded to two decimal places.
 * @param value The numeric value to convert.
 * @param unit The unit of the value: 'B', 'KB', or 'GB'.
 * @returns The value in megabytes, rounded to two decimal digits.
 */
export function toMB(
  value: number,
  unit: "bytes" | "kilobytes" | "gigabytes"
): number {
  let result: number;

  switch (unit) {
    case "bytes":
      result = value / (1024 * 1024);
      break;
    case "kilobytes":
      result = value / 1024;
      break;
    case "gigabytes":
      result = value * 1024;
      break;
    default:
      throw new Error("Invalid unit");
  }

  return parseFloat(result.toFixed(2));
}
