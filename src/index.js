module.exports = function check(str, bracketsConfig) {
  // your solution
  const flatArr = bracketsConfig.flat().concat(str);

  let stack = [];
  let brackets = {
    ")":"(",
    "}":"{",
    "]": "["
  }

  function isClosedBracket(ch) {
    return [")", "}", "]"].indexOf(ch) > -1;
  }


  for (let i = 0; i < flatArr.length; i++) {
    const current = flatArr[i];
  
    
    if (isClosedBracket(current)) {
      if (brackets[current] !== stack.pop()) return false
    } else {
      stack.push(current)
    }
  }

  return stack.length === 0;

}