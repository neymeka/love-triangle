/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  preferences.unshift ([]);
  var i, counter = 0
  for (i = 1; i < preferences.length; i++) {
    var love = preferences [i];
    var love2 = preferences [love];
    var love3 = preferences [love2]
    if (i == love3) {
      counter++;
      }
  }
  return Math.floor (counter / 3);
}
