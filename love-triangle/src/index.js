/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let totalTriangles = 0;

  function getLoveTrianglesCountBySpichonee(preferences, index) {
    var indexFirst = preferences[index];
    if (indexFirst <= index + 1) {
      return 0;
    }
    var indexSecond = preferences[indexFirst - 1];
    if (indexSecond <= index + 1) {
      return 0;
    }
    var indexLast = preferences[indexSecond - 1];
    if (indexLast < index + 1) {
      return 0;
    }
    return (indexLast === index + 1) ? 1 : 0;
  }

  for (var i = 0; i < preferences.length; i++) {
    totalTriangles += getLoveTrianglesCountBySpichonee(preferences, i);
  }
  return totalTriangles;
};
