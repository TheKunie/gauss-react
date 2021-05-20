function plusPopper(string) {
  if (string.indexOf("+") !== -1) {
    return string.split("+").pop();
  } else {
    return string;
  }
}

export default plusPopper;
