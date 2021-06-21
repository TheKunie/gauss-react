import * as math from 'mathjs';



function nan(str) {
  const vars = [false, false, false, false];
  if (str.lastIndexOf("x") === -1) {vars[0] = true}
  if (str.lastIndexOf("y") === -1) {vars[1] = true}
  if (str.lastIndexOf("z") === -1) {vars[2] = true}
  if (str.lastIndexOf("=") === str.length) {vars[3] = true}

  return vars;
}

function plusPopper(string) {
  if (string.indexOf("+") !== -1) {return string.split("+").pop()} 
  
  
  else {return string}
}

function fdec(a){
  if (math.isInteger(a) === false) {return math.fraction(a)}
  else if(math.isZero(a) === true) {return 0}
  else {return math.number(a)}
}


function FactorExtractor(string) {





  // TODO: No Y parameter does not work
  //? ????????????????????????? It does?????
  // ! It doesnt with negative
  

  // extracting factors




  var str = string + "";   
  var c;                                                                 
  var a = str.substring(0, str.lastIndexOf("x"));                                                   
  a = plusPopper(a);                                                                        
  var b = str.substring(str.lastIndexOf("x") + 1, str.lastIndexOf("y"));            
  b = plusPopper(b);

  if (str.lastIndexOf("y")!==-1){
    c = str.substring(str.lastIndexOf("y") + 1, str.lastIndexOf("z"));
    c = plusPopper(c);
  }
  else if(str.lastIndexOf("y")===-1){
    console.log("inval")
    c = str.substring(str.lastIndexOf("x")+1, str.lastIndexOf("z"));                                                   
    c = plusPopper(c);                                                                        
  }
  else if(str.lastIndexOf("x")===-1 && str.lastIndexOf("y")===-1){
    console.log("c is the c")
    c = str.substring(0, str.lastIndexOf("z"));
    c = plusPopper(c)
  }



  var d = str.substring(str.lastIndexOf("=") + 1, str.length);
  d = plusPopper(d);
  
  // VVV detects if any factor is 0
  var vars = nan(str);
  
  if (vars[0] === true) {a = 0}
  if (vars[1] === true) {b = 0}
  if (vars[2] === true) {c = 0}
  if (vars[3] === true) {d = 0}

  // if there is no factor, factor is 1

  if (a === "") {a = 1}
  if (b === "") {b = 1}
  if (c === "") {c = 1}
  if (d === "") {d = 0}


  // Creates array
  var array = [a, b, c, d];



  array[0] = math.fraction(array[0])
  array[1] = math.fraction(array[1])
  array[2] = math.fraction(array[2])
  array[3] = math.fraction(array[3])

  
  

  array[0] = fdec(array[0])
  array[1] = fdec(array[1])
  array[2] = fdec(array[2])
  array[3] = fdec(array[3])

  let arrayDet = []
  let vectorB

  arrayDet.push(array[0])
  arrayDet.push(array[1])
  arrayDet.push(array[2])
  vectorB = array[3]


  return {A: array, B: arrayDet, C: vectorB};
}


export default FactorExtractor;
