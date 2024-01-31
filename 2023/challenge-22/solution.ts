function compile(code: string) {
  let count = 0
  const codeArray = code.split("")
  let indexReturn = -1
  let hasReturned = false
  for (let i = 0; i < codeArray.length; i++) {
    if (codeArray[i] == "+") count++
    if (codeArray[i] == "-") count--
    if (codeArray[i] == "*") count = count*2
    if (codeArray[i] == "%") indexReturn = i
    if (codeArray[i] == "<" && indexReturn > -1) {
      if (!hasReturned) {
        i = indexReturn
        hasReturned = true
      } else {
        hasReturned = false
      }
    }
    if (codeArray[i] == "¿") {
      if (count < 1) {
        i = getIndexQuestionMark(codeArray.slice(i), i)
      }
    }
    
    function getIndexQuestionMark(array: string[], initialIndex: number) {
      const idx = array.findIndex((item) => item === "?")
      return idx + initialIndex
    }
  }
  return count
}
