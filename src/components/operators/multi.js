function multi(array1, array2) {
  var a = array1[0] / array2[0];
  var b = array1[1] / array2[1];
  var c = array1[2] / array2[2];
  var d = array1[3] / array2[3];

  if (a === b && a === c && a === d) {
    return a;
  } else {
    return false;
  }
}
export default multi;
