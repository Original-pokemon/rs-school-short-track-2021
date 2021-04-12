/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  const result = arr1.reduce((accum, value) => {
    let sum = accum;
    const index = arr2.indexOf(value);
    if (index !== -1) {
      sum += 1;
      arr2.splice(index, 1);
    }
    return sum;
  }, 0);

  return result;
}

module.exports = getCommonCharacterCount;
