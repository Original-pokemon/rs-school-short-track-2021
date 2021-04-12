/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = [];
  let counter = 1;
  for (let i = 0; i < str.length; i++) {
    const e = str[i];
    if (e === str[i + 1]) {
      counter++;
    } else if (counter > 1) {
      result.push(`${counter}${e}`);
      counter = 1;
    } else {
      result.push(`${e}`);
    }
  }
  return result.join('');
}

module.exports = encodeLine;
