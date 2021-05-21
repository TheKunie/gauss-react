import Display from "../display/Display";

function TripleInformer(array1, array2, array3, a) {
  // 'a' indica la ecuación con todo ceros.

  if (a === 1) {
    var string1 =
      "Com que la primera equació és tot zeros, la descartem i aillem X en les altres dues.";
    var input = `$\\begin{pmatrix}\\bold{${array1[0]}} & \\bold{${array1[1]}} & \\bold{${array1[2]}} & \\bold{${array1[3]}}\\\\${array2[0]} & ${array2[1]} & ${array2[2]} & ${array2[3]}\\\\${array3[0]} & ${array3[1]} & ${array3[2]} & ${array3[3]}\\\\\\end{pmatrix}$`;
    var input2 = input + string1;
    return <Display input={input2}></Display>;
  }
  if (a === 2) {
    var string1 =
      "Com que la segona equació és tot zeros, la descartem i aillem X en les altres dues.";
    var input = `$\\begin{pmatrix}${array1[0]} & ${array1[1]} & ${array1[2]} & ${array1[3]}\\\\\\bold{${array2[0]}} & \\bold{${array2[1]}} & \\bold{${array2[2]}} & \\bold{${array2[3]}}\\\\${array3[0]} & ${array3[1]} & ${array3[2]} & ${array3[3]}\\\\\\end{pmatrix}$`;
    var input2 = input + string1;
    return <Display input={input2}></Display>;
  }

  if (a === 3) {
    var string1 =
      "Com que la tercera equació és tot zeros, la descartem i aillem X en les altres dues.";
    var input = `$\\begin{pmatrix}${array1[0]} & ${array1[1]} & ${array1[2]} & ${array1[3]}\\\\${array2[0]} & ${array2[1]} & ${array2[2]} & ${array2[3]}\\\\\\bold{${array3[0]}} & \\bold{${array3[1]}} & \\bold{${array3[2]}} & \\bold{${array3[3]}}\\\\\\end{pmatrix}$`;
    var input2 = input + string1;
    return <Display input={input2}></Display>;
  }
}

export default TripleInformer;
