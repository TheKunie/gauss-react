function nan(str) {
  const vars = [false, false, false, false];
  if (str.lastIndexOf("x") === -1) {
    vars[0] = true;
  }

  if (str.lastIndexOf("y") === -1) {
    vars[1] = true;
  }

  if (str.lastIndexOf("z") === -1) {
    vars[2] = true;
  }
  if (str.lastIndexOf("=") === str.length) {
    vars[3] = true;
  }
  return vars;
}

export default nan;
