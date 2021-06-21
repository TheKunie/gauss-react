import frac from '../formatters/fracFormatter'
function MatrixDisplay(array1, array2, array3) {


  var a = frac(array1[0]);
  var b = frac(array1[1]);
  var c = frac(array1[2]);
  var d = frac(array1[3]);

  var e = frac(array2[0]);
  var f = frac(array2[1]);
  var g = frac(array2[2]);
  var h = frac(array2[3]);

  var i = frac(array3[0]);
  var j = frac(array3[1]);
  var k = frac(array3[2]);
  var l = frac(array3[3]);
  

  var matrix = `$\\begin{pmatrix}${a} & ${b} & ${c} & ${d}\\\\${e} & ${f} & ${g} & ${h}\\\\${i} & ${j} & ${k} & ${l}\\\\\\end{pmatrix}$`;

  return matrix;
}

export default MatrixDisplay;
