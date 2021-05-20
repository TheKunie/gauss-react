function TripleZero(array1, array2, array3) {
  const tripleZero = [
    array1.every((val, i, arr) => val === arr[0]),
    array2.every((val, i, arr) => val === arr[0]),
    array3.every((val, i, arr) => val === arr[0])
  ];
  return tripleZero;
}
export default TripleZero;
