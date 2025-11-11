/**
 * Converts bytes, kilobytes, or gigabytes to megabytes, rounded to two decimal places.
 * @param value The numeric value to convert.
 * @param unit The unit of the value: 'B', 'KB', or 'GB'.
 * @returns The value in megabytes, rounded to two decimal digits.
 */
export function toMB(
  value: number,
  unit: "B" | "KB" | "GB"
): number {
  let result: number;

  switch (unit) {
    case "B":
      result = value / (1024 * 1024);
      break;
    case "KB":
      result = value / 1024;
      break;
    case "GB":
      result = value * 1024;
      break;
    default:
      throw new Error("Invalid unit");
  }

  return parseFloat(result.toFixed(2));
}
