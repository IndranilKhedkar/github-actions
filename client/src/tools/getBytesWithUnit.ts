/**
 * Converts bytes to the most relevant unit.
 * We choosed to render IEC (1KiB = 1024 bytes) standard for the conversion and use SI units (see https://confluence.sierrawireless.com/pages/viewpage.action?pageId=58557514)
 *
 * Mostly inspired from http://bateru.com/news/2012/03/code-of-the-day-converts-bytes-to-unit/
 *
 * @param bytes
 *            {number} The amount of bytes
 * @param [precision]
 *            {number} Sets the maximum length of decimal places. By default, 2 decimals
 *
 * @returns {String} Represents bytes is the most simplified form
 */
export function getBytesWithUnit(bytes: number, precision: number = 2) {
  if (!(!isNaN(bytes) && +bytes > -1 && isFinite(bytes))) {
    return '';
  }
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  const amountOfUnits = Math.max(0, Math.floor(Math.round((Math.log(+bytes) / Math.log(2)) * 1e6) / 1e6));
  let unitSelected = Math.floor(amountOfUnits / 10);
  unitSelected = units.length > unitSelected ? unitSelected : units.length - 1;
  bytes = +bytes / Math.pow(2, 10 * unitSelected);

  if (bytes.toString().length > bytes.toFixed(precision).toString().length) {
    bytes = Number(bytes.toFixed(precision));
  }

  return `${bytes} ${units[unitSelected]}`;
}
