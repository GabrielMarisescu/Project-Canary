/**
 * @param {[number, number, number]} RGB The value of brightness in RGB
 * @returns {string} The hex value (Example: "#7DFFE2")
 */
export function rgbToHex(RGB:[number, number, number]): string {
  const red = RGB[0];
  const green = RGB[1];
  const blue = RGB[2];

  return '#' + (0x1000000 + (red << 16) | (green << 8) | (blue << 0)).toString(16).slice(1).toUpperCase();
}
