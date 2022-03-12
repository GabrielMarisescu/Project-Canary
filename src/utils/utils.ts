/**
 * @param {[number, number, number]} RGB The value of brightness in RGB
 * @returns {string} The hex value (Example: "#7DFFE2")
 *
 * @throws Will thrown an error if the numbers are not in the range of 0 - 255
 */
function rgbToHex(RGB:[number, number, number]): string {
  const red = RGB[0];
  const green = RGB[1];
  const blue = RGB[2];

  if(red > 255 || green > 255 || blue > 255) throw new Error("Value too big");
  if(red < 0 || green < 0 || blue < 0) throw new Error("Value too small");

  return '#' + (0x1000000 + (red << 16) | (green << 8) | (blue << 0)).toString(16).slice(1).toUpperCase();
}

export default rgbToHex;