/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  const extractMismatch = x ^ y;
  const convertToBits = parseInt(extractMismatch).toString(2);

  //   console.log(convertToBits.split(""));
  const findOneBits = convertToBits.split("").filter(bit => bit === "1");

  return findOneBits.length;
};

hammingDistance(1, 4);
