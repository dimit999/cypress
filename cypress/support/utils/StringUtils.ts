export class StringUtils {
  /**
   * Extracts digits (including decimals) from a string and returns the number (as number type).
   * If no digits are found, returns NaN.
   * @param str The input string
   */
  static extractNumber(str: string): number {
    const match = str.replace(/[^\d.]/g, "");
    return match ? parseFloat(match) : NaN;
  }

  /**
   * Extracts digits from a string and returns as a string of digits (no decimals).
   * @param str The input string
   */
  static extractDigits(str: string): string {
    return str.replace(/\D/g, "");
  }
}
